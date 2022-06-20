import React, { useState } from 'react'

const Add = ({getdata}) => {

const [form, setform] = useState({})

const onchange=(e)=>{
    let {name,value}=e.target
    setform({...form,[name]:value})
}

const handlesubmit=(e,index)=>{
  e.preventDefault()
console.log(form)
fetch("http://localhost:8080/cafe",{
      method:"POST",
      headers:{
            "content-type":"application/json",
      },
      body:JSON.stringify({
            id:index,
            image:form.image,
            name:form.name,
            food:form.food,
            time:form.time,
            for:form.for,
            discount:form.discount,
            rating:form.rating
        }),
})
.then((r)=>r.json())
.then((d)=>{
    setform({...form,d})
    getdata()
})
}


  return (
    <div>Add
         <div >

            <form onSubmit={handlesubmit}>

                <input type="text" placeholder='image URL' name="image" onChange={onchange}/>

                <input type="text" placeholder='Restaurent name' name="name" onChange={onchange}/>

                <input type="text" placeholder='available food' name="food" onChange={onchange}/>

                <input type="text" placeholder='time for prepare food in min.' name="time" onChange={onchange}/>

                <input type="text" placeholder='price for 2 peoples' name="for" onChange={onchange}/>

                <input type="text" placeholder='discount' name="discount" onChange={onchange}/>

                <input type="text" placeholder='rating' name="rating" onChange={onchange}/>

                <button type='submit'>add</button>
            </form>
        </div>
    </div>
  )
}

export default Add