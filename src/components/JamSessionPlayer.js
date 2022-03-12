import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import JamSessionData from './jamSessionData';
import { css } from "@emotion/react"

function VideoPhotoPortfolio() {
    const [jamSessionData, setJamSessionData] = useState(JamSessionData().jamSessions);
    
    
    const displayVideo = (video) => {
        const newVideoData = [... jamSessionData];
        const index = newVideoData.indexOf(video);

        for(const item of newVideoData){
            item.visible = false;
        }

        newVideoData[index].visible = true;
        setJamSessionData(newVideoData)
    }
    
    
    return ( 
                <section className="jam-sessions">

                    <h2>Jam Sessions</h2>
                    <p>Jam Sessions were a series of live acoustic performances recorded between 2015 and 2017.</p>
                   
                    {
                        jamSessionData.map(video => (
                            <div className='jam-session-player' css={
                                !video.visible 
                                ? css` display: none;`
                                : css` display: flex; `
                            }>

                                <h3>{video.title}</h3>
                                <div className='jam-session-video-wrapper'>
                                    <ReactPlayer
                                        light={true}
                                        width='100%'
                                        height='100%'
                                        controls={true}  
                                        className='jam-session-video'
                                        playing={video.visible ? true : false}
                                        url={`https://www.youtube.com/watch?v=${video.id}`}>
                                    </ReactPlayer>
                                </div>
                            </div>
                        ))
                    }

                    <div className='all-jam-session-btn'>
                        {jamSessionData.map(video =>(
                            <img className="jam-session-btn"
                            key={video.id}
                            onClick={() => displayVideo(video)}
                            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} 
                            alt="" />
                        ))}
                    </div>
                        
                    
                 </section>

                

                  

                    
                    
                        
           
       

     );
}

export default VideoPhotoPortfolio;