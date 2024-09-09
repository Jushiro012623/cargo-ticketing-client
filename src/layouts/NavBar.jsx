import React from "react";
import { Button, Container, Logo } from "../components/components";
import { NavLinks } from "./layouts";
import { variants } from "../components/Button";
import { GoHome, GoPerson, GoGear, GoStack} from "react-icons/go";
import axios from "axios";
export default function NavBar() {
  const links = [
    { icon: <GoHome/> ,label: "Home", to: "/" },
    { icon:  <GoStack/>,label: "My Ticket", to: "/myticket" },
    { icon: <GoPerson /> ,label: "Profile", to: "/profile" },
    { icon: <GoGear  /> ,label: "Settings", to: "/settings" },
  ];
  const handleLogout = async () => {
    try {
      // Perform the logout request
      const response = await axios.post(`${process.env.API_URL}/api/logout`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
  
      // Check if the response is successful
      if (response.status === 200) {
        // Remove the token from localStorage
        localStorage.removeItem("authToken");
  
        // Redirect to login or another appropriate page
        window.location.href = "/login"; // Or any other route like '/'
      }
    } catch (error) {
      // Handle errors, e.g., if the API request fails
      console.error("Logout failed: ", error);
    }
  };
  return (
    <Container variant="topNav" className={`pt-20 w-[1200px]`}>
      <Logo className="w-20 border-2" variant={'lg'} />
      
      <Container className={`space-x-9 flex`}>
        <NavLinks links={links} className={`text-xl tracking-wide flex items-center p-3 rounded-md gap-2`}/>
      </Container>
      
      <Button variant={`borderDanger`} className={`text-2xl`} onClick={handleLogout}>Logout</Button>
      
    </Container>
  );
}

