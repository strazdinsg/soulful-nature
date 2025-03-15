import json

def convert_to_multi_language():
    # Read the original JSON file
    with open('bach_lv.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Read groups file
    with open('groups.json', 'r', encoding='utf-8') as file:
        groups = json.load(file)
    
    # Create a mapping from Latvian group names to group IDs
    group_mapping = {}
    # Create a mapping from group IDs to English names
    group_id_to_english = {}
    for group in groups:
        if 'name' in group and 'latvian' in group['name']:
            group_mapping[group['name']['latvian']] = group['id']
            if 'english' in group['name']:
                group_id_to_english[group['id']] = group['name']['english']
    
    # Dictionary to store herbs by group
    herbs_by_group = {}
    
    # Process each object in the list
    for item in data:
        # Set picture property
        item['picture'] = f"pictures/{item['id']}.jpg"
        
        # Create name property
        item['name'] = {
            'latvian': item.pop('latvian name', ''),
            'english': item.pop('english name', ''),
            'norwegian': item.pop('norwegian name', ''),
            'latin': item.pop('latin name', '')
        }
        
        # Create alternative_names property
        item['alternative_names'] = {
            'latvian': item.pop('alternative latvian name', ''),
            'english': '',
            'norwegian': ''
        }
        
        # Handle group property using the mapping from groups.json
        if 'group' in item:
            latvian_group_name = item.pop('group')
            if latvian_group_name in group_mapping:
                group_id = group_mapping[latvian_group_name]
                item['group'] = group_id
                
                # Add herb to the group for summary
                if group_id not in herbs_by_group:
                    herbs_by_group[group_id] = []
                herbs_by_group[group_id].append({
                    'english': item['name']['english'],
                    'latvian': item['name']['latvian']
                })
            else:
                raise ValueError(f"Unknown group name: '{latvian_group_name}' for item with id: {item['id']}")
        
        # Convert other properties to multi-language objects
        for key in list(item.keys()):
            # Skip these properties
            if key in ['id', 'picture', 'name', 'alternative_names', 'similar remedy ids', 'group']:
                continue
                
            # Convert property to multi-language object
            value = item.pop(key)
            
            # Determine empty value based on type
            empty_value = [] if isinstance(value, list) else ''
            
            # Create multi-language object (without latin)
            item[key.replace(' ', '_')] = {
                'latvian': value,
                'english': empty_value,
                'norwegian': empty_value
            }
    
    # Write to new JSON file
    with open('bach_multi_language_skeleton.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
    
    # Print summary
    print("\nSummary of Processed Bach Flower Remedies by Group:")
    print("===================================================")
    for group_id, herbs in herbs_by_group.items():
        group_name = group_id_to_english.get(group_id, group_id)
        herb_count = len(herbs)
        print(f"\n{group_name} ({herb_count}):")
        for herb in herbs:
            english_name = herb['english'] or "No English name"
            latvian_name = herb['latvian'] or "No Latvian name"
            print(f"  - {english_name} ({latvian_name})")

if __name__ == "__main__":
    convert_to_multi_language()