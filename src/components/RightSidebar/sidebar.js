import React from "react";
import "./sidebar.css";
import {
  Home,
  Message,
  MoreHoriz,
  NotificationsNone,
  PeopleOutline,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import SidebarOptions from "./sidebarOption";
import { Avatar, Button, HStack, VStack } from "@chakra-ui/react";

import ListAltIcon from "@mui/icons-material/ListAlt";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <FaXTwitter className="sidebar-twittericon" />

      <SidebarOptions active Icon={Home} text="Home" />
      <SidebarOptions Icon={Search} text="Explore" />
      <SidebarOptions Icon={NotificationsNone} text="Notification" />
      <SidebarOptions active Icon={Message} text="Message" />
      <SidebarOptions active Icon={ListAltIcon} text="List" />
      <SidebarOptions active Icon={PeopleOutline} text="Communities" />
      <SidebarOptions active Icon={FaXTwitter} text="Verified" />
      <SidebarOptions active Icon={PermIdentity} text="Profile" />
      <SidebarOptions active Icon={MoreHoriz} text="More" />

      <Button className="sidebar-button" variant="outline">
        Post
      </Button>
      <div className="user-info">
        <HStack>
          <div className="user-avatar">
            <Avatar src="https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?w=900&t=st=1695466776~exp=1695467376~hmac=c6783f8604ea2d824e13d5478a401c515f5bf064cb95a0ca25309cad7ba08c8d" />
          </div>
          <VStack className="user-name" gap="0.1">
            <p>Tahir Mehmood</p>
            <p>@tahirooo</p>
          </VStack>
          <MoreHoriz className="info-icon" />
        </HStack>
      </div>
    </div>
  );
}
