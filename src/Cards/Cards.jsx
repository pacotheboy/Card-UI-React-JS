import React,{Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/image-1.png';
import img2 from '../assets/image-2.jpg';
import img3 from '../assets/image-3.jpg';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Anime 1"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Anime 2" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Anime 3" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;