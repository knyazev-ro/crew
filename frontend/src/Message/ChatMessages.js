import Message from "./Message";


export default function ChatMessages({chat}){

    return (
        <div>
        <div className="p-4 space-y-2">
        <Message text="Эй, ты слышал, что новый Джокер уже вышел?" isUser={false} />
<Message text="Да, и как тебе?" isUser={true} />
<Message text="Честно? Разочарование полное. Совсем не то, что я ожидал." isUser={false} />
<Message text="Серьезно? Я-то думал, там будет крутой сюжет и мрачная атмосфера!" isUser={true} />
<Message text="Вот и я так думал. Но персонаж как-то не зацепил, все слишком предсказуемо." isUser={false} />
<Message text="Может, это просто ожидания завысились?" isUser={true} />
<Message text="Может быть. Но после прошлой части надеялся на что-то более глубокое." isUser={false} />
<Message text="Теперь даже идти не хочется. Подожду, пока на стриминге появится." isUser={true} />
<Message text="Не такая уж плохая идея. Хотя, кто знает, может тебе как раз понравится!" isUser={false} />
<Message text="Ладно, посмотрим. А ты тогда что сейчас смотришь?" isUser={true} />
<Message text="О, недавно нашел сериал про параллельные миры. Вот там реально интересно." isUser={false} />
<Message text="Оу, круто, всегда любил такие темы. Как называется?" isUser={true} />
<Message text="Называется 'Петля'. Сюжет вообще закрученный, каждый эпизод с новыми поворотами." isUser={false} />
<Message text="Все, добавляю в список! Надеюсь, не разочарует, как Джокер." isUser={true} />
<Message text="Не-не, тут точно не разочаруешься. Можем потом обсудить!" isUser={false} />
<Message text="Договорились, как только гляну, сразу напишу!" isUser={true} />

      </div>
      </div>
    );
}