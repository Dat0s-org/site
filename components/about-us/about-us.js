import classes from './about-us.module.css';



function AboutUs() {
    return (
        <div  className={classes.socialcontainer}>
            <div  className={classes.aboutsocial}>
                <a ><h1>About Us</h1></a>
                <p>
                   Dat0s is a place where data professionals from underrepresented backgrounds can connect & engage on topics, events, and projects. 
                </p>
            </div>
            <div className={classes.socialimagecontainer}>
                <div className={classes.socialflex}>
                    <div className={classes.socialgroup}>
                        <a href="https://discord.gg/HFkkMSjn3R" target="_blank"><img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/discord-white.png"} alt="pic" /></a>
                        <a href="https://discord.gg/HFkkMSjn3R" target="_blank"><p>Join Our Discord Community</p></a>
                    </div>
                    <div className={classes.socialgroup}>
                        <a href="https://www.linkedin.com/company/dat0s-org/" target="_blank"><img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/linkedin-logo-white.png"} alt="pic" /></a>
                        <a href="https://www.linkedin.com/company/dat0s-org/" target="_blank"><p>Scale Your Network</p></a>  
                    </div>
                    <div className={classes.socialgroup}>
                        <a href="https://github.com/Dat0s-org" target="_blank"><img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/github-sign-white.png"} alt="pic" /></a>
                        <a href="https://github.com/Dat0s-org" target="_blank"><p>Dat0s Community Projects</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
