function Card() {
  return (
    <div className="max-w-sm rounded-lg border shadow-2xl w-100 h-50 bg-white">
      <div className="flex gap-5 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-bus-icon lucide-bus bg-blue-400 rounded-lg p-2"
        >
          <path d="M8 6v6" />
          <path d="M15 6v6" />
          <path d="M2 12h19.6" />
          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
          <circle cx="7" cy="18" r="2" />
          <path d="M9 18h5" />
          <circle cx="16" cy="18" r="2" />
        </svg>
        <h1 className="text-2xl">Vehicles Online</h1>
      </div>
      <div className="p-2">
         <h1 className="pl-20 text-4xl font-bold">18</h1>
      </div>
    </div>
  );
}

export default Card;
