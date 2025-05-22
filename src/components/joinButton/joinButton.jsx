import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinButton.scss';

const JoinButton = ({
  text = '',
  to = '',
  iconSrc = '/images/Polygon.svg',
}) => {
  const navigate = useNavigate();

  return (
    <button className='join-button' onClick={() => navigate(to)}>
      <p>{text}</p>
      <img src={iconSrc} alt="button icon" />
    </button>
  );
};

export default JoinButton;
