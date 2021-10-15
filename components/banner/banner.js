import {getAllEvents} from  '../../dummy-data';
import classes from './banner.module.css';

function Banner() {
    const data = getAllEvents();
    console.log(data);

    return (
        <div className={classes.bannercontainer}>
            <img className={classes.bannerimage} src={process.env.PUBLIC_URL+"../../images/Dat0s-temp-banner-cropped3.jpg"} alt="pic" />
            <div className={classes.bannertext}>Dat0s</div>
            <div className={classes.bannersubtext} >An Underrepresented Data Community</div>
            <div className={classes.aboutUsplaceholder} id="aboutUs_link"></div>
        </div>
    )
}

export default Banner;