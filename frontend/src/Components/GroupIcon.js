import classNames from "classnames";

export default function GroupIcon({ icon, action, collapsed }) {
  return (
    <div className="">
      <div className={classNames("flex transition-all duration-300 ease-in-out",
        {
          "gap-2 px-2":!collapsed,
          "gap-0 px-0":collapsed,
        }
      )}>
        <button
          className="flex bg-stone-300 w-12 h-12 rounded-xl border hover:border-4 hover:border-indigo-500 hover:scale-105 hover:transition-transform transform-cpu"
          onClick={action}
        >
          {icon}
        </button>

        <div className={classNames("transition-all duration-300 ease-in-out flex items-center rounded-lg h-12",
          {
            "opacity-0 max-w-0":collapsed,
            "opacity-100 max-w-28 px-2": !collapsed,
          }
        )}>
          <div className="text-sm font-semibold truncate text-gray-200">
            Group name
          </div>
        </div>
      </div>
    </div>
  );
}
