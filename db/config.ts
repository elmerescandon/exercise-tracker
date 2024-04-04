import {column, defineDb} from "astro:db";
import {defineTable} from "astro:db";

const ExerciseLog = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        userName: column.text(),
        week: column.number(),
        armLeft: column.number(),
        armRight: column.number(),
        legLeft: column.number(),
        legRight: column.number(),
        chest: column.number(),
        weight: column.number(),
        bfi: column.number(),
    },
});

export default defineDb({
    tables: {ExerciseLog},
});
