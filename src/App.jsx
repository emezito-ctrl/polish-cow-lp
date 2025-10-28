import { Suspense, useState } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cow from '../public/Cow'

function App() {
  const [showCow, setShowCow] = useState(false)
  
  const handlePlayClick = () => {
    const audio = new Audio('./public/hq_cow_music.mp3')
    audio.play()
    audio.loop = true
    audio.volume = 0.5
    
    setShowCow(true)
  }

  return (
    <>
      {!showCow && (
        <button onClick={handlePlayClick} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            fontSize: '90px',
            padding: '12px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}>
          ▶
        </button>
      )}
      <Canvas camera={{ position: [-2.5 , 0, 3.5]}}>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          {showCow && <Cow position={[-0.6, -0.7, 0]}/>}
        </Suspense>
      </Canvas>
    </>
  )
}

export default App