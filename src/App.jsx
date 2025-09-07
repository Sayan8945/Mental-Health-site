import './App.css'
import Navbar from './componenets/Navbar'
import Resources from './componenets/Resources'
import Home from './componenets/Home'
import Services from './componenets/Services'
import Quotes from './componenets/Quotes'
import ChatAi from './componenets/ChatAi'
import WorkingSteps from './componenets/WorkingSteps'
import Contact from './componenets/Contact'

function App() {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Home />
      <Services/>
      <Resources/>
      <WorkingSteps/>
      <ChatAi/>
      <Quotes/>
      <Contact/>
    </div>
  )
}

export default App
