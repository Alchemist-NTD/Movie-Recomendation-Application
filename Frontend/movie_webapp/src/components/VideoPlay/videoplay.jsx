import React from 'react';

function VideoPlayer (nameMovie) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="relative w-full max-w-7xl h-96 md:h-180 rounded-lg overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allowFullScreen
        />
      </div>
      <div className="mt-8 text-white">
        <h1 className="text-2xl font-bold">Title of the Video</h1>
        <p className="mt-2 text-gray-400">Channel Name - 2.5M views - 5 months ago</p>
        <div className="mt-4 flex items-center space-x-4">
          <button className="px-4 py-2 bg-red-600 rounded-md text-white font-bold hover:bg-red-700">
            Like
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded-md text-white font-bold hover:bg-gray-800">
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
