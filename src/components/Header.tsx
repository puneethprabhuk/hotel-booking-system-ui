import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Search from "./Search";
import logo from '../assets/logo.png';
import { Menu, Heart, User, Plane } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { storage } from "@/utils/storage";

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState({});

  useEffect(() => {
    setIsLoggedIn(storage.getUser() ? true : false);
  }, [location])



  return (
    <header className="bg-white h-30 shadow-2xs">
      <div className="h-30 flex justify-between items-center px-4">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-container">
          {(location.pathname !== '/auth' && location.pathname !== '/profile') && <Search />}
        </div>
        <div className="user-details-container">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="icon" className="size-10">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="main-menu-item">
                  <Heart />
                  <span>Whishlists</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <div className="main-menu-item">
                  <User />
                  <span>Profile</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="main-menu-item">
                  <Plane />
                  <span>Trips</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {isLoggedIn && <DropdownMenuItem>Logout</DropdownMenuItem>}
              {!isLoggedIn && <DropdownMenuItem onClick={() => navigate('/auth')}>Login</DropdownMenuItem>}
              {!isLoggedIn && <DropdownMenuItem>Sign up</DropdownMenuItem>}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}




        </div>
      </div>
    </header>
  )
}