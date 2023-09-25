import { Avatar, Button, Input, Textarea } from "@chakra-ui/react";
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
import firebase from "firebase/compat/app";

export default function Tweetbox() {
  const [tweet, setTweet] = useState("");

  const handleSendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Tahir Mehmood",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: "tahirooo",
      verified: true,
      text: tweet,
      avatar:
        "https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?w=900&t=st=1695466776~exp=1695467376~hmac=c6783f8604ea2d824e13d5478a401c515f5bf064cb95a0ca25309cad7ba08c8d",
    });
    setTweet("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?w=900&t=st=1695466776~exp=1695467376~hmac=c6783f8604ea2d824e13d5478a401c515f5bf064cb95a0ca25309cad7ba08c8d" />
          <Textarea
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
          />
        </div>
        <div className="tweetbox-emojis">
          <label htmlFor="imageInput">
            <ImageIcon className="cursor-pointer" />
            <input id="imageInput" type="file" style={{ display: "none" }} />
          </label>
          <Gif className="cursor-pointer" />
          <Ballot className="cursor-pointer" />
          <CalendarMonth className="cursor-pointer" />
          <LocationOnOutlined className="cursor-pointer" />
          <Button onClick={handleSendTweet} className="tweetbox-button">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}
