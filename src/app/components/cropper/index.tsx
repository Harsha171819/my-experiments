import React, { useState } from "react";
import VideoPlayer from "../videoPlayer";

type ActionButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, variant = "primary" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-sm transition duration-200 ${
      variant === "primary"
        ? "bg-purple-600 text-white hover:bg-purple-700"
        : "bg-gray-700 text-white hover:bg-gray-600"
    }`}
  >
    {label}
  </button>
);

type CropperProps = {
  onClose: () => void;
};

const videosrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Cropper: React.FC<CropperProps> = ({ onClose }) => {
  const [cropping, setShowCropping] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      {/* Main Content: Video & Preview Sections */}
      <div className="flex">
        <VideoPlayer videoSrc={videosrc} showCropper={cropping} previewEnabled />
      </div>

      {/* Full-width Separator */}
      <hr className="-mx-6 border-gray-500/50 my-4" />

      {/* Footer: Buttons */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <ActionButton label="Start Cropper" onClick={() => setShowCropping(true)} />
          <ActionButton label="Remove Cropper" onClick={() => setShowCropping(false)} />
          <ActionButton label="Generate Preview" />
        </div>
        <ActionButton label="Cancel" onClick={onClose} variant="secondary" />
      </div>
    </div>
  );
};

export default Cropper;