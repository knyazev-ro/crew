import "./styles.css";
import { useState } from "react";
import classNames from "classnames";

export default function LoginCard() {
  const [registerCard, setRegisterCard] = useState(false);

  return (
    <div className="border-2 border-b-purple_sky-100 border-l-purple_sky-100 flex flex-col w-96 min-h-96 items-center justify-center bg-rich_black-200 rounded-2xl gap-4 hover:border-t-purple_sky-100 hover:border-r-purple_sky-100 transition-all duration-300 ease-in-out">
      <div className="gap-4 flex flex-col w-full text-purple_sky-400 items-center justify-center">
        <div className="flex border-2 border-b-purple_sky-100 border-r-purple_sky-100 -translate-y-14 top-0 h-12 py-1 w-5/6 text-center bg-rich_black text-purple_sky-400 text-lg font-bold gap-4 items-center justify-center">
          <div className="image-boat-icon bg-purple_sky-400 w-9 h-9"></div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">the</span>
            <span className="-mt-4 text-3xl font-bold">crew </span>
          </div>
        </div>
        
        <input
          type="text"
          placeholder="enter a nickname"
          className={classNames(
            "transition-all duration-300 ease-in-out text-center text-rich_black rounded-xl bg-purple_sky-400",
            {
              "opacity-0 w-0 h-0": !registerCard,
              "opacity-100 w-5/6 h-14": registerCard,
            }
          )}
        />
        <input
          type="text"
          placeholder="enter a number or email"
          className="text-center text-rich_black rounded-xl w-5/6 h-14 bg-purple_sky-400"
        />
        <input
          type="password"
          placeholder="enter a pass@#$%!&*word"
          className="text-center text-rich_black rounded-xl w-5/6 h-14 bg-purple_sky-400"
        />

        <input
          type="password"
          placeholder="confirm a pass@#$%!&*word"
          className={classNames(
            "transition-all duration-300 ease-in-out text-center text-rich_black rounded-xl bg-purple_sky-400",
            {
              "opacity-0 w-0 h-0": !registerCard,
              "opacity-100 w-5/6 h-14": registerCard,
            }
          )}
        />

        <input
          type="password"
          placeholder="confirm a pass@#$%!&*word"
          className={classNames(
            "transition-all duration-300 ease-in-out text-center text-rich_black rounded-xl bg-purple_sky-400",
            {
              "opacity-0 w-0 h-0": !registerCard,
              "opacity-100 w-5/6 h-14": registerCard,
            }
          )}
        />
      </div>

      <div className="gap-2 flex flex-col w-5/6 h-24 items-center justify-center">
        <button
          onClick={() => {
            setRegisterCard((prev) => !prev);
          }}
          className="transition-all duration-300 ease-in-out border-2 border-purple_sky-100 bg-rich_black w-48 hover:w-5/6 h-24 rounded-2xl hover:text-purple_sky-400"
        >
          entry
        </button>
        <div className="px-1 py-4 text-purple_sky-400">
          doesn't have an account?{" "}
          <button className="font-semibold" onClick={() => {}}>
            register
          </button>
        </div>
      </div>
    </div>
  );
}
