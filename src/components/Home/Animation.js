import './Animation.css'
import Marquee from 'react-fast-marquee'

const Animation = () => {
    return (
    <>
        <Marquee speed='160' className='marquee' autoFill='true'>
            <div className='track'>
                <div className='acid'>ACIDHOUZE&nbsp;&nbsp;</div>
                <div className='img1'>&nbsp;&nbsp;</div>
                <div className='atl'>&nbsp;&nbsp;ATL&nbsp;&nbsp;</div>
                <div className='horus'>HORUS&nbsp;&nbsp;</div>
                <div className='zaraza'>ЗАРАЗА&nbsp;&nbsp;</div>
                <div className='katet'>КА-ТЕТ&nbsp;&nbsp;</div>
                <div className='luper'>ЛУПЕРКАЛЬ&nbsp;&nbsp;</div>
                <div className='ichi'> ИЧИ&nbsp;&nbsp;</div>
            </div>
        </Marquee>
        <Marquee speed='140' className='marquee' autoFill='true'>
            <div className='track'>
                <div className='horus'>HORUS&nbsp;&nbsp;</div>
                <div className='zaraza'>ЗАРАЗА&nbsp;&nbsp;</div>
                <div className='katet'>КА-ТЕТ&nbsp;&nbsp;</div>
                <div className='luper'>ЛУПЕРКАЛЬ&nbsp;&nbsp;</div>
                <div className='ichi'> ИЧИ&nbsp;&nbsp;</div>
                <div className='acid'>ACIDHOUZE&nbsp;&nbsp;</div>
                <div className='img2'>&nbsp;&nbsp;</div>
                <div className='atl'>&nbsp;&nbsp;ATL&nbsp;&nbsp;</div>
            </div>
        </Marquee>
        <Marquee speed='150' className='marquee' autoFill='true'>
            <div className='track'>
                <div className='luper'>ЛУПЕРКАЛЬ&nbsp;&nbsp;</div>
                <div className='ichi'> ИЧИ&nbsp;&nbsp;</div>
                <div className='acid'>ACIDHOUZE&nbsp;&nbsp;</div>
                <div className='img3'>&nbsp;&nbsp;</div>
                <div className='atl'>&nbsp;&nbsp;ATL&nbsp;&nbsp;</div>
                <div className='horus'>HORUS&nbsp;&nbsp;</div>
                <div className='zaraza'>ЗАРАЗА&nbsp;&nbsp;</div>
                <div className='katet'>КА-ТЕТ&nbsp;&nbsp;</div>
            </div>
        </Marquee>
    </>
    )
}

export default Animation