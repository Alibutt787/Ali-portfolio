import { React } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import './App.css'



export const hy = {

    AQIB_turkey0: { url: "https://youtu.be/oJ4ZLYUdPQE" },
    AQIB_turkey11: { url: "https://youtu.be/9BXChnRgz5k" },
    AQIB_turkey20: { url: "https://youtu.be/ekdmK9Ynur8" },
    AQIB_turkey3: { url: "https://youtu.be/96vGHJ7BLnE" },
    AQIB_turkey5: { url: "https://youtu.be/OUM13QqhLCA" },
    AQIB_turkey7: { url: "https://youtu.be/sjXbtpnH26g" },
    AQIB_turkey2: { url: "https://youtu.be/vzsI7Tc0f-c" },
    AQIB_turkey8: { url: "https://youtu.be/OS9IeHJ4Sy4" },
    AQIB_turkey9: { url: "https://youtu.be/ZqDCOx_wXzU" },
    AQIB_turkey6: { url: "https://youtu.be/zeeE0dV8IK4" },
    AQIB_turkey12: { url: "https://youtu.be/s9uXsfKVyPU" },
    AQIB_Turkey13: { url: "https://www.youtube.com/watch?v=FMT69dwYIJA" },
    AQIB_turkey14: { url: "https://youtu.be/FQ3k-2Fz1J0" },

}

export const Videos = () => {

    return (
        <div className="container-md pk" style={{ margin: "0 auto", opacity: 0.9, width: "100%", backgroundColor: "grey" }}>
             <h3><b>Videos</b></h3>
            {Object.entries(hy).map(([slug, { url }]) => {
                return <div className="hak" > 
                   <Link  to={`/Videos/${slug}`} key={slug}  >
                     {
                      <ReactPlayer className="hak" id="sd"  
                            onPlaying={false} 
                            playsInline={false}    // control whether the video should play inline
                            loop={true}          // control whether the video should loop when ended
                            rel="false"
                          
                            showinfo="false"
                            controls={0}
                            modestbranding="false"
                            width="100%" height="300px" url={url}  />
            }
                        <button className="btn btn-primary  vis"> open in new tab<i class="fas fa-location-arrow">
                            </i> </button></Link> </div>

            })}



        </div>
    )
}
