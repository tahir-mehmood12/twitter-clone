import React from "react";
import "./feed.css";
import { Button } from "@chakra-ui/react";
import Tweetbox from "./tweetbox";
import Post from "./post";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(snapshot.docs.map((doc) => doc.data()));
      });
  });

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
      <FlipMove>
        {post.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}
