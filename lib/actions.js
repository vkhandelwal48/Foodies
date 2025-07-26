'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
 
// all the actions in this file are server actions    
// This function is a placeholder for the server-side logic
// to handle the meal sharing process.
// You can implement your logic here, such as saving the meal data to a database.
// We are not allowed to use server actions in a client component

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || (meal.image.size === 0)) {
        return { message : 'Invalid input.'}
    }
    await saveMeal(meal);
    revalidatePath('/meals'); // 1) this function is used to revalidate the cache for the meals page
    // 2) only this path is revalidated but not nested paths
    // 3) adding 'layout' as the second argument to revalidatePath ensure that nested paths are also revalidated
    redirect('/meals');
}
