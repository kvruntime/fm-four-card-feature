import './App.css'
import FourCardFeature from './ui/four-card-feature'

function App() {

  return (
    <section className='min-h-screen flex flex-col items-center'>
      <div className='grow flex flex-col items-center'>
        <FourCardFeature />
      </div>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </section>
  )
}

export default App
