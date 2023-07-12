export default function Content(props) {
    return (
        <div className="h-min mt-11 flex bg-slate-100 w-00 ">
            <img
                src={props.items.imageUrl}
                alt="Error"
                className=" w-40 h-48 rounded inline"
            />

            <div className="ml-5 mt-4">
                <div className="flex">
                    <img
                        src={require(`../img/${props.items.locationIcon}`)}
                        alt="Error"
                        className=" w-2 h-3 mt-2"
                    ></img>
                    <h6 className="font-normal text-lg ml-1 tracking-wider ">
                        {props.items.location.toUpperCase()}
                    </h6>
                    <p className="underline text-xs text-gray-400 px-2 pt-1">
                        View on Google Maps
                    </p>
                </div>

                <div className="flex-col">
                    <h1 className=" text-slate-800 text-4xl font-semibold">{props.items.title}</h1>
                    <div className="mt-3">
                        <span className="text-slate-900 font-medium">{props.items.startDate} - </span>
                        <span className="text-slate-900 font-medium">{props.items.endate}</span>
                    </div>
                    <p className="text-slate-800 text-xs w-96 pt-3">{props.items.description}</p>
                </div>
            </div>

        </div>
    );
}

// <div className="content--sel1">
//   <img
//     src={props.items.imageUrl}
//     alt="Error"
//     className="h-56 w-40 rounded inline"
//   />

//   <div className="content--sel2">
//     <img
//       src={require(`../img/${props.items.locationIcon}`)}
//       alt="Error"
//       className="inline w-2"
//     ></img>

//     <p className="font-normal text-xs tracking-widest inline pl-1">
//       {props.items.location.toUpperCase()}
//     </p>

//     <p className="underline text-xs text-gray-400 inline pl-3">
//       View on Google Maps
//     </p>
//   </div>

//   <div className="content--sel3">
//     <h1 className=" text-slate-800 text-4xl font-semibold">{props.items.title}</h1>
//   </div>

//   <div className="content--sel4 pt-4">
//     <span className="text-slate-900 font-medium">{props.items.startDate} - </span>
//     <span className="text-slate-900 font-medium">{props.items.endate}</span>
//   </div>

//   <div className="content--sel5 text-sm pt-5">
//     <p className="text-slate-800">{props.items.description}</p>
//   </div>
// </div>
