// PreviewCard.jsx - Complete with glass effect and skin tone integration

export default function PreviewCard({ liner, product, skinTone, onSkinToneChange, skinTones }) {
  // 🔥 LOG EVERY RENDER
  console.log('🎨 PreviewCard RENDERING:', {
    liner: liner.name,
    product: product.name,
    productColor: product.color,
    productType: product.type
  });
  
  return (
    <div className="preview-card">
      
      {/* 🔥 DEBUG INFO (remove later) */}
      <div style={{
        fontSize: '9px',
        color: '#999',
        marginBottom: '8px',
        textAlign: 'center',
        fontFamily: 'monospace'
      }}>
        ID: {product.id} | Type: {product.type}
      </div>
      
      {/* 🔥 PREVIEW CIRCLE with GLASS/GLOSSY EFFECT */}
      <div className="lip-preview-container">
        <div
          className="lip-preview-ring"
          style={{
            borderColor: liner.color,  // Liner = border/ring
          }}
        >
          {/* Base fill (product color) */}
          <div
            className="lip-preview-fill"
            style={{
              backgroundColor: product.color,
              opacity: product.type === "gloss" ? 0.85 : 1,
            }}
          >
            {/* 🔥 GLASS EFFECT: Glossy shine overlay */}
            <div className="glass-shine" />
            
            {/* Subtle depth shadow at bottom */}
            <div className="depth-shadow" />
          </div>
        </div>
      </div>

      {/* COMBO TEXT */}
      <h2 className="combo-title">
        {liner.name} + {product.name}
      </h2>
      <p className="combo-brand">
        {liner.brand} × {product.brand}
      </p>

      {/* 🔥 SKIN TONE SELECTOR (Beautiful with visual swatches) */}
      <div className="skin-tone-section">
        <label>SKIN TONE</label>
        
        {/* Visual swatch selector */}
        <div className="skin-tone-swatches">
          {skinTones.map(tone => (
            <div
              key={tone.id}
              className={`skin-swatch ${skinTone.id === tone.id ? 'active' : ''}`}
              style={{ backgroundColor: tone.color }}
              onClick={() => {
                console.log('Skin tone changed to:', tone.name);
                onSkinToneChange(tone);
              }}
              title={tone.name}
            />
          ))}
        </div>
        
        {/* Selected tone name */}
        <div className="selected-tone-name">
          {skinTone.name}
        </div>
      </div>

      {/* TRY ON BUTTON */}
      <button className="try-btn" onClick={() => alert('AR Try-On coming soon! ✨')}>
        🎨 Try On
      </button>

      {/* AI STYLIST */}
      <button 
        className="ai-btn"
        onClick={() => alert(`Perfect combo for ${skinTone.name} skin tones! This ${product.type} pairs beautifully with ${liner.name}. ✨`)}
      >
        ✨ Ask AI Stylist about this combo
      </button>

    </div>
  );
}