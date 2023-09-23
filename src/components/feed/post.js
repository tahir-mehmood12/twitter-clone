import React from "react";
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

export default function Post() {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              Tahir Mehmood{" "}
              <span className="post-headerSpecial">
                {/* {verified &&  */}
                <VerifiedRounded className="post-badge" /> @tahiroo
              </span>
            </h3>
          </div>
          <div className="post-description">
            <p>
              Scenes from Ottawa right now where thousands of parents and kids
              are protesting explicit sexual content in schools and radical
              gender ideology. These protests are absolutely massive and across
              the entire country.
            </p>
          </div>
        </div>
        <Image src="./images/nature.jpg" alt="image" />
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
