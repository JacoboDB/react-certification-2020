import React from 'react';
import { ReactComponent as DefaultImage } from '../../assets/icons/user-circle-solid.svg';

import './UserActions.styles.css';

function UserActions(props) {
  return (
    <div data-testid="user-actions" className="user-actions">
      <div>
        {props.userImage ? (
          <img src={props.userImage} alt="User profile" />
        ) : (
          <DefaultImage />
        )}
      </div>
    </div>
  );
}

export default UserActions;
