import React from 'react'

const ImageComponent = ({ data: images }) => {
    return (
        <div>
            <div className="max-h-[1100px] sm:max-h-[1150px] overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center items-start mb-10">
                    {images.map(data => (
                        <div key={data.regionName} className="flex flex-col justify-center items-start">
                            <img
                                className="opacity-95 rounded-lg w-[368px] h-[400px]"
                                src={data.imageURL}
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