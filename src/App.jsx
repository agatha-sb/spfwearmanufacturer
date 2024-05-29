import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Header />
      <main id="detail">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App