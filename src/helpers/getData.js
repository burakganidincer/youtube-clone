import axios from "axios";
//istek için gerekli ayarlar

const options = {
  headers: {
    "X-RapidAPI-Key": "4d0cef6022msh0576abf74d0e2d5p17dd8fjsneaff14c10b44",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

//Yapılan bütün isteklerin ortak başlangıç kısmını yani baseURL'i belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

//parametre olarak aldığı URL'e istek atıp
//Geriye elde ettiği verileri döndüren

export const getData = async (endpoint) => {
  try {
    //api isteği
    const res = await axios.get(endpoint, options);
    //çağırıldığı yere veriyi döndür
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu.", err);
  }
};
