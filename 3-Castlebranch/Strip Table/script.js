document.getElementById("loadButton").addEventListener("click", function () {
    const fileInput = document.getElementById("csvFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a CSV file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const csvText = event.target.result;
        generateTable(csvText);
    };
    reader.readAsText(file);
});

function generateTable(csvText) {
    const rows = csvText.trim().split("\n").map(row => row.split(","));
    const table = document.getElementById("outputTable");
    table.innerHTML = ""; // Clear previous table content

    // Create table header
    const headerRow = document.createElement("tr");
    ["Name", "Campus", "Email"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Process each row and format data
    rows.slice(1).forEach(row => {
        if (row.length < 5) return; // Skip rows with missing data

        let lastName = row[0].trim();
        let firstName = row[1].trim();
        let nickname = row[2].trim();
        let campus = row[3].trim();
        let email = row[4].trim();

        // Combine First, Last, and Nickname
        let fullName = `${firstName} ${lastName}`;
        if (nickname) {
            fullName += ` ("${nickname}")`; // Add nickname in quotes if it exists
        }

        // Create row with formatted data
        const tr = document.createElement("tr");
        tr.classList.add("table-row");

        // Name Column
        const nameTd = document.createElement("td");
        nameTd.textContent = fullName;
        tr.appendChild(nameTd);

        // Campus Column (Hyperlink)
        const campusTd = document.createElement("td");
        const campusLink = document.createElement("a");
        campusLink.href = `https://www.austincc.edu/campuses/${campus.toLowerCase().replace(/\s/g, "-")}`;
        campusLink.textContent = campus;
        campusTd.appendChild(campusLink);
        tr.appendChild(campusTd);

        // Email Column (Hyperlink)
        const emailTd = document.createElement("td");
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${email}`;
        emailLink.textContent = email;
        emailTd.appendChild(emailLink);
        tr.appendChild(emailTd);

        table.appendChild(tr);
    });
}

// Copy Table HTML
document.getElementById("copyButton").addEventListener("click", function () {
    const tableHTML = document.getElementById("outputTable").outerHTML;

    // Create a temporary textarea to copy text
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = tableHTML;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    alert("Table HTML copied to clipboard!");
});
