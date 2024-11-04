import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStickyNote, faImages } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar({setCurrentType}) {
  return (
    <div className="flex flex-col">
    <div className="flex flex-row gap-4 first-line:shadow-md h-14 rounded-tr-md items-center">

      <button 
      onClick={() => setCurrentType(1)}
      className="text-rich_black border-purple_sky-100 rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-purple_sky-300 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faSmile} title="Эмоджи" />
      </button>
      
 
      <button 
      onClick={() => setCurrentType(2)}
      className="text-rich_black border-purple_sky-100 rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-purple_sky-300 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faStickyNote} title="Стикеры" />
      </button>
      

      <button 
      onClick={() => setCurrentType(3)}
      className="text-rich_black border-purple_sky-100 rounded-full border w-8 h-8 transition-all duration-150 ease-in-out text-lg  hover:text-purple_sky-300 focus:outline-none hover:w-12">
        <FontAwesomeIcon icon={faImages} title="GIF" />
      </button>
    </div>
              <div className="border border-purple_sky-100 rounded-md w-full"></div>
    </div>
  );
}
