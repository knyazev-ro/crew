import Toolbar from "./ToolBar";



export default function Memes(){

    return(
        <div className="h-screen w-1/3 bg-pink-500">
        <div className="h-full flex flex-col bg-stone-950 rounded-r-md">
            {/* menu */}
            <div>
                <Toolbar></Toolbar>
            </div>

            {/* options */}
            <div></div>
        </div>
        </div>
    );
}