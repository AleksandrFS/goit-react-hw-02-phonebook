import { nanoid } from 'nanoid';

import { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.addContact(this.state.name, this.state.number);
  };
  

  addContact = (name, number) => {
    const contactData = {
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contactData, ...prevState.contacts],
    }));

    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  filteredContacts = () => {};

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <div>
            <h3>Find contacts by name</h3>
            <input
              type="text"
              name="filter"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <ul>
            {this.state.filter === ''
              ? this.state.contacts.map(({ name, number }) => (
                  <li key={nanoid()}>
                    <p>
                      {name}: {number}
                    </p>
                  </li>
                ))
              : filteredContacts.map(({ name, number }) => (
                  <li key={nanoid()}>
                    <p>
                      {name}: {number}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  }
}
