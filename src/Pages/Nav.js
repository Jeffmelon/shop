import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Style/nav.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Nav() {
    const [expandNav, setExpand] = useState(false);

    const location = useLocation();
  
    useEffect(() => {
      setExpand(false);
    }, [location]);
  
    return (
      <div className='navBar' id={expandNav ? "open" : "close"}>
          <div className='toggle'>
              <button 
                onClick={() => {
                  setExpand((prev) => !prev)
                }}
              >
                <ReorderIcon />
              </button>
          </div>
          <div className='links'>
              <Link to="/"> Home </Link>
              <Link to="/shirt"> Shirt </Link>
              <Link to="/sticker"> Sticker </Link>
              <Link to="/poster"> Poster </Link>
          </div>
      </div>
    )
}

export default Nav