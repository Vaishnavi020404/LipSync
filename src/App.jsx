import './App.css'
import React, { useState, useEffect } from 'react'
import { lipliners, lipglosses } from './data/products.jsx'
import { skinTones } from './data/skintones.jsx'
import PreviewCard from './components/PreviewCard.jsx'

function App() {
  // ================= STATE =================
  const [selectedLiner, setSelectedLiner] = useState(lipliners[0])
  const [selectedProduct, setSelectedProduct] = useState(lipglosses[0])
  const [selectedSkinTone, setSelectedSkinTone] = useState(skinTones[4]) // Default: Medium

  // 🔥 Tab state for Gloss/Lipstick filtering
  const [activeTab, setActiveTab] = useState('gloss')

  // 🔥 Filter products by tab
  const filteredProducts = lipglosses.filter(
    p => p.type === activeTab
  )

  // 🔥 FIX: Auto-select first product when tab changes
  useEffect(() => {
    if (filteredProducts.length > 0) {
      console.log('🔥 TAB CHANGED, auto-selecting:', filteredProducts[0].name);
      setSelectedProduct(filteredProducts[0])
    }
  }, [activeTab])

  // 🔥 NEW: HANDLER for product selection
  const handleProductSelect = (product) => {
    console.log('🔥🔥🔥 HANDLER CALLED with:', product.name, 'ID:', product.id);
    setSelectedProduct(product);
    
    // Force log after state update
    setTimeout(() => {
      console.log('🔥 State after update should be:', product.name);
    }, 100);
  }

  return (
    <div className="App">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">LipSync</div>
        </div>
      </nav>

      {/* ================= MAIN ================= */}
      <div className="main">
        <div className="center-group">

          {/* ========== LEFT CONTROL PANEL ========== */}
          <div className="control-panel">

            {/* ---------- LIPLINER ---------- */}
            <div className="card">
              <h3 className="panel-title">1. Choose Lipliner</h3>

              <div className="scroll-area">
                {lipliners.map(liner => (
                  <div
                    key={liner.id}
                    className={`option ${
                      selectedLiner.id === liner.id ? 'active' : ''
                    }`}
                    onClick={() => setSelectedLiner(liner)}
                  >
                    <div
                      className="color-dot"
                      style={{ backgroundColor: liner.color }}
                    />
                    <div className="shade-info">
                      <p>{liner.name}</p>
                      <small>{liner.brand}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- PRODUCT (GLOSS / LIPSTICK) ---------- */}
            <div className="card">
              <h3 className="panel-title">2. Choose Product</h3>

              {/* 🔥 Tabs for Gloss/Lipstick */}
              <div className="tabs">
                <button
                  className={activeTab === 'gloss' ? 'tab active' : 'tab'}
                  onClick={() => setActiveTab('gloss')}
                >
                  Gloss
                </button>
                <button
                  className={activeTab === 'lipstick' ? 'tab active' : 'tab'}
                  onClick={() => setActiveTab('lipstick')}
                >
                  Lipstick
                </button>
              </div>

              <div className="scroll-area">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className={`option ${
                      selectedProduct && selectedProduct.id === product.id ? 'active' : ''
                    }`}
                    onClick={() => handleProductSelect(product)}
                  >
                    <div
                      className="color-dot"
                      style={{ backgroundColor: product.color }}
                    />
                    <div className="shade-info">
                      <p>{product.name}</p>
                      <small>{product.brand}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ========== RIGHT PREVIEW ========== */}
          <PreviewCard
            key={`${selectedLiner.id}-${selectedProduct.id}-${selectedSkinTone.id}`}  // 🔥 FORCE RE-RENDER
            liner={selectedLiner}
            product={selectedProduct}
            skinTone={selectedSkinTone}
            onSkinToneChange={setSelectedSkinTone}
            skinTones={skinTones}
          />

        </div>
      </div>
    </div>
  )
}

export default App