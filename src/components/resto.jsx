import React, { useEffect, useState } from 'react'
import Add from './add'
import axios from 'axios'

const Restaurents = () => {

const [data, setdata] = useState([])

    const getdata=async()=>{
        let r=await fetch("http://localhost:8080/cafe")
        let d=await r.json()
        console.log(d)
        setdata(d)
    }
useEffect(()=>{

    getdata()
},[])

const sortt=async(e)=>{
    let value=e.target.value
    return await axios.get(`http://localhost:8080/cafe?_sort=for&_order=${value}`)
    .then((r)=>setdata(r.data))
}

const clicksort=async(value)=>{
 return await axios.get(`http://localhost:8080/cafe?_sort=rating&_order=${value}`)
    .then((r)=>setdata(r.data))
}

  return (
    <div >Restaurents
        <Add getdata={getdata}/>
        <div>
            <select onChange={sortt}>
                <option value="">Sort by price</option>
                <option value="desc">High to low</option>
                <option value="asc">Low to high</option>
            </select>
            <button onClick={()=>clicksort("asc")}>Low rating</button>
            <button onClick={()=>clicksort("desc")}>High rating</button>
            
        </div>
        <div >
        {data.map((e)=>(
            <div key={e.id}>
                <h1>{e.name}</h1>
                <img src={e.image}/>
                <p>{e.food}</p>
                <p>{e.time} MINS</p>
                <p>₹ {e.for} FOR TWO</p>
                <p>{e.discount}% off | Use WELCOME{e.discount}</p>
                <p>Rating: {e.rating}</p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Restaurents