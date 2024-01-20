"use client"
import React, {useState} from 'react';
import { render } from 'react-dom';

const page = () => {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask ([...mainTask, {title, desc}]);
    settitle('')
    setdesc('')
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>;
  if (mainTask.length>0){
  renderTask = mainTask.map((t, i)=>{
    return ( 
    <li className='flex justify-between items-center my-5 mx-2'>
      <div className='w-2/3'>
        <h5 className='text-2xl font-semibold' >{t.title}</h5>
        <h5 className='text-xl font-semibold' >{t.desc}</h5>
        
      </div>
      <button onClick={()=> {
          deleteHandler(i)
        }} className='px-4 py-2 bg-red-600 text-white rounded'>Delete</button>
    </li>
    );
   
  });
}
  return (
    <>
      <h1 className='bg-black text-5xl text-white p-5 font-bold text-center'>Sticky Wall</h1>

      <form onSubmit={submitHandler}>
        <input className='border-zinc-800 text-2xl border-4 m-5 py-4 px-2' 
        placeholder='Enter task  here' type='text' value={title} onChange={(e)=> {
          settitle(e.target.value)
        }}></input>
        <input className='border-zinc-800 text-2xl border-4 m-5 py-4 px-2' 
        placeholder='Enter description here' type='text' value={desc} onChange={(e)=> {
          setdesc(e.target.value)
        }} ></input>
        <button className='border-black border-4 bg-zinc-800 text-2xl text-white m-5 py-4 px-2 font-bold rounded'>ADD</button>

      </form>

      <div className='bg-slate-200 m-5'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
