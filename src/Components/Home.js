import React from 'react';
import "../Components/home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Parallax from "parallax-js";

import rainAudio from "../Assests/Audio/rain.mp3";

import image from "../Assests/Images/1.jpg";
import image2 from "../Assests/Images/2.jpg";
import image3 from "../Assests/Images/3.jpg";
import image4 from "../Assests/Images/4.jpg";


// const name = React.findDOMNode(this.refs.asdff).value;

class Home extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            imageShuffle: 1,
            timeoutShuffle: 0,
            visibility: 'hidden',
            volume: 0.1
        }
    }
    



 
         useEffect = () => {
            const timer = setTimeout(() => {
                
                var newRoll = Math.floor(Math.random() * Math.floor(3));
                this.setState({timeoutShuffle: newRoll});
                
                console.log("fired");
                
                
            }, 8000);
            return () => clearTimeout(this.useEffect);
        };
        
    
        // also sets volume
        rainVisibility = () => {
            if(this.state.visibility == 'hidden'){
                this.setState({visibility: 'visible'})
                this.setVolume();
            } if(this.state.visibility == 'visible'){
                this.setState({visibility: 'hidden'})
                this.setVolume();
            }


            
        }
        
        setVolume = () =>{
            if(this.state.volume === 0.1){
                this.setState({volume: 0.5})
            } if(this.state.volume === 0.5){
                this.setState({volume: 0.1})
            }
        }
      


    //   componentDidMount() {
    //     this.parallax = new Parallax(this.scene)
    //   }
    //   componentWillUnmount() {
    //     this.parallax.disable()
    //   }

    componentDidUpdate(object){
        console.log("hello");
        var object = this.refs.volId;
        object.volume = this.state.volume;
    }




      
      render(){
          
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";
          script.async = true;
          document.body.appendChild(script);
          var scene = document.getElementById('scene');
        //   var parallaxInstance = new Parallax(scene);

        

        // Waits for page to load to change rain volume
        // window.onload = () =>{

        //         var object = this.refs.volId;
        //         object.volume = this.state.volume;

        // }

       
        
        return(
            <div>

<div>
 <audio id="volId" ref="volId" volume={this.state.volume} src={rainAudio} loop controls autoPlay/>
 </div>

                <button onClick={this.rainVisibility}>Rain</button>

                {/* transitionTime={5000} */}
            <Carousel showArrows={false} showIndicators={false} showStatus={false}  showThumbs={false}  stopOnHover={false} swipeable={false} selectedItem={this.state.timeoutShuffle}   infiniteLoop>

                <div className="imgDiv">
                    <img className="imgClass" src={image} alt="img"/>
                </div>
                <div className="imgDiv">
                    <img className="imgClass" src={image2} alt="img"/>
                </div>
                <div className="imgDiv">
                    <img className="imgClass" src={image3} alt="img"/>
                </div>
                <div className="imgDiv">
                    <img className="imgClass" src={image4} alt="img"/>
                </div>

            </Carousel>

            {/* </div> */}


        <button className="breathing"  data-depth="0.2" onClick={this.useEffect()}>Timer?</button>




        <div className="rainWrapper" style={{visibility: this.state.visibility}}>

        <i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i><i class="rain"></i>

        </div>


        


        <div className="iframeWrapper">

        <iframe className="iframeClass" src='https://www.youtube.com/embed/3_MRe3JwFc8'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>


        </div>

        </div>
        )


    }
}

export default Home;