import Aman from './Image/IMG_3144.JPG'
// import Antika from './Image/Antika.jpeg'
import './CSS/Slider.css'
import Slider from '../Components/Slidert'
const slider = () => {
    return (
        <>
        <div className="slider_body">
            <div className="slider">
                
                <span style={{ '--i': 1 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 2 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 3 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 4 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 5 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 6 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 7 }}><img src={Aman} alt='' /></span>
                <span style={{ '--i': 8 }}><img src={Aman} alt='' /></span>

            </div>
        </div>
        </>
    )
}


export default slider;