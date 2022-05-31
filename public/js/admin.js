window.addEventListener('DOMContentLoaded', async () => await get())

try {
    const adminName = document.querySelector('#adminName').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
}
catch (e) {
    console.log(e);
}

function addAdmin() {
    try {
        const adminInfo = {
            adminName: adminName.value,
            email: email.value,
            password: password.value
        };

        fetch('http://hlcathanksgivingboxes.com:3000/createadmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adminInfo),
        })
            .then(response => response.json())
            .then(() => {
                alert('Admin "' + adminName + '" has been added.');
                document.getElementById('addAdmin').reset();
            }).catch((e) => console.error(e.stack), alert('An error occurred. Admin "' + adminName + '" could not be added.'));
    } catch (e) {
        console.log(e);
    }
}

let = adminData

async function get() {
    try {
        const adminDatabase = await fetch('http://hlcathanksgivingboxes.com:3000/createadmin');
        adminDatabase = await adminDatabase.json();
        writeData();
    }
    catch (e) {
        console.log(e)
    }
}

function writeData() {
    const tableBody = getTableBodyRoot();
    tableBody.innerHTML = '';
    adminData.forEach((tableData) => {
        tableBody.innerHTML += makeAdminRow(tableData);
    }
    )
    function getTableBodyRoot() {
        return document.getElementById('tableBodyRoot');
    }

    function makeAdminRow(tableData) {
        return `
        <tr>
            <td>${tableData.adminName}</td>
            <td>${tableData.email}</td>
            <td class="delete-admin" onclick="deleteAdmin()">x</td>
        </tr>    
    `
    }
}

function deleteAdmin() {
    document.getElementById("row1").remove();
}