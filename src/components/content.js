
import githubImage from '../img/github.png'


function Designation() {
    return (
        <div>
            <p className="designation--sel">Full Stack Blockchain Developer</p>
        </div>
    )
}

function Name() {
    return (
        <div>
            <h3 className="name--sel">Sohaib Shaikh</h3>
        </div>
    )
}

function Website() {
    return (
        <div>
            <a href="https://github.com/sobi983" className="link--sel">sobi.website
                <img src={githubImage} alt='Error' className='github--sel'></img></a>
        </div>
    )
}

function DigitalCard() {
    return (
        <div className='digi--sel3'>
            <button className='digi--sel2'>
                <ion-icon name="mail"></ion-icon>
                <a href='mailto:sohaib.shaikh98@gmail.com' target='_blank' className='digi--sel1' rel="noreferrer">Email</a>
            </button>

            <button className='digi--sel5'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <a href='https://www.linkedin.com/in/sohaib-s-11a6ab170/' target='_blank' className='digi--sel4' rel="noreferrer">LinkedIn</a>
            </button>
        </div>
    )
}

function About() {
    return (
        <div className='about--sel1'>
            <h4 className='about--sel2'>About</h4>
            <p className='about--sel3'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}

function Interests() {
    return (
        <div className='about--sel1'>
            <h4 className='about--sel2'>Interests</h4>
            <p className='about--sel3'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}

function Content() {
    return (
        <div className="font--sel">
            <Name />
            <Designation />
            <Website />
            <DigitalCard />
            <About />
            <Interests />
        </div>
    )
}

export default Content;