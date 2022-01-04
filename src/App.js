import './App.css';
import ProfilePicture from './Component/Profile/ProfilePicture.jsx'
import Adress from './Component/Profile/Adress.jsx'
import FullName from './Component/Profile/FullName.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfilePicture />
        <div className="infos">
          <FullName />
          <Adress />
        </div>
      </div>
    </div>
  );
}

export default App;
