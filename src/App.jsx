import Header from "./components/UI/Header"
import Hero from "./components/UI/Hero"
import hero_background from './assets/hero-background.jpg'

function App() {

  return (
    <div className="h-full w-full bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${hero_background})`}}>
      <Header />
      <Hero />
    </div>
  )
}

export default App
