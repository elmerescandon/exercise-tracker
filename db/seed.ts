import {ExerciseLog, db} from "astro:db";
import {getWeek} from "date-fns";

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(ExerciseLog).values([
        {
            id: 1,
            date: new Date(),
            week: getWeek(new Date()),
            userId: 4,
            armLeft: 27,
            armRight: 26,
            legLeft: 46.5,
            legRight: 47,
            chest: 90.5,
            weight: 55,
            bfi: 16.7,
        },
        {
            id: 2,
            date: new Date(),
            week: getWeek(new Date()),
            userId: 1,
            armLeft: 29,
            armRight: 29,
            legLeft: 47,
            legRight: 47,
            chest: 96,
            weight: 58,
            bfi: 17.4,
        },
        {
            id: 3,
            date: new Date(),
            week: getWeek(new Date()),
            userId: 4,
            armLeft: 27.1,
            armRight: 26.5,
            legLeft: 46.8,
            legRight: 46.5,
            chest: 90,
            weight: 55,
            bfi: 16.4,
        },
        {
            id: 4,
            date: new Date(),
            week: getWeek(new Date()),
            userId: 1,
            armLeft: 29.3,
            armRight: 28.2,
            legLeft: 45.5,
            legRight: 45,
            chest: 96.2,
            weight: 58,
            bfi: 17.1,
        },
    ]);
}
