"use client";
import { useState } from "react";
import IconButton from "../icon-button";
import Drawer from "./drawer";
import HamburgerIcon from "./ham-icon";
import Menus from "./menus";
import { Brand } from "./components";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Drawer show={showDrawer} onHide={() => setShowDrawer(false)} />
      <header className="w-full h-min flex justify-between p-4 z-20 md:px-20 sticky border-gray-100 top-0 bg-gray/50 backdrop-blur-xl ">
        <Brand />
        <IconButton className="md:hidden" onClick={() => setShowDrawer(true)}>
          <HamburgerIcon />
        </IconButton>
        <Menus className="hidden md:inline" />
      </header>
    </>
  );
};

export default Header;
