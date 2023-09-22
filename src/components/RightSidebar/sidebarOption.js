import React from "react";
import "./sidebarOption.css";

export default function SidebarOptions({ text, Icon, active }) {
  return (
    <div className={`sidebar-option ${active && "sidebar-option-active"}`}>
      <Icon />
      <h2 className=" hidden xl:block">{text}</h2>
    </div>
  );
}
