import type {IExerciseLog} from "@/lib/interfaces";
import type {APIContext, APIRoute} from "astro";
import {db, eq, ExerciseLog} from "astro:db";
import {getWeek} from "date-fns";

export async function POST(ctx: APIContext): Promise<Response> {
    try {
        const rawData = await new Response(ctx.request.body).text();
        const exerciseLog: IExerciseLog = JSON.parse(rawData);
        if (!exerciseLog) {
            throw new Error("No request body provided");
        }

        const newUserId =
            typeof exerciseLog.userId === "number"
                ? exerciseLog.userId
                : parseInt(exerciseLog.userId);
        const result = await db.insert(ExerciseLog).values({
            userId: newUserId,
            date: new Date(exerciseLog.date),
            week: getWeek(new Date(exerciseLog.date)),
            armLeft: exerciseLog.armLeft,
            armRight: exerciseLog.armRight,
            legLeft: exerciseLog.legLeft,
            legRight: exerciseLog.legRight,
            chest: exerciseLog.chest,
            weight: exerciseLog.weight,
            bfi: exerciseLog.bfi,
        });
        return new Response(
            JSON.stringify({
                message: "Exercise log inserted successfully",
                exerciseLog: result,
            }),
            {status: 200}
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}

export async function PUT(ctx: APIContext): Promise<Response> {
    try {
        const rawData = await new Response(ctx.request.body).text();
        const exerciseLog: IExerciseLog = JSON.parse(rawData);
        if (!exerciseLog) {
            throw new Error("No request body provided");
        }

        const newUserId =
            typeof exerciseLog.userId === "number"
                ? exerciseLog.userId
                : parseInt(exerciseLog.userId);
        const result = await db
            .update(ExerciseLog)
            .set({
                date: new Date(exerciseLog.date),
                week: getWeek(new Date(exerciseLog.date)),
                armLeft: exerciseLog.armLeft,
                armRight: exerciseLog.armRight,
                legLeft: exerciseLog.legLeft,
                legRight: exerciseLog.legRight,
                chest: exerciseLog.chest,
                weight: exerciseLog.weight,
                bfi: exerciseLog.bfi,
            })
            .where(eq(ExerciseLog.userId, newUserId));
        return new Response(
            JSON.stringify({
                message: "Exercise log updated successfully",
                exerciseLog: result,
            }),
            {status: 200}
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}

export async function GET(ctx: APIContext): Promise<Response> {
    try {
        const exerciseLogs = await db.select().from(ExerciseLog);
        return new Response(JSON.stringify(exerciseLogs), {status: 200});
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}
