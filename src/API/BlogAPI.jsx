import axios  from "axios";

const blogAPI = {
    //Create a New Data
    create : async(blog)=>{
        return axios.request({
            method: "POST",
            url: "/blogs",
            data: blog
        })
    },
    getAll : async () => {
        return axios.request({
            method: "GET",
            url: "/blogs"
        })
    },
    delete : async (id) => {
        return axios.request({
            method: "delete",
            url: `/blogs/${id}`
        })
    },
    getSingle : async (id) => {
        return axios.request({
            method: "GET",
            url: `/blogs/${id}`
        })
    },
    update : async (id) => {
        return axios.request({
            method: "PATCH",
            url: `/blogs/${id}`,
            data: 'blogs'
        })
    }
};

export default blogAPI;