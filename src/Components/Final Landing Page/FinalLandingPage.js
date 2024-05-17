import DataTrekking from '../../Assets/Data/Trekking.js';
import DataExpedition from '../../Assets/Data/Expedition.js';
import DataRegion from '../../Assets/Data/Region.js';
import trekking from './TestData.js';
import InfoSection from './InfoSection.js';


export default function FinalLandingPage() {
 
    const data = trekking.trekking['Everest Region Trekking']['Gokyo Valley Camp Trek'];
     console.log(data);
     /* Added this section to test the successful data passing as a prop */
    return (
        
        

        <div>
       <InfoSection data = {data} />
        </div>
    )

}
