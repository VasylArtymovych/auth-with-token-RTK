import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, changeFilter } from 'redux/contacts';

// contactsHook
export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loader = useSelector(state => state.contacts.loader);
  const addLoader = useSelector(state => state.contacts.addLoader);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  const getContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  const addContact = data => {
    dispatch(contactsOperations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };
  const editContact = ({ id, name, number }) => {
    dispatch(contactsOperations.editContact({ id, name, number }));
  };

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  return {
    contacts,
    filter,
    loader,
    addLoader,
    error,
    getContacts,
    addContact,
    deleteContact,
    editContact,
    setFilter,
  };
};
