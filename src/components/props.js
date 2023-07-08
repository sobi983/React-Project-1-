import cat from '../img/cat.jpeg'

//in the parameter i have written words props, we can use other words as well it's just the sake of a parameter
export default function props(props){
    return (
        <div>
        <div className='container--sel'>
            <img src={cat} alt='error'></img>
            <h4>{props.name}</h4>
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
        </div>
        </div>
    )
}

//OR we can also destructure the props EXAMPLE:-
// export default function props({name, phoneNumber, }){
//     return (
//         <div>
//         <div className='container--sel'>
//             <img src={cat} alt='error'></img>
//             <h4>{name}</h4>
//             <p>{phoneNumber}</p>
//             <p>{email}</p>
//         </div>
//         </div>
//     )
// }





        // <div className='container--sel'>
        //     <img src={cat} alt='error'></img>
        //     <h4>Mr. Whiskerson</h4>
        //     <p>0501931631</p>
        //     <p>sohaib.shaikh98@gmail.com</p>
        // </div>