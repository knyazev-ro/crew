import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function Message({ text, isUser, state }) {
  return (
    <div
      className={classNames("flex my-2", {
        "justify-end": isUser,
        "justify-start": !isUser,
      })}
    >
            <div className="translate-y-10">
        {isUser && (
          <>
            (
            {state ? (
              <FontAwesomeIcon
                icon={faCheckDouble}
                title="Прочитано"
                className="text-purple_sky-100"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCheck}
                title="Получено, но не прочитано"
                className="text-purple_sky-400"
              />
            )}
            )
          </>
        )}
      </div>
      <div
        className={classNames("max-w-xs px-4 py-2 rounded-2xl shadow-md", {
          "border border-purple_sky-100 text-white": isUser, // Красный фон для сообщений пользователя
          "bg-purple_sky-400 text-gray-800": !isUser, // Светло-серый фон для сообщений собеседника
        })}
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </div>
    </div>
  );
}
