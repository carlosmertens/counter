import React from "react";

function NavBar(props) {
  return (
    <nav className='navbar navbar-light bg-light'>
      <span className='navbar-brand mb-0 h1'>
        Items{" "}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
}

export default NavBar;
