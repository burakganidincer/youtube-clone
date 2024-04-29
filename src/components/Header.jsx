import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();

  //Form gönderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputa girilen veri
    const text = e.target[0].value;

    //kullanıcıyı sonuçlar sayfasına yönlendir parametre olarak aratılan
    //terimi ekle
    navigate(`/results?search_query=${text}`);
  };

  return (
    <div className="flex justify-between items-center p-4">
      {/* LOGO KISMI */}
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="youtube.png" alt="yt-logo" />
        <h1 className="hidden md:block text-2xl">YouTube</h1>
      </Link>

      {/* ARAMA ÇUBUĞU */}

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="search"
          className="bg-black text-white py-1 px-3 outline-none"
        />
        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>

      {/* İkonlar */}
      <div className="flex items-center text-xl gap-3 cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[450ms]" />
        <BsFillCameraReelsFill className="hover:text-gray-400 transition duration-[450ms]" />
      </div>
    </div>
  );
};

export default Header;
