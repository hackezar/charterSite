import styles from "./About.module.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf"


import AboutPic from "../../assets/aboutUsImg.jpg";

const About = () => {
    return (
        <div className={styles.aboutDiv}>
            <div className={styles.leftSide}>
                <img className={styles.aboutImg} src={AboutPic} />
            </div>
            <div className={styles.rightSide}>
                <div className={styles.insideDiv}>
                    <p className={styles.header1}>ABOUT US</p>
                    <p/>
                    <p className={styles.bio}>
                    Kenwood Fishing Charters was started in 1982 in downtown Annapolis. It is one of the oldest fishing companies around, started by the late Joe Richardson. I Dorothy Tuohey have taken it to the next level of operations. I have been a captain in Annapolis for 45 years working on boats from 20 to 400 feet. Annapolis fishing charters is located at the marina called WP Nautical or for some people the Trumpy Yard. This where they built Trumpy yachts in the ‘30s
                    We are located next to the Chart house restaurant. We are an easy commute from Washington DC or Baltimore. Come fish in the morning and go sightseeing in the afternoon.
                    </p>
                    <button className={styles.moreBtn} type="button">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About;