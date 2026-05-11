import pandas as pd
import json

FILE_PATH = r"C:\Users\Admin\Desktop\Сайт депортированные\документы\9 кл..xlsx"
df = pd.read_excel(FILE_PATH)
df = df.iloc[:, 2:8]

df.columns = [
    "fullName",
    "birthDate",
    "village",
    "nationality",
    "listDate",
    "archiveCode"
]

NATIONALITY_MAP = {
    "поляк": "Поляки",
    "полька": "Поляки",

    "еврей": "Евреи",
    "еврейка": "Евреи",

    "русский": "Русские",
    "русская": "Русские",

    "украинец": "Украинцы",
    "украинка": "Украинцы",

    "белорус": "Белорусы",
    "белоруска": "Белорусы"
}

MALE_VALUES = {
    "поляк",
    "еврей",
    "русский",
    "украинец",
    "белорус"
}

FEMALE_VALUES = {
    "полька",
    "еврейка",
    "русская",
    "украинка",
    "белоруска"
}


def normalize_nationality(value):
    if pd.isna(value):
        return ""

    value = str(value).strip().lower()
    return NATIONALITY_MAP.get(value, value.capitalize())


def detect_gender(value):
    if pd.isna(value):
        return ""

    value = str(value).strip().lower()

    if value in MALE_VALUES:
        return "male"
    elif value in FEMALE_VALUES:
        return "female"

    return ""


people = []

for i, row in df.iterrows():
    original_nat = row["nationality"]

    person = {
        "id": i + 1,
        "fullName": str(row["fullName"]).strip() if pd.notna(row["fullName"]) else "",
        "birthDate": str(row["birthDate"]).strip() if pd.notna(row["birthDate"]) else "",
        "village": str(row["village"]).strip() if pd.notna(row["village"]) else "",
        "nat": normalize_nationality(original_nat),
        "gender": detect_gender(original_nat),
        "listDate": str(row["listDate"]).strip() if pd.notna(row["listDate"]) else "",
        "archiveCode": str(row["archiveCode"]).strip() if pd.notna(row["archiveCode"]) else ""
    }

    people.append(person)


js_output = "const PEOPLE = " + json.dumps(
    people,
    ensure_ascii=False,
    indent=2
) + ";"

with open("people.js", "w", encoding="utf-8") as f:
    f.write(js_output)

print("Готово! people.js создан.")