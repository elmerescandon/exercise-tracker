import type {IExerciseLog} from "@/lib/interfaces";
import type {APIContext, APIRoute} from "astro";
import {db, ExerciseLog} from "astro:db";

export async function POST(ctx: APIContext): Promise<Response> {
    try {
        const rawData = await new Response(ctx.request.body).text();
        const exerciseLog: IExerciseLog = JSON.parse(rawData);
        if (!exerciseLog) {
            throw new Error("No request body provided");
        }

        const result = await db.insert(ExerciseLog).values({
            userName: exerciseLog.user,
            ...exerciseLog,
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
