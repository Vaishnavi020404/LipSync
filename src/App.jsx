import './App.css'
import React from 'react';


function App() {
  return(
    <div className="App">
      <nav className="navbar">
        <div className="logo">LipSync</div>        
      </nav>  


      <div className="container">


        <div className="left-column">
          <div className="lipliner">  
             <h3>LipLiner</h3> 
             <div className="option"> 
                <div className="color-dot"></div>

                <div className="shade-info">
                  <p className="shade-name">shade</p>
                  <p className="brand-name">Brand</p>
                </div>
              </div>
           </div>    
          <div className="lipgloss">  
            <h3>LipGloss</h3>
           </div>
        </div>


        <div className="right-column">
          <div className="result-card">
          <div className="lip-preview">
            <div className="lipliner-ring"> </div>           
            <div className="lipgloss-fill"> </div>
         </div>
         </div>
        </div>  
        </div>

        </div>
  )

}
export default App
