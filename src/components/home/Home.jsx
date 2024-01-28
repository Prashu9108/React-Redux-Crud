import React, { Fragment, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { retriveBlogs } from '../../Action/BlogAction';
import Card from './card/Card';

const Home = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const initFetch = useCallback(()=>{
    dispatch(retriveBlogs());
  },[dispatch]);

  useEffect(()=>{
    initFetch();
  },[initFetch]);

  //read the data from redux state
  const blogs = useSelector((item)=> item.BLOG);
  console.log(blogs);

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-warning">Blogs</h1>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        {
          blogs && blogs.map((item, index) => {
            const {id, title, subTitle, image, content} = item;
            return(<Card key={index} {...item}/>)
          })
        }
      </div>
    </div>
    </Fragment>
  )
}

export default Home