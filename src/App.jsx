import { Route } from 'wouter'
import "./App.css"
import LoginPage from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Route path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </div>
  )
}

export default App
