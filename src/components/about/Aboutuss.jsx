import React from "react"
import { Abou} from "../../dummydata"

const Aboutuss = () => {
  return (
    <>
      {Abou.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
           
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Aboutuss
