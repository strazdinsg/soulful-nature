# Bach Flower Remedies

Scripts for converting the Bach Flower Remedies Excel file to JSON format and filling in the missing data, translating it to English and Norwegian.

We start with an Excel file where the information is stored in Latvian.

## Steps

1. `excel_to_json.py` - Convert the Excel file to JSON format - single language only, `bach_lv.json`
2. `lv_to_multilang_skeleton.py` - Convert it to multi-language JSON, `bach_multi_language_skeleton.json`
3. `translate_to_eng_and_nor.py` - Translate the data to English and Norwegian, fill in the missing data in the same file, `bach_multi_language.json`.

## Setup

1. You may want to use a virtual environment: `python -m venv .venv && source .venv/bin/activate` (on Unix). On windows: `python -m venv .venv && .venv\Scripts\activate`.
2. Install the required packages: `pip install -r requirements.txt`.

## Excel to JSON

Run `excel_to_json.py`, provide one command line argument: path to the Excel file. For example: `python excel_to_json.py bach.xlsx`.

If the resulting objects will differ in structure, you will see a warning printed to the console.

## Latvian to Multi-language

Run `lv_to_multilang_skeleton.py`. It reads the data from `bach_lv.json` and `groups.json` files and creates a new file `bach_multi_language_skeleton.json` with the data structure prepared for translation. No translation is done.

## Translate to English and Norwegian

Run `translate_to_eng_and_nor.py`. It reads the `bach_multi_language_skeleton.json` file and creates a new file `bach_multi_language.json` with the translated data.
