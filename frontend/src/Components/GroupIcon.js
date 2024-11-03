export default function GroupIcon({ icon, action, space }) {
  return (
    <button
      className="flex bg-stone-300 w-14 h-14 rounded-xl border hover:border-4 hover:border-green-500 hover:scale-105 hover:transition-transform transform-cpu"
      onClick={action}
    >
      {icon}
    </button>
  );
}
