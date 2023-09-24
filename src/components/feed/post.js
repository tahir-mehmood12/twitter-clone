import React, { forwardRef } from "react";
import "./post.css";
import { Avatar, Image } from "@chakra-ui/react";

import {
  ChatBubbleOutlineRounded,
  FavoriteBorderRounded,
  FileDownload,
  PollRounded,
  RepeatRounded,
  VerifiedRounded,
} from "@mui/icons-material";

const Post = forwardRef(
  ({ displayName, userName, verified, text, avatar }, ref) => {
    return (
      <div className="post">
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {displayName}{" "}
                <span className="post-headerSpecial">
                  {verified && <VerifiedRounded className="post-badge" />} @
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post-description">
              <p>{text}</p>
            </div>
          </div>
          {/* <Image src="./images/nature.jpg" alt="image" /> */}
          <div className="post-footer">
            <ChatBubbleOutlineRounded />
            <RepeatRounded />
            <FavoriteBorderRounded />
            <PollRounded />
            <FileDownload />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
