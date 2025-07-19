import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <h1>Foodies App</h1>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with Food on it" priority />
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
        </>
    );
}

// Image helps in lazy loading and optimizing images
// Link helps in client-side navigation, which is faster than traditional navigation
// CSS modules help in scoping styles to this component only, preventing global style conflicts
