import React from "react";
import Icons from "./icons";
import Diamond from "../Assets/images/diamond.png";
import Fire from "../Assets/images/fire.png";
import Leaderboard from "../Assets/images/leaderboard.png"; 
import Learn from "../Assets/images/learn.png";
import Profile from "../Assets/images/profile.png";
import Quest from "../Assets/images/quest.png";
import Shop from "../Assets/images/shop.png";

export const LSidebarData = [
  {
    title: "Learn",
    icon: <Icons source={Learn} name="Learn" />,
    link: "/learn",
  },
  {
    title: "Practice",
    icon: <Icons source={Fire} name="Practice" />,
    link: "/practice",
  },
  {
    title: "Leaderboard",
    icon: <Icons source={Leaderboard} name="Leaderboard" />,
    link: "/leaderboard",
  },
  {
    title: "Quest",
    icon: <Icons source={Quest} name="Quest" />,
    link: "/quest",
  },
  {
    title: "Shop",
    icon: <Icons source={Shop} name="Shop" />,
    link: "/shop",
  },
  {
    title: "Profile",
    icon: <Icons source={Profile} name="Profile" />,
    link: "/profile",
  },
  {
    title: "Settings",
    icon: <Icons source={Diamond} name="Settings" />,
    link: "/settings",
  },
];

export default LSidebarData;