"use client";
import { useState } from "react";
import IconButton from "../../components/icon-button";
import Drawer from "./drawer";
import HamburgerIcon from "./ham-icon";
import Menus from "./menus";
import { Brand } from "./components";
import Actions from "./components/actions";

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
        <div className="hidden md:flex  gap-6 items-center divide-x">
          <Menus />
          <Actions className="!ps-6" />
        </div>
      </header>
    </>
  );
};

export default Header;
