import GroupIcon from "../GroupIcon";
import { GiWarlockHood } from "react-icons/gi";

export default function GroupList({ groups }) {
  console.log(groups);
  return (
    <div>
      <div className="flex h-full bg-stone-950 flex-col gap-3 min-w-20 min-h-20 bg-grey-500 py-5 items-center">
        <button
          className="flex items-center bg-stone-900 w-14 h-14 rounded-full border hover:border-4 hover:scale-105 hover:transition-transform transform-cpu"
          onClick={() => {}}
        >
          {GiWarlockHood}
        </button>
        {groups.map((group) => (
          <GroupIcon
            icon={group.icon}
            action={() => {
              console.log(group.action);
            }}
          />
        ))}
      </div>
    </div>
  );
}
