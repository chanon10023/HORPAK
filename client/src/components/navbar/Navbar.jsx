import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-between sm:flex-row py-4 px-4 gap-4">
        <Logo/>
        <Searchbar/>
        <DropdownListMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
