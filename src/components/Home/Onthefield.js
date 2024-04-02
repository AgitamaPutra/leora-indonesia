import React, { useState, useEffect } from "react";

const VideoList = ({ onVideoSelect }) => {
  // Dummy data for video list
  const videoList = [
    { id: "n__j_bF9O4w", title: "Sample Video 1", duration: "0:16" },
    { id: "n__j_bF9O4w", title: "Sample Video 2", duration: "0:16" },
    { id: "n__j_bF9O4w", title: "Sample Video 3", duration: "0:16" },
  ];

  return (
    <div className="w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-4">Playlist</h2>
      {videoList.map((video) => (
        <div
          key={video.id}
          onClick={() => onVideoSelect(video)}
          className="cursor-pointer mb-4"
        >
          <p className="text-gray-600">{video.title}</p>
          <p className="text-xs text-gray-500">{video.duration}</p>
        </div>
      ))}
    </div>
  );
};

const VideoPlayer = ({ selectedVideo }) => {
  return (
    <div className="w-full md:w-2/3">
      {selectedVideo && (
        <>
          <h2 className="text-lg font-semibold mb-4">{selectedVideo.title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <video className="w-full h-full" controls>
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </div>
  );
};

const Onthefield = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="px-5 md:px-10 py-10 md:py-10 font-manrope bg-gray-200">
      <h1 className="text-4xl text-customGreen font-bold text-center drop-shadow-lg">
        On The Field
      </h1>
      <p className="my-5 text-justify">
        Watch diverse and dynamic activities our dedicated team engages in on a
        daily basis.
      </p>
      <div className="flex flex-col md:flex-row">
        <VideoList onVideoSelect={handleVideoSelect} />
        <VideoPlayer selectedVideo={selectedVideo} />
      </div>
    </div>
  );
};

export default Onthefield;
