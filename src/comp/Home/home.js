import React,{useEffect, useState} from "react";
import "../../App.css"
import Pic from "../image/avatar.JPG"

const Home = () =>{

    // To capture raw time
    // const time = Date.now()

    const time = new Date().getFullYear()
    // Creating state for our JSON/Database
    const [state, setState] = useState([
        {
            "id": 1,
            "name": "Ayo",
            "course": "Full Stack",
            "sex": "Female",
            "age": "20",
            "image": Pic,
            "time": time
        }
        // {
        //     "id": 2,
        //     "name": "funmi",
        //     "course": "UI/UX",
        //     "sex": "Female",
        //     "age": "26"
        // },
        // {
        //     "id": 3,
        //     "name": "Blessing",
        //     "course": "Front end developer",
        //     "sex": "Male",
        //     "age": "22"
        // },
        // {
        //     "id": 4,
        //     "name": "Ayomide",
        //     "course": "Back end developer",
        //     "sex": "Female",
        //     "age": "24"
        // },

    ])
 
    // States to capture input from users
    const[name,setName] = useState("")
    const[sex,setSex] = useState("")
    const[course,setCourse] = useState("")
    const[age,setAge] = useState("")
    // state for image upload
    const[image,setImage] = useState(null)

    //Function to handle image upload
    const uploadImage = (el) => {
        const imagehold = el.target.files[0];
        const responseUrl = URL.createObjectURL(imagehold);
        setImage(responseUrl);
    }

    // console.log(name)
    // console.log(sex)
    // console.log(course)
    // console.log(age)
    // console.log(image)
    // console.log(setState)

    // Post Function
    const Post = () => {
        const Items = {
            id:state.length +1,
            name: name,
            sex: sex,
            course: course,
            age: age,
            image: image,
            time: Date.now(),
        }
        setState([...state,Items])
    // To empty input after sending a post
        setName(" ")
        setSex(" ")
        setCourse(" ")
        setAge(" ") 
        setImage("")
    }
    // delete function
    const Delete = (val) => {
        const removeItems = state.filter((el) => el.id !== val)
           setState(removeItems)
        }

    useEffect(() => {
    const saveItems = JSON.parse(localStorage.getItem('store'))
    setState(saveItems);
    },[])

    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(state))
    },[state])

    return(
        <div className="container">
           <div className="Input">
             <div className="cardwrap">
                  <div className="inpwrap">
                       <input className="inp1" placeholder="name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                        <input className="inp2" placeholder="sex" value={sex} onChange={(e) => {
                            setSex(e.target.value)
                        }}/>
                        <input className="inp3" placeholder="course" value={course} onChange={(e) => {
                            setCourse(e.target.value)
                        }}/>
                        <input className="inp4" placeholder="age" value={age} onChange={(e) => {
                            setAge(e.target.value)
                        }}/>
                        <input type="file" onChange={uploadImage}/>

                  </div>
                  <button className="post" onClick={Post}>POST</button>
             </div>
           </div>
           
           <div className="card">
                {state && state.map((el) => {
                 return(
                      <div className="wrap">
                          <div>Id: {el.id}</div>
                         <div>Name: {el.name}</div>
                         <div>Sex: {el.sex}</div>
                         <div>Course: {el.course}</div>
                         <div>Age: {el.age}</div>
                         <img className="getPics" alt="img" src={el.image}/>
                         <button className="delete" onClick={() => {
                            Delete(el.id)
                         }}>DELETE</button>
                          <p>{el.time}</p>
                      </div>
                   )
               })}
            </div>   
            
        </div>
      
    )
}
export default Home;
