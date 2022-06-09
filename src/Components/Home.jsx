import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moment from 'moment'

import '../CSS/Home.css'
import TweetEmbed from 'react-tweet-embed'

import insta from '../Assets/insta.svg'
import facebook from '../Assets/facebook.svg'
import snapchat from '../Assets/Snapchat.svg'
import whatsapp from '../Assets/whatsapp.svg'
import theme from '../Assets/changeTheme.svg'
import move from '../Assets/move.svg'
import added from '../Assets/add.svg'
import del from '../Assets/delete.svg'
import edit from '../Assets/edit.svg'
import Dolphin from '../Assets/Dolphin.svg'
import meter from '../Assets/meter.svg'
import coffee from '../Assets/coffeecup.svg'
import playlist from '../Assets/playlist.png'
import ocean from '../Assets/ocean.svg'
import step from '../Assets/step.png'





const Home = () => {

 // API config

  const detailurl = 'https://picsum.photos/id/100/info'
  const img1 = 'https://picsum.photos/id/117/info'
  const img2 = 'https://picsum.photos/id/118/info'
  const img3 = 'https://picsum.photos/id/119/info'
  const img4 = 'https://picsum.photos/id/12/info'



  const [detail, setdetail] = useState(null)
  const [headerdetail, setheaderdetail] = useState(null)
  const  [imgOne, setimageOne] = useState(null)
  const  [imgTwo, setimageTwo] = useState(null)
  const  [imgThree, setimageThree] = useState(null)
  const  [imgFour, setimageFour] = useState(null)
  const [buycoffee, setBuycoffee] = useState(0)

  const formatDate = Moment().format('llll')

  const add = () => {
      setBuycoffee(buycoffee + 1)
  }
  const reduce = () => {
    let value = 0
    if (buycoffee  <= value) {
      value = 1
    } else{
        value = buycoffee 
    }

    setBuycoffee(value - 1)
  }


  let detailcontent = null 
  let headerdetailcontent  = null 
  let img1content = null
  let img2content = null
  let img3content = null
  let img4content = null


  // HEADER
  useEffect(() => {
    axios.get(detailurl)
      .then (response => {
          setdetail(response.data)
          setheaderdetail(response.data)
      })
  }, [detailurl])

  if(detail){
    detailcontent = <h3>{detail.author}</h3>
  }

  if(headerdetail){
    headerdetailcontent = <p>{headerdetail.author}</p>
  }


  // IMAGES
  useEffect(() => {
    axios.get(img1)
    .then (response => {
        setimageOne(response.data)
    })
  }, [img1])

  useEffect(() => {
    axios.get(img2)
    .then (response => {
        setimageTwo(response.data)
    })
  }, [img2])

  useEffect(() => {
    axios.get(img3)
    .then (response => {
        setimageThree(response.data)
    })
  }, [img3])

  useEffect(() => {
    axios.get(img4)
    .then (response => {
        setimageFour(response.data)
    })
  }, [img4])
  

  if (imgOne) {
    img1content = <h4>{imgOne.author}</h4>
  }

  if (imgTwo) {
    img2content = <h4>{imgTwo.author}</h4>
  }

  if (imgThree) {
    img3content = <h4>{imgThree.author}</h4>
  }

  if (imgFour) {
    img4content = <h4>{imgFour.author}</h4>
  }


// End API config

  return (
    <div id='Home'>
      {/* header */}
        <div id="topheroSection">
            <img src='https://picsum.photos/200/300.jpg' alt="" />
            <a href='https://picsum.photos/200/300.jpg'> mainstack.com/</a>
            <p>{headerdetailcontent}</p>
            <div className="publish">
              <button>Publish</button>
            </div>
        </div>

      {/* heroSection */}
        <div id="midheroSection">
          <div className="topcard">
              <div className="hearderpic">
                <img src="https://picsum.photos/200/300?random=1" alt="" />
              </div>
              <div className="profilepic">
                <div className="pic">
                  <img src="https://picsum.photos/200/300.jpg" alt="" />
                </div>
                <button>Edit Profile</button>
              </div>
              <div className="profileContent">
                <h3>{detailcontent}</h3>
                <p>Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶 and donate a percentage of my income to marine life 🐠</p>
                <div className="socialMedia">
                  <div className="faceBook">
                      <img src={facebook} alt="" />
                  </div>
                  <div className="whatsApp">
                    <img src={whatsapp} alt="" />
                  </div>
                  <div className="snapchat">
                    <img src={snapchat} alt="" />
                  </div>
                  <div className="insta">
                    <img src={insta} alt="" />
                  </div>
                </div>
              </div>
            </div>

          {/* ImageCard */}

          <div className="imageCard">
            <h2>Marine life🐋</h2>
            <div className="images">
              <div className="imgtop">
                <div className="img1">
                  <img src="https://picsum.photos/200/300?grayscale" alt="" />
                  <p>{img1content}</p>
                </div>
                <div className="img1">
                  <img src="https://picsum.photos/id/237/200/300" alt="" />
                  <p>{img2content}</p>
                </div>
              </div>
              <div className="imgbottom">
                <div className="img1">
                  <img src="https://picsum.photos/200/300.jpg" alt="" />
                  <p>{img3content}</p>
                </div>
                <div className="img1">
                  <img src="https://picsum.photos/200/300.webp" alt="" />
                  <p>{img4content}</p>
                </div>
              </div>

                <div className="btn">
                  <button><img src={theme} alt="" />Change theme</button>
                  <button><img src={added} alt="" />Add element</button>
                </div>
            </div>
            <div className="bottomImageCard">
              <div className="card">
                <img src={move} alt="" />
              </div>
              <div className="card">
                <img src={del} alt="" />
              </div>
              <div className="card">
                <img src={edit} alt="" />
              </div>
            </div>
          </div>

          {/* video card */}

          <div className="videocard">
            <h2>Incredible Dolphin moment</h2>
            <img src={Dolphin} alt="" />
            <div className="bottomImageCard">
              <div className="card">
                <img src={move} alt="" />
              </div>
              <div className="card">
                <img src={del} alt="" />
              </div>
              <div className="card">
                <img src={edit} alt="" />
              </div>
            </div>
          </div>

          {/* support card */}

          <div className="support">
            <h2>Support marine life</h2>
            <p className='p1'>Support our marine conservation projects around the world, campaign for long-lasting change, and educate and inspire people to protect our oceans. </p>
            <div className="poll">
                <img src={meter} alt="" />
            </div>
            <div className="text">
             <p><b>$500</b> raised of $2000</p>
            </div>
            <button>Donate now</button>
            <div className="bottomImageCard">
              <div className="card">
                <img src={move} alt="" />
              </div>
              <div className="card">
                <img src={del} alt="" />
              </div>
              <div className="card">
                <img src={edit} alt="" />
              </div>
            </div>
          </div>

          {/* study of animal */}
          <div className="study">
            <h2>The Study of Animal Life</h2>
            <p>For about a quarter of a century this book has had an apparently useful life as an introduction to zoological science.” With these words Prof. J. Arthur Thomson begins his short preface, and he is well and handsomely oentitledhe book is not a large one, but it abo... <b>Read More</b></p>
            <div className="bottomImageCard">
              <div className="card">
                <img src={move} alt="" />
              </div>
              <div className="card">
                <img src={del} alt="" />
              </div>
              <div className="card">
                <img src={edit} alt="" />
              </div>
            </div>
          </div>

          {/* buy me a coffee */}
          <div className="coffee">
            <h2>Buy me a coffee</h2>
            <p className='grey'>200 coffees received from 120 supportes</p>
            <p className='black'>I'm the guy from Freebird on YouTube. I quit architecture for woodworking (mostly fitted furniture) and now I'm teaching you what I've learned. <br/>Along the way I've moved from the garage workshop where ...<b>Read More</b></p>
            <div className="minicard">
              <div className="top">
                <div className="top1">
                  <img src={coffee} alt="" />
                  <p>$10 each</p>
                </div>
                <div className="top2">
                  <button onClick={() => reduce()} ><i class="fa fa-minus" aria-hidden="true"></i></button>
                  <div className="input">{buycoffee}</div>
                  <button onClick={() => add()}><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
              </div>
              <button className='coffeebtn'>Buy $10 coffee</button>
              <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
            </div>
          </div>

          {/* consulation */}

          <div className="consulation">
            <h1>Consultation session with me</h1>
            <p className='black'>I'm the guy from Freebird on YouTube. I quit architecture for woodworking (mostly fitted furniture) and now I'm teaching you what I've learned. <br/>Along the way I've moved from the garage workshop where ...<b>Read More</b></p>
            <button>Start $10 Consultation</button>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>

          {/* playlist */}
          <div className="playlist">
            <h1>Summer playlist</h1>
            <div className="playlistImage">
              <img src={playlist} alt="" />
            </div>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>

          {/* festival */}
          <div className="ocean">
            <div className="oceanImg">
              <img src={ocean} alt="" />
            </div>
            <h1>Ocean Film Festival - London</h1>
            <p className="date">{formatDate}</p>
            <p className='word'>Dive into a night of mesmerising ocean adventure! The Ocean Film Festival World Tour is back for 2021 with a brand-new collection of the world’s most incredible ocean films!<br/>Brought to you by the team behind the Banff Mountain Film... <b>Read More</b></p>
            <button>Register with $10</button>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>

          {/* 1001  */}
          <div className="step">
            <div className="topStep">
              <img src={step} alt="" />
              <div className="side">
                <h1>1001 Step-by-Step Doodle Workbook</h1>
                <p>Dive into a night of mesmerising ocean adventure! The Ocean Film Festival World Tour is back for 2021 with a brand-new collection of the world’s most incredible ocean films!<br/>Brought to you by the team behind the Banff Mountain Film... <b>Read More</b></p>
              </div>
            </div>
            <button>Buy $20</button>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>

          {/* twitter */}
          <div className="twitter">
            <div className="tweet">
              <TweetEmbed tweetId='771763270273294336' placeholder={'loading'} />
            </div>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>

          {/* Mail */}
          <div className="mail">
            <h1>Join my mailing list</h1>
            <p>Subscribe today to receive my latest updates available only to my subscribers.</p>
            <input type="text" name="" id="" placeholder='Your Firstname'/>
            <input type="email" name="" id="" placeholder='Your email' />
            <button>Subscribe</button>
            <div className="bottomImageCard">
                <div className="card">
                  <img src={move} alt="" />
                </div>
                <div className="card">
                  <img src={del} alt="" />
                </div>
                <div className="card">
                  <img src={edit} alt="" />
                </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Home