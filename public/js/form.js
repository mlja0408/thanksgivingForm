try {
    const familyName = document.querySelector('#familyName').value
    const phoneNumber = document.querySelector('#phoneNumber').value
    const contactPerson = document.querySelector('#contactPerson').value
    const contactPersonPhone = document.querySelector('#contactPersonPhone').value
    const numberOfFamilyMembers = document.querySelector('#numberOfFamilyMembers').value
    const pickupPerson = document.querySelector('#pickupPerson').value
    const dietaryRestrictions = document.querySelector('#dietaryRestrictions').value
    const otherDietaryRestrictions = document.querySelector('#otherDietaryRestrictions').value
    const notes = document.querySelector('#notes').value
}
catch (e) {
    console.log(e);
}

try {
    function logData() {
        const familyData = {
            familyName: familyName.value,
            phoneNumber: phoneNumber.value,
            contactPerson: contactPerson.value,
            contactPersonPhone: contactPersonPhone.value,
            numberOfFamilyMembers: numberOfFamilyMembers.value,
            pickupPerson: pickupPerson.value,
            dietaryRestrictions: dietaryRestrictions.value,
            other: otherDietaryRestrictions.value,
            notes: notes.value
        };

        fetch('http://hlcathanksgivingboxes.com:3000/createdinner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(familyData),
        })
            .then(response => response.json())
            .then(() => {
            alert('Thank You! Your request has been submitted!');
            document.getElementById('formRoot').reset();
            }).catch((e) => console.error(e.stack), alert('Your request could not be submitted. Please call for assistance.'));
    }
}
catch (e) {
    console.log(e);
}
