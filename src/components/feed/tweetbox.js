import { Avatar, Button, Input } from "@chakra-ui/react";
import React from "react";
import "./tweetbox.css";
// import { FaRegImage } from "react-icons/fa6";
import {
  Ballot,
  CalendarMonth,
  Gif,
  LocationOnOutlined,
} from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";

export default function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="src/images/image.jpeg" />
          <Input type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetbox-emojis">
          <ImageIcon />
          <Gif />
          <Ballot />
          <CalendarMonth />
          <LocationOnOutlined />
          <Button className="tweetbox-button">Post</Button>
        </div>
      </form>
    </div>
  );
}
