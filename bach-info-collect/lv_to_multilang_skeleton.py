import json
import os

def convert_to_multi_language():
    # Read the original JSON file
    with open('bach_lv.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Read groups file
    with open('groups.json', 'r', encoding='utf-8') as file:
        groups = json.load(file)
    
    # Try to read existing output file if it exists
    existing_data = {}
    output_file = 'bach_multi_language_skeleton.json'
    if os.path.exists(output_file):
        try:
            with open(output_file, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            print(f"Found existing data in {output_file}")
        except Exception as e:
            print(f"Error reading existing file: {e}")
    
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
    # Track updated items
    updated_items = []
    
    # Create a dictionary of existing items by ID for easy lookup
    existing_items_by_id = {item['id']: item for item in existing_data} if isinstance(existing_data, list) else {}
    
    # Process each object in the list
    new_data = []
    for item in data:
        item_id = item['id']
        # Check if item already exists in output file
        if item_id in existing_items_by_id:
            # Use existing item as base and update it
            new_item = existing_items_by_id[item_id].copy()
            was_updated = False
        else:
            # Create new item
            new_item = {'id': item_id}
            was_updated = True
        
        # Set picture property if not exists
        if 'picture' not in new_item:
            new_item['picture'] = f"pictures/{item_id}.jpg"
            was_updated = True
        
        # Create or update name property
        if 'name' not in new_item:
            new_item['name'] = {
                'latvian': item.get('latvian name', ''),
                'english': item.get('english name', ''),
                'norwegian': item.get('norwegian name', ''),
                'latin': item.get('latin name', '')
            }
            was_updated = True
        
        # Create or update alternative_names property
        if 'alternative_names' not in new_item:
            new_item['alternative_names'] = {
                'latvian': item.get('alternative latvian name', ''),
                'english': '',
                'norwegian': ''
            }
            was_updated = True
        
        # Handle group property using the mapping from groups.json
        if 'group' in item and ('group' not in new_item or new_item['group'] != group_mapping.get(item['group'])):
            latvian_group_name = item['group']
            if latvian_group_name in group_mapping:
                group_id = group_mapping[latvian_group_name]
                new_item['group'] = group_id
                was_updated = True
                
                # Add herb to the group for summary
                if group_id not in herbs_by_group:
                    herbs_by_group[group_id] = []
                
                herb_info = {
                    'english': item.get('english name', ''),
                    'latvian': item.get('latvian name', '')
                }
                herbs_by_group[group_id].append(herb_info)
            else:
                raise ValueError(f"Unknown group name: '{latvian_group_name}' for item with id: {item_id}")
        elif 'group' in new_item:
            # Add to herbs_by_group for summary even if not updated
            group_id = new_item['group']
            if group_id not in herbs_by_group:
                herbs_by_group[group_id] = []
            
            herb_info = {
                'english': new_item['name']['english'],
                'latvian': new_item['name']['latvian']
            }
            herbs_by_group[group_id].append(herb_info)
        
        # Convert other properties to multi-language objects if they don't exist
        for key in item:
            # Skip properties that are already handled or should be skipped
            if key in ['id', 'latvian name', 'english name', 'norwegian name', 'latin name', 
                      'alternative latvian name', 'group', 'picture']:
                continue
            
            # Determine the new key name
            new_key = key.replace(' ', '_')
            
            # Check if property already exists in new format
            if new_key not in new_item:
                value = item[key]
                # Determine empty value based on type
                empty_value = [] if isinstance(value, list) else ''
                
                # Create multi-language object (without latin)
                new_item[new_key] = {
                    'latvian': value,
                    'english': empty_value,
                    'norwegian': empty_value
                }
                was_updated = True
        
        # Add to updated items list if changes were made
        if was_updated:
            updated_items.append(item_id)
        
        # Add to new data list
        new_data.append(new_item)
    
    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(new_data, file, ensure_ascii=False, indent=2)
    
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
    
    # Print update summary
    print("\nUpdate Summary:")
    print("==============")
    if updated_items:
        print(f"Updated {len(updated_items)} items:")
        for item_id in updated_items:
            print(f"  - Item ID: {item_id}")
    else:
        print("No items were updated.")

if __name__ == "__main__":
    convert_to_multi_language()