import React from "react";
import { NavContainer, NavLinks, NavActions } from "./styles";

const Navigation = () => {
  return (
    <NavContainer>
      <NavActions>
        <img
          src={require("../../assets/logo.png")}
          width={100}
          height={20}
          alt=""
        />
        <NavLinks>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">Audio & Subtitles</a>
          </li>
        </NavLinks>
      </NavActions>
      <div></div>
    </NavContainer>
  );
};

Navigation.Container = function () {
  return <div>Container</div>;
};

export default Navigation;
