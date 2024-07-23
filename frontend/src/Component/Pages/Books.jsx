import axios from 'axios';
import './Book.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Books = () => {
  
    const [bookList, setBookList] = useState([]);
  
    useEffect(() => {
      // Fetch book list from API or other source
      axios.get("http://localhost:3001/book/fetch").then((res)=>{
                console.log(res);
                setBookList(res.data);
            }).catch((err)=>{
                console.log(err);
            })
      
    });
    const handledelete =(_id) =>{
      let bookDetails={"data":{"_id":_id}};
			axios.delete("http://localhost:3001/book/delete",bookDetails).then((response)=>{
				alert("hsss")
				    
			  });
    }
    
  return (
    <div className='bg-dark maindiv'>
    <center>      <h4 className='text-white mt-6 '>Books Section</h4>
        <div className="d-flex justify-content-around align-items-center flex-wrap m-4">
       {
      bookList.map((row)=>(
          //   <div id="book_child">
          //   <img src={`../../assests/upload/${row.image}`} alt="book" height='100' width='150' />
          
          //  <p>{row.price}</p>
          //  <p>{row.bookName}</p>
          //   </div>
          <div className='mt-3' style={{width:"270px" , height:"370px" ,background:"white", border:"1px solid white",borderRadius:"20px"}}> 
           <img src={`../../assests/upload/${row.image}`} alt="book" className='img-fluid mt-4' style={{width:"130px" , height:"130px" ,borderRadius:"10px"}}/>

          <h5 style={{fontSize:"15px" }} className="text-black p-2 my-6">BookName : {row.bookName}</h5>
          <h6>Author Name :{row.author}</h6>
          <p>Description : {row.description.slice(0,20)}..</p>
          <b className='m-0 ' style={{fontSize:'35px'}}>Rs.{row.price}</b>
          <div className='d-flex justify-content-around align-items-center'>
       <Link to={`/updatebook/${row._id}`}>   <button className='btn btn-success'>UPDATE</button></Link>
          <button className='btn btn-danger' onClick={()=>{ handledelete(row._id,'delete') }}>DELETE</button>
          </div>
          </div>
      )) 
       }
 
   </div>
   </center>
  </div>
  )
}

export default Books