import styles from "./ServicesSection.module.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf"

import Pelican from "../../assets/servicesImages/pelican.jpg";
import Manatee from "../../assets/servicesImages/manatee.jpg";
import RockyBeach from "../../assets/servicesImages/rockyBeach.jpg";

const ServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
                <h3 className={styles.header1}>Services</h3>
                <div className={styles.cruisingSection}>
                    <div className={styles.leftSide}>
                        <h6 className={`${styles.header2} ${styles.fancyFont}`}>Cruising</h6>
                        <p className={styles.partyInfo}>There is no better way to enjoy Chesapeake bay fishing than on board Bay Eagle. We aim to make your trip as enjoyable as possible. Enjoy fishing or cruising on a 46’ deadrise style fishing boat. The Bay Eagle accommodates up to 30 passengers. Full and half days are available . Enjoy fishing the waters of Chesapeake Bay from Tolchester Beach to Chesapeake Beach MD..</p>
                        <button type="button" className={`${styles.servicesBtn} ${styles.fancyFont}`} >Contact Us</button>
                    </div>
                    <div className={` ${styles.rightSide}`}>
                        <img src={Pelican} className={styles.servicesImg}/>
                    </div>
                </div>
                <div className={styles.cateringSection}>
                    <div className={` ${styles.leftSide} ${styles.servicesImg}`}>
                        <img src={RockyBeach} className={styles.servicesImg}/>
                    </div>
                    <div className={`${styles.rightSide} ${styles.textDiv}`}>
                        <h6 className={`${styles.header2} ${styles.fancyFont}`}>Catering</h6>
                        <p className={styles.partyInfo}>
                        Catering can be obtained by contacting Bread and Butter Kitchen or by PalatePleasers.com. They will deliver to the vessel on the day of your trip.
                        </p>
                        <p>
                        Chesapeake Bay is known for it brackish water fed by Susquehanna River fresh water and Atlantic Ocean salt water.
                        </p>
                        <button type="button" className={`${styles.servicesBtn} ${styles.fancyFont}`} >Contact Us</button>
                    </div>
                </div>
                <div className={styles.fishingSection}>
                    <div className={`${styles.leftSide} ${styles.textDiv}`} >
                        <h6 className={`${styles.header2} ${styles.fancyFont}`}>Fishing</h6>

                        <p>May 1-15</p>
                        <p>Trophy season 35” or greater 1 per person.</p>

                        <p>May 16</p>
                        <p>Thru December 10 stripers or rockfish 2 per person 19” or greater
                        The last two weeks of July rockfish are closed, and Spanish mackerel and blue until September.</p>

                        <p>Types of Fish</p>
                        <p>Rockfish, red drum, spot, perch, croaker, bluefish, and Spanish mackerel</p>

                        <p>Type of Fishing</p>
                        <p>Trolling, chumming, live lining, and bottom fishing.</p>
                        <button type="button" className={`${styles.servicesBtn} ${styles.fancyFont}`} >Contact Us</button>
                    </div>
                    <div className={`${styles.rightSide}`}>
                        <img src={Manatee} className={styles.servicesImg}/>
                    </div>
                </div>
        </section>
    )
}

export default ServicesSection;