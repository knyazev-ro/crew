import { useState } from "react";
import Toolbar from "./ToolBar";

export default function Memes() {
    const [type, setType] = useState(1);

    const memeType = [
        { label: "emoji's", value: 1 },
        { label: 'stickers', value: 2 },
        { label: 'gifs', value: 3 }
    ];

    const handleChangeType = (type) => {
        const currentType = memeType.find(item => item.value === type);
        setType(currentType.value);
    };

    const emojis = ["😊", "😂", "😍", "👍", "🎉"];
    const stickers = ["🐱‍👤", "💖", "✨", "🔥", "🍕"];
    const gifs = ["GIF1", "GIF2", "GIF3", "GIF4", "GIF5"];

    const renderContent = () => {
        switch (type) {
            case 1:
                return emojis.map((emoji, index) => <div key={index} className="m-1 p-2 bg-gray-900 rounded-full shadow-md">{emoji}</div>);
            case 2:
                return stickers.map((sticker, index) => <div key={index} className="m-1 p-2 bg-gray-900 rounded-lg shadow-md">{sticker}</div>);
            case 3:
                return gifs.map((gif, index) => <div key={index} className="m-1 p-2 bg-gray-900 rounded-lg shadow-md text-white">{gif}</div>);
            default:
                return null;
        }
    };

    return (
        <div className="w-1/3 max-w-md mx-auto bg-stone-950 shadow-lg rounded-t-2xl overflow-hidden">
            <div className="h-full flex flex-col bg-stone-950 items-center">
                {/* Toolbar */}
                <Toolbar setCurrentType={handleChangeType} />

                {/* Content */}
                <div className="w-full p-4 flex flex-wrap gap-2 justify-center bg-stone-950">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
