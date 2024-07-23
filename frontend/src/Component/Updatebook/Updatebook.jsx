import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Updatebook = () => {
  const {_id} = useParams();
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(''); // Use null to represent file objects
  const [price, setPrice] = useState('');
  const [output ,setOutput ]= useState();
 

  useEffect(() => {
    // Fetch book list from API or other source
    axios.get("http://localhost:3001/book/fetch").then((res)=>{
              console.log(res);
             setOutput("successfully updated");
          }).catch((err)=>{
              console.log(err.data);
              alert("naaaaaaaaaaaaaa")
          })
    
  },);



  const submit =()=>{
      let bookDetail = { "condition_obj": { "_id": _id }, "content_obj": { "bookName": bookName, "author": author, "description": description, "file": file, "price": price } };
      axios.patch("http://localhost:3001/book/update", bookDetail).then((response) => {
        navigate("/Books")
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  }
    
  return (
    <div className='bg-dark d-flex justify-content-start align-items-center' style={{ minHeight: "91.5vh" }}>
    Add Books
    <div className="container p-4">
      <div className="mb-3">
        {/* <p className='text-white'>{output}</p> */}
        <label className="form-label text-white">Book Name</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} className="form-control" placeholder="Enter Book Name" />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Author Name</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" placeholder="Enter the Name Of Author" />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter The Description Of The Book" />
      </div>
      <div className="mb-3">
        <label htmlFor="file" className="form-label text-white">Image</label>
        <input type="file" className="form-control"  />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Price</label>
  <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter The Price" />
      </div>
      <button onClick={submit} className="btn btn-success">Submit</button>
    </div>
  </div>
  )
}

export default Updatebook