import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Home from '../Components/Home'
import Editor from '../Components/Editor'
import AccountSetting from '../Components/AccountSetting'
import '../CSS/Dashboard.css'
import logo from '../Assets/image 8.svg'
import dashboard from '../Assets/dashboard.svg'
import editor from '../Assets/edit_note.svg'
import profile from '../Assets/User Profile.svg'
import axios from 'axios'

const Dashboard = () => {

    // const navigate = useNavigate()
    const [link, setlink] = useState(<Home/>);

    const homeLink = () => {
        setlink(<Home/>);
    }

    const editorLink = () => {
        setlink(<Editor/>);
    }

    const accountSettingLink = () => {
        setlink(<AccountSetting/>);
    }

    const detailurl = 'https://picsum.photos/id/100/info'
    const [detail, setdetail] = useState(null)
    let detailcontent = null
    // const [image, setImage] = useState(null)
    // let imageContent = null


    useEffect(() => {
        axios.get(detailurl)
            .then(response => {
                setdetail(response.data)
        })
    }, [detailurl])



    if (detail){
        detailcontent = <p>{detail.author}</p>
    }


  return (
    <div id='dashboard'>
        <div id="menu">
            <div id="topSection">
                <img className="goto" src={logo} alt="" />
                <div onClick={editorLink} className="goto cursor menutop"><img className="goto" src={dashboard} alt="" /> Dashboard</div>
                <div onClick={homeLink} className="goto cursor "><img className="goto" src={editor} alt="" /> Editor</div>
                <div onClick={accountSettingLink} className="goto cursor"><img className="goto" src={profile} alt="" /> Account</div>
            </div>
            <div id="bottomSection">
                <div className="content">
                    <img src='https://picsum.photos/200/300.jpg' alt="" />
                    <div className="bottomSectionmenu"><p>{detailcontent}</p></div>
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div className="linkcontent"> 
            {link}
        </div> 

        <div id="preview">
            <div className="previewScreen"></div>
            <div className="previewcontent">
                <div className="icon">
                    <div className="holder">
                        <a href='https://picsum.photos/200/300.jpg'> mainstack/</a>
                        <p>{detailcontent}</p>
                    </div>
                    <div className="icon-holder">
                        <i class="fa fa-share-alt" aria-hidden="true"></i>
                        <i class="fa-solid fa-copy" ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard