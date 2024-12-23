import GroupIcon from "../GroupIcon";
import { useState } from "react";
import classNames from "classnames";

export default function GroupList({ groups }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  console.log(groups);
  return (
    <div className="">
      <div className=" py-3 gap-3 bg-rich_black flex flex-col items-center h-screen rounded-tl-2xl">
        <div className="transition-all flex flex-row gap-5 items-center">
          <button
            className={classNames(
              "transition-all duration-300 ease-in-out rounded-full  border border-purple_sky-100",
              {
                "opacity-0 w-0 h-0": collapsed,
                "opacity-100 w-4 h-7": !collapsed,
              }
            )}
          />

          <button
            className="transition-all w-4 h-7 rounded-full ease-in-out border hover:border-4 hover:rounded-full border-purple_sky-100"
            onClick={handleCollapsed}
          />

          <button
            className={classNames(
              "transition-all duration-300 ease-in-out rounded-full  border border-purple_sky-100",
              {
                "opacity-0 w-0 h-0": collapsed,
                "opacity-100 w-4 h-7": !collapsed,
              }
            )}
          />
        </div>
        <div className="flex h-screen bg-rich_black flex-col gap-6 min-w-20 min-h-20 bg-grey-500 py-3 items-center">
          <div className="rounded-xl overflow-y-scroll overflow-x-hidden scrollbar-hide">
            <div className="flex flex-col gap-2">
              {groups.map((group) => (
                <GroupIcon
                  collapsed={collapsed}
                  icon={group.icon}
                  action={() => {
                    console.log(group.action);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
