import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../SearchInput';
import DrawerMenu from '../DrawerMenu';
import UserActions from '../UserActions';
import Toggle from '../Toggle';

import { useVideos } from '../../state/VideoProvider';

import './Navbar.styles.css';

function Navbar() {
  const { state, dispatch } = useVideos();
  const { searchValue, uiTheme } = state;
  const history = useHistory();
  const [typedSearchValue, setTypedSearchValue] = useState(searchValue);

  const onEnterSearch = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'SET_SEARCH_VALUE',
        payload: {
          searchValue: typedSearchValue,
        },
      });
      history.push('/');
    }
  };

  const onThemeChange = (checked) => {
    dispatch({
      type: 'SET_THEME',
      payload: {
        uiTheme: checked ? 'dark-theme' : 'white-theme',
      },
    });
    history.push('/');
  };
  return (
    <div data-testid="navbar" className={`navbar ${uiTheme}`}>
      <div className="navbar-left">
        <DrawerMenu />
        <SearchInput
          onEnterSearch={onEnterSearch}
          typedSearchValue={typedSearchValue}
          setTypedSearchValue={setTypedSearchValue}
        />
      </div>
      <div className="navbar-right">
        <div className="dark-mode">
          <Toggle onChange={onThemeChange} />
          <span className="text">Dark mode</span>
        </div>
        <UserActions />
      </div>
    </div>
  );
}

export default Navbar;
