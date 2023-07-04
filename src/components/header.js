import reactImg from '../img/reactjs-icon.svg'

function Header() {
    return (
        <header className='header--nav'>
            <div className='div--nav'>
                <img src={reactImg} alt='React Logo' className='img--nav' />
                <h2>ReactFacts</h2>
            </div>

            <div className='div--nav1'>
                <h3>React Course - Project 1</h3>
            </div>
        </header>
    )
}

export default Header;