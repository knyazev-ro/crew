import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faSmile,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtomMessagePlace() {
  return (
    <>
      <div className="px-4 justify-around items-center absolute bottom-0 max-h-32 min-h-12 flex w-full bg-stone-100  transition-all border hover:border-b-indigo-600 hover:border-2">
        <div className="">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="text-pink-600  text-2xl"
          />
        </div>
        {/* <div className="w-3/4 h-full flex items-center"> */}
        <input
          placeholder="Write a message..."
          className="text-md flex flex-wrap max-w-full text-wrap focus:outline-none bg-stone-100 px-3 w-full h-full items-center"
        ></input>
        {/* </div> */}
        <div className="justify-around flex space-x-7">
          <div className="">
            <FontAwesomeIcon icon={faSmile} className="text-pink-600 text-2xl" />
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-pink-600  text-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
