import React from "react";
import "./feed.css";
import { Button } from "@chakra-ui/react";
import Tweetbox from "./tweetbox";
import Post from "./post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>

        <div className="header-content">
          <Button variant="unstyled" w="fit-content">
            For you
          </Button>
          <Button variant="unstyled" w="fit-content">
            Following
          </Button>
        </div>
      </div>
      <Tweetbox />
      <Post />
    </div>
  );
}
