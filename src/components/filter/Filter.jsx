import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={css.labelfilter}>
      Filter contacts by name:
      <input className={css.inputfilter} type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );

  export { Filter };