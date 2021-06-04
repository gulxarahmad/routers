import {useState, useEffect} from 'react'
function Posts() {

    let [postData, setData] = useState(null);
    let [postId, setPostID] = useState(1);
    let [isLoading, setLoading] = useState(false);
    let [comments, setComments]= useState([]);
    let [loadComments, setLoadComments] = useState(false);
  
    const DataLoad = ()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/"+postId).then(res=> res.json()).then(data=> {
        setData(data); 
        setLoading(true);
  
      }).catch(err=>console.log(err));
    }
  
    useEffect(()=>DataLoad(postId),[postId]);// jb UI bn jye gi tb react automatically useEffect ko load kry ga
  
  
    const ShowComments = (postId)=>{
      fetch("https://jsonplaceholder.typicode.com/comments/?postId="+postId).then(res=>res.json()).then(data=>
      {setComments(data);
      setLoadComments(true);
      }).catch(err=>console.log(err));
    
  
    }
   // useEffect(ShowComments,[]);
  
    const nextPost = ()=>{
  
      setPostID(postId+1)
      setLoading(false)
      setLoadComments(false)
  
    }
    const prevPost = ()=>{
  
      if (postId===1){
        alert('There is No Previous Post')
      }
      else{
        setPostID(postId-1)
        setLoading(false)
        setLoadComments(false)
      }
    }
  
    if(!isLoading){
      return <h1>Loading....</h1>
    }
    else{
    return (
      
      <>
      <div class="card">
    <div className="card-header">
      Date From API
    </div>
    <div className="card-body">
      <h5 className="card-title">Post ID:{postData.id}</h5>
      <h5 className="card-title">Post Title:{postData.title}</h5>
      <p className="card-text">Post Body: {postData.body}</p>
      <a href="#" class="btn btn-primary" onClick={prevPost} style={{marginRight:10}}>Previous Post</a>
      <a href="#" class="btn btn-primary" onClick={nextPost} style={{marginRight:10}}>Next Post</a>
      <a href="#" class="btn btn-primary" onClick={()=>ShowComments(postData.id)}>Show Comments</a>
    </div>
  </div>
  
    <hr/>
  
      {
      loadComments  &&  comments.map((m)=>(
        <>
  <div class="card">
    <div className="card-header">
      Post ID: {m.postId}
      <hr/>
     Name: {m.name}
    </div>
    <div className="card-body">
      <h5 className="card-title">Comment ID:{m.id}</h5>
      <h5 className="card-title">Email: {m.email}</h5>
      <p className="card-text">Comment: {m.body}</p>
    </div>
  </div>
        <hr/>
        </>
      ))
      }
  
  
     </>
      
    );
  
    }
  
    
  }
  
  export default Posts;