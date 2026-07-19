import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">

      <div className="h-11 w-11 rounded-full bg-[#1E3F20] flex items-center justify-center text-white font-bold text-lg shadow">
        N
      </div>

      <div>

        <h1 className="text-3xl font-bold text-[#1E3F20]">
          NovaCart
        </h1>

        <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500">
          Premium Living
        </p>

      </div>

    </Link>
  );
}

export default Logo;