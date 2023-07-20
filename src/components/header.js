import reactImg from '../img/reactjs-icon.svg'

function Header(props) {
  
    let dark={
        backgroundColor: "#2B283A",
    }

    let light = {
        backgroundColor: "#FFFFFF"
    }

    return (
        <header style={props.mode === true ? dark : light} className='header--nav'>
            <div className='div--nav'>
                <img src={reactImg} alt='React Logo' className='img--nav' />
                <h2>ReactFacts</h2>
            </div>

            <div className='div--nav1'>
                <button onClick={props.toggle}>Toggle</button>
            </div>
        </header>
    )
}

export default Header;