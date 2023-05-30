import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: nanoid(),
    });
  };

  handleSubmit = e => {
    const { name, number, id } = this.state;
    e.preventDefault();
    this.props.contacts.find(contact => contact.name === name)
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.addContact(name, number, id);
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberImputId = nanoid();
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <div className={css.nameInput}>
            <label htmlFor={nameInputId} className={css.label}>
              Name
            </label>
            <input
              id={nameInputId}
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
          <div className={css.numberInput}>
            <label htmlFor={numberImputId} className={css.label}>
              Number
            </label>
            <input
              id={numberImputId}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.input}
            />
          </div>

          <button type="submit" className={css.btnAddContact}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
