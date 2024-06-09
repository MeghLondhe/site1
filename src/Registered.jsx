import React from 'react'
import './index.css'
import Banner from './assets/banner.png'
import './register.css'

function Registered() {
  return (
    <>
    <div className='banner1'>

<img src={Banner} alt="" />
<h1>Registration done successfully</h1>
<p>You will be notified with other details, stay tuned</p>
</div>
    </>
  )
}

export default Registered
