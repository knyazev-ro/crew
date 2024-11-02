export default function TopMessagePlace() {
  return (
    <>
      <div className="items-center justify-around flex absolute top-0 w-full h-16 bg-rose-600">
        <div className="flex w-20 gap-1 truncate">
            <div 
            className="bg-gray-800 w-16"
            >
                {'////////'}
            </div>
            <div 
            className="bg-gray-800 w-16"
            >
                {'///////////////'}
            </div>
        </div>
        <div className="border w-12 h-12 rounded-full bg-stone-200"></div>

        <div className="flex w-20 gap-1 truncate">
            <div 
            className="bg-gray-800 w-16"
            >
                {'////////'}
            </div>
            <div 
            className="bg-gray-800 w-16"
            >
                {'///////////////'}
            </div>
        </div>
      </div>
    </>
  );
}
