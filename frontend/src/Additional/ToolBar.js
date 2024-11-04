import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStickyNote, faImages } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar() {
  return (
    <div className="flex flex-col">
    <div className="flex gap-4 first-line:shadow-md h-14 rounded-tr-md items-center">
      {/* Раздел Эмоджи */}
      <button className="rounded-full border w-12 h-10 transition-all duration-150 ease-in-out text-lg text-pink-600 hover:text-white focus:outline-none">
        <FontAwesomeIcon icon={faSmile} size="sm" title="Эмоджи" />
      </button>
      
      {/* Раздел Стикеры */}
      <button className="rounded-full border w-12 h-10 transition-all duration-150 ease-in-out text-lg text-pink-600 hover:text-white focus:outline-none">
        <FontAwesomeIcon icon={faStickyNote} size="sm" title="Стикеры" />
      </button>
      
      {/* Раздел GIF */}
      <button className="rounded-full border w-12 h-10 transition-all duration-150 ease-in-out text-lg text-pink-600 hover:text-white focus:outline-none">
        <FontAwesomeIcon icon={faImages} size="sm" title="GIF" />
      </button>
    </div>
              <div className="border border-pink-600 rounded-md w-full"></div>
    </div>
  );
}
