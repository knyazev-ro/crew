import { useState } from "react";
import Toolbar from "./ToolBar";

export default function Memes() {
  const [type, setType] = useState(1);

  const memeType = [
    { label: "emoji's", value: 1 },
    { label: "stickers", value: 2 },
    { label: "gifs", value: 3 },
  ];

  const handleChangeType = (type) => {
    const currentType = memeType.find((item) => item.value === type);
    setType(currentType.value);
  };

  const emojis = [
    "😊",
    "😂",
    "😍",
    "👍",
    "🎉",
    "😎",
    "🤔",
    "😉",
    "😢",
    "😭",
    "😅",
    "😆",
    "😡",
    "😱",
    "🤯",
    "🥳",
    "🤗",
    "🤫",
    "😴",
    "🤤",
    "🙄",
    "🤡",
    "🥺",
    "🤩",
    "🥰",
    "😋",
    "😜",
    "😷",
    "👻",
    "👽",
    "🤖",
    "🎃",
    "💀",
    "🔥",
    "🌈",
    "⚡",
    "❄️",
    "🍕",
    "🍔",
    "🍟",
    "🍦",
    "🍩",
    "🍿",
    "🍪",
    "🥐",
    "🥖",
    "🍎",
    "🍉",
    "🍇",
    "🍒",
    "🍍",
    "🌹",
    "🌺",
    "🌻",
    "🌼",
    "🎈",
    "🎁",
    "🎀",
    "🎊",
    "🎶",
    "🎵",
    "💡",
    "📚",
    "📖",
    "📝",
    "💻",
    "📱",
    "💼",
    "🧳",
    "🎮",
    "🎲",
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚓",
    "🚑",
    "🚒",
    "🚜",
    "🚀",
    "🌹",
    "🌺",
    "🌻",
    "🌼",
    "🎈",
    "🎁",
    "🎀",
    "🎊",
    "🎶",
    "🎵",
    "💡",
    "📚",
    "📖",
    "📝",
    "💻",
    "📱",
    "💼",
    "🧳",
    "🎮",
    "🎲",
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚓",
    "🚑",
    "🚒",
    "🚜",
    "🚀",
  ];

  const stickers = [
    "🐱‍👤",
    "💖",
    "✨",
    "🔥",
    "🍕",
    "🌮",
    "🍔",
    "🍣",
    "🎂",
    "🥳",
    "👑",
    "🐶",
    "🐱",
    "🦄",
    "🐉",
    "🐲",
    "👾",
    "👻",
    "🤖",
    "👽",
    "🎃",
    "💀",
    "👹",
    "👺",
    "👤",
    "👀",
    "🐍",
    "🐢",
    "🐳",
    "🐬",
    "🍎",
    "🍇",
    "🍉",
    "🍌",
    "🍋",
    "🍓",
    "🍒",
    "🥥",
    "🥑",
    "🥦",
    "🍆",
    "🌽",
    "🥕",
    "🍖",
    "🥩",
    "🍤",
    "🍜",
    "🍲",
    "🍣",
    "🥟",
    "🎈",
    "🎉",
    "🎊",
    "🛍️",
    "🎁",
    "🎀",
    "📅",
    "📚",
    "✏️",
    "📱",
    "💻",
    "📞",
    "🖥️",
    "🔋",
    "⚙️",
    "🛠️",
    "⛏️",
    "🧲",
    "💡",
    "🔦",
  ];

  const gifs = [
    "GIF1",
    "GIF2",
    "GIF3",
    "GIF4",
    "GIF5",
    "GIF6",
    "GIF7",
    "GIF8",
    "GIF9",
    "GIF10",
    "GIF11",
    "GIF12",
    "GIF13",
    "GIF14",
    "GIF15",
    "GIF16",
    "GIF17",
    "GIF18",
    "GIF19",
    "GIF20",
    "GIF21",
    "GIF22",
    "GIF23",
    "GIF24",
    "GIF25",
    "GIF26",
    "GIF27",
    "GIF28",
    "GIF29",
    "GIF30",
    "GIF31",
    "GIF32",
    "GIF33",
    "GIF34",
    "GIF35",
    "GIF36",
    "GIF37",
    "GIF38",
    "GIF39",
    "GIF40",
    "GIF41",
    "GIF42",
    "GIF43",
    "GIF44",
    "GIF45",
    "GIF46",
    "GIF47",
    "GIF48",
    "GIF49",
    "GIF50",
    "GIF51",
    "GIF52",
    "GIF53",
    "GIF54",
    "GIF55",
    "GIF56",
    "GIF57",
    "GIF58",
    "GIF59",
    "GIF60",
    "GIF61",
    "GIF62",
    "GIF63",
    "GIF64",
    "GIF65",
    "GIF66",
    "GIF67",
    "GIF68",
    "GIF69",
    "GIF70",
    "GIF71",
    "GIF72",
    "GIF73",
    "GIF74",
    "GIF75",
    "GIF76",
    "GIF77",
    "GIF78",
    "GIF79",
    "GIF80",
    "GIF81",
    "GIF82",
    "GIF83",
    "GIF84",
    "GIF85",
    "GIF86",
    "GIF87",
    "GIF88",
    "GIF89",
    "GIF90",
    "GIF91",
    "GIF92",
    "GIF93",
    "GIF94",
    "GIF95",
    "GIF96",
    "GIF97",
    "GIF98",
    "GIF99",
    "GIF100",
  ];

  const renderContent = () => {
    switch (type) {
      case 1:
        return emojis.map((emoji, index) => (
          <div key={index} className="p-2 bg-gray-900 rounded-full w-9 h-9 shadow-md">
            {emoji}
          </div>
        ));
      case 2:
        return stickers.map((sticker, index) => (
          <div key={index} className="p-2 bg-gray-900 h-9 rounded-lg shadow-md">
            {sticker}
          </div>
        ));
      case 3:
        return gifs.map((gif, index) => (
          <div
            key={index}
            className="p-2 bg-gray-900 rounded-lg shadow-md text-white"
          >
            {gif}
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="w-1/3 max-w-md mx-auto bg-rich_black shadow-lg rounded-t-2xl">
      <div className="h-screen flex flex-col bg-rich_black items-center gap-4">
        {/* Toolbar */}
        <Toolbar setCurrentType={handleChangeType} />

        {/* Content */}
        <div className="h-screen w-11/12 rounded-2xl bg-rich_black-100 overflow-y-scroll scrollbar-hide">
          <div className="h-screen w-full p-4 flex flex-wrap gap-2 justify-center">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
