import ButtomMessagePlace from "./ButtomMessagePlace";
import TopMessagePlace from "./TopMessagePlace";
import Message from "./Message";

export default function MessagePlace() {
  return (
    <div className="min-w-96 sticky w-screen flex-col bg-stone-950  overflow-y-scroll overflow-x-hidden scrollbar-hide rounded-t-2xl">
      <TopMessagePlace></TopMessagePlace>

    <div
    className="translate-y-14"
    >
      <div className="p-4 space-y-2 ">
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
        <Message text="Ага" isUser={false} />
      </div>
      </div>
      <ButtomMessagePlace></ButtomMessagePlace>
    </div>
  );
}
