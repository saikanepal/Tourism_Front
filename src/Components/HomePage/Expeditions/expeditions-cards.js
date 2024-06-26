import React from 'react'
import expeditionData from '../../../Assets/Data/Expedition'
import { useNavigate } from 'react-router-dom';
import dog from '../../../Assets/Carousel/dog.jpg'
import {motion} from 'framer-motion'

const ExpeditionCard = () => {
    const navigate=useNavigate()
    const parentAnimate={
        initial:{opacity:0, x:-100},
        hover:{scale:1.1},
        view:{opacity:1,x:0}
    }
    const textAnimate={
        initial:{border:'2px solid transparent'},
        hover:{border:'2px solid #ca8f30'}
    }
    const handleClick=(data)=>{
        navigate(`/expedition/${data}`)
    }
    return (
        <div>
            <h1 className="text-center font-light text-5xl mb-5 ml-90 mt-10 text-custom-yellow">Expeditions</h1>

            <div className='flex flex-wrap justify-center gap-5 '>
                {Object.entries(expeditionData.expeditions).map((expedition,i) => (
                   
                    <motion.div key={i} variants={parentAnimate} initial='initial' whileHover='hover' whileInView='view' onClick={e=>{e.preventDefault();handleClick(expedition[0])}} transition={{delay:(i+0.01)/10, duration:0.5}} viewport={{once:true}} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative group" style={{ width: '100%', height: '500px' }}>
                        <img className="w-full h-full absolute top-0 left-0" src="https://s3-alpha-sig.figma.com/img/27d3/a0cc/c5782e8f534a5619977604f2b2b4db14?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eehnlBvGIc0Z50pg3tVas8oUrVOEn1FNPezHypEuFCW9zUEFrpWgVqnVodaafBPdp15sz6PpSUAcMZylpLou~SqDzOdlgAw-GIR9tqft56RerBRlI-~suT~7BMiFdzyVBSi8iNCkq9YqJimn3IAm4a26rK8WVw~uVI~2x~vtGPiYfieLQU5griLUwSpE9YxL0xsXi5fuUGhFDET0b2gWau8H4NftsshsxtzwRl1z1kbHLxq~wKV4zKmzFGlpfIDcFU6Hg55XuQ45H8KEG0lyca~ybOoHNhoArrL0qrRb3ViTDGoc1oRA0bz~otPDPp5n-nMoGgXateF7hnu9Gn~MVg__" alt={expedition[0]} style={{ zIndex: '0', objectFit: 'cover' }} />
                        <motion.div variants={textAnimate} className="font-poppins font-bold text-3xl mb-2 px-5 py-3 pointer-events-none" style={{ position: 'absolute', zIndex: '10', color: '#FFD084', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', transition: 'all 0.3s ease' }}>{expedition[0]}</motion.div>
                        <div className="absolute w-full h-full hover:bg-black rounded overflow-hidden opacity-0 hover:opacity-40 transition duration-300" style={{ zIndex: '2' }}>
                        
                            
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >





    );
};

export default ExpeditionCard;