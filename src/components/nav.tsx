import React from 'react';

const Nav = (props: { name: string, setName: (name: string) => void }) => {
    const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      props.setName('');
    }
  
    let menu;

    if (props.name === '') {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      )
    } else {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={logout}>Logout</a>
          </li>
        </ul>
      )
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Technical Probe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            {menu}
          </div>
        </div>
      </nav>
    );
};

export default Nav;