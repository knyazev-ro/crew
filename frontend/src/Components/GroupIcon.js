export default function GroupIcon({ icon, action, space }) {
  return (
    <div className="w-full h-full">
    <button
      className="flex bg-stone-300 w-12 h-12 rounded-xl border hover:border-4 hover:border-indigo-500 hover:scale-105 hover:transition-transform transform-cpu"
      onClick={action}
    >
      {icon}
    </button>
    </div>
  );
}
