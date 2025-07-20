import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const stmt = db.prepare('SELECT * FROM meals');
    return stmt.all();
}

// all is used when you are fetching data.
// run is used when you are modifying data.
// we can use async await in server functions.