import React from 'react';
import css from './ContactForm.module.css';


const ContactForm = ({ onSubmit, name, number, onChange }) => (
    <form  className={css.formcontact} onSubmit={onSubmit}>
      <label className={css.labelname}>
        Name:
        <input className={css.inputname} type="text" name="name" value={name} onChange={onChange} required />
      </label>
      <br />
      <label className={css.labelnumber}>
        Number:
        <input className={css.inputnumber}   type="tel" name="number" value={number} onChange={onChange} required />
      </label>
      <br />
      <button  className={css.addcontact} type="submit">Add contact</button>
    </form>
  );

  export { ContactForm };