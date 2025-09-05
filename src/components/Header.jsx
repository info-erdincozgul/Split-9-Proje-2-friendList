import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const { isLoggedIn, logout } = useAuthContext();
  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!isLoggedIn ? (
            <Link to="/login">
              <button>
                <h1>LOGIN</h1>
              </button>{' '}
            </Link>
          ) : (
            <>
              <Link to="/friends">
                <button>
                  <h1>FRIEND LIST</h1>
                </button>{' '}
              </Link>
              <Link to="/friends/add">
                <button>
                  <h1>ADD FRIEND</h1>
                </button>{' '}
              </Link>
              <button onClick={logout}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
