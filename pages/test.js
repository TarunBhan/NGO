import React from "react";   

// import { useUser } from "@auth0/nextjs-auth0";
// import Link from "next/link";
// const  test = ()=>{
// const {user,error,isLoading}=useUser();
//   if(user)
//   {
//     return(
//       <div> Welcome{user.name}!<a href="/api/auth/logout">Logout</a></div>
//     )
//   }
//   if(isLoading)
//   {
//     return<div>..Loading</div>
//   }
// return(<>
// <a href="api/auth/login">Login</a>
// <Link href="/">
//   <a> Home </a>
// </Link></>
// )}

//  export default test;

// import React from "react";

// function Test({data}){

// return (
//   <div>
// starts:{data}
//   </div>
// );


// }
// Test.getInitialProps =  async(ctx)=>{
//   const res= await fetch('https://api.github.com/repos/vercel/next.js');
//   const json=await res.json()
//   console.log(json.id);
//   return {
//     props:{
//       data:json.id
//     }
//   }
// }
// export default Test;
// function Page({ stars }) {
//   return <div>Next stars: {stars.id}</div>
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json }
// }

// export default Page

// import React from "react";

// function Test({id}){
// console.log(id.name);
// return (
//   <div>
//    {id.name}
//   </div>
// );

// }
// export async  function getServerSideProps(ctx){
//   const res= await fetch('https://api.github.com/repos/vercel/next.js');
//   const data=await res.json();
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

// return {
//   props:{
// id:data,
//   }
// }
// }
// export default Test;
 
// import React from "react";
// import { GetStaticPaths } from "next";
// import Link from "next/link";

// export interface PeopleProps{
//     name:string[];
// }
// export default function People({name}:PeopleProps){
//     return(
//         <>
//         <Link href="/">
//             <a> Home</a>
//         </Link>
//         {
//         name.map(curr=>{
//             return(
//               <h2 key={curr}>{curr}</h2>  
//         )
//         })
//         }
//         </>
//     );
// }
// export const getServerSideProps:GetServerSideProps<PeopleProps> = async(ctx) =>{
// return {props:{name:['tarun','bhan','bruno']}}
// }
// export async function  getStaticPath(){
//     return {
//         paths: [
//             {param:{blogId:'1'}},
//             {param:{blogId:'1'}},
//             {param:{blogId:'1'}},
//         ],

//     }
// }

// import React from "react";
// export const  getStaticPaths = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//    const paths = data.map(ninja => {
//     return {
//         params:{id:ninja.id.toString()}
//     }
//     })
//     return {
//         paths,
//         fallback:false,
//     }
// }
// export const getStaticProps =async(context)=>{
//     const id=context.params.id;
//     const res=await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
//     const json=await res.json();
//     return{
//         props:{
//             ninja:data,
//         }
//     }
// }
// const Test=({ninja})=>{
//     return (
//     <>
//     <h1>
//     {ninja.name}
//     </h1>
//     </>
//     );
// }
// export default  Test;

// import React from "react";
// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
  
//     // map data to an array of path objects with params (id)
//     const paths = data.map(ninja => {
//       return {
//         params: { id: ninja.id.toString() }
//       }
//     })
  
//     return {
//       paths,
//       fallback: false
//     }
//   }
  
//   export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//     const data = await res.json();
  
//     return {
//       props: { ninja: data }
//     }
//   }
  
//   const Details = ({ ninja }) => {
//     return (
//       <div>
//         <h1>{ ninja.name }</h1>
//         <p>{ ninja.email }</p>
//         <p>{ ninja.website }</p>
//         <p>{ ninja.address.city }</p>
//       </div>
//     );
//   }
  
// //   export default Details;
// import React from "react";

// export const getStaticProps = async() => {
//   const res= await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data= await res.json() ;
//   return {
//     props:{
//       user:data,
//     },
//   }
// }

// const test = ({user}) => {
//   return (
//     <div>{
//     user.map((curr)=>{
//       return (
//         <p>{curr.body}</p>
//       )
//     })
//     }</div>
//   )
// }

// export default test;