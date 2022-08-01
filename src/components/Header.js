import '../style/Header.css'
import Logo from '../meme.svg'

export default function Header(){
    return(
        <header className='header--container'>
            <div className='header-title--container'>
                <img className='header-logo' src={Logo} alt=''/>
                <h2 className='header-title' >Meme Generator</h2>
            </div>
            <div className='header-subtitle--container'>
                <p className='header-subtitle'>React Course - Project 3</p>
            </div>
        </header>
    )
}