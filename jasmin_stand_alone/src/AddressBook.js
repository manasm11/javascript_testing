function AddressBook() {
    this.__contacts = [];
    this.initializationComplete = false;
    this.addContact = function (contact_to_be_added) {
        this.__contacts.push(contact_to_be_added);
    };
    this.getContact = function (index) {
        return this.__contacts[index];
    }
    this.deleteContact = function (index) {
        this.__contacts.splice(index, 1)
    }
    this.length = () => this.__contacts.length;
};

AddressBook.prototype.getInitialContacts = (cb) => {
    setTimeout(function () {
        this.initializationComplete = true
        if (cb) cb()
    }, 3);
}

function Contact() {

}