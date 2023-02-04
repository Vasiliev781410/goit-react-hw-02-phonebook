import css from "./ContactItem.module.css";
import PropTypes from 'prop-types';

export const ContactItem = ({contact,onDeleteContact})=>(
    <li className={css.contactItem}>{[contact.name+": "+contact.number]}
        <button className={css.deleteContactBtn} onClick={onDeleteContact} type="button" name={contact.id}>Delete</button>
    </li>   
);

ContactItem.propTypes = {  
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,}),
    onDeleteContact: PropTypes.func,
  };
