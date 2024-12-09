// this is a function to add new contact
let contactList = [];

function add(contact) {
    if (!contact.name || !contact.email) {
        console.log("Missing fields");
        return;
    }
    if (contactList.some(existingContact => existingContact.email === contact.email)) {
        console.log("Duplicate was found");
        return;
    }
    contactList.push(contact);
    console.log(`${contact.name} was added`);

}

// function for removal of contact by email
function remove(email) {
    const index = contactList.findIndex(contact => contact.email === email);
    if (index === -1) {
        console.log("Contact not found");
        return;
    }
    contactList.splice(index, 1);
    console.log(`${email} was removed`);

    //function to edit contact by email
    function edit(email, newData) {
        const contact = contactList.find(contact => contact.email === email);
        if (!contact) {
            console.log("Contact not found");
            return;
        }
        Object.assign(contact, newData);
        console.log(`${email} was updated`);
    }
}
// function to get a contacts information by email
function get(email) {
    const contact = contactList.find(contact => contact.email === email);
    if (!contact) {
        console.log("Contact not found");
        return;
    }
    console.log(`name: ${contact.name}\nEmail): ${contact.email}\nPhone number: ${contact.phoneNumber || 'N/A'}\nCompany: ${contact.company || 'N/A'}`);
}

//Function to list all contacts
function listAll() {
    if (contactList.length === 0) {
        console.log("No contacts available");
        return;
    }
    const output = contactList.map(contact => `${contact.name} ${contact.email}`).join("");
    console.log(output);
}
//function to clear all contacts
function clear() {
    contactList = [];
    console.log("The contact list was cleared");
}

