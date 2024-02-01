import classes from './Footer.module.scss'
const Footer : React.FC = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Footer__container + ' container'}>
                <div className={classes.Footer__col}>
                    <a href="./" className={classes.Footer__logo}>
                        <span>T</span>
                        HealthCare
                    </a>
                    <p className={classes.Footer__text}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <small className={classes.Footer__text + ' ' + classes.Footer__copy}>© HealthCare PTY LTD 2023. All rights reserved</small>
                </div>
                <div className={classes.Footer__right}>
                    <nav className={classes.Footer__nav}>
                        <ul className={classes.Footer__navList}>
                            <li className={classes.Footer__navItem}>
                                <h5 className={classes.Footer__navTitle}>Company</h5>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>About</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Testimonials</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Find a doctor</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Apps</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={classes.Footer__nav}>
                        <ul className={classes.Footer__navList}>
                            <li className={classes.Footer__navItem}>
                                <h5 className={classes.Footer__navTitle}>Region</h5>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Indonesia</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Singapore</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Hongkong</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Canada</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={classes.Footer__nav}>
                        <ul className={classes.Footer__navList}>
                            <li className={classes.Footer__navItem}>
                                <h5 className={classes.Footer__navTitle}>Help</h5>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Help center</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Contact support</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>Instructions</a>
                            </li>
                            <li className={classes.Footer__navItem}>
                                <a href="#" className={classes.Footer__navLink}>How it works</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer