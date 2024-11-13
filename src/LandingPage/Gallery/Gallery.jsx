import styles from "./Gallery.module.css";

import Pic1 from "../../assets/gallery/gallery1.jpg";
import Pic2 from "../../assets/gallery/gallery2.jpg";
import Pic3 from "../../assets/gallery/gallery3.jpg";
import Pic4 from "../../assets/gallery/gallery4.jpg";
import Pic5 from "../../assets/gallery/gallery5.jpg";
import Pic6 from "../../assets/gallery/gallery6.jpg";
import Pic7 from "../../assets/gallery/gallery7.jpg";
import Pic8 from "../../assets/gallery/gallery8.jpg";
import Pic9 from "../../assets/gallery/gallery9.jpg";
import Pic10 from "../../assets/gallery/gallery10.jpg";
import Pic11 from "../../assets/gallery/gallery11.jpg";
import Pic12 from "../../assets/gallery/gallery12.jpg";



const Gallery = () => {
    return (
        <div className={styles.galleryDiv}>
            <div className={styles.imageGallery}>
                <img className={styles.img} src={Pic1} />
                <img className={styles.img} src={Pic2} />
                <img className={styles.img} src={Pic3} />
                <img className={styles.img} src={Pic4} />
                <img className={styles.img} src={Pic5} />
                <img className={styles.img} src={Pic6} />
                <img className={styles.img} src={Pic7} />
                <img className={styles.img} src={Pic8} />
                <img className={styles.img} src={Pic9} />
                <img className={styles.img} src={Pic10} />
                <img className={styles.img} src={Pic11} />
                <img className={styles.img} src={Pic12} />
            </div>
        </div>
    )
}

export default Gallery;