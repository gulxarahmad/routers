// Public Api
// Data from Live Server


// steps
// https://jsonplaceholder.typicode.com/
// understand API end points (from where to get data)
// understand API format (format of the downloaded data- Data structure)





import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

// function App() {

//   const [postData, setData] = useState(null);
//   const DataLoad = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=> res.json()).then(data=> setData(data)).catch(err=>console.log(err));
//   }

//   if (!postData){
//     return <button onClick={DataLoad}> Load Data</button>
//   }
//   else{
//   return (
//     <>
//    <h1>Data From API</h1>
//   <h5>ID: {postData.id}</h5>
//   <h5>Body: {postData.body}</h5>
//   <h5>Title: {postData.title}</h5>
//    </>
//   );
//   }
// }

// export default App;

// function App() {

//   let [postData, setData] = useState(null);
//   let [postId, setPostID] = useState(1);
//   let [isLoading, setLoading] = useState(false);
//   let [comments, setComments]= useState(null);
//   const DataLoad = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/"+postId).then(res=> res.json()).then(data=> {setData(data); setLoading(true);}).catch(err=>console.log(err));
//   }

//   useEffect(()=>DataLoad(postId),[postId]);// jb UI bn jye gi tb react automatically useEffect ko load kry ga

//   const nextPost = ()=>{

//     setPostID(postId+1)
//     setLoading(false)

//   }
//   const ShowComments = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/comments/2").then(res=>res.json()).then(data=>setComments(data)).catch(err=>console.log(err));
  
//   }

//   if(!isLoading){
//     return <h1>Loading....</h1>
//   }
//   else{
//   return (
    
//     <>
//    <h1>Data From API</h1>
//   <h5>ID: {postData.id}</h5>
//   <h5>Body: {postData.body}</h5>
//   <h5>Title: {postData.title}</h5>
//   <h5>User ID: {postData.userId}</h5>
//   <button onClick={ShowComments}>Show Comments</button>
  
//   <hr/>

//   <hr/>
//   <button onClick={nextPost}>Next Post</button>

  

//    </>
    
//   );

//   }
  
// }

// export default App;




// Implemented on Comments

// function App() {

//   let [postData, setData] = useState(null);
//   let [postId, setPostID] = useState(1);
//   let [isLoading, setLoading] = useState(false);
//   let [comments, setComments]= useState(null);


//   // jb UI bn jye gi tb react automatically useEffect ko load kry ga


//   const ShowComments = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/comments/").then(res=>res.json()).then(data=>setComments(data)).catch(err=>console.log(err));
  
//   }
//   useEffect(ShowComments);

//   if(!comments){
//     return <h1>Loading....</h1>
//   }
//   else{
//   return (
    
//   comments.filter(m=>m.postId===1).map(m=><h6>{m.id}</h6>)
    
//   );

//   }
  
// }

// export default App;



// function App() {

//   let [postData, setData] = useState(null);
//   let [postId, setPostID] = useState(1);
//   let [isLoading, setLoading] = useState(false);
//   let [comments, setComments]= useState([]);
//   let [filterComments, setFilterComments]=useState([]);

//   const DataLoad = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/"+postId).then(res=> res.json()).then(data=> {
//       setData(data); 
//       setLoading(true);

//     }).catch(err=>console.log(err));
//   }

//   useEffect(()=>DataLoad(postId),[postId]);// jb UI bn jye gi tb react automatically useEffect ko load kry ga


//   const ShowComments = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/comments/").then(res=>res.json()).then(data=>setComments(data)).catch(err=>console.log(err));
  
//     var temp = comments.filter(function (m){
//       return m.postId===1
//     });
//     setFilterComments(temp);
//   }
//   useEffect(ShowComments,[]);

//   const nextPost = ()=>{

//     setPostID(postId+1)
//     setLoading(false)

//     var temp = comments.filter(function (m){
//       return m.postId===postId+1
//     });
//     console.log('temp: ', temp)
//     setFilterComments(temp);
//   }

//   if(!isLoading){
//     return <h1>Loading....</h1>
//   }
//   else{
//   return (
    
//     <>
//    <h1>Data From API</h1>
//   <h5>Post ID: {postData.id}</h5>
//   <h5>Body: {postData.body}</h5>
//   <h5>Title: {postData.title}</h5>
//   <h5>User ID: {postData.userId}</h5>
//   <button>Show Comments</button>

//     {
//     filterComments.map((m)=>(
//       <>
//       <h6>Comment ID:{m.id}</h6>
//       <h6>{m.body}</h6>
//       </>
//     ))
//     }
//   <hr/>
//   <button onClick={nextPost}>Next Post</button>

//    </>
    
//   );

//   }

  
// }

// export default App;


// function App() {

//   let [postData, setData] = useState(null);
//   let [postId, setPostID] = useState(1);
//   let [isLoading, setLoading] = useState(false);
//   let [comments, setComments]= useState([]);
//   let [loadComments, setLoadComments] = useState(false);

//   const DataLoad = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/"+postId).then(res=> res.json()).then(data=> {
//       setData(data); 
//       setLoading(true);

//     }).catch(err=>console.log(err));
//   }

//   useEffect(()=>DataLoad(postId),[postId]);// jb UI bn jye gi tb react automatically useEffect ko load kry ga


//   const ShowComments = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/comments/").then(res=>res.json()).then(data=>
//     {setComments(data);
//     setLoadComments(true);
//     }).catch(err=>console.log(err));
  

//   }
//  // useEffect(ShowComments,[]);

//   const nextPost = ()=>{

//     setPostID(postId+1)
//     setLoading(false)
//     setLoadComments(false)

//   }
//   const prevPost = ()=>{

//     if (postId===1){
//       alert('There is No Previous Post')
//     }
//     else{
//       setPostID(postId-1)
//       setLoading(false)
//       setLoadComments(false)
//     }

    


//   }

//   if(!isLoading){
//     return <h1>Loading....</h1>
//   }
//   else{
//   return (
    
//     <>
//     <div class="card">
//   <div className="card-header">
//     Date From API
//   </div>
//   <div className="card-body">
//     <h5 className="card-title">Post ID:{postData.id}</h5>
//     <h5 className="card-title">Post Title:{postData.title}</h5>
//     <p className="card-text">Post Body: {postData.body}</p>
//     <a href="#" class="btn btn-primary" onClick={prevPost} style={{marginRight:10}}>Previous Post</a>
//     <a href="#" class="btn btn-primary" onClick={nextPost} style={{marginRight:10}}>Next Post</a>
//     <a href="#" class="btn btn-primary" onClick={ShowComments}>Show Comments</a>
//   </div>
// </div>

//   <hr/>

//     {
//     loadComments &&  comments.filter((m)=>(
//       m.postId===postData.id
//     )).map((m)=>(
//       <>

// <div class="card">
//   <div className="card-header">
//     Post ID: {m.postId}
//     <hr/>
//    Name: {m.name}
//   </div>
//   <div className="card-body">
//     <h5 className="card-title">Comment ID:{m.id}</h5>
//     <h5 className="card-title">Email: {m.email}</h5>
//     <p className="card-text">Comment: {m.body}</p>
//   </div>
// </div>
//       <hr/>
//       </>
//     ))
//     }


//    </>
    
//   );

//   }

  
// }

// export default App;

import Header from './Header';
import Posts from './Posts';
import Users from './Users'
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
    <>
    <Header/>

    <Switch>
      <Route path='/posts'><Posts/></Route>
      <Route path='/users'><Users/></Route>

      </Switch>
    </>
    </BrowserRouter>
  )

  
}

export default App;