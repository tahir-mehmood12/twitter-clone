import React from "react";
import "./widgets.css";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search } from "@mui/icons-material";

export default function Widgets() {
  return (
    <div className="widget">
      <div className="widget-input">
        <InputGroup>
          <InputLeftElement color="grey">
            <Search />
          </InputLeftElement>
          <Input type="text" placeholder="Search" border="none" />
        </InputGroup>
      </div>
      <div className="widget-subscription">
        <h2>Subscribe to Premium</h2>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button className="subscription-button">Subscribe</Button>
      </div>
    </div>
  );
}
