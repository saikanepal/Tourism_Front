import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch';


const ImageComponent = () => {
    const [images, setImages] = useState([])
    const { isLoading, sendRequest } = useFetch();



    async function fetchGalleryData() {
        try {

            // Uninstall axios later
            const responseData = await sendRequest(
                '/gallery/getImageDetails',  // Gallery ko GET Api rakhne
                'GET',
                null,
                {
                    'Content-Type': 'application/json',
                }

            );
            setImages(responseData.galleryImageDetails)

        } catch (error) {
            console.log('An error occurred in fetching gallery image', error.message);
        }
    }

    useEffect(() => {
        fetchGalleryData()
    }, [])
    return (
        <div>
            <div className="max-h-[1100px] sm:max-h-[1150px] overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center items-start mb-10">
                    {images.map(data => (
                        <div key={data.regionName} className="flex flex-col justify-center items-start">
                            <img
                                className="opacity-80 rounded-lg w-[368px] h-[400px]"
                                src={data.imageUrl}
                                alt={data.regionName}
                            />
                            <h1 className="text-xl lg:text-3xl mt-4 font-bold text-[#FFB133]">
                                {data.regionName}
                            </h1>
                            <p className="text-[#939393] mt-5 mb-10">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageComponent