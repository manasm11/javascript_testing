describe('Address Book', () => {
    beforeEach(() => {
        addressBook = new AddressBook();
        firstContact = new Contact();

    });

    it('adds one contact', () => {
        addressBook.addContact(firstContact);
        expect(addressBook.getContact(0)).toBe(firstContact);
    });
    it('adds two contacts', () => {
        let secondContact = new Contact();
        addressBook.addContact(firstContact);
        addressBook.addContact(secondContact);
        expect(addressBook.getContact(0)).toBe(firstContact);
        expect(addressBook.getContact(1)).toBe(secondContact);
    });
    it('deletes a contact', () => {
        addressBook.addContact(firstContact);
        addressBook.deleteContact(0);
        expect(addressBook.length()).toBe(0);
    });
    it('deletes two contacts', () => {
        let secondContact = new Contact();
        addressBook.addContact(firstContact);
        addressBook.addContact(secondContact);
        expect(addressBook.getContact(0)).toBe(firstContact);
        expect(addressBook.getContact(1)).toBe(secondContact);
    });
    it("initializes contacts", () => {
        addressBook.getInitialContacts(() =>
            expect(addressBook.initializationComplete).toBe(true)
        );
    });
});
describe('Async AddressBook', () => {
    addressBook = new AddressBook()
    beforeEach((done) => {
        addressBook.getInitialContacts(() => done());
    });
    it("initializes contacts", (done) => {
        expect(addressBook.initializationComplete).toBe(true)
        done()
    });
});