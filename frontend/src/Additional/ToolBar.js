import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStickyNote, faImages } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-row gap-4 first-line:shadow-md h-14 rounded-tr-md items-center">
      {/* Раздел Эмоджи */}
      <button className="rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-pink-600 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faSmile} size="sm" title="Эмоджи" />
      </button>
      
      {/* Раздел Стикеры */}
      <button className="rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-pink-600 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faStickyNote} size="sm" title="Стикеры" />
      </button>
      
      {/* Раздел GIF */}
      <button className="rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-pink-600 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faImages} size="sm" title="GIF" />
      </button>
    </div>
              <div className="border border-pink-600 rounded-md w-full"></div>
    </div>
  );
}
