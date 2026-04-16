import React from "react"
import { TegakiRenderer } from 'tegaki';
import caveat from 'tegaki/fonts/caveat';

function App() {
  return (
    // <div className="container">
    //   <h1>Basic React Project</h1>
    //   <p>Your React app is ready.</p>
    //   <button onClick={() => alert('Hello from React!')}>Click Me</button>
    // </div>
    <div className="app">
      <TegakiRenderer font={caveat} style={{ fontSize: '48px' }}>
        Hello Geetha, Can we read Harry Potter and the Prisonner of azkhaban after reading Thought Forms ?
      </TegakiRenderer>
    </div>
    
  )
}

export default App
