import classes from './Header.module.scss'
import classesNav from './Nav.module.scss'

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <a className={classes.header__logo}>HealthCare</a>
            <nav className={classesNav.nav}>
                <ul className={classesNav.nav__list}>
                    <li className={classesNav.nav__item}>
                        <a className={classesNav.nav__link}>Home</a>
                    </li>
                    <li className={classesNav.nav__item}>
                        <a href='#' className={classesNav.nav__link}>Find a doctor</a>
                    </li>
                    <li className={classesNav.nav__item}>
                        <a href='#' className={classesNav.nav__link}>Apps</a>
                    </li>
                    <li className={classesNav.nav__item}>
                        <a href='#' className={classesNav.nav__link}>Testimonials</a>
                    </li>
                    <li className={classesNav.nav__item}>
                        <a href='#' className={classesNav.nav__link}>About us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;