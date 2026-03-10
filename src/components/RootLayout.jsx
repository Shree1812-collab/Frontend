import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
        <Header />
        <main className='min-h-screen'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
