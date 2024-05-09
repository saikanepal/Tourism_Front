import Image from "../../Assets/banner.png"
import React from 'react'
import trekking from "../../Assets/Data/Trekking"
import { useParams } from "react-router-dom"

const InnerSub = () => {
    // const { region } = useParams()

    const region = "Annapurna Region Trekking"

    const trekkingLocation = Object.values(trekking)
    const trekkingCamp = trekkingLocation[0][region]
    console.log(trekkingCamp);

    return (
        <>
            <div className="w-4/5 mx-auto grid grid-cols-2 gap-x-5 gap-y-5 rounded overflow-hidden shadow-lg">
                {Object.keys(trekkingCamp).map(trek => (
                    <>
                        <div className="flex flex-col relative justify-center items-center">
                            <img className="bg-opacity-90" src={Image || trek.photos} alt="Sunset in the mountains" />
                            <h1 className="text-3xl text-white absolute">{Object.values(trek)}</h1>
                        </div>
                    </>
                ))}
            </div >
        </>
    )
}

export default InnerSub










const everestRegionTrekking = {
    "Everest Base Camp Trek": {
        "overview": "The Everest Base Camp Trek is a classNameic trekking route that takes you to the base camp of the world's highest peak, Mount Everest.",
        "map": "URL to trek map",
        "highlights": ["Stunning views of Everest and surrounding peaks", "Exploring Sherpa villages and monasteries"],
        "costIncludes": ["Accommodation", "Meals during trek", "Permits and entry fees"],
        "costExcludes": ["Flights to and from Lukla", "Personal trekking gear", "Tips for guides and porters"],
        "fixedDates": ["Spring (March to May)", "Autumn (September to November)"],
        "gearList": ["Hiking boots", "Warm clothing", "Sleeping bag", "Waterproof jacket"],
        "photos": [Image],
        "videos": ["URL to video"],
        "reviews": ["Customer reviews and testimonials"],
        "description": "Detailed description of the trek"
    },
    "Gokyo Valley Trek": {
        "photos": [Image],
    },
    "Kongma La and Cho La Pass Trek": {
        "photos": [Image],
    },
    "Everest Panorama Trek": {
        "photos": [Image],
    },
    "Arun Valley Trek": {
        "photos": [Image],
    },
    "Dudh Kunda Trek": {
        "photos": [Image],
    }
}