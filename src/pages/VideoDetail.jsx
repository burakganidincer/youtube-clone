import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  //1) arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();

  //2)URL den v isimli arama parametresini al
  const id = searchParams.get("v");

  //3) id'sii bilinen videonun bilgilerini api'den al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);
  console.log(video);
  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/* Video İçeriği */}
      <div>
        <ReactPlayer
          className={"rounded"}
          height={"50vh"}
          width={"100%"}
          controls
          playing
          light
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          <p> yükleniyor...</p>
        ) : (
          <>
            {/* Başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* Kanal Bilgileri */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                  alt="channel photo"
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-black rounded-full px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>
              {/* Sağ */}
              <div className="flex items-center gap-3 bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-3 py-2 px-4 border-r">
                  <AiOutlineLike />
                  <p>{millify(video.likeCount)}</p>
                </div>
                <div className="px-4 py-2">
                  <AiOutlineDislike />
                </div>
              </div>
            </div>

            {/* Video Bilgileri */}
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} Görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>

              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>

      {/* Alakalı içerikler */}
      <div className="flex flex-col gap-5 p-1 md:p-6 max-md:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
