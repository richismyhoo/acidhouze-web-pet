import './BannersAndCategory.css'

const Banners = () => {
    return (
    <>
        <div className='banners-container'>
            <div className='banner-10'>
                <div className='content-10'>
                    <div className='content-10-text'>
                        ЗАРЕГИСТРИРУЙТЕСЬ И ПОЛУЧИТЕ <br /> СКИДКУ 10% НА ПЕРВЫЙ ЗАКАЗ
                    </div>
                    <div className='reg-button clickable'>Зарегистрироваться</div>
                </div>
                <div className='image-10'></div>
            </div>
            <div className='banner-about'>
                <div className='about-image'></div>
                <div className='about-content'>
                    <div className='text-container-about'>
                        <div className='content-title'>КАЧЕСТВЕННЫЕ ДОСПЕХИ - <br /> НАШ ФОКУС</div>
                        <div className='content-about-text'>Наши товары - это не просто одежда. Мы гордимся высоким стандартом качества, заботясь о вашем комфорте и стиле. Ваше довольство - наш главный приоритет</div>
                    </div>
                    <div className='content-image'></div>
                </div>
            </div>
        </div>
        <div className='category'>
            <div className='link discount'>
                РАСПРОДАЖА
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
            </div>
            <div className='link man'>
                ДЛЯ НЕГО
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
            </div>
            <div className='link fem'>
                ДЛЯ НЕЁ
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
            </div>
            <div className='link acs'>
                АКСЕССУАРЫ
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
            </div>
        </div>

        <div className='images-container'>
            <div className='images-title'>В НАШИХ ДОСПЕХАХ</div>
            <div className='images'>
            <div className='container-left'>
                <div className='cont-img1' />
                <div className='cont-img2' />
            </div>
            <div className='container-middle'>
                <div className='cont-img3' />
                <div className='cont-img4' />
                <div className='cont-img5' />
            </div>
            <div className='container-right'>
                <div className='cont-img6' />
                <div className='cont-img7' />
            </div>
            </div>
        </div>
    </>
    )
}

export default Banners