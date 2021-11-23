import '../css/Form.css';
import React from 'react';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        add
      </div>
    </div>
  );
};

export default Form;