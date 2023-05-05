import style from './Header.module.css'

function Header(){
    return(
        <nav>
            <label className={style.logo}>Blog.room</label>
            <ul>
                <li><a href="/create">New post</a></li>
            
            </ul>
        </nav>
    )
}

export default Header