import classes from './Slider.module.scss'
import Slide from '../Slide'
import {useState, useRef, useEffect} from 'react'
import author1 from './../../assets/authors/01.png'

const slide1 = <Slide img={author1} name='Edward Newgate' prof='Founder Circle' comment='Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely'/>

const slide2 = <Slide img={author1} name='Zhenya Neznayu' prof='Founder Circle' comment='Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely'/>


const slides = [slide1, slide2]

const Slider : React.FC = () => {
    const [slide, setSlide] = useState(0);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(1120)

    const refSlider = useRef(null)
    // let sliderWidth = 0;
    
    useEffect(()=> {
        function setSliderWidth(){
            const _width = refSlider.current.clientWidth;
            setWidth(_width)
        }
        setSliderWidth()
    })
    useEffect(()=> {
        function setSliderWidth(){
            const _width = refSlider.current.clientWidth;
            setWidth(_width)
        }

        window.addEventListener('resize', setSliderWidth)
        window.addEventListener('DOMContentLoaded', setSliderWidth)
    }, [])
    
    

    const moveSlider = (direction : number = 1) => {
        let slideNumber = 0;
        
        if (direction < 0) {
          slideNumber = slides.length - 1;

          setOffset((currentOffset) => {
            const newOffset = currentOffset - width;
            return Math.max(newOffset, (-1 * (slides.length-1) * width));
          })

        } else {

            setOffset((currentOffset) => {
                const newOffset = currentOffset + width;
                return Math.min(newOffset, 0);
             })
          slideNumber = (slide + direction) % slides.length;
        }
    
        setSlide(slideNumber);
    };

    return (
        <section className={classes.Slider__out}>
            <div className={classes.Slider} ref={refSlider}>
                <div className={classes.Slider__wrapper} style={{transform: `translateX(${offset}px)`}}>
                    {slides}
                </div>
                <div className={classes.SliderControl}>
                    <button 
                        className={'btn-reset ' + classes.SliderControl__btn + ' ' + classes.SliderControl__btnPrev} 
                        onClick={() => moveSlider(1)}
                        style={{opacity: `${slide == 0 ? 0.5 : 1}`}}
                        disabled = {slide == 0}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20">
                            <g>
                                <path d="M27.6911 8.76265L6.64523 8.76265L11.269 4.13893C11.9067 3.50117 11.9067 2.54454 11.269 1.90678C10.6312 1.26903 9.67457 1.26903 9.03681 1.90678L1.70263 9.24097C1.06487 9.87872 1.06487 10.8354 1.70263 11.4731L9.03681 18.8073C9.67457 19.445 10.6312 19.445 11.269 18.8073C11.9067 18.1695 11.9067 17.2129 11.269 16.5752L6.64523 11.9514L27.6911 11.9514C28.4883 11.9514 29.2855 11.3137 29.2855 10.357C29.2855 9.40041 28.4883 8.76265 27.6911 8.76265Z"/>
                            </g>
                        </svg>
                    </button>
                    <ul className={classes.SliderControl__pagination}>
                        {slides.map((item, index) => (<li style={{opacity: `${index == slide ? 1 : 0.5}`}}></li>))}
                    </ul>
                    <button
                        className={'btn-reset ' + classes.SliderControl__btn + ' ' + classes.SliderControl__btnNext}
                        onClick={() => moveSlider(-1)}
                        style={{opacity: `${slide == slides.length - 1 ? 0.5 : 1}`}}
                        disabled = {slide == slides.length - 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20">
                            <g>
                                <path d="M27.6911 8.76265L6.64523 8.76265L11.269 4.13893C11.9067 3.50117 11.9067 2.54454 11.269 1.90678C10.6312 1.26903 9.67457 1.26903 9.03681 1.90678L1.70263 9.24097C1.06487 9.87872 1.06487 10.8354 1.70263 11.4731L9.03681 18.8073C9.67457 19.445 10.6312 19.445 11.269 18.8073C11.9067 18.1695 11.9067 17.2129 11.269 16.5752L6.64523 11.9514L27.6911 11.9514C28.4883 11.9514 29.2855 11.3137 29.2855 10.357C29.2855 9.40041 28.4883 8.76265 27.6911 8.76265Z"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Slider;