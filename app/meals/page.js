import { getMeals } from "@/lib/meals";
import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";

export default async function MealsPage() {
    const meals = await getMeals();// without useEffect , without any unnecessary fetch requests, we can use async await in server functions.
    return (
        <>
        <header className={classes.header}>
            <h1>Delicious Meals, Created {' '}<span className={classes.highlight}> by you</span></h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favorite recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <MealsGrid meals={meals} />
        </main>
        </>
    );
}
