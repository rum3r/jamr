import React from "react";
import Button from "./Button";
import Searchbar from "./Searchbar";

const Header = ({isLoggedIn, onClick}) => {
  
  return (
    <div className="flex justify-between p-2 px-2 shadow-md w-full fixed top-0 bg-white">
      <a href="#" className="flex text-3xl font-bold">
        <img src="./turtle.png" width="40" height="40"></img>
        JAMR
      </a>

      <Searchbar />

      {isLoggedIn ? (
        <div className="mr-2">
          <Button title="Log Out" mode="dark" tolink="#" onClick={()=>onClick()} />
        </div>
      ) : (
        <div className="flex">
          <div className="mr-2">
            <Button title="Log In" mode="light" tolink="#" onClick={()=>onClick()} />
          </div>

          <div className="mr-2">
            <Button title="Sign Up" mode="dark" tolink="#" onClick={()=>onClick()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
