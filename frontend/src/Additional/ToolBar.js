import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStickyNote, faImages } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar() {
  return (
    <div className="flex justify-around bg-gray-100 first-line:shadow-md h-14">
      {/* Раздел Эмоджи */}
      <button className="hover:border-l-4 hover:border-l-rose-300  transition-all duration-150 ease-in-out px-1 text-lg py-2 w-full h-full text-indigo-600 hover:text-white hover:bg-indigo-600 focus:outline-none">
        <FontAwesomeIcon icon={faSmile} size="1x" title="Эмоджи" />
      </button>
      
      {/* Раздел Стикеры */}
      <button className="hover:border-l-4 hover:border-r-4 hover:border-r-rose-300 hover:border-l-rose-150 transition-all duration-300 ease-in-out px-1 py-2 text-lg w-full h-full text-indigo-600 hover:text-white hover:bg-indigo-600 focus:outline-none">
        <FontAwesomeIcon icon={faStickyNote} size="1x" title="Стикеры" />
      </button>
      
      {/* Раздел GIF */}
      <button className="hover:border-r-4 hover:border-r-rose-300 transition-all duration-150 ease-in-out px-1 py-2 text-lg w-full h-full text-indigo-600 hover:text-white hover:bg-indigo-600 focus:outline-none">
        <FontAwesomeIcon icon={faImages} size="1x" title="GIF" />
      </button>
    </div>
  );
}
