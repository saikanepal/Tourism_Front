import React from 'react'
 import  expeditionData  from './data.js' 


const ExpeditionCard = () => {
    return (
        <div className='flex flex-wrap justify-center'>
        {expeditionData.map(expedition => (
            <div key={expedition.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4" style={{ position: 'relative', width: '100%', height: '600px' }}>
                <img className="w-full h-full absolute top-0 left-0" src={expedition.imageUrl} alt={expedition.title} style={{ zIndex: '0', objectFit: 'cover' }} />
                <div className="font-jomolhari font-bold text-3xl mb-2" style={{ position: 'absolute', zIndex: '1', color: '#FFD084', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{expedition.title}</div>
            </div>
        ))}
    </div>
    
    


    );
};

export default ExpeditionCard;