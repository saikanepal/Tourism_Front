import React from "react";
import DashboardWrapper from "./DashboardWrapper";
import ImageUploadForm from "./ImageUpload";
import GalleryUploadForm from "./GalleryUpload";
function Image() {
  return (
    <DashboardWrapper>
      <div className="flex justify-between text-sm md:text-[20px] lg:text-lg  flex-col lg:px-32 px-5 pt-0 lg:pt-0">
        <div className="my-4 py-5"></div>
        <div className="my-auto h-screen">
          <h1 className="flex justify-center text-2xl font-bold text-custom-gold">
            Upload Images
          </h1>
          <div pt-4>
            {" "}
            <ImageUploadForm />
          </div>
          <div pt-4>
            {" "}
            <GalleryUploadForm />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default Image;
