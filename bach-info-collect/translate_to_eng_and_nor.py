import json
import os
import sys
import time
from tools import translate_string_or_list, fix_periods, load_deepl_api_key

def translate_multilang_file():
    api_key = load_deepl_api_key()
    if not api_key:
        print("Error: DEEPL_API_KEY not found in environment variables")
        print("Please create a .env file with your DeepL API key as described in the README")
        sys.exit(1)
    
    input_file = 'bach_multi_language_skeleton.json'
    output_file = 'bach_multi_language.json'
    
    # Read the input file
    with open(input_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Try to read existing output file if it exists
    if os.path.exists(output_file):
        try:
            with open(output_file, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            print(f"Found existing data in {output_file}")
            
            # Create a dictionary of existing items by ID for easy lookup
            existing_items_by_id = {item['id']: item for item in existing_data}
        except Exception as e:
            print(f"Error reading existing file: {e}")
            existing_items_by_id = {}
            existing_data = []
    else:
        existing_items_by_id = {}
        existing_data = []
    
    # Track translation statistics
    translated_fields = {
        'english': 0,
        'norwegian': 0
    }
    
    # Process each item
    for item in data:
        item_id = item['id']
        print(f"Processing item ID: {item_id}")
        item_updated = False
        
        # Process each field in the item
        for field_name, field_value in item.items():
            # Skip non-multilanguage fields
            if not isinstance(field_value, dict) or 'latvian' not in field_value:
                continue
            
            # Skip name field for latin translations
            if field_name == 'name':
                continue
                
            # Get the Latvian text
            latvian_text = field_value['latvian']
            
            # Skip if Latvian text is empty
            if not latvian_text:
                continue
            
            # Check if we have existing translations in the output file
            existing_translations = {}
            if item_id in existing_items_by_id and field_name in existing_items_by_id[item_id]:
                existing_field = existing_items_by_id[item_id][field_name]
                if isinstance(existing_field, dict):
                    existing_translations = existing_field
            
            # Translate to target languages if empty
            for lang_code in ['en', 'no']:
                lang = 'english' if lang_code == 'en' else 'norwegian'
                
                # Skip if we already have a non-empty translation in the field_value
                if lang in field_value and field_value[lang]:
                    continue
                    
                # Check if we have a non-empty translation in the existing output file
                if lang in existing_translations and existing_translations[lang]:
                    field_value[lang] = existing_translations[lang]
                    print(f"  Using existing {lang} translation for {field_name}")
                    continue
                
                # Otherwise, translate
                print(f"  Translating {field_name} to {lang.capitalize()}...")
                field_value[lang] = translate_string_or_list(latvian_text, lang_code, api_key)
                translated_fields[lang] += 1
                item_updated = True
                
                # Add a delay between translations
                time.sleep(2)
        
        # Save after each item is processed if it was updated
        if item_updated:
            # Update the existing item in the dictionary
            if item_id in existing_items_by_id:
                for idx, existing_item in enumerate(existing_data):
                    if existing_item['id'] == item_id:
                        existing_data[idx] = item
                        break
            else:
                # Add new item if it doesn't exist
                existing_data.append(item)
            
            # Write the updated data to the output file
            with open(output_file, 'w', encoding='utf-8') as file:
                json.dump(existing_data, file, ensure_ascii=False, indent=2)
            print(f"  Saved progress for item ID: {item_id}")
    
    # Make sure all items from input are in the output
    # This handles items that might not have needed translation
    output_ids = {item['id'] for item in existing_data}
    for item in data:
        if item['id'] not in output_ids:
            existing_data.append(item)
            
    # Final save to ensure all data is written
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(existing_data, file, ensure_ascii=False, indent=2)
    
    # Print summary
    print("\nTranslation Summary:")
    print("===================")
    print(f"Translated {translated_fields['english']} fields to English")
    print(f"Translated {translated_fields['norwegian']} fields to Norwegian")
    print(f"Results saved to {output_file}")

if __name__ == "__main__":
    translate_multilang_file() 