import React from "react";
import { IconButton } from "theme-ui";
import { IoMdSunny } from "react-icons/io";

export const Header = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <IconButton aris-label="Toggle dark mode">
        <IoMdSunny size={28} />
      </IconButton>
    </div>
  );
};
