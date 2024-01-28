import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBlog } from '../../Action/BlogAction';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const Create = () => {
  const [blog, setBlog]= useState({
    title: "",
    subTitle: "",
    image:"",
    content:""
  });
  
  const readValue= (e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    const {name,value}=e.target

    // console.log({[name]:value});
    setBlog({...blog, [name]:value});
  }  

  //Create Ref of useDispatch
  const dispatch = useDispatch();

  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log('blog data =', blog);
    dispatch(createBlog(blog)).unwrap().then(res => {
      toast.success("Successfully Submitted...!");
      Navigate(`/`);
    }).catch(error => toast.error(error.message));
  }

  return (
    <div className="conatiner my-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="border rounded p-3 shadow">
            <form autoComplete="off" onSubmit={submitHandler}>
              <div className="form-group bg-warning rounded">
                <h3 className="text-white text-center p-2">CREATE BLOG</h3>
              </div>
              <div className="form-group my-3">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id='title' className='form-control' placeholder='Blog Title' required onChange={readValue}/>
              </div>
              <div className="form-group my-3">
                <label htmlFor="subTitle">Sub Title</label>
                <input type="text" name="subTitle" id='subTitle' className='form-control' placeholder='Blog Sub Title' required onChange={readValue}/>
              </div>
              <div className="form-group my-3">
                <label htmlFor="image">Image URL</label>
                <input type="url" name="image" id='image' className='form-control' placeholder='Image URL' required onChange={readValue}/>
              </div>
              <div className="form-group my-3">
                <label htmlFor="content">Content</label>
                <textarea name="content" id='content' className='form-control' placeholder='Blog Content' required onChange={readValue}/>
              </div>
              <div className="form-group mt-3">
                <input type="submit"  value="Create" className='btn btn-outline-warning'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Create