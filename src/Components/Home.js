import React from 'react';
import "../Components/home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Parallax from "parallax-js";

import rainAudio from "../Assests/Audio/rain.mp3";


import rainIcon from "../Assests/Icons/rain.png";
import bulbIcon from "../Assests/Icons/bulb.png";

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
            volume: 0.0,
            open: false,
        }

        this.handleDropDown = this.handleDropDown.bind(this);

    }
    
    handleDropDown = () =>{
        this.setState({ open: !this.state.open })
    }


    // Shuffles images
    // Fixes: needs to reRoll if state = roll
         useEffect = () => {
            const timer = setTimeout(() => {
                
                var newRoll = Math.floor(Math.random() * Math.floor(3));
                // if(newRoll === this.timeoutShuffle){
                //     // this.useEffect();
                //     console.log("Rolled:" + newRoll)
                //     return () => clearTimeout(this.useEffect);
                // } if (newRoll !== this.timeoutShuffle){
                //     this.setState({timeoutShuffle: newRoll});
                // }

                this.setState({timeoutShuffle: newRoll});
                
                console.log(newRoll);
                
                
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
       
        
        // Sets volume switch of rain sounds
        setVolume = () =>{
            if(this.state.volume === 0.0){
                this.setState({volume: 0.1})
            } if(this.state.volume === 0.1){
                this.setState({volume: 0.0})
            }
        }
      


    //   componentDidMount() {
    //     this.parallax = new Parallax(this.scene)
    //   }
    //   componentWillUnmount() {
    //     this.parallax.disable()
    //   }

    // Listens for rainBtn to update and sets rain volume
    componentDidUpdate(object){
        console.log("hello");
        var object = this.refs.volId;
        object.volume = this.state.volume;
        object.play();
        // if(object.play() == object.play()){
        //     object.pause();
        // } if(!object.play()){
        //     object.play();
        // }
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

        // Toggle for night/dark mode
        const classes = this.state.open ? 'lightDiv' : 'lightDiv hide';

       
        
        return(
            <div>

{/* Rain Audio Input*/}
<div>
 <audio id="volId" ref="volId" volume={this.state.volume} src={rainAudio} loop/>
 </div>

{/* Light Btn */}
        <button className={"lightBtn"} onClick={this.handleDropDown}>
          {this.state.open ? 'Close' : 'Open'}
        </button>
 {/* <div className="lightDiv"> */}
        <div className={classes}></div>
{/* </div> */}

            {/* Rain Button */}
                <button className="rainBtn" onClick={this.rainVisibility}>
                    <img src={rainIcon} alt="Rain Icon"></img>
                </button>

                {/* <button className="lightBtn" onClick={this.rainVisibility}>
                    <img src={bulbIcon} alt="Lightbulb Icon"></img>
                </button> */}

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