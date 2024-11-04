import Toolbar from "./ToolBar";

export default function Memes() {
  return (
    <div className="w-1/3 bg-pink-500 overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <div className="h-full flex flex-col bg-stone-950 rounded-r-md items-center gap-2">
        {/* menu */}
        <div className="">
          <Toolbar></Toolbar>
        </div>

        {/* options */}
        <div className="border border-sky-900 w-11/12 h-full rounded-lg"></div>
      </div>
    </div>
  );
}
