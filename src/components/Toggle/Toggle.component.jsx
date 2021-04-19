/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './Toggle.styles.css';

function Toggle(props) {
  const [checked, setChecked] = useState(false);
  const handleToggleChange = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };

  return (
    <div data-testid="toggle" className="toggle">
      <label
        data-testid="switch"
        className="switch"
        defaultChecked={checked}
        onChange={handleToggleChange}
      >
        <input type="checkbox" name="switch-theme" />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default Toggle;
