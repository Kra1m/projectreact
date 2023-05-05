import style from './Banner.module.css'
import download from './download.jpg'

function Banner(){
    return(
        <nav className={style.cover}>
            <ul>
                <li><a href="/myblogs">My blog</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/friends">Friends</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
            <img src={download} className={style.down} alt="download" />
        </nav>
    )
}

export default Banner