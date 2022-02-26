import * as jsonfile from "jsonfile";

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    contacts: Contact[] = [];
    load() {
        const data = jsonfile.readFileSync("./contacts.json");
        this.contacts = data;
        // lo que entendi es que este metodo se crea para usarlo en el controllers para que se lea el json
    }
    getAll() {
        return this.contacts;
    }
    addOne(contact: Contact) {
        return this.contacts.push(contact);
    }
    save() {
        jsonfile.writeFileSync("./contacts.json", this.contacts);
    }

    getOneById(id) {
        const result = this.contacts.find((item) => {
            if (item.id === id) return true;
        });
        return result;
    }
}

export { ContactsCollection };
