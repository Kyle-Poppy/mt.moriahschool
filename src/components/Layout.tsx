import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />

      <ScrollToHash />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}