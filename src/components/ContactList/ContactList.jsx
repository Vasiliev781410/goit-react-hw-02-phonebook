import { ContactItem } from "../ContactItem/ContactItem.jsx";
import PropTypes from 'prop-types';

export const ContactList = ({list, onDeleteContact})=>(
    <ul className="contactList">
        {list.map(contact => <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>)}       
    </ul>
);

ContactList.propTypes = {  
    list: PropTypes.array,
    onDeleteContact: PropTypes.func,
  };

