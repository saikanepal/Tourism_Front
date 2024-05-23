import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useImage } from '../../Hooks/useImage';
import { FaImage, FaVideo } from 'react-icons/fa';

const GalleryUploadForm = () => {
  const { uploadImage } = useImage();
  const [file, setFile] = useState(null);
  const [region, setRegion] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [urlDescription, setUrlDescription] = useState('');
  const [isImageForm, setIsImageForm] = useState(true); // State to toggle between forms

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUrlDescriptionChange = (e) => {
    setUrlDescription(e.target.value);
  };

  const handleRemoveImage = () => {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmitImageForm = async (e) => {
    e.preventDefault();

    let uploadedImage = null;
    if (file) {
      uploadedImage = await uploadImage(file);
      console.log('Uploaded Image:', uploadedImage);
    }

    const dataToSubmit = {
      imageUrl: uploadedImage,
      regionName: region,
      description: description,
    };

    console.log('Image Data to Submit:', dataToSubmit);

    try {
      const response = await axios.post('http://localhost:8000/api/gallery/postImageDetails', dataToSubmit);
      console.log('Response:', response.data);
      setFile(null);
      setRegion('');
      setDescription('');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmitUrlForm = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      videoUrl: videoUrl,
      title: title,
      description: urlDescription,
    };

    console.log('URL Data to Submit:', dataToSubmit);

    try {
      const response = await axios.post('http://localhost:8000/api/gallery/postVideoDetails', dataToSubmit); /* The path may not correct */
      console.log('Response:', response.data);
      setVideoUrl('');
      setTitle('');
      setUrlDescription('');
    } catch (error) {
      console.error('Error uploading URL:', error);
    }
  };

  return (
    <div className="max-w-[60%] mx-auto my-4 font-Poppins">
      <div className="flex items-center mb-5 justify-end">
        <FaImage className={`text-xl ${isImageForm ? 'text-blue-500' : 'text-gray-500'}`} />
        <label className="inline-flex relative items-center mx-3 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!isImageForm}
            readOnly
          />
          <div
            onClick={() => setIsImageForm(!isImageForm)}
            className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
        </label>
        <FaVideo className={`text-xl ${!isImageForm ? 'text-blue-500' : 'text-gray-500'}`} />
      </div>

      {isImageForm ? (
        <form onSubmit={handleSubmitImageForm}>
          <div className="mb-5">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            {file ? (
              <div className="flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <p className="text-gray-600 text-sm mr-2">{file.name}</p>
                <button type="button" className="text-red-500" onClick={handleRemoveImage}>
                  Remove
                </button>
              </div>
            ) : (
              <label
                htmlFor="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                Choose Image
              </label>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Region Name
            </label>
            <input
              type="text"
              id="region"
              className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
              placeholder="Enter region name"
              value={region}
              onChange={handleRegionChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-custom-gold focus:ring-4 focus:outline-none focus:ring-custom-gold font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Upload Image
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitUrlForm}>
          <div className="mb-5">
            <label htmlFor="videoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Video URL
            </label>
            <input
              type="url"
              id="videoUrl"
              className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
              placeholder="Enter Video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="urlDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="urlDescription"
              className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
              placeholder="Enter Description"
              value={urlDescription}
              onChange={handleUrlDescriptionChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-custom-gold focus:ring-4 focus:outline-none focus:ring-custom-gold font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Upload URL
          </button>
        </form>
      )}
    </div>
  );
};

export default GalleryUploadForm;
