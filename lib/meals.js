import fs from 'node:fs';
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

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer(); // arrayBuffer gives us a promise
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });
    meal.image = `/images/${fileName}`; // all image requests will be relative to the public folder
    db.prepare(
        'INSERT INTO meals (title, summary, instructions, image, slug, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)',
    ).run(
        meal.title,
        meal.summary,
        meal.instructions,
        meal.image,
        meal.slug,
        meal.creator,
        meal.creator_email,
    );
}

// all is used when you are fetching data.
// run is used when you are modifying data.
// we can use async await in server functions.