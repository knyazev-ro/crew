import DynamicImageCard from './DynamicImageCard';
import LoginCard from './LoginCard';
import './styles.css'

export default function Auth(){

    return(
        <div className="bg-bg_crew-100">
        <div className='h-screen border-bg_crew-100 border-4 bg-rich_black rounded-2xl image-login scrollbar-hide overflow-y-scroll'>
        <div className="flex h-full hover:backdrop-blur-sm lg:gap-40 gap-20 flex-wrap items-center lg:justify-end justify-center">
                <LoginCard />
               <DynamicImageCard />
        </div>
        </div>
        </div>
    );
}