import DynamicImageCard from './DynamicImageCard';
import LoginCard from './LoginCard';
import './styles.css'

export default function Auth(){

    return(
        <div className='px-1 py-1 bg-red-500 h-screen scrollbar-hide overflow-y-scroll'>
        <div className="flex bg-rich_black h-screen  rounded-2xl ">
            <div className="flex bg-rich_black w-1/2 items-center justify-center rounded-2xl">
                <LoginCard />
            </div>

            <div className="bg-rich_black w-1/2 flex items-center justify-center rounded-2xl">
               <DynamicImageCard />
            </div>
        </div>
        </div>
    );
}