import './App.css'
import ContentRow from './components/ContentRow/ContentRow'

import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import srcExp1 from './assets/leading/01-2x.png'
import src1 from './assets/leading/01.png'
import srcExp2 from './assets/leading/02-2x.png'
import src2 from './assets/leading/02.png'
import Button from './components/Button'
import Slider from './components/Slider'
import Articles from './components/Articles'
import Footer from './components/Footer'

function App() {
  const btn1 = <Button text='Learn more' state=' btn--stroke'/>
  const btnDw = <Button text='Download' state=' btn--stroke btn--dw'/>
  return (
    <>
      <div className="container">
        <Header/>
        <main>
          <Hero/>
          <Service/>
          <ContentRow
              title='Leading healthcare providers'
              desc="We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
              srcsetExp={srcExp1}
              srcset={src1}
              img={src1}
              btn = {btn1}
              reverse
          />
          <ContentRow
              title='Download our 
              mobile apps'
              desc="Our dedicated patient engagement app and 
              web portal allow you to access information instantaneously (no tedeous form, long calls, 
              or administrative hassle) and securely"
              srcsetExp={srcExp2}
              srcset={src2}
              img={src2}
              btn={btnDw}
          />
          <Slider/>
          <Articles/>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default App
