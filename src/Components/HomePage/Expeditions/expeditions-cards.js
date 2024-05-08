import React from 'react'
import expeditionData from './data.js'


const ExpeditionCard = () => {
    return (
        <div>
            <h1 className="text-center font-poppins font-bold text-4xl mb-8 ml-90 mt-10 text-yellow-400">Expeditions</h1>

            <div className='flex flex-wrap justify-center'>
                {expeditionData.map(expedition => (
                    <div key={expedition.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative group" style={{ width: '100%', height: '800px' }}>
                        <img className="w-full h-full absolute top-0 left-0" src={expedition.imageUrl} alt={expedition.title} style={{ zIndex: '0', objectFit: 'cover' }} />
                        <div className="font-poppins font-bold text-3xl mb-2" style={{ position: 'absolute', zIndex: '1', color: '#FFD084', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', transition: 'all 0.3s ease' }}>{expedition.title}</div>
                        <div className="absolute w-full h-full rounded overflow-hidden opacity-0 group-hover:opacity-100 transition duration-300" style={{ zIndex: '2' }}>
                            {/* Add two rectangular corners */}
                            <div className="absolute w-full h-full bg-white opacity-1 transition duration-300 opacity-0 hover:opacity-20" style={{ zIndex: '1' }}></div>
                            <button className="absolute font-jomolhari bottom-20 left-5 px-10 py-5 bg-white bg-opacity-10 text-white text-xl font-bold rounded-full transition duration-300" onClick={null} style={{ zIndex: '3' }}>Explore ></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>





    );
};

export default ExpeditionCard;