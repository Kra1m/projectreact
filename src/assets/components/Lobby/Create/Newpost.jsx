import style from './Newpost.module.css'
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Newpost(){
    const [title, setTitle ] = useState('');
    const [body, setBody ] = useState('');
    const [author, setAuthor ] = useState('');
    const adding = useHistory();

    /*const [isPending, setIsPending] = useState(false);*/

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        //setIsPending(true);

        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            //  setIsPending(false);
            adding.push('/news');
        })

    

    }

    return (
        <div className={style.newpost}>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Text:</label>
                <textarea required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <input type="text" required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Post</button>

            </form>
        </div>
    );
}



export default Newpost;