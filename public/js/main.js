window.addEventListener('DOMContentLoaded', async () => await get())

let familyData;

async function get() {
    try {
        const tableDatabase = await fetch('https://run.mocky.io/v3/e4d1c593-d790-49f3-b94d-f3d17f59a918');
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
            <td>${tableData.contactPersonPhone}</td>
            <td>${tableData.dietaryRestrictions}</td>
            <td>${tableData.otherDietaryRestrictions}</td>
            <td class="notes">${tableData.notes}</td>
        </tr>    
    `
    }
}
