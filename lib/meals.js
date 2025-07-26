import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //throw new Error('Loading meals failed!'); We have better way to handle errors in Next.js. Using error.js file in the same folder.
    const stmt = db.prepare('SELECT * FROM meals');
    return stmt.all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
}

// all is used when you are fetching data.
// run is used when you are modifying data.
// we can use async await in server functions.