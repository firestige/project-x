import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Siderbar from './Sidebar'

const MainLayout = (props: { children: ReactNode }) => {
  const [open, setOpen] = useState(true)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <>
      <Siderbar open={open} onClose={() => setOpen(false)} />
      <div className={open ? 'w-72 flex-none' : 'hidden'} />
      <div className="min-h-screen flex-auto bg-gray-50/50 p-4 px-10 xl:ml-80">
        <Header toggle={toggle} />
        <Main>{props.children}</Main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
