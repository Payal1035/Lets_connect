// import logo from './logo.svg';
import './App.css';
import React from "react";
// import Sidebar from './Sidebar/Sidebar';
// import Psidebar from './Sidebar/Pslidebar';
// import ProfileNew from "./Sidebar/Sidebarnew";
// import Newsidebar from './Newsidebar';
// import Apj from './Apj';
// import Buttheme from './Sidebar/Buttheme';
// import Twitter from "./Twitter";
// import Job_detail from './Job_detail';
// import Setting from './Setting';
// import PressBar  from './Pressbar';
// import Progess from './Progess';
// import Dashboard from './Dashboard';
// import Main from './Group/Main';
// import Share_Project from './Group/Share_Project';
// import Share_Project2 from './Group/Right/Share_Project2';
import Kpp from './Group/Newkpp/Kpp';
// import Balance from './Balance/Balance'
// import Promo from './Balance/Promo';
// import Leftbar from './leftbar/Leftbar';
// import Copy from './leftbar/Copy';
// import Jpp from './Jpp/Jpp';
// import Bar from './Bar';
// import { Doughnut } from "react-chartjs-2";
// import DoughnutChart from './DoughnutChart';
// import Page from "./Sidebar/Page";
// import Blue from './Blue/Blue';
// import Range from './Blue/Navbar/Range';
// import  Slider  from "./Blue/Navbar/Rangenew";
// import CopyBlue from './Blue/CopyBlue';
// import Bargraph from './Graph/Bargraph';
// import Adminpage from './Adminpage';
// import Oversetting from './Oversetting';
// import Friend_Request from './Friend_Request';
// import Postapprove from './Postapprove';
// import Message from './Message';
// import Compressor from "./Compress/Compressor";
// import Create_post from './Create_post';
// import Newcompressor from "./Compress/Newcompressor";
// import Upload from './Compress/Upload';
// import PhotoUpload from './Compress/PhotoUpload';
// import Navbar from './Blue/Navbar/Nnavbar';
// import Final from './Final';
// import Toogle from './Blue/Toogle';
// import { UserContext } from "./userContex";
// import { CompanyContext } from "./companyContext";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from './Group/Main';




function App() {
  // const [user, setUser] = useState(null);
  //   const [company, setCompany] = useState(null);
  return (
    <>
    <>
      <BrowserRouter basename="/Lets_connect">
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/Kpp" element={<Kpp />}/>
      </Routes>
      </BrowserRouter>
      </>
    {/* // <UserContext.Provider value={{ user, setUser }}>
    // <CompanyContext.Provider value={{ company, setCompany }}> */}
     {/* <Routes>
      <Route path='/Lets_connect' element={<Main />} /> */}
      {/* <Route path="/about" element={<Kpp/>}></Route> */}
    {/* </Routes> */}
    {/* <Final/> */}
    {/* <Message/> */}
    {/* <Friend_Request/> */}
    {/* <Navbar/> */}
    {/******************************* <Kpp/> ***********************/}
    {/* <Share_Project/> */}
    {/* <Share_Project2/> */}
    {/* <Leftbar/> */}
    {/* <Jpp/> */}
    {/* <Blue/> */}
    {/* <Copy/> */}
    {/*************************  <Main/> ***************************/}
    {/* <Promo/> */}
    {/*************************** <Balance/> ***********************/}
    {/* *************************<Twitter/>*********************** */}
    {/************************** <Job_detail/> ********************/}
    {/* <Setting/> */}
    {/* <PressBar/> */}
    {/* <Progess/> */}
    {/* ***************************<Dashboard/>************************** */}
    {/* <Bar /> */}
    {/* <DoughnutChart /> */}
    {/************************** <Sidebar/> ************************/}
 
    {/* <Psidebar/> */}
    {/* <Newsidebar/> */}
    {/* <Apj/> */}
    {/* <Buttheme/> */}
    {/* <Page/> */}
    {/* ****************************<ProfileNew/>******************** */}
    {/* <Blue/> */}
    {/* <Range/> */}
    {/* <div className='w-2/3 mx-auto'>
    <Slider />
    </div> */}
    {/* <CopyBlue/> */}
    {/* <Blue/> */}
    {/* <Toogle/> */}
    {/* <Compressor/> */}
  {/* <Newcompressor/> */}
    {/* <Bargraph/> */}
    {/* <Upload/> */}
    {/* <PhotoUpload/> */}
    {/* <Create_post/> */}
    {/* <Oversetting/>
    <Adminpage/> */}
    {/* <Postapprove/> */}

    {/* </CompanyContext.Provider>
        </UserContext.Provider> */}
        </>
  );
}

export default App;
