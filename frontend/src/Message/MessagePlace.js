import ButtomMessagePlace from "./ButtomMessagePlace";
import TopMessagePlace from "./TopMessagePlace";
import Message from "./Message";

export default function MessagePlace() {
  return (
    <div className="h-screen min-w-96 sticky w-screen flex-col bg-rich_black overflow-y-scroll overflow-x-hidden scrollbar-hide rounded-t-2xl">
      <TopMessagePlace></TopMessagePlace>

    <div
    className=""
    >
      <div className="h-screen p-4 space-y-2 overflow-y-scroll scrollbar-hide">
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
        <Message text="Ага" isUser={false} />
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
        <Message text="Ага" isUser={false} />
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
        <Message text="Ага" isUser={false} />
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
        <Message text="Ага" isUser={false} />
        <Message text="Прикинь, новый Джокер параша полная" isUser={false} />
        <Message text="Че реально?" isUser={true} />
      </div>
      </div>
      <ButtomMessagePlace></ButtomMessagePlace>
    </div>
  );
}
