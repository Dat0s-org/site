import Link from 'next/link';
import classes from './main-header.module.css';



function MainHeader() {
    const notitle = ''
    const Dat0s = <Link href='/'><p className={classes.pointer}>Dat0s</p></Link>;
    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>
                    
                    <img className={classes.imagelogo} src={process.env.PUBLIC_URL+"../../images/Dat0s Logo-no-name.png"} alt="pic" />
                </Link>
                { document.location.pathname === "/" ? notitle : Dat0s }
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/#aboutUs_link'>About Us</Link>
                    </li>
                    <li>
                        <Link href='/events'>Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;