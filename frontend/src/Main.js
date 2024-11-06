import React from "react";
import "./App.css";
import SideBarMessages from "./Sidebar/SideBarMessages";
import MessagePlace from "./Message/MessagePlace";
import Memes from "./Additional/Memes";

export default function Main() {
  const messages = [
    {
      name: "Коля Оторва",
      description:
        "Представляешь, чуть под поезд не попал! Жизнь со мной не соскучится, видимо. Ну, как говорится, живём на адреналине!",
      image: "",
      isRead:false
    },
    {
      name: "Семен Сергеевич",
      description:
        "Вот уж день! Еду я на своём поезде, а какой-то сорвиголова перебегает прямо передо мной. Ещё чуть-чуть — и катастрофа! Никогда такого не видел.",
      image: "",
      isRead:true
    },
    {
      name: "Бабушка Лидия",
      description:
        "Игорёк, ты осторожнее будь! Страшно за тебя, на улицах сейчас много лихачей. Не ходи по дороге, как в детстве!",
      image: "",
      isRead:false
    },
    {
      name: "Иван Зверев",
      description:
        "Ты не поверишь! Пытался пересечь железку, и вдруг поезд из-за поворота. Холодок по спине пробежал! Вот это экстрим.",
      image: "",
      isRead:true
    },
    {
      name: "Андрей Павлович",
      description:
        "Смену веду, а тут на путях чудо появилось, прямо перед поездом. Думаю, вот наслоение приключений! Лет двадцать такое не видел.",
      image: "",
      isRead:true
    },
    {
      name: "Оксана",
      description:
        "Игорь, смотри на дорогу, пожалуйста! Ты у нас ещё молодой, держи голову на плечах. Мы за тебя всегда переживаем.",
      image: "",
      isRead:true
    },
    {
      name: "Даня",
      description:
        "Чел, ты просто не представляешь! Поезд чуть не снёс меня на повороте. Вот это день! Можешь меня звать супергероем теперь, я выжил!",
      image: "",
      isRead:true
    },
    {
      name: "Лариса Петровна",
      description:
        "Работаю машинистом столько лет, но таких экстремалов ещё не видела! Как-то на сегодня с меня приключений достаточно.",
      image: "",
      isRead:false
    },
    {
      name: "Папа",
      description:
        "Ну ты у меня и сорвиголова, Игорь! Но давай всё-таки чуть поосторожнее, ладно? Мне важно, чтобы ты был жив-здоров.",
      image: "",
      isRead:false
    },
    {
      name: "Коля Оторва",
      description:
        "Представляешь, чуть под поезд не попал! Жизнь со мной не соскучится, видимо. Ну, как говорится, живём на адреналине!",
      image: "",
      isRead:true
    },
    {
      name: "Семен Сергеевич",
      description:
        "Вот уж день! Еду я на своём поезде, а какой-то сорвиголова перебегает прямо передо мной. Ещё чуть-чуть — и катастрофа! Никогда такого не видел.",
      image: "",
      isRead:true
    },
    {
      name: "Бабушка Лидия",
      description:
        "Игорёк, ты осторожнее будь! Страшно за тебя, на улицах сейчас много лихачей. Не ходи по дороге, как в детстве!",
      image: "",
      isRead:true
    },
    {
      name: "Иван Зверев",
      description:
        "Ты не поверишь! Пытался пересечь железку, и вдруг поезд из-за поворота. Холодок по спине пробежал! Вот это экстрим.",
      image: "",
      isRead:true
    },
    {
      name: "Андрей Павлович",
      description:
        "Смену веду, а тут на путях чудо появилось, прямо перед поездом. Думаю, вот наслоение приключений! Лет двадцать такое не видел.",
      image: "",
      isRead:true
    },
    {
      name: "Оксана",
      description:
        "Игорь, смотри на дорогу, пожалуйста! Ты у нас ещё молодой, держи голову на плечах. Мы за тебя всегда переживаем.",
      image: "",
      isRead:true
    },
    {
      name: "Даня",
      description:
        "Чел, ты просто не представляешь! Поезд чуть не снёс меня на повороте. Вот это день! Можешь меня звать супергероем теперь, я выжил!",
      image: "",
      isRead:true
    },
    {
      name: "Лариса Петровна",
      description:
        "Работаю машинистом столько лет, но таких экстремалов ещё не видела! Как-то на сегодня с меня приключений достаточно.",
      image: "",
      isRead:true
    },
    {
      name: "Папа",
      description:
        "Ну ты у меня и сорвиголова, Игорь! Но давай всё-таки чуть поосторожнее, ладно? Мне важно, чтобы ты был жив-здоров.",
      image: "",
      isRead:true
    },
  ];

  const groups = [
    {
      action: "Hello",
      icon: "",
    },
    {
      action: "Hello",
      icon: "",
    },
    {
      action: "Hello",
      icon: "",
    },
    {
      action: "Hello",
      icon: "",
    },
    {
      action: "Hello",
      icon: "",
    },
    {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
      {
        action: "Hello",
        icon: "",
      },
  ];


  return (
    <div className="h-screen overflow-y-hidden scrollbar-hide">
      <div className="px-1 py-1 flex gap-1 bg-gradient-to-t to-bg_crew  from-bg_crew-100">
        <SideBarMessages messages={messages} groups={groups} />
        <MessagePlace></MessagePlace>
        <Memes></Memes>
      </div>
      </div>
  );
}
