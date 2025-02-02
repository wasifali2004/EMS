import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-regular-svg-icons'; // Import the hand icon

export const Header = (props) => {

  function LogoutUser() {
    localStorage.setItem("Loginuser", '')
    props.changeUser('')
    // window.location.reload();
  }

  return (
    <div className='flex items-end justify-between px-12 mt-0'>
        <div>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> {props. data.firstName} <FontAwesomeIcon icon={faHand} /></span> 
        </h1>
        </div>
      <button onClick={LogoutUser} className='bg-red-600 px-4 py-2 rounded-xl text-lg text-white'>Log Out</button>
    </div>
  );
};
