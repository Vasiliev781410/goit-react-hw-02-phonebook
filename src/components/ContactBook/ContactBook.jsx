import { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import { nanoid } from 'nanoid'
  
export class ContactBook extends Component {
  state = {
    contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',};
  contactList = [...this.state.contacts];

  handleSubmit = ({name, number}, evt) => {   
    evt.preventDefault();    
    const indexContact = this.state.contacts.findIndex(contact => contact.name === name);
    if (indexContact === -1){
      const newContact = {id: nanoid(), name: name, number: number}; 
      const newList =  [...this.state.contacts,newContact]; 
      this.setState({contacts: newList}); 
      this.contactList = newList;
    }else{
      alert(`${name} is already in contacts`);
    }    
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value});     
  };

  filterContact(){  
    return this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));      
  }

  deleteContact= evt => {     
    const editContactList = this.state.contacts.filter(contact=>contact.id !== evt.target.name);  
    this.setState( {contacts: editContactList});    
  }

  render(){    
    return (
        <>      
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleSubmit}/>
            <h2>Contacts</h2>
            <Filter onChange={this.handleChange} value={this.state.filter}/>            
            <ContactList list={this.filterContact()} onDeleteContact={this.deleteContact}/>
      </>
    );
  };
};


