import twitter from '../img/Twitter.svg'
import facebook from '../img/Facebook.svg'
import instagram from '../img/Instagram.svg'
import github from '../img/GitHub.svg'


function Footer() {
    return (
        <footer className="footer--sel1">
            <div className='footer--sel2'>
                <a href='https://twitter.com/ssob_ii'><img src={twitter} alt='Error'></img></a>
                <a href='https://www.facebook.com/sohaib.shaikh1998/'><img src={facebook} alt='Error'></img></a>
                <a href='https://instagram.com/ssob_ii'><img src={instagram} alt='Error'></img></a>
                <a href='https://github.com/sobi983'><img src={github} alt='Error'></img></a>
            </div>
        </footer>
    )
}


export default Footer;