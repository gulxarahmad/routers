import {useState, useEffect} from 'react'
function Users() {

    let [userData, setData] = useState(null);
    let [userId, setUserId] = useState(1);
    let [isLoading, setLoading] = useState(false);
    let [posts, setPosts]= useState([]);
    let [loadPosts, setLoadPost] = useState(false);
    let [album, setAlbum] = useState([]);
    let [loadAlbum, setLoadAlbum]=useState(false);
  
    const userLoad = ()=>{
      fetch("https://jsonplaceholder.typicode.com/users/"+userId).then(res=> res.json()).then(data=> {
        setData(data); 
        setLoading(true);
  
      }).catch(err=>console.log(err));
    }
  
    useEffect(()=>userLoad(userId),[userId]);// jb UI bn jye gi tb react automatically useEffect ko load kry ga
  
  

   // useEffect(Showposts,[]);
  
    const nextUser = ()=>{
  
      setUserId(userId+1)
      setLoading(false)
      setLoadPost(false)
      setLoadAlbum(false)
  
    }
    const prevUser = ()=>{
  
      if (userId===1){
        alert('There is No Previous Post')
      }
      else{
        setUserId(userId-1)
        setLoading(false)
        setLoadPost(false)
        setLoadAlbum(false)
      }
  
    }

    const showPosts = (userId)=>{
        fetch("https://jsonplaceholder.typicode.com/posts/?userId="+userId).then(res=>res.json()).then(data=>
        {setPosts(data);
        setLoadAlbum(false);
        setLoadPost(true);
        }).catch(err=>console.log(err));
    
      }
    const showAlbum = (userId)=>{
        fetch("https://jsonplaceholder.typicode.com/albums/?userId="+userId).then(res=>res.json()).then(data=>
        {setAlbum(data);
        setLoadPost(false);   
        setLoadAlbum(true);
        }).catch(err=>console.log(err));
    
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
      <h5 className="card-title">User ID:{userData.id}</h5>
      <h5 className="card-title"> Name:{userData.name}</h5>
      <p className="card-text">Username: {userData.username}</p>
      <p className="card-text">Email: {userData.email}</p>
      <a href="#" class="btn btn-primary" onClick={prevUser} style={{marginRight:10}}>Previous User</a>
      <a href="#" class="btn btn-primary" onClick={nextUser} style={{marginRight:10}}>Next User</a>
      <a href="#" class="btn btn-primary" onClick={()=>showAlbum(userData.id)} style={{marginRight:10}}>Show Album</a>
      <a href="#" class="btn btn-primary" onClick={()=>showPosts(userData.id)}>Show Posts</a>
    </div>
  </div>
  
    <hr/>
  
      {
      loadPosts &&  posts.map((m)=>(
        <>
  
  <div class="card">
    <div className="card-header">
      User ID: {m.userId}
      <hr/>
     Post ID: {m.id}
    </div>
    <div className="card-body">
      <h5 className="card-title">Post Title:{m.title}</h5>
      <p className="card-text">Comment: {m.body}</p>
    </div>
  </div>
        <hr/>
        </>
      ))
      }

    {
      loadAlbum &&  album.map((m)=>(
        <>
  
  <div class="card">
    <div className="card-header">
      User ID: {m.userId}
      <hr/>
     Album ID: {m.id}
    </div>
    <div className="card-body">
      <h5 className="card-title">Album Title:{m.title}</h5>
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
  
  export default Users;