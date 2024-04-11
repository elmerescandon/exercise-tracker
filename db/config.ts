import {column, defineDb} from "astro:db";
import {defineTable} from "astro:db";

const ExerciseLog = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        date: column.date(),
        userName: column.text(),
        armLeft: column.number(),
        armRight: column.number(),
        legLeft: column.number(),
        legRight: column.number(),
        chest: column.number(),
        weight: column.number(),
        bfi: column.number(),
    },
    indexes: {
        author_idx: {on: ["id"], unique: true},
    },
});

export default defineDb({
    tables: {ExerciseLog},
});
