import { useState } from 'react'




function Analytics() {

  const [counter, setCount] = useState(0)

  const addValue = () =>{
    setCount(counter + 1)
  }
  const reduceValue = ()=>{
    setCount(counter - 1)
  }

  return (
    // <div className='min-h-screen bg-background'>
      
    //   <h1 className='text-3xl font-bold text-center mt-10'>Analytics Page</h1>
    // </div>

    
    <>
      <div className='min-h-screen bg-background flex flex-col items-center justify-center gap-4'>
        <h1>Counter value: {counter} </h1>
      <br />
      <button onClick={addValue} disabled={counter >=20} className='border'>Add Value</button>
      <br />
      <button onClick={reduceValue} disabled={counter <=0} className='border'>Reduce Value</button>
      </div>
    </>
  )
}

export default Analytics
