import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfileCard = () => {
  const location = useLocation();
  const { user } = location.state;

  if (!user) {
    return <p>Sorry, user not found</p>;
  }

  return (
    <div className='cont-main-page'>
      <div className="card-cont text-center shadow-sm" style={{ borderRadius: '15px' }}>
        {/* Profile Image */}
        <div className="d-flex design-round justify-content-center">
          <img
            className="rounded-circle border border-2"
            style={{ width: '7rem', height: '7rem', objectFit: 'cover', backgroundColor: 'white' }}
            src={user?.avatar}
            alt="User Avatar"
          />
        </div>

        {/* User Name and Bio */}
        <div className="card-body mt-3">
          <h5 className="card-title">{user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase() : 'Akm Royals'}</h5>
          <p className="card-text text-muted">{user?.bio || 'Learner & Bug-Hunter'} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab nulla perferendis maiores tenetur snideneifneosffl;irng  askfrinfgg.</p>

          {/* Stats Section */}
          <div className="contact-cont">
            <div className='text'>
              <h3>
                Contact
              </h3>
            </div>

            {/* Social Media Icons */}
            <div className="icon d-flex justify-content-center my-3">
              <a href={user?.socialLinks?.facebook || '#'} target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className='bx bxl-facebook'></i>
              </a>
              <a href={user?.socialLinks?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href={user?.socialLinks?.instagram || '#'} target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className='bx bxl-instagram-alt'></i>
              </a>
              <a href={user?.socialLinks?.twitter || '#'} target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className='bx bxl-twitter'></i>
              </a>
            </div>
            {/* Follow and Message Buttons */}
            <div className="d-flex justify-content-center gap-2 my-3">
              <button className="btn btn-outline-primary btn-sm">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
