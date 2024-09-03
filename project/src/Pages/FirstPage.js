import { TypeAnimation } from 'react-type-animation';
import "./FirstPage.css";
import image from './firstpage.png';
import { useNavigate } from 'react-router-dom';



const Firstpagecontent = () => {
  const navigate = useNavigate();
  return (
    <div className="Firstpage-main">
      <div className="Header1">
        <h1>JobAI</h1>
        <button className='button1' onClick={() => navigate('login')}>Login</button>
      </div>
      <div>
        hi
      </div>
    </div>
  );
};

export default Firstpagecontent;