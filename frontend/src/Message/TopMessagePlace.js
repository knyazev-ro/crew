import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function TopMessagePlace({ user }) {
  return (
    <div className="flex items-center justify-between absolute top-0 w-full h-14 bg-indigo-600 px-4 shadow-md">
      {/* Иконка */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-500">?</div>
          )}
        </div>

        {/* Имя пользователя и статус */}
        <div>
          <p className="text-white font-semibold truncate">
            {user?.name || "Имя собеседника"}
          </p>
          <p className="text-green-300 text-sm">{user?.status || "онлайн"}</p>
        </div>
      </div>

      {/* Иконки звонка и информации */}
      <div className="flex items-center gap-4 text-white">
        <button className="hover:text-green-200">
          <FontAwesomeIcon icon={faPhone} size="lg" title="Позвонить" />
        </button>
        <button className="hover:text-blue-200">
          <FontAwesomeIcon icon={faInfoCircle} size="lg" title="Информация" />
        </button>
      </div>
    </div>
  );
}
