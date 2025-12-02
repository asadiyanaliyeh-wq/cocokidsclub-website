export default function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}