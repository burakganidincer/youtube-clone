import { Link } from "react-router-dom";
const UndefinedPage = () => {
  return (
    <div>
      <div className="grid place-items-center gap-4 font-bold my-52 text-xl">
        <h1>404</h1>
        <h1>Aradığınız sayfa bulunamadı</h1>
        <Link to={"/"}>
          <button className="bg-white text-black rounded-full px-3 py-1 hover:bg-gray-400">
            Anasayfa
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UndefinedPage;
