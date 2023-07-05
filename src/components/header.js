import myImage from '../img/my.jpeg'

const Header = () => {
    return (
        <header className='my--img'>
             <img src={myImage} alt='error' className='my--img' />
        </header>
    )
}

export default Header;