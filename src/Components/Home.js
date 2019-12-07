import React from 'react';
import "../Components/home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        }
    }
    


    setTimeout = () => 
        console.log('Alligator!!!!');
       1000;


    shuffleImages = () =>  {
        var newIndex = Math.floor(Math.random() * Math.floor(3));
        this.setState({imageShuffle: newIndex});
        console.log(newIndex);
    }
 
    
    render(){
        var newIndex = this.state.imageShuffle;
        
        
        return(
            <div>

            <Carousel showArrows={false} showIndicators={false} showStatus={false}  showThumbs={false}  stopOnHover={false}  selectedItem={newIndex} infiniteLoop autoPlay>

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


                 {/* <h1>Helloasdfasdf</h1> */}
        {/* <h2>{this.state.imageShuffle}</h2> */}
        <button onClick={this.shuffleImages}>asdf</button>
        </div>
        )


    }
}

export default Home;