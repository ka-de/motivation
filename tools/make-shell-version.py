#!/usr/bin/env python3

input_file_path = 'motivation.json'
output_file_path = 'motivation-shell.json'

# Open the input file for reading and the output file for writing
with open(input_file_path, 'r') as input_file, open(output_file_path, 'w') as output_file:
    # Read the content of the input file
    file_content = input_file.read()

    # Replace '\n' with '<br>'
    modified_content = file_content.replace('\n', '<br>')

    # Write the modified content to the output file
    output_file.write(modified_content)

print(f'File "{input_file_path}" copied and modified as "{output_file_path}".')
