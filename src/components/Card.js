import React from 'react'



export default function Card(props) {
    let badgeText;
    function displayBadge(){
        if(props.myData.openSpots===0){
            badgeText="SOLD OUT"
            return true
        }else if(props.myData.location==="Online"){
            badgeText="ONLINE"
            return true
        }
    }
    console.log(props.myData)
  return (
    <div className='wrapper'>
        {displayBadge() && <div className='badge' id='badge'>{badgeText}</div>}
        <div>
            <img className='katies' 
            src={process.env.PUBLIC_URL+`/images/${props.myData.coverImg}`}  alt="Katies experience"/>
        <div>
        <div className='pic-info'>
            <i class="fa-solid fa-star"></i>
            <p id='rate'>{props.myData.stats.rating} </p><p>({props.myData.stats.reviewCount}).{props.myData.location}</p>
        </div>
        <p className='desc'>{props.desc}</p>
        <div className='price'>
            <p className='pricing'>From ${props.myData.price}</p><p className='per'>/person</p>
        </div>
            </div>
        </div>

    </div>
  )
}
