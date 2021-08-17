import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import MenuBoot from './MenuBoot'


const Home = () =>{
    return(
        <ParallaxProvider>
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Ceremonia_1.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='header'>
                    <MenuBoot />
                </div>
            </ParallaxBanner>
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Artemisa_3.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    {/* <h2>#productphoto</h2> */}
                    <h1>ARTEMISA</h1>
                </div>
            </ParallaxBanner>  
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Bruane_2.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    <h1>- ARTEMISA -</h1>
                    {/* <h2>Bruane</h2> */}
                </div>
            </ParallaxBanner> 
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Ceremonia_3.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    <h1>- BRUANE -</h1>
                    {/* <h2>Ceremonia del cacao</h2> */}
                </div>
            </ParallaxBanner>  
        </ParallaxProvider>
    )
}

export default Home