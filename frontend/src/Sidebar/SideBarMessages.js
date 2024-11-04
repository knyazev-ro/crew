import DialogeList from "../Components/DialogeBox/DialogeList";
import GroupList from "../Components/DialogeBox/GroupList";
import { useState } from "react";
import classNames from "classnames";

export default function SideBarMessages({ messages, groups }) {

  return (
      <div>
        <div className="flex">
      <GroupList groups={groups} />
         <DialogeList messages={messages} />
        {/* <div className="flex">
          <GroupList groups={groups} />
         
        </div> */}
      </div>
      </div>
  );
}
