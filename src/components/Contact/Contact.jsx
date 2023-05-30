import PropTypes from 'prop-types';
import css from './Contact.module.css';
export const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <li className={css.contact}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
