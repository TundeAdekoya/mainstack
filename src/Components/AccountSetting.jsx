import React from 'react'
import axios from 'axios'
import '../CSS/AccountSetting.css'
import { useEffect, useState } from 'react'

const AccountSetting = () => {
  const detailurl = 'https://picsum.photos/id/100/info'
  const [detail, setdetail] = useState(null)
  let detailcontent = null


  useEffect(() => {
    axios.get(detailurl)
      .then (response => {
          setdetail(response.data)
      })
  }, [detailurl])

  if(detail){
    detailcontent = <p>{detail.author}</p>
  }


  return (
    <div className='account'>
       <div className="acc">
        <div className="accpic">
          <img src='https://picsum.photos/200/300.jpg' alt="" />
        </div>
        <div className="accInfo">
          <h3>{detailcontent}</h3>
          <a href="#">{detailcontent}@gmail.com</a>
        </div>
      </div> 
      <button className="edit">
        Edit Profile
      </button>
    </div>

  )
}

export default AccountSetting