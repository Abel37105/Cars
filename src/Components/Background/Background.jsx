import './Background.css'
import video1 from '../../assets/video1.mp4'
import car1 from '../../assets/car1.jpg'
import dream_car from '../../assets/dream_car.jpg'
import car2 from '../../assets/car2.jpeg'

const Background = ({playStatus,heroCount}) => {
    console.log("playStatus:", playStatus);

    if (playStatus) {
        return(
        <video className='background fade-in' autoPlay loop unmuted>
            <source src={video1} type='video/mp4' />
        </video>
        )
    }
    else if(heroCount===0){
        return <img src={car1} alt="" className='background fade-in' />
    }
    else if(heroCount===1){
        return <img src={dream_car} alt="" className='background fade-in' />
    }
    else if(heroCount===2){
        return <img src={car2} alt="" className='background fade-in' />
    }
}

export default Background