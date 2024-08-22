import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-head'>
                <div className='logo'>
                    <h3>ACIDHOUZE SHOP</h3>
                    <h4>Официальный мерч от ATL</h4>
                </div>
            </div>
            <div className='footer-links'>
                <div className='footer-contacts footer-card'>
                    <h6 className='footer-title'>Контактный центр</h6>
                    <h6 className='number'>8 909 792-13-13</h6>
                    <p>Ежедневно с 10:00 до 22:00 МСК</p>
                </div>
                <div className='footer-lk footer-card'>
                    <h6 className='footer-title'>Личный кабинет</h6>
                    <p className='clickable-low'>Войти</p>
                </div>
                <div className='footer-catalog footer-card'>
                    <h6 className='footer-title'>Каталог</h6>
                    <p className='clickable-low'>Распродажа</p>
                    <p className='clickable-low'>Мужское</p>
                    <p className='clickable-low'>Женское</p>
                    <p className='clickable-low'>Аксессуары</p>
                </div>
                <div className='footer-help footer-card'>
                    <h6 className='footer-title'>Помощь</h6>
                    <p className='clickable-low'>Оплата</p>
                    <p className='clickable-low'>Доставка</p>
                    <p className='clickable-low'>Возврат</p>
                    <p className='clickable-low'>Контакты</p>
                </div>
            </div>
            <div className='footer-info'>
                <div className='acid-info'>
                © ACIDHOUZE SHOP<br/>ООО «ACIDHOUZE SHOP», ОГРН: 1012000998900, <br/> ИНН: 4414466700, КПП: 766400000
                </div>
                <div className='pol-info clickable'>
                    Политика конфиденциальности
                </div>
                <div className='payment'>
                    <div className='card'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"/>
</svg>
</div>
<div className='paypal'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-paypal" viewBox="0 0 16 16">
  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"/>
</svg>
</div>
                </div>
            </div>
        </div>
    )
}

export default Footer