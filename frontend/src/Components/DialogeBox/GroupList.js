import GroupIcon from "../GroupIcon";
import { GiWarlockHood } from "react-icons/gi";
import { useState } from "react";

export default function GroupList({ groups }) {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsed = () =>{
        setCollapsed(prev => !prev);
    }

  console.log(groups);
  return (
    <div className=" py-3 gap-3 bg-stone-950 flex flex-col items-center h-screen">
      <button
        className="transition-all w-12 h-7 rounded-full ease-in-out border hover:border-4 hover:rounded-full"
        onClick={handleCollapsed}
      >
        {GiWarlockHood}
      </button>
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
  );
}
