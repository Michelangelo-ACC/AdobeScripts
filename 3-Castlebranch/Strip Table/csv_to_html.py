import os

script_dir = os.path.dirname(os.path.abspath(__file__))  # Get the script's directory
csv_file = os.path.join(script_dir, "sample.csv")  # Construct full path

def csv_to_html(csv_file):
    try:
        with open(csv_file, "r", encoding="utf-8") as file:
            lines = file.readlines()
    except FileNotFoundError:
        print(f"Error: The file '{csv_file}' was not found.")
        return

    if not lines:
        print("Error: The CSV file is empty.")
        return

    # Extract headers and data
    headers = lines[0].strip().split(",")
    data = [line.strip().split(",") for line in lines[1:] if line.strip()]

    # Ensure we have enough columns
    if len(headers) < 5:
        print("Error: CSV must contain at least Last, First, Nickname, Campus, and Email columns.")
        return

    # Start HTML Table
    html_output = ["<table border='1'>", "<tr><th>Name</th><th>Nickname</th><th>Campus</th><th>Email</th></tr>"]

    for row in data:
        if len(row) < 5:  # Skip rows with missing data
            continue

        last_first = row[0].strip()  # "Last, First"
        first_name = row[1].strip()  # First Name
        nickname = row[2].strip()    # Nickname (if available)
        campus = row[3].strip()      # Campus
        email = row[4].strip()       # Email

        # Convert "Last, First" to "First Last"
        if "," in last_first:
            last, first = map(str.strip, last_first.split(",", 1))
            full_name = f"{first} {last}"
        else:
            full_name = last_first  # If no comma, keep as is

        # Handle empty nicknames
        nickname_display = nickname if nickname else "N/A"

        # Append row to HTML
        html_output.append(f"<tr><td>{full_name}</td><td>{nickname_display}</td><td>{campus}</td><td>{email}</td></tr>")

    html_output.append("</table>")

    # Save to an HTML file
    output_file = "output.html"
    with open(output_file, "w", encoding="utf-8") as html_file:
        html_file.write("\n".join(html_output))

    print(f"✅ HTML file generated successfully: {output_file}")

# Example usage
csv_to_html(csv_file)