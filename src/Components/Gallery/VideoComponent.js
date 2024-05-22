import React, { useState, useRef, useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';

const VideoComponent = () => {
    const [videos, setVideos] = useState([])
    const { isLoading, error, sendRequest, onCloseError } = useFetch();

    async function fetchGalleryData() {
        try {
            // Uninstall axios later
            const responseData = await sendRequest(
                '/gallery/getVideoDetails',  // Gallery ko GET Api rakhne
                'GET',
                null,
                {
                    'Content-Type': 'application/json',
                }

            );
            setVideos(responseData.galleryVideoDetails)

        } catch (error) {
            console.log('An error occurred in fetching gallery image', error.message);
        }
    }

    useEffect(() => {
        fetchGalleryData()
    }, [])


    const [modalOpen, setModalOpen] = useState(false);
    const iframeRef = useRef(null);
    const [modalOpenIndex, setModalOpenIndex] = useState(null);

    function getYoutubeEmbedAndThumbnail(url) {
        const regExp = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        if (match && match[1]) {
            const videoId = match[1];
            const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            return { youtubeUrl, thumbnailUrl };
        } else {
            return { error: 'Invalid YouTube URL' };
        }
    }

    // Example usage
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setModalOpen(false);
            }
        };

        if (modalOpen) {
            document.addEventListener('keydown', handleKeyDown);
            if (iframeRef.current) {
                iframeRef.current.src += "?autoplay=1";
            }
        } else {
            if (iframeRef.current) {
                iframeRef.current.src = iframeRef.current.src.replace("?autoplay=1", "");
            }
        }
        fetchGalleryData()
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalOpen]);

    return (
        // <h1>hello</h1>
        <div className="relative font-inter antialiased">
            <main className="relative grid grid-cols-1 gap-x-5 lg:grid-cols-2 xl:grid-cols-3 justify-center items-start mb-10 bg-slate-50 overflow-hidden">
                {videos.map((video, index) => {
                    const { youtubeUrl, thumbnailUrl } = getYoutubeEmbedAndThumbnail(video.videoUrl);
                    return (
                        <div className="w-full mx-auto px-4 md:px-6 py-2" key={index}>
                            <div className="flex justify-center">
                                {/* Modal video component */}
                                <div>
                                    {/* Video thumbnail */}
                                    <button
                                        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                                        onClick={() => setModalOpenIndex(index)}
                                        aria-controls="modal"
                                        aria-label="Watch the video"
                                    >
                                        <img
                                            className="rounded-xl w-full"
                                            src={thumbnailUrl}
                                            alt="Modal video thumbnail"
                                        />
                                        {/* Play icon */}
                                        <svg
                                            className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="72"
                                            height="72"
                                        >
                                            <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                                            <path
                                                className="fill-indigo-500 drop-shadow-2xl"
                                                d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                                            />
                                        </svg>
                                    </button>
                                    {/* End: Video thumbnail */}

                                    {/* Modal backdrop */}
                                    {modalOpenIndex === index && (
                                        <div
                                            className="fixed inset-0 z-[99999] bg-black transition-opacity"
                                            onClick={() => setModalOpenIndex(null)}
                                            aria-hidden="true"
                                        ></div>
                                    )}
                                    {/* End: Modal backdrop */}
                                    <div className="mt-6">
                                        <h1 className="text-2xl mt-4 font-bold text-[#FFB133]">
                                            {video.title}
                                        </h1>
                                        <p className="text-[#939393] mt-5 mb-10">
                                            {video.description}
                                        </p>
                                    </div>
                                    {/* Modal dialog */}
                                    {modalOpenIndex === index && (
                                        <div
                                            id="modal"
                                            className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                                            role="dialog"
                                            aria-modal="true"
                                            onClick={() => setModalOpenIndex(null)}
                                        >
                                            <div
                                                className="max-w-5xl mx-auto flex items-center"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div
                                                    className="lg:w-full relative py-10 w-full h-[50%] lg:h-screen flex justify-center items-center aspect-video bg-black"
                                                >
                                                    <iframe
                                                        className="absolute rounded-3xl mx-10 w-full h-screen"
                                                        src={youtubeUrl}
                                                        title="YouTube video player"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* End: Modal dialog */}
                                </div>
                                {/* End: Modal video component */}
                            </div>
                        </div>

                    );
                })};

            </main >
        </div >
    );
};

export default VideoComponent;
