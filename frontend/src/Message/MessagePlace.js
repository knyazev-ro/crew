import ButtomMessagePlace from "./ButtomMessagePlace";
import TopMessagePlace from "./TopMessagePlace";
import Message from "./Message";
import ChatMessages from "./ChatMessages";

export default function MessagePlace() {
  return (
    <div className="min-w-96 w-full flex flex-col bg-rich_black rounded-t-2xl justify-between">
    {/* <div className="z-50">
      </div>
      <div className="h-5/6 z-10">
      </div>
      <div className="h-1/6 w-full bg-red-500 z-50">
      </div> */}

      <div className="h-16 z-50">
        <TopMessagePlace />
      </div>
      <div className="h-[calc(100vh-128px)] overflow-y-scroll scrollbar-hide">
      <ChatMessages />
      </div>
      <div className="rounded-full h-16 z-50">
      <ButtomMessagePlace />
      </div>
    </div>
  );
}
