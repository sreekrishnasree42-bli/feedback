import react from 'react'
import axios from 'axios'

const form =[form,setForm] = useState ({
    CourseId:"",
    CourseName:"",
    Duration:"",
    rating:""
});
const handleChange = (e) => {
    setForm({...form,[e.target.value]:e.target.name})
}
const handleSubmit = (e) =>{
    e.preventDefault();
    
    axios.post("http://localhost:3000/api/feedback",form)
    .then((res) => {
        console.log(res.data);
    })
}
const AddFeedback =() =>{
    return(
        <div>
            <h1>Add Feedback</h1>
            <form onSubmit={handleSubmit}>
                <input type= "number" name='CourseId' placeholder='CourseId' onChange={handleChange} />
                <input type= "number" name='CourseName' placeholder='CourseName' onChange={handleChange} />
                <input type= "number" name='Duration' placeholder='Duration' onChange={handleChange} />
                <input type= "number" name='rating' placeholder='rating' onChange={handleChange} />

                </form>
                
            </div>

    )
}

export default AddFeedback;