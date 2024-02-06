import React, { useState } from 'react';

const MyForm = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleCheckboxChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div>
      <textarea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        placeholder="Enter text..."
      />
      <br />

      <select value={selectValue} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />

      <input
        type="checkbox"
        checked={checkboxValue}
        onChange={handleCheckboxChange}
        id='checkbox'
      />
      <label htmlFor='checkbox'>Checkbox</label>
      <br />

      <input
        role='radioOption1'
        type="radio"
        name="radioGroup"
        value="radioOption1"
        checked={radioValue === 'radioOption1'}
        onChange={handleRadioChange}
        id="radioOption1"
      />
      <label htmlFor="radioOption1">Radio Option 1</label>
      <br />

      <input
        type="radio"
        name="radioGroup"
        value="radioOption2"
        checked={radioValue === 'radioOption2'}
        onChange={handleRadioChange}
        id='radioOption2'

      />
      <label htmlFor="radioOption2">Radio Option 2</label>
      <br />

      <button onClick={handleButtonClick}>Click Me!</button>
    </div>
  );
};

export default MyForm;
