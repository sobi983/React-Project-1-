


const DisplayColor =function DisplayColor({props}){
    let { rgb, weight, hex, type } = props

    function co(type){
        if(type === 'base' || type === 'tint'){
            return 'text-black'
        }
        return 'text-white'
    }

    return (
        <div className={`w-52 h-52 ${co(type) }`} style={{backgroundColor:`rgb(${rgb})`}}>
            {`#${hex}`}
            <br />
            {`${weight}%`}
        </div>
    )
}

export default DisplayColor

