// import imgreview1 from '../img/img-review.jpg'
import star from '../img/star-icon.svg'
import dot from '../img/dot.svg'


export default function Reviews(props) {
    let badge
    if(props.openSpots == '0'){
        badge = "SOLD OUT"
    }
    else if(props.local == "Online"){
        badge = "ONLINE"
    }


    return (
        <div className='div--reviews1'>
            {badge && <div className='soldout--sel'>{badge}</div>}
            {/* {props.openSpots === 0 && <div className='soldout--sel'>SOLD OUT</div>} */}
            <img src={require(`../img/${props.items.coverImg}`)} className='review--img1' alt='Error'></img>

            <div className='div--reviews2'>
                <img src={star} alt='Error' ></img>
                <p>
                    {props.items.stats.rating}
                    <span>({props.items.stats.reviewCount}) </span>
                    <img src={dot} alt='Error' className='dot--sel'></img>
                    <span>{props.items.location}</span>
                </p>
            </div>

            <div className='div--reviews3'>
                <p className='title--sel'>{props.items.title}</p>
                <p className='price--sel'>From {props.items.price} / person</p>
            </div>
        </div>
    )
}