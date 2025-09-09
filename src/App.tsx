
import { Outlet } from 'react-router-dom'
import Navbar from './sections/common/Navbar'
import Footer from './sections/common/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto flex-grow min-w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
