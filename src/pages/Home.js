import './Home.css'
import NavBar from '../components/NavBar.js'
import { useState, useEffect } from 'react'
import Popular from '../components/Home/Popular.js'
import Animation from '../components/Home/Animation.js'
import Banners from '../components/Home/BannersAndCategory.js'
import Footer from '../components/Footer.js'

const Home = () => {

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = event => {
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClickScrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
    <div className='home-container'>
        <NavBar />
        <div className='head-banner'>
            <div className='banner-content'>
                <h3>ОФИЦИАЛЬНЫЙ МЕРЧ <br />ОТ БЕЛОЙ ЧУВАШИИ</h3>
                <div className='frame-container'>
                <h5>Легендарные доспехи, что так четко <br /> сверкают на дискотеке</h5>
                    <div className='catalog-button'>Перейти в каталог</div>
                </div>
            </div>
        </div>
        <div className='navigate-arrow' onClick={handleClickScrollTo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>

        <Popular scroll={scroll}/>
        <Animation />
        <Banners />

        <div className='form-promo'>
            <div className='promo-content'>
                <div className='promo-form'>
                    <div className='promo-title'> ПОЛУЧИТЕ ПРОМОКОД <br/>НА СКИДКУ ПРИ ЗАКАЗЕ<br/> НОВИНОК
                        <div className='promo-text'>Подпишитесь на рассылку новостей и получите промокод на скидку при заказе новинок, доступ к специальным предложениям и многое другое.</div>
                    </div>
                </div>
                <div className='mail-form'>
                    <div className='mail-box'>
                    <input type='text' className='mail-form-input' placeholder='Электронная почта'/>
                    <div className='mail-button clickable'>Получить</div>
                    </div>
                    <div className='check'>
                    <label className='checkbox-text'>
                    <label class="container">
                        <input type="checkbox" />
                        <svg viewBox="0 0 64 64" height="2em" width="2em">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                        </svg>
                    </label>
                    Отправляя форму, Вы соглашаетесь с политикой конфиденциальности
                    </label>
                    </div>
                </div> 
            </div>
            <div className='promo-image'></div>
        </div>
        <Footer />
    </div>
    )
}

export default Home