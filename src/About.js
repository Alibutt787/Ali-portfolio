import React from 'react'
import { useParams } from 'react-router-dom'
import { hy } from './Videos'
import ReactPlayer from 'react-player'

export const About = () => {

    const { id } = useParams();
    console.log(id);
    return (
        <div className="container-md" style={{ margin: "0 auto ", width: "100%", height: "100%", opacity: .9 }} >
            {Object.entries(hy).map(([slug, { url }]) => {
                if (slug === id) {
                    return <div key={slug} >
                        <  ReactPlayer      loop={true}  playing={true} width="100%" height="430px" controls url={url} />
                    </div>
                }
            })}
        </div>
    )
}
