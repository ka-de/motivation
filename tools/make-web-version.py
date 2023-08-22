#!/usr/bin/env python3

import json

input_file_path = 'motivation-shell.json'
output_file_path = 'motivation.json'

# Read the JSON data from the input file
with open(input_file_path, 'r') as input_file:
    data = json.load(input_file)

# Recursively replace '\n' in values
def replace_newlines(obj):
    if isinstance(obj, str):
        return obj.replace('\n', '<br>')
    elif isinstance(obj, list):
        return [replace_newlines(item) for item in obj]
    elif isinstance(obj, dict):
        return {key: replace_newlines(value) for key, value in obj.items()}
    else:
        return obj

modified_data = replace_newlines(data)

# Write the modified data to the output file
with open(output_file_path, 'w') as output_file:
    json.dump(modified_data, output_file, indent=4)

print(f'File "{input_file_path}" copied and modified as "{output_file_path}".')
