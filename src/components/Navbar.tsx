function Navbar() {
  return (
    <nav className="bg-white shadow-2xl h-15 sticky top-0 z-50 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-gray-600 w-28 h-15 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-house-icon lucide-house ml-3 bg-blue-100 w-10 h-10 rounded-full p-2"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </div>
        <p className="text-2xl text-center font-bold">Operations Dashboard</p>
        <input
          type="search"
          name="Dark"
          id=""
          className="bg-gray-200 rounded-md pl-4 h-8 w-70"
          placeholder="🔍   Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-circle-user-round-icon lucide-circle-user-round mr-6"
        >
          <path d="M18 20a6 6 0 0 0-12 0" />
          <circle cx="12" cy="10" r="4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
