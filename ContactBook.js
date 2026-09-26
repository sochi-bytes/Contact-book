const contacts =[ 
    {
    name: "Spessica",
    phone: "09042842429",
    email: "jexxicaesthic@gmail.com", 
    tags:["myself", "work"]
    },
    {
        name: "Kelvin",
        phone: "09020212027",
        email: "spessia580@gmail.com", 
        tags:["myself", "work"]
    },
    {
        name: "Succeess",
        phone: "07070329355",
        email: "sochi.techspace@gmail.com", 
        tags:["friend", "work"]
    }
    {
        name: "Sarah",
        phone: "0707989355",
        email: "sochi.techspace@gmail.com", 
        tags:["colleague", "work"]
    }];

function addContact(contact){
    contacts.push(contact)
}


function findByName(name) {
    for (let contact of contacts) {
        if (contact.name === name) {
            return contact;
        }
    }

    return undefined;
}


function searchByName(searchTerm) {
    const result = [];

    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            result.push(contact);
        }
    }

    return result;
}


function listByTag(tag) {
    const result = [];

    for (let contact of contacts) {
        if (contact.tags.includes(tag)) {
            result.push(contact);
        }
    }

    return result;
}


function deleteByName(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            contacts.splice(i, 1);
            return;
        }
    }
}


addContact({
    name: "David",
    phone: "09098765432",
    email: "david@gmail.com",
    tags: ["friend", "work"]
});

console.log("All contacts:");
console.log(contacts);

console.log("Find John:");
console.log(findByName("John"));

console.log("Names containing 'sa':");
console.log(searchByName("sa"));

console.log("Contacts with 'friend' tag:");
console.log(listByTag("friend"));

deleteByName("Spessica");

console.log("After deleting Spessica:", contacts);
