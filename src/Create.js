import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[type, setType] = useState(' ');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author, type};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Sample Project</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}   
                ></textarea>
                <label>Author</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}   
                ></input>
                <label>Type:</label>
                <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                    <option value=" "> </option>
                    <option value="news">news</option>
                    <option value="project">project</option>
                </select>
                { !isPending && <button>Add Info</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;
