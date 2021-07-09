import { Component } from 'react';
//Components
import FindContact from 'Components/Phonebook/FindContact/FindContact';
import AddContactForm from 'Components/Phonebook/AddContactForm/AddContactForm';
import ContactItems from 'Components/Phonebook/ContactItems/ContactItems';
//Utils
import hideAlertMessages from 'utils/hideAlertMessages';
import sortArray from 'array-sort';
import isUniqueName from 'utils/isUniqName';
import getMessageForEmptyContactList from 'utils/getMessageForEmptyContactList';
//Styles
import { ContainerPhonebook } from 'styles/ContainerPhonebook';
import { ContactList } from 'styles/ContactList';
import { AlertMessage } from 'styles/AlertMessage';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    toggleSort: false,
    toggleMessage: false,
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('state'));
    if (contacts) {
      this.setState({ contacts: [...contacts] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('state', JSON.stringify(contacts));
    }
    hideAlertMessages(this);
  }

  getContact = contact => {
    this.setState(({ contacts, toggleMessage }) => {
      const isUniqName = isUniqueName(contact.name, contacts);
      if (isUniqName) return { contacts: [...contacts, contact] };
      return { toggleMessage: !toggleMessage };
    });
  };

  onDeleteBtnClick = event => {
    const dataId = event.currentTarget.dataset.id;
    this.setState(prevState => {
      const remainderContacts = prevState.contacts.filter(
        contact => contact.id !== dataId,
      );
      return { contacts: [...remainderContacts] };
    });
  };

  onSortBtnClick = () => {
    this.setState(prevState => {
      const sortContacts = sortArray(prevState.contacts, 'name', {
        reverse: prevState.toggleSort,
      });
      return {
        contacts: [...sortContacts],
        toggleSort: !prevState.toggleSort,
      };
    });
  };

  addFindFilterValue = event => {
    const normalizeValue = event.target.value.toLowerCase();
    this.setState({ filter: normalizeValue });
  };

  getFilterdContactList = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      const filtredContacts = contacts.filter(el =>
        el.name.toLowerCase().includes(filter),
      );
      return filtredContacts;
    }
  };

  render() {
    const { toggleMessage, contacts } = this.state;
    const filtredContactList = this.getFilterdContactList();
    const messageForEmptyContactList = getMessageForEmptyContactList(
      contacts,
      filtredContactList,
    );
    return (
      <ContainerPhonebook>
        <h1>Phonebook</h1>
        <AddContactForm submit={this.getContact}>
          {toggleMessage && (
            <AlertMessage>Такое имя уже есть в списке контактов</AlertMessage>
          )}
        </AddContactForm>
        <h2>contacts</h2>
        <FindContact addFindFilterValue={this.addFindFilterValue}>
          <button type="button" onClick={this.onSortBtnClick}>
            sort contact
          </button>
        </FindContact>
        <ContactList>
          <ContactItems
            contacts={filtredContactList || contacts}
            onDeleteClick={this.onDeleteBtnClick}
            noContactsMessage={messageForEmptyContactList}
          />
        </ContactList>
      </ContainerPhonebook>
    );
  }
}
