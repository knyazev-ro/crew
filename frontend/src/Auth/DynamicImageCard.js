export default function DynamicImageCard() {
  return (
    <div className=" justify-end bg-purple_sky-100 lg:w-1/2 h-5/6 image-login flex flex-col  border-2 border-r-purple_sky-100 border-b-purple_sky-100">
      <div className="px-1 py-1 w-2/12 h-28 bg-pink-600 transition-all duration-300 ease-in-out hover:w-3/12 flex border-2 border-purple_sky-100">
        <div className="flex items-center">

          <div className="mx-2 h-24 w-56 flex border-2 border-purple_sky-100 transition-all duration-300 ease-in-out  hover:w-80">
            <div className="px-3 w-5/6 h-full bg-rich_black flex items-center justify-center">
              <div className="px-1 py-1 w-16 h-16 image-boat "></div>
            </div>

            <div className="w-full h-full bg-rich_black flex justify-center items-center">
              <div className="px-1 py-1  text-white">
                <span className="text-md font-medium">the-</span>
                <span className="text-3xl font-bold">crew </span>
                <span className="text-sm font-normal flex flex-col mt-2">
                  <div className="-mt-4">open source</div>
                  <div className="-mt-2 px-6">messanger</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
