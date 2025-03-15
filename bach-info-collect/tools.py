import re
from collections import Counter
def convert_all_caps_words(text):
    """Convert all-caps words to capitalized words (first letter capital, rest lowercase)"""
    if not isinstance(text, str):
        return text
    
    # Latvian uppercase to lowercase mapping
    lv_case_map = {
        'Ā': 'ā', 'Ē': 'ē', 'Ū': 'ū', 'Ī': 'ī', 'Ļ': 'ļ', 
        'Ķ': 'ķ', 'Ģ': 'ģ', 'Š': 'š', 'Ž': 'ž', 'Č': 'č', 'Ņ': 'ņ'
    }
    
    # Find all-caps words (2 or more uppercase letters)
    def replace_all_caps(match):
        word = match.group(0)
        # Only convert if the word is truly all caps (not just a single letter)
        if len(word) >= 2:
            # Check if all characters are uppercase or Latvian uppercase letters
            is_all_caps = True
            for char in word:
                if not (char.isupper() or char in 'ĒŪĪĻĶĢĀŠŽČŅ'):
                    is_all_caps = False
                    break
            
            if is_all_caps:
                # Keep first letter, convert rest to lowercase with proper Latvian character mapping
                result = word[0]  # Keep first letter as is
                
                # Convert the rest of the word to lowercase with proper Latvian mapping
                for char in word[1:]:
                    if char in lv_case_map:
                        result += lv_case_map[char]
                    else:
                        result += char.lower()
                        
                return result
        return word
    
    # Replace all-caps words with capitalized words
    # Include Latvian uppercase letters in the pattern
    return re.sub(r'\b[A-ZĒŪĪĻĶĢĀŠŽČŅ]{2,}\b', replace_all_caps, text)

def check_structure_consistency(records):
    # Count occurrences of each structure
    structure_counter = Counter()
    
    # Track property types across all records
    property_types = {}
    
    for record in records:
        # Convert keys to a frozenset to use as a hashable key for the counter
        structure = frozenset(record.keys())
        structure_counter[structure] += 1
        
        # Track property types
        for key, value in record.items():
            value_type = type(value).__name__
            if key not in property_types:
                property_types[key] = Counter()
            property_types[key][value_type] += 1
    
    # Find the most common structure
    most_common_structure, most_common_count = structure_counter.most_common(1)[0]
    most_common_structure = set(most_common_structure)
    
    # Check if all records have the same structure
    structure_consistent = len(structure_counter) == 1
    
    if not structure_consistent:
        print(f"Warning: Found {len(structure_counter)} different structures in the data")
        print(f"Most common structure ({most_common_count} records): {sorted(most_common_structure)}")
        
        # Check each record against the most common structure
        for i, record in enumerate(records):
            record_structure = set(record.keys())
            if record_structure != most_common_structure:
                missing_props = most_common_structure - record_structure
                extra_props = record_structure - most_common_structure
                
                id_value = record.get('id', f'at index {i}')
                
                if missing_props:
                    print(f"Record with ID {id_value} is missing properties: {sorted(missing_props)}")
                if extra_props:
                    print(f"Record with ID {id_value} has extra properties: {sorted(extra_props)}")
    
    # Check for type inconsistencies
    type_inconsistencies = False
    for prop, type_counter in property_types.items():
        if len(type_counter) > 1:
            most_common_type, most_common_count = type_counter.most_common(1)[0]
            total_count = sum(type_counter.values())
            
            print(f"Warning: Property '{prop}' has inconsistent types:")
            for type_name, count in type_counter.most_common():
                print(f"  - {type_name}: {count} records ({count/total_count:.1%})")
            
            # Check each record for this property's type
            for i, record in enumerate(records):
                if prop in record and type(record[prop]).__name__ != most_common_type:
                    id_value = record.get('id', f'at index {i}')
                    print(f"  - Record with ID {id_value} has '{prop}' as {type(record[prop]).__name__} instead of {most_common_type}")
            
            type_inconsistencies = True
    
    return structure_consistent and not type_inconsistencies


if __name__ == "__main__":
    # Test cases:
    assert convert_all_caps_words("ANCĪŠA") == "Ancīša"
    assert convert_all_caps_words("ancīša") == "ancīša"
    assert convert_all_caps_words("EGLE") == "Egle"
    assert convert_all_caps_words("egle") == "egle"
