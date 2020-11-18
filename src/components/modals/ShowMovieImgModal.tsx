import React from "react";

interface Props {
  open: boolean;
  onClose?: () => void;
  movie: any;
}

const PlayTrailerModal: React.FC<Props> = ({ open, onClose, movie }) => {
  return open ? (
    <div
      style={{ background: "rgba(0, 0, 0, .5)" }}
      className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
    >
      <div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div className="bg-gray-900 rounded">
          <div className="flex justify-end pr-4 pt-2">
            <button
              onClick={onClose}
              className="text-3xl leading-none hover:text-gray-300"
            >
              &times;
            </button>
          </div>
          <div className="modal-body px-8 py-8">
            <div className="responsive-container overflow-hidden relative">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  movie.images.backdrops[0].file_path
                }
                alt={movie.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PlayTrailerModal;
