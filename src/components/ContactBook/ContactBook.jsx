import { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import { nanoid } from 'nanoid'

const  initialState = {
  contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
  
export class ContactBook extends Component {
  state = {...initialState};
  contactList = [...this.state.contacts];

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = {id: nanoid(), name: form.elements.name.value, number: form.elements.number.value}; 
    const indexContact = this.state.contacts.findIndex(contact => contact.name === form.elements.name.value);
    if (indexContact === -1){
      const newList =  [...this.state.contacts,newContact]; 
      this.setState({contacts: newList}); 
      this.contactList = newList;
    }else{
      alert(`${form.elements.name.value} is already in contacts`);
    }    
    form.reset();
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value});
    this.findContact(evt.target.value);    
  };

  findContact(nameContact){
      //console.log(`filter ${nameContact}`);      
      //console.log(newContactList);
      if (nameContact === ""){
        this.contactList = [...this.state.contacts]; 
      } else{
        const newContactList = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(nameContact.toLowerCase()));
          newContactList.length !== 0 ? this.contactList = [...newContactList] :  this.contactList = [];            
      }                 
  }

  deleteContact= evt => {                               
    // удаляю из отфильтрованного списка
    this.deleteContactFromArray(this.contactList,evt.target.name);
    // удаляю из общего списка контактов
    let allContactList = [...this.state.contacts];
    allContactList = this.deleteContactFromArray(allContactList,evt.target.name);
    this.setState({contacts: allContactList});
  }

  deleteContactFromArray(contactListParam,nameDelete){     
    const indexDeletedElem = contactListParam.findIndex(contact => contact.id === nameDelete);
    if (indexDeletedElem >= 0){
      contactListParam.splice(indexDeletedElem,1); 
    } 
    return contactListParam;  
  }
  
  render(){    
    return (
        <>      
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleSubmit}/>
            <h2>Contacts</h2>
            <Filter onChange={this.handleChange} value={this.state.filter}/>            
            <ContactList list={this.contactList} onDeleteContact={this.deleteContact}/>
      </>
    );
  };
};


