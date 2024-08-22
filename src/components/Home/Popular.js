import './Popular.css'

const Popular = (props) => {

    function handleLike(event) {
        if (event.currentTarget.style.color === 'white') {
        event.currentTarget.style.color = 'red'
        } else if (event.currentTarget.style.color === 'red') {
            event.currentTarget.style.color = 'white'
        }
    }

    return (
        <div className='popular'>
        <div className='title'>
            ЛЕГЕНДАРНЫЕ ДОСПЕХИ
        </div>
        <div className='cards'>
        <div className='top-layer'>
            <div className={(props.scroll < 200) ? 'hit' : 'hit active'}>
                <div className='hit-image clickable-low'>
                    <div className='frame-hit'>Хит продаж</div>
                    <div className='buy-button clickable'>В корзину</div>
                </div>
            <div className='hit-content '>
                <h3 className='clickable-low'>Футболка Радио Апокалипсис Green <br /> 2 500 Р</h3>
                <div className='like' style={{ color: 'white'}} onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like1'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
            <div className={(props.scroll < 200) ? 'new-product' : 'new-product active'}>
                <div className='new-product-image clickable-low'>
                    <div className='frame-new'>Новинка</div>
                </div>
                <div className='new-product-content '>
                <h3 className='clickable-low'>Футболка Радио Апокалипсис Orange <br /> 2 500 Р</h3>
                <div className='like'  style={{ color: 'white'}} onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like2'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
            <div className={(props.scroll < 200) ? 'austro' : 'austro active'}>
                <div className='austro-image clickable-low'>
                </div>
                <div className='austro-content'>
                <h3 className='clickable-low'>Футболка Астронавт <br /> 2 500 Р&nbsp;&nbsp;&nbsp;&nbsp;<del>3600 Р</del></h3>
                <div className='like' style={{ color: 'white'}}  onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like3'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
        </div>
        <div className='bottom-layer'>
            <div className={(props.scroll < 900) ? 'socks' : 'socks active'}>
                <div className='socks-image clickable-low'>
                </div>
                <div className='austro-content'>
                <h3 className='clickable-low'>Носки 66.6 FM <br /> THUNDER <br /> 800 Р</h3>
                <div className='like' style={{ color: 'white'}}  onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like4'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
            <div className={(props.scroll < 900) ? 'skull' : 'skull active'}>
                <div className='skull-image clickable-low'>
                    <div className='frame-hit'>Хит продаж</div>
                    <div className='frame-new'>Новинка</div>
                </div>
            <div className='hit-content '>
                <h3 className='clickable-low'>Футболка Череп by Ка тет <br /> 3 500 Р</h3>
                <div className='like' style={{ color: 'white'}}  onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like5'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
            <div className={(props.scroll < 900) ? 'holder' : 'holder active'}>
                <div className='holder-image clickable-low'>
                    <div className='frame-new'>Новинка</div>
                </div>
                <div className='new-product-content '>
                <h3 className='clickable-low'>Кардхолдер складной <br /> Black <br /> 4 300 Р</h3>
                <div className='like' style={{ color: 'white'}}  onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" id='like6'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Popular