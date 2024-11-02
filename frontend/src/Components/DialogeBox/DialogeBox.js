import classNames from "classnames";
import React from "react";

export default function DialogBox({ user, collapsed }) {
  return (
    <div className="flex items-center px-2 hover:bg-gray-900">
      <div className="py-1">
        <div className="rounded-full min-w-14 min-h-14 bg-stone-200 border hover:border-red-600 transition-all duration-150 hover:border-4">
          {user?.image}
        </div>
      </div>
      <div className={classNames("transition-all ease-in-out duration-300", {
          "max-w-24": collapsed,
          "max-w-80": !collapsed,
        })}>
        <div
          className={classNames("text-nowrap px-2 font-medium text-sm text-white transition-opacity duration-300 ease-in-out", {
            "opacity-0": collapsed,
            "opacity-100": !collapsed,
            "w-0": collapsed,
            "px-0": collapsed,
            "invisible": collapsed,
          })}
        >
          {user?.name}
        </div>

        <div
          className={classNames("transition-all duration-300 ease-in-out", {
            "opacity-0 max-w-0": collapsed,
            "opacity-100 max-w-80": !collapsed,
          })}
        >
          <div className="px-2 truncate text-nowrap font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-br from-gray-400 to-gray-200">
            {user?.description}
          </div>
        </div>
      </div>
    </div>
  );
}
