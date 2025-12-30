import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Services />
      <Contact />
    </MainLayout>
  )
}
