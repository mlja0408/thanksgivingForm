try {
    const familyName = document.querySelector('#familyName').value
    const phoneNumber = document.querySelector('#phoneNumber').value
    const contactPerson = document.querySelector('#contactPerson').value
    const contactPersonPhone = document.querySelector('#contactPersonPhone').value
    const numberOfFamilyMembers = document.querySelector('#numberOfFamilyMembers').value
    const pickupPerson = document.querySelector('#pickupPerson').value
    const dietaryRestrictions = document.querySelector('#dietaryRestrictions').value
    const notes = document.querySelector('#notes').value
}
catch (e) {
    console.log(e);
}

const familyData = [familyName.value, phoneNumber.value, contactPerson.value, contactPersonPhone.value, numberOfFamilyMembers.value,
    pickupPerson.value, dietaryRestrictions.value, notes.value]

try {
    function logData() {
        console.log(familyData);
        alert('Thank You! Your request has been submitted');
    }
}
catch (e) {
    console.log(e);
}