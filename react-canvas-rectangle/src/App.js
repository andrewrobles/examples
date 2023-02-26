import { useRef, useEffect } from 'react'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = '#000000'
    context.fillRect(0, 0, 20, 20)
  })

  return <canvas ref={canvasRef} />
}

export default App;
