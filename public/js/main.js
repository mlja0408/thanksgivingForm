window.addEventListener('DOMContentLoaded', async () => await get())

let familyData;

async function get() {
    try {
        const tableDatabase = await fetch('http://hlcathanksgivingboxes.com:3000/list');
        familyData = await tableDatabase.json();
        writeData();
    }
    catch(e) {
        console.log(e)
    }
}
function writeData() {
    const tableBody = getTableBodyRoot();
    tableBody.innerHTML = '';
    familyData.forEach((tableData) => {
        tableBody.innerHTML += makeFamilyRow(tableData);
    }
    )
    function getTableBodyRoot() {
        return document.getElementById('tableBodyRoot');
    }

    function makeFamilyRow(tableData) {
        return `
        <tr>
            <td>${tableData.familyName}</td>
            <td>${tableData.numberOfFamilyMembers}</td>
            <td>${tableData.phoneNumber}</td>
            <td>${tableData.pickupPerson}</td>
            <td>${tableData.contactPerson}</td>
            <td>${tableData.dietaryRestrictions}</td>
            <td>${tableData.contactPersonPhone}</td>
            <td>${tableData.otherDietaryRestrictions}</td>
            <td class="notes">${tableData.notes}</td>
        </tr>    
    `
    }
}
function download_csv(csv, filename) {
    let csvFile;
    let downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
    let csv = [];
    let rows = document.querySelectorAll("table tr");

    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

function  downloadCSV() {
    let html = document.querySelector("table").outerHTML;
    export_table_to_csv(html, "boxList.csv");
};
