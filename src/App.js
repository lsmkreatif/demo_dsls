import { Outlet , useNavigate} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id="sidebar">
        <h1 onClick={() => navigate('/')}>LS Design System</h1>

        <nav>
          <ul>
            <li>
              <a href={`/bts-buttons`}>BTS Buttons</a>
            </li>
            <li>
              <a href={`/bts-typography`}>BTS Typography</a>
            </li>
            <li>
              <a href={`/bts-link`}>BTS Link</a>
            </li>
            <li>
              <a href={`/bts-inline-message`}>BTS Inline Message</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />     
      </div>
    </>
  );
}

export default App;
