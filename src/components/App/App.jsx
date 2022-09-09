import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Section, TitleH1 } from './App.styled';

export function App() {
  return (
    <>
      <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
