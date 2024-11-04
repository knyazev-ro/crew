import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faSmile,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtomMessagePlace() {
  return (
    <div className="flex justify-around">
      <div className="-translate-y-24 rounded-2xl px-4 justify-around items-center absolute bottom-0 max-h-32 min-h-12 flex w-11/12 bg-purple_sky-400  transition-all border hover:border-pink-300 hover:border-4">
        <div className="">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="text-sky-600 text-lg"
          />
        </div>
        {/* <div className="w-3/4 h-full flex items-center"> */}
        <input
          placeholder="Write a message..."
          className="text-md flex flex-wrap max-w-full text-wrap focus:outline-none bg-purple_sky-400 px-3 w-full h-full items-center"
        ></input>
        {/* </div> */}
        <div className="justify-around flex space-x-7">
          <div className="">
            <FontAwesomeIcon icon={faSmile} className="text-sky-600 text-lg" />
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-sky-600  text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
