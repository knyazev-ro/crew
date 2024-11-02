import DialogeBox from "./DialogeBox";
import HeaderSidebar from "../../Header/HeaderSidebar";
import classNames from "classnames";
import { useState } from "react";

export default function DialogeList({ messages, onHide }) {
  
    const [collapsed, setCollapsed] = useState(false);

    const handleCloseBar = () =>{
      setCollapsed(prev => !prev);
    }
  
    return (
    <div
    className={classNames({
        "ease-in-out duration-300 transform transition-transform bg-black": true,
      })}
    >

    <div className="flex flex-col">
    <button
      onClick={handleCloseBar}
      >
BUTTON
      </button>
        {/* {!collapsed && <HeaderSidebar onHide={handleCloseBar} />} */}
        {collapsed && <button onClick={handleCloseBar} className="bg-red"></button>}
      {messages.map((message) => (
        <DialogeBox user={message} collapsed={collapsed} />
      ))}
    </div>
    </div>
  );
}
