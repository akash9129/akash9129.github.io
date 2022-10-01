import React from "react"
import Back from "../common/back/Back"
import Aboutuss from "../about/Aboutuss"
import Heading from "../common/heading/Heading"
import "../blog/blog.css"

const Aboutus = () => {
  return (
    <>
        <Heading subtitle='' title=' Vision And Mission' />

       
      <section className='blog padding'>
        <div className='container grid2'>
          <Aboutuss/>
        </div>
      </section>
    </>
  )
}


export default Aboutus
