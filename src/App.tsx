import { ColorCarousel,  colors, type ColorOption  } from "./components/ColorCarousel"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ProductHero } from "./components/ProductHero"

import { useState } from "react"
import AOSInit from './components/AOSInit'



function App() {
   const [activeColor, setActiveColor] = useState<ColorOption>(colors[0]);

  return (
   <div className="min-h-screen overflow-hidden">
    <AOSInit/>
      <Header />
      <ProductHero 
        currentImage={activeColor.image}
        currentColor={activeColor.name}
        currentPrice={activeColor.price}
        currentId={activeColor.productId}
      />
      <ColorCarousel 
        onColorChange={setActiveColor}
        activeColorId={activeColor.id}
      />
      <Footer />
    </div>
  )
}

export default App
