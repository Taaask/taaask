import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Checklists from './pages/Checklists';
import Home from './pages/Home';
import { getUserDetails, saveUserDetails } from './utils/LocalStorage';
import UserDetails from './pages/UserDetails';
import './styles/index.css';
import Footer from './components/Footer';
import Profile from './pages/Profile';

export default function App() {
  checkLocalStorageUserDetails();
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
	  		  <Route path="/checklists" element={<Checklists />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/profile" element={<Profile />} />
	  	  </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

// method to route data according to the data in local-storage
function checkLocalStorageUserDetails() {
  console.log(getUserDetails());
  if (getUserDetails() === undefined) {
    window.location.href = "/user-details";
  } else if (getUserDetails() === null) {
    if (saveUserDetails({})) {
      console.log("user-details data has been added to local-storage array");
    } else {
      alert('user details handler is not working properly, close the web app and try again to re-run');
    }
    window.location.href = "/user-details";
  }
}
