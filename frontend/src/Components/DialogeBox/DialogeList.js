import DialogeBox from "./DialogeBox";
import HeaderSidebar from "../../Header/HeaderSidebar";
import classNames from "classnames";
import { useState } from "react";

export default function DialogeList({ messages, onHide }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCloseBar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-rich_black to-rich_black-100 gap-2 rounded-tr-2xl">
       <HeaderSidebar collapsed={collapsed} onHide={handleCloseBar} />

      <div className="-mr-3 overflow-y-scroll overflow-x-hidden scrollbar-hide rounded-md">
      {messages.map((message) => (
        <DialogeBox user={message} collapsed={collapsed} />
      ))}
      </div>
    </div>
  );
}
