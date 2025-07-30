import { getMeals } from "@/lib/meals";
import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
    const meals = await getMeals();// without useEffect , without any unnecessary fetch requests, we can use async await in server functions.
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
            <Suspense fallback={<p className={classes.loading}>Fetching Meals</p>}>
                <Meals />
            </Suspense>
        </main>
        </>
    );
}
