import './NavBar.css'
import { useEffect } from 'react'

const NavBar = (props) => {

    useEffect(() => {
        console.log(props.count)
    })

    return (
<div className='navbar-container'>
    <div className='navbar'>
        <div className='top-bar'>
            <div className='left-bar'>
                <h3 className='clickable'>О нас</h3>
                <h3 className='clickable'>Контакты</h3>
            </div>
            <div className='logo'>
                <h3>ACIDHOUZE SHOP</h3>
                <h4>Официальный мерч от ATL</h4>
            </div>
            <div className='right-bar'>
                <div className='icon' id='profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>
                <div className='icon' id='cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                </div>
                <div className='icon' id='heart'>
                    <div className='fav-counter active' style={props.count > 0 ? {opacity: 1} : {opacity: 0}}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='bottom-bar'>
            <h3 className='clickable'>Распродажа</h3>
            <h3 className='clickable'>Мужское</h3>
            <h3 className='clickable'>Женское</h3>
            <h3 className='clickable'>Аксессуары</h3>
            <h3 className='clickable'>Попап</h3>
        </div>
    </div>
</div>
    )
}

export default NavBar