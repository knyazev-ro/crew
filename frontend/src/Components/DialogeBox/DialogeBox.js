import classNames from "classnames";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function DialogBox({ user, collapsed }) {
  return (
    <div className="transition-all duration-300 ease-in-out flex items-center px-2 hover:bg-sky-950">
      <div className="py-2">
        <div className="bg-gradient-to-b to-purple_sky  from-purple_sky-100 rounded-full min-w-12 min-h-12 bg-stone-200 border hover:border-sky-600 transition-all duration-150 hover:border-4">
          {user?.image}
        </div>
      </div>
      <div className={classNames("transition-all ease-in-out duration-300", {
          "max-w-24": collapsed,
          "max-w-72": !collapsed,
        })}>
        <div
          className={classNames("text-nowrap px-2 font-medium text-sm text-purple_sky-400 transition-opacity duration-300 ease-in-out", {
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
          className={classNames("transition-all duration-300 ease-in-out flex flex-row", {
            "opacity-0 max-w-0": collapsed,
            "opacity-100 max-w-72": !collapsed,
          })}
        >
          <div className="w-10/12 px-2 truncate text-nowrap font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-br from-gray-400 to-gray-200">
            {user?.description}
          </div>
          <div>
          {user.isRead ? (
                <FontAwesomeIcon icon={faCheckDouble} title="Прочитано" className="text-purple_sky-100" />
            ) : (
                <FontAwesomeIcon icon={faCheck} title="Получено, но не прочитано" className="text-purple_sky-400" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
