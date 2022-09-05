import { Container, Title } from './PhoneBook.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Box } from 'components/Box/Box';
import Spinner from 'components/Spinner';
import { useContacts } from 'hooks';
import { useGetContactsQuery } from 'redux/contacts/contactsAPI';

const PhoneBook = () => {
  const { contacts, filter, loader, setFilter } = useContacts();
  useGetContactsQuery();

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0 && typeof contacts !== 'string') {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Box display="flex" justifyContent="center">
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <Box display="flex" justifyContent="space-between">
          <Filter value={filter} onChange={handleFilterInput} />
          <h3>Total contacts: {filteredContacts.length}</h3>
        </Box>

        {loader ? (
          Spinner.threeCircles
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </Container>
    </Box>
  );
};

export default PhoneBook;
