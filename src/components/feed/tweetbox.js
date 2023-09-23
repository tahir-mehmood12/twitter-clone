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
import { useState } from "react";
import { db } from "../../firebase";

export default function Tweetbox() {
  const [tweet, setTweet] = useState("");

  const handleSendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Tahir Mehmood",
      userName: "tahirooo",
      verified: true,
      text: tweet,
      avatar:
        "https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?w=900&t=st=1695466776~exp=1695467376~hmac=c6783f8604ea2d824e13d5478a401c515f5bf064cb95a0ca25309cad7ba08c8d",
    });
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?w=900&t=st=1695466776~exp=1695467376~hmac=c6783f8604ea2d824e13d5478a401c515f5bf064cb95a0ca25309cad7ba08c8d" />
          <Input type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetbox-emojis">
          <ImageIcon />
          <Gif />
          <Ballot />
          <CalendarMonth />
          <LocationOnOutlined />
          <Button onClick={handleSendTweet} className="tweetbox-button">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}
