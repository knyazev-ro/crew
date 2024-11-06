import DynamicImageCard from './DynamicImageCard';
import LoginCard from './LoginCard';
import './styles.css'

export default function Auth(){

    return(
        <div className="bg-red-500">
        <div className='border-red-500 border-4 bg-rich_black h-screen rounded-2xl image-login scrollbar-hide overflow-y-scroll'>
        <div className="flex h-full hover:backdrop-blur-sm">
            <div className="flex w-[50vw] items-center justify-center rounded-2xl">
                <LoginCard />
            </div>

            <div className=" w-[50vw] flex items-center justify-center rounded-2xl">
               <DynamicImageCard />
            </div>
        </div>
        </div>
        </div>
    );
}