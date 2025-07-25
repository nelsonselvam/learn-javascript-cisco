// display the first contact (first)
// display the last contact (last)
// display all contacts (all)
// add a new contact (new)
// exit the program (quit)

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

function displayFirstContact() {
  if (contacts.length > 0) {
    console.log("First Contact:", contacts[0]);
  } else {
    console.log("No contacts available.");
  }
}

function displayLastContact() {
  if (contacts.length > 0) {
    console.log("Last Contact:", contacts[contacts.length - 1]);
  } else {
    console.log("No contacts available.");
  }
}

function displayAllContacts() {
  if (contacts.length > 0) {
    console.log("All Contacts:");
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}:`, contact);
    });
  } else {
    console.log("No contacts available.");
  }
}

function addNewContact(name, phone, email) {
  contacts.push({ name, phone, email });
  console.log("New contact added:", { name, phone, email });
}

function quitProgram() {
  console.log("Exiting the program.");
  process.exit();
}

function showMenu() {
  console.log("\nContact Management Menu:");
  console.log("1. Display First Contact");
  console.log("2. Display Last Contact");
  console.log("3. Display All Contacts");
  console.log("4. Add New Contact");
  console.log("5. Exit Program");
}

for (let x = 10; x > 1; x -= 2)
console.log("hello");


for (let a = 5; a > 1; a--) {
    console.log(a);
}
;


let car = {make: "Citroen", model: "DS"};
for (let f in car)
console.log(f);

let steps = [3, 2, 1];
for (let n of steps)
console.log(n);