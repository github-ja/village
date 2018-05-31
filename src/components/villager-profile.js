import React from 'react';

const Profile = (props) => {
    return (
      <div>
        {props.name}
        <img 
          className='profile-img' 
          src={props.img}
          alt={props.name}
          width='100'
          height='100'
        />
      </div>
    )
}

export default Profile;