import './App.css'
import React,{useState} from 'react';
import {lipliners, lipglosses} from './products.jsx';
// import { skintones } from './skintones.jsx';


function App() {
  
  const [selectedLiner, setSelectedLiner] = useState(lipliners[0]);
  const [selectedGloss, setSelectedGloss] = useState(lipglosses[0]);
  return(
    <div className="App">
      <nav className="navbar">
        <div className="navbar-inner">
        <div className="logo">LipSync</div>      
        </div>
      </nav>  

<div className="main">

  <div className="center-group">

    {/* LEFT CONTROL PANEL */}
    <div className="control-panel">

      <div className="lipliner card bg-base-100 shadow-md">
  <div className="card-body">
    <h3 className="card-title text-pink-500">LipLiner</h3>
    <div className="scroll-area">
  {lipliners.map((liner) => (
    <div
      key={liner.id}
      className="option"
      onClick={() => setSelectedLiner(liner)}
    >
      <div
        className="color-dot"
        style={{ backgroundColor: liner.color }}
      ></div>

      <div className="shade-info">
        <p className="shade-name">{liner.name}</p>
        <p className="brand-name">{liner.brand}</p>
      </div>
    </div>
  ))}
</div>

  </div>
</div>


     <div className="lipgloss card bg-base-100 shadow-md">
  <div className="card-body">
    <h3 className="card-title text-pink-500">LipGloss</h3>
    <div className="scroll-area">
  {lipglosses.map((gloss) => (
    <div
      key={gloss.id}
      className="option"
      onClick={() => setSelectedGloss(gloss)}
    >
      <div
        className="color-dot"
        style={{ backgroundColor: gloss.color }}
      ></div>

      <div className="shade-info">
        <p className="shade-name">{gloss.name}</p>
        <p className="brand-name">{gloss.brand}</p>
      </div>
    </div>
  ))}
</div>




  </div>
</div>


    </div>

    {/* RIGHT RESULT CARD */}
    <div className="result-card card bg-base-100 shadow-lg">
  <div className="card-body flex items-center justify-center">
    <div className="lip-preview">
      <div className="lipliner-ring"></div>
      <div className="lipgloss-fill"></div>
    </div>
  </div>
</div>


  </div>

</div>
</div>
  )

}
export default App
