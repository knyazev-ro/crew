import "./styles.css";
import ButtomMessagePlace from "./ButtomMessagePlace";
import TopMessagePlace from "./TopMessagePlace";
import ChatMessages from "./ChatMessages";

export default function MessagePlace() {
  return (
    <div className="min-w-96 w-full  flex-col bg-rich_black-100 rounded-t-2xl justify-between message-background">
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
