window.addEventListener('DOMContentLoaded', async () => await get())

let allThanksgiving;

async function get() {
    try {
        const listedThanksgivingStream = await fetch(`http://localhost:5050/list/`);
        const listedThanksgiving = await listedThanksgivingStream.json();
        allThanksgiving = listedThanksgiving.rows;
        writeThanksgiving(listedThanksgiving);
        buildSelectBoxes();
    } catch(e) {
        console.error(e);
    }
}

function writeThanksgiving(listedThanksgiving) {
    const tableRoot = getTableRoot();
    const tableHeaderRoot = document.getElementById('tableHeaderRoot');
    if (listedThanksgiving.rows.length) {
        tableHeaderRoot.innerHTML = `
            <tr>
                <th class="table-header">Tag</th>
                <th class="table-header">Open</th>
                <th class="table-header">Close</th>
                <th class="table-header">Sex/Antler</th>
                <th class="table-header">Game</th>
                <th class="table-header">Method</th>
                <th class="table-header">Area</th>
            </tr>
        `
        tableRoot.innerHTML = '';
        listedThanksgiving.rows.forEach((Thanksgiving) => {
            tableRoot.innerHTML += makeThanksgivingRow(Thanksgiving);
        })
    }
}

function buildSelectBoxes() {
    const selectBoxes = getSelectBoxes();
    Array.from(selectBoxes).forEach((selectBox) => {
        buildSelectBox(selectBox.id, selectBox);
    })
}

function buildSelectBox(id, selectBox) {
    const selectBoxData = _.uniq(_.map(allThanksgiving, Thanksgiving => Thanksgiving[id]))

    selectBoxData.forEach((label) => {
        selectBox.innerHTML += `
            <option value="${label}">${label}</option>
        `
    });
}

function filterTable(selectBoxValueList) {
    const selectBoxes = Array.from(getSelectBoxes());
    const selectBoxTypesAndValues = selectBoxes.map((selectBox) => ({
        [selectBox.id]: selectBox.value,
    })).filter((val) => !!val);

    const selectBoxMap = makeSelectBoxMap(selectBoxTypesAndValues);
    const selectBoxKeys = Object.keys(selectBoxMap)

    const filteredThanksgiving = allThanksgiving.filter((ThanksgivingRow) => {
        return filterOnCondition(ThanksgivingRow, selectBoxKeys, selectBoxMap)
    })

    writeThanksgiving({ rows: filteredThanksgiving });
}

function filterOnCondition(ThanksgivingRow, selectBoxKeys, selectBoxMap) {
    let testResult = false;
    Object.keys(ThanksgivingRow).forEach((columnName) => {
        if(selectBoxKeys.includes(columnName) && (ThanksgivingRow[columnName] === selectBoxMap[columnName])) {
            testResult = true;
        }
    })

    return testResult;
}

function makeSelectBoxMap(selectBoxTypesAndValues) {
    const selectBoxMap = {};

    selectBoxTypesAndValues.forEach((selectBoxTypeAndValue) => {
        selectBoxMap[Object.keys(selectBoxTypeAndValue)[0]] = selectBoxTypeAndValue[Object.keys(selectBoxTypeAndValue)[0]];
    });

    return selectBoxMap;
}

function getSelectBoxes() {
    return document.getElementsByClassName('select-box');
}

function getTableRoot() {
    return document.getElementById('tableRoot');
}

function makeThanksgivingRow(Thanksgiving) {
    return `
        <tr>
            <td class="table-cell">${Thanksgiving.tag}</td>
            <td class="table-cell">${Thanksgiving.open}</td>
            <td class="table-cell">${Thanksgiving.close}</td>
            <td class="table-cell">${Thanksgiving.ornament}</td>
            <td class="table-cell">${Thanksgiving.game}</td>
            <td class="table-cell">${Thanksgiving.method}</td>
            <td class="table-cell">${Thanksgiving.area}</td>
        </tr>
    `
}
