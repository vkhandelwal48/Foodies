'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
 
// all the actions in this file are server actions    
// This function is a placeholder for the server-side logic
// to handle the meal sharing process.
// You can implement your logic here, such as saving the meal data to a database.
// We are not allowed to use server actions in a client component

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    await saveMeal(meal);
    redirect('/meals');
}
