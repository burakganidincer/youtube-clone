import { createContext, useEffect, useState } from "react";
import { categories } from "../constants/index";
import { getData } from "../helpers/getData";

//Context temelini oluşturma
export const VideoContext = createContext();

//2)Sağlayıcı tanımla
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState(null);

  //kategori her değiştiğinde api'den veriyi al

  useEffect(() => {
    //kullanmadığımız kategoriler seçildiyse (menü) fonks. durdur
    if (selectedCategory.type === "menu") return;
    //önceki kategorinin verilerini temizle
    setVideos(null);

    //type'ı home ise home endpoint'ine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }

    //type'ı trending ise home trending endpoint'ine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }

    //type'ı category ise o zaman search endpoint'ine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ videos, selectedCategory, setSelectedCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
