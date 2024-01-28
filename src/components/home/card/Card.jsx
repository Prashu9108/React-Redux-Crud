import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useState } from 'react-router-dom';
import { deleteBlog, retriveBlogs } from '../../../Action/BlogAction';
import { toast } from 'react-toastify';

const Card = (props) => {
   const {id, title, subTitle, image, content} = props;

   const dispatch = useDispatch();
   //delete handler
   const delHandler = async(id) => {
    if(window.confirm(`Are you sure to delete a blog id = ${id}?`)){
      dispatch(deleteBlog({id:id})).unwrap()
      .then(res => {
        toast.success('Blog deleted successfully');
        dispatch(retriveBlogs());
      })
      .catch(error => toast.error(error.message));
    }else{
      toast.warning(`DeleteBlog failed`)
    }
   }
  return (
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 xol-xxl-4'>
      <div className="card my-3 shadow">
        <img src={image} alt={title} className='card-img-top' style={{height:"300px"}} />
        <div className="card-body">
          <h3 className="text-center-text-warning">{title}</h3>
          <ul className="list-group">
              <li className="list-group-item">
                <span className="text-warning">Subtitle :</span>
                <span className="float-end">{subTitle}</span>
              </li>
              <li className="list-group-item">
                <span className="text-warning">Content :</span>
                <span className="float-end">{content}</span>
              </li>
            </ul>
        </div>
        <div className="card-footer">
          <NavLink className="btn btn-success">
            <i className='bi bi-pen'></i>
          </NavLink>
          <button className="btn btn-outline-danger float-end">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card