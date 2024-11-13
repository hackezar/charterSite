import Navbar from "../Navbar/Navbar";
import Video from "../Video/Video"
import AddressBar from "../AddressBar/AddressBar"
import ServicesSection from "./ServicesSection/ServicesSection";
import LinksSlider from "./ImageSlider/ImageSlider";
import ReservationSection from "./ReservationsSection/ReservationsSection";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Newsletter from "./Newsletter/Newsletter";
import MapSection from "./Map/Map";
import Footer from "./Footer/Footer";

import styles from "./LandingPage.module.css";


const LandingPage = () => {

    return (
        <div className={styles.landingPageDiv}>
            <Navbar />
            <Video />
            <About />
            <AddressBar />
            <ServicesSection />
            <ReservationSection />
            <Gallery />
            <Reviews />
            <div className={styles.newsLetterMapDiv}>
                <Newsletter />
                <MapSection />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;