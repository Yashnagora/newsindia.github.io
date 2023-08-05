import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newstop from './Components/Newstop'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App = () => {

  // all States
  const [progress, setprogress] = useState(0)
  const [mode , setmode] = useState('light')
  const [Text , setText] = useState("Enable Dark mode")
  const [Color , setColor] = useState('black')
  const [style , setstyle] = useState({})
  
  // toogleMode function for Enable Dark mode and Light mode
  const toogleMode = () =>{
    console.log("yes it is work")
    if (mode==='light') {
      setmode('dark')
      setText("Enable Light mode")
      setColor('white')
      document.body.style.backgroundColor = '#3c3c3c';
      setstyle({background: 'rgb(51 51 51)',
                color: 'white'})
       }
    else{
      setmode('light')
      setText("Enable Dark mode")
      setColor('black')
      document.body.style.backgroundColor = 'white';
      setstyle({})
     }
  }
  

    return (
      <div>
        <BrowserRouter>
        {/* navbar Component */}
        <Navbar mode={mode} toogleMode={toogleMode} Color={Color} Text={Text}/>
        {/* Top LoadingBar */}
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          {/* All News category */}
         <Route exact path="/" element={<Newstop setprogress={setprogress} key={"general"} pageSize={5} country="in" category="general"
         style={style} Color={Color}/>}/>

         <Route exact path="/entertainment" element={<Newstop setprogress={setprogress}  key={"entertainment"} pageSize={5} country="in" category="entertainment" style={style} Color={Color}/>}/>

         <Route exact path="/health" element={<Newstop setprogress={setprogress}  key={"health"} pageSize={5} country="in" category="health" style={style} Color={Color}/>}/>

         <Route exact path="/science" element={<Newstop setprogress={setprogress} key={"science"} pageSize={5} country="in" category="science" style={style} Color={Color}/>}/>

         <Route exact path="/sports" element={<Newstop setprogress={setprogress} key={"sports"} pageSize={5} country="in" category="sports" style={style} Color={Color}/>}/>

         <Route exact path="/technology" element={<Newstop setprogress={setprogress}key={"technology"} pageSize={5} country="in" category="technology" style={style} Color={Color}/>}/>
         
         <Route exact path="/business" element={<Newstop setprogress={setprogress} key={"business"} pageSize={5} country="in" category="business" style={style} Color={Color}/>}/>
         </Routes>
         </BrowserRouter>

      </div>
    )
    }

export default App;