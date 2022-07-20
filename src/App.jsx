import { Route } from 'wouter'
import "./App.css"
import LoginPage from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar'
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </div>
  )
}

export default App
