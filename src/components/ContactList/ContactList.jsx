import { Table, TableHead } from './ContatcList.styled';
import ContactListRow from './ContactListRow/';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return visibleContacts.length > 0 ? (
    <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      <Table>
        <thead>
          <tr>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </tr>
        </thead>
        <tbody>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactListRow key={id} id={id} name={name} number={phone} />
          ))}
        </tbody>
      </Table>
    </div>
  ) : (
    <p>It's empty. You don't have any contacts.</p>
  );
};

export default ContactList;
