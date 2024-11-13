import styles from './Navbar.module.css';
// Images
import Logo from "../assets/logo.png";
import XLogo from "../assets/X_logo_2023_(white).png";
import FBLogo from "../assets/FacebookLogo.jpg";
import InstaLogo from "../assets/instaLogo.png";
import YelpLogo from "../assets/Yelp.png";
//

const Navbar = ({}) => {
    return(
        <section className={styles.navbar}>
            <img className={styles.logo} src={Logo}/>
            <h3 className={styles.headerText}>Kenwood Fishing Charters</h3>
            <div className={styles.links}>
                <ul className={styles.routesList}>
                    <li className={styles.routeItem}>About</li>
                    <li className={styles.routeItem}>Services</li>
                    <li className={styles.routeItem}>Reserve</li>
                    <li className={styles.routeItem}>Testimonials</li>
                    <li className={styles.routeItem}>Rates</li>
                    <li className={styles.routeItem}>Contact Us</li>
                </ul>
                <ul className={styles.socials}>
                    <li className={styles.socialsItem}>
                        <img src={XLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem}>
                        <img src={FBLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem}>
                        <img src={InstaLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem} >
                        <img src={YelpLogo} className={styles.socialsImg} id={styles.yelpLogo} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar