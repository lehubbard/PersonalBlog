import React, { useState } from 'react';
import Layout from '../components/layout';
import JamSessionPlayer from '../components/JamSessionPlayer';
import ReactPlayer from 'react-player';

function VideoPhotoPortfolio() {
 
    return ( 
        <Layout pageTitle={"Video & Photo"}>
            <main className='project-list'>
                <section className='portfolio-heading'>
                        <div>
                            <h2>My work in</h2>
                            <h1>Photography & Video</h1>
                        </div>
                        <h3>I’ve been creating videos for over seven years. In that time,
                        I have worked professionally shooting weddings and real estate video. 
                        I have also worked on music videos, narrative films, and short form documentaries. 
                        I believe I have developed a unique style utilizing handheld closeups and natural light. Looking forward, 
                        I would like to shoot more music videos and experiment with my style. I am available for hire as a 
                        director/ cinematographer and as an editor.</h3>
                    </section>

                <section className='video-list'>
                    <h2>Cinematography & Directing Reel </h2>
                    <div className='video-wrapper'>
                        <ReactPlayer
                            id='videoReel' 
                            url='https://vimeo.com/451256470'
                            height='100%'
                            width='100%' 
                        />
                    </div>

                    <h2>One Exit Down Covers "This Must Be My Exit" by Oso Oso</h2>
                    <div className='video-wrapper'>
                        <ReactPlayer
                            id='videoReel' 
                            url='https://www.youtube.com/watch?v=MbITwR2n79E'
                            light={true}
                            playing={true}
                            controls={true}
                            height='100%'
                            width='100%' 
                        />
                    </div>

                    <h2>Car Crash Jake, The Documentary (2017)</h2>
                    <div className='video-wrapper'>
                        <ReactPlayer
                            id='videoReel' 
                            url='https://www.youtube.com/watch?v=BztSvuTiorA'
                            light={true}
                            playing={true}
                            controls={true}
                            height='100%'
                            width='100%' 
                        />
                    </div>

                    <JamSessionPlayer/>

                 </section>
                

                  

                    
                    
                        
            </main>
        </Layout>

     );
}

export default VideoPhotoPortfolio;