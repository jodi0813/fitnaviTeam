import { useNavigate } from 'react-router-dom';
import './JoinButton.scss';

const JoinButton2 = ({
  text = '',
  to = '',
  iconSrc = '/images/Polygon3.svg',
}) => {
  const navigate = useNavigate();

  return (
    <button className='join-button join-button2' onClick={() => navigate(to)}>
      <span>{text}</span>
      <img src={iconSrc} alt="button icon" />
    </button>
  );
};

export default JoinButton2;