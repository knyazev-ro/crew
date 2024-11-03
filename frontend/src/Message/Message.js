import React from 'react';
import classNames from 'classnames';

export default function Message({ text, isUser }) {
  return (
    <div className={classNames("flex my-2", { "justify-end": isUser, "justify-start": !isUser })}>
      <div
        className={classNames(
          "max-w-xs px-4 py-2 rounded-lg shadow-md",
          {
            "bg-indigo-600 text-white": isUser,     // Красный фон для сообщений пользователя
            "bg-gray-200 text-gray-800": !isUser // Светло-серый фон для сообщений собеседника
          }
        )}
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </div>
    </div>
  );
}
