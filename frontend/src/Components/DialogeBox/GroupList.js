import GroupIcon from "../GroupIcon";
import { GiWarlockHood } from "react-icons/gi";
import { useState } from "react";
import classNames from "classnames";

export default function GroupList({ groups }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  console.log(groups);
  return (
    <div className="bg-pink-500">
      <div className=" py-3 gap-3 bg-stone-950 flex flex-col items-center h-screen rounded-l-md">
        <div className="transition-all flex flex-row gap-5 items-center">
          <button
            className={classNames(
              "transition-all duration-300 ease-in-out rounded-full  border border-white",
              {
                "opacity-0 w-0 h-0": collapsed,
                "opacity-100 w-4 h-7": !collapsed,
              }
            )}
          >
            ffff
          </button>

          <button
            className="transition-all w-4 h-7 rounded-full ease-in-out border hover:border-4 hover:rounded-full"
            onClick={handleCollapsed}
          ></button>
          
          <button
            className={classNames(
              "transition-all duration-300 ease-in-out rounded-full  border border-white",
              {
                "opacity-0 w-0 h-0": collapsed,
                "opacity-100 w-4 h-7": !collapsed,
              }
            )}
          >
            ffff
          </button>
        </div>
        <div className="flex h-screen bg-stone-950 flex-col gap-6 min-w-20 min-h-20 bg-grey-500 py-3 items-center">
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
