import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {

  const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(''); // Use null to represent file objects
  const [price, setPrice] = useState('');
  const [output, setOutput] = useState('');

  const handleimg = (e) => {
    // Handle file input change
    setFile(e.target.files[0]); // Store the selected file in state
  };

  const submit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    formData.append('bookName', bookName);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('icon', file); // Append the file object
    formData.append('price', price);

    const config = {
        'content-type': 'multipart/form-data'
      
    };

    axios.post("http://localhost:3001/book/save", formData, config)
      .then((res) => {
        console.log(res);
        setOutput("Successfully saved Data"); // Update state upon successful submission
        navigate("/books")
      })
      .catch((err) => {
        console.error(err);
        setOutput("nhi"); // Update state upon error
      });
  };

  return (
    <div className='bg-dark d-flex justify-content-start align-items-center' style={{ minHeight: "91.5vh" }}>
    
      <div className="container p-4">
        <div className="mb-3">
          <p className='text-white'>{output}</p>
          <h3 className='text-white'>Add Books</h3>
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
          <input type="file" className="form-control" onChange={handleimg} />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Price</label>
    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter The Price" />
        </div>
        <button onClick={submit} className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;



