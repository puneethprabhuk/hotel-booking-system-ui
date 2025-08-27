import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Search from "./Search";
import logo from '../assets/logo.png';

export default function Header() {

  const navigate = useNavigate();

  return (
    <header className="bg-white h-30 shadow-2xs">
      <div className="h-30 flex justify-between items-center px-4">
        <div className="logo">
          <img src={logo} alt="" />
          <h1 onClick={() => navigate('/')}>Stayza</h1>
        </div>
        <div className="search-container">
          <Search />
        </div>
        <div className="user-details-container">
          <Button onClick={() => navigate('/auth')}>Login</Button>
        </div>
      </div>
    </header>
  )
}