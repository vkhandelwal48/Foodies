import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <h1>Foodies App</h1>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="A plate with Food on it" />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
