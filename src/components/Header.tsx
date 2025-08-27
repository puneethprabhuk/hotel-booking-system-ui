import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {

  const navigate = useNavigate();

  return (
    <header className="bg-white h-20 shadow-2xs">
      <div className="h-20 flex justify-between items-center px-4">
        <div className="logo">
          <h1 onClick={() => navigate('/')}>Stayza</h1>
        </div>
        <div className="search-container">
          Search
        </div>
        <div className="user-details-container">
          <Button onClick={() => navigate('/auth')}>Login</Button>
        </div>
      </div>
    </header>
  )
}