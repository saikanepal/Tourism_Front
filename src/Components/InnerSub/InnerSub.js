
import React from 'react'
import Image from "../../Assets/banner.png"

const InnerSub = () => {
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

    return (
        <div>Inner Sub</div>
    )
}

export default InnerSub