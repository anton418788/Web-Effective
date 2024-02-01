import Button from '../Button';
import classes from './Hero.module.scss'
import hero2x from './../../assets/hero-2x.png'
import heroPng from './../../assets/hero.png'
const Hero : React.FC = () => {
 return (
    <section className={classes.hero}>
        <div className={classes.hero__container}>
            <div className={classes.hero__content}>
                <h1 className={classes.hero__title}>Virtual healthcare for you</h1>
                <p className={classes.hero__desc}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <Button text='Consult today' state='active'/>
            </div>
            <div className={classes.hero__image}>
                <picture>
                    <source srcSet={hero2x} media='(min-width: 1920px)'/>
                    <source srcSet={heroPng}/>
                    <img src={heroPng} srcSet={hero2x} alt="hero" />
                </picture>
            </div>
        </div>
    </section>
 )   
}

export default Hero;