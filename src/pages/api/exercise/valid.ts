import {ExerciseLog, and, db, eq} from "astro:db";

export async function GET(request: Request): Promise<Response> {
    try {
        const week = new URL(request.url).searchParams.get("week");
        const id = new URL(request.url).searchParams.get("id");

        if (!week || !id) {
            throw new Error("Not all the information is provided");
        }

        const exerciseLogs = await db
            .select()
            .from(ExerciseLog)
            .where(
                and(
                    eq(ExerciseLog.week, parseInt(week)),
                    eq(ExerciseLog.userId, parseInt(id))
                )
            );

        if (exerciseLogs.length > 0) {
            return new Response(JSON.stringify({exists: true}), {status: 200});
        } else {
            return new Response(JSON.stringify({exists: false}), {status: 200});
        }
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}
