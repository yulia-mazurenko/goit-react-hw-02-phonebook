import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  PhoneBookTitle,
  ListTitle,
  Wrapper,
} from '../components/Titles/Titles.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactId = nanoid();

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      id: this.contactId,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactToDeleteId => {
    const { contacts } = this.state;
    this.setState(prevState => ({
      contacts: contacts.filter(contact => contact.id !== contactToDeleteId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter } = this.state;
    return (
      <Wrapper>
        <PhoneBookTitle>PhoneBook</PhoneBookTitle>
        <ContactForm onSubmitForm={this.addContact} />
        <ListTitle>Contacts</ListTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
