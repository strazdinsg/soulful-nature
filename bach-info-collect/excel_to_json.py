import pandas as pd
import json
import sys
import re
from tools import convert_all_caps_words, check_structure_consistency

def parse_list_items(text):
    if not isinstance(text, str):
        return text
    
    # Remove zero-width space character
    text = text.replace('​', '')
    
    # Check if text contains newlines
    if '\n' in text:
        # Split by newlines and clean up items
        items = [item.strip() for item in text.split('\n') if item.strip()]
        
        # If we have multiple items, return as list
        if len(items) > 1:
            # Clean leading list symbols from each item
            cleaned_items = []
            for item in items:
                # Remove leading "- " or number followed by space or parenthesis and space
                item = re.sub(r'^- |^\d+[\s).]+\s*', '', item)
                cleaned_items.append(item)
            return cleaned_items
        # If we have exactly one item, return it as a string
        elif len(items) == 1:
            # Remove leading "- " or number followed by space or parenthesis and space
            return re.sub(r'^- |^\d+[\s).]+\s*', '', items[0])
    
    # Check for bullet points, numbered lists, or tabbed items
    pattern = r'(?:^|\n)(?:[-*•]|\d+[.)]|\t+|[-*•]\t+)\s*(.+?)(?=\n(?:[-*•]|\d+[.)]|\t+|[-*•]\t+)|\n*$)'
    matches = re.findall(pattern, text, re.MULTILINE)
    
    # Filter out empty strings
    matches = [match for match in matches if match.strip()]
    
    if len(matches) > 1:
        return [item.strip() for item in matches]
    elif len(matches) == 1:
        return matches[0].strip()
    
    return text


def excel_to_json(excel_file, output_file=None, list_columns=None):
    # Read Excel file
    try:
        df = pd.read_excel(excel_file)
        # Replace NaN values with empty strings
        df = df.fillna('')
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return None
    
    # Convert DataFrame to list of dictionaries
    records = df.to_dict(orient='records')
    
    # Process potential list columns
    for record in records:
        for key, value in record.items():
            # Remove zero-width space character from column names
            if '​' in key:
                new_key = key.replace('​', '')
                record[new_key] = record.pop(key)
                key = new_key
            
            # Try to parse lists in all columns if list_columns is None
            # Otherwise only parse specified columns
            if list_columns is None or key in list_columns:
                parsed_value = parse_list_items(value)
                
                # Replace tabs, en dashes, and German quotes in strings and lists
                if isinstance(parsed_value, str):
                    processed_text = (parsed_value.replace('\t', ' ')
                                   .replace('–', '-')
                                   .replace('„', '"')
                                   .replace('”', '"')
                                   .replace('“', '"'))
                    # Convert all-caps words to capitalized
                    record[key] = convert_all_caps_words(processed_text)
                elif isinstance(parsed_value, list):
                    # Filter out empty strings and replace tabs, en dashes, and German quotes
                    filtered_list = []
                    for item in parsed_value:
                        if item:
                            if isinstance(item, str):
                                # Clean the item
                                processed_item = (item.replace('\t', ' ')
                                       .replace('–', '-')
                                       .replace('„', '"')
                                       .replace('”', '"')
                                       .replace('“', '"'))
                                # Remove any remaining leading list symbols that might have been missed
                                processed_item = re.sub(r'^- |^\d+[\s).]+\s*', '', processed_item)
                                # Convert all-caps words to capitalized
                                processed_item = convert_all_caps_words(processed_item)
                                filtered_list.append(processed_item)
                            else:
                                filtered_list.append(item)
                    
                    # If list has only one item, return the item instead of a list
                    if len(filtered_list) == 1:
                        record[key] = filtered_list[0]
                    else:
                        record[key] = filtered_list
                else:
                    record[key] = parsed_value
    
    # Check structure consistency
    check_structure_consistency(records)
    
    # Convert to JSON
    json_data = json.dumps(records, ensure_ascii=False, indent=2)
    
    # Write to file or return string
    if output_file:
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(json_data)
            print(f"JSON data written to {output_file}")
        except Exception as e:
            print(f"Error writing to output file: {e}")
            return json_data
    
    return json_data

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python excel_to_json.py <excel_file>")
        sys.exit(1)
    
    excel_file = sys.argv[1]
    output_file = "bach_lv.json"
    
    list_columns = None
    if len(sys.argv) > 2:
        list_columns = sys.argv[2].split(',')
    
    excel_to_json(excel_file, output_file, list_columns)