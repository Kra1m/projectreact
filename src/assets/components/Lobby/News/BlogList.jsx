import style from './Lobby.module.css'


const Bloglist = ({blogs, title}) => {

    return(
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className={style.blogp} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h5>Written by: { blog.author}</h5>
                    {blog.body}
                </div>
            ))}
        </div>
    );
}

export default Bloglist;