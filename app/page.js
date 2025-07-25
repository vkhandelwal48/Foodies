import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "./components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next Level Food for NextLevel Foodies</h1>
            <p>Taste & Share Food from all over the World</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

// Executes on server not on browser
// This code will not run in the browser
// Advantage : Server-side rendering can improve performance and SEO, less client-side JavaScript is needed
// On the server, Components that are pre rendered but then also potenially hydrated on the client

// Next.js caches the page once you visit it, so the next time you visit the page, 
// it will be served from the cache, not from the server. This means that the page will load faster,
// and you will not have to wait for the server to respond.