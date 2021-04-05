import React from 'react';

import './Toggle.styles.css';

function Toggle() {
  return (
    <div data-testid="toggle" className="toggle">
      <label data-testid="switch" className="switch" htmlFor="switch-theme">
        <input type="checkbox" name="switch-theme" />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default Toggle;
