import {ExerciseLog, db, eq} from "astro:db";

interface Params {
    id: string;
}

export async function GET({params}: {params: Params}) {
    try {
        const {id} = params;

        if (!id) {
            throw new Error("No user ID provided");
        }

        const userLogs = await db
            .select()
            .from(ExerciseLog)
            .where(eq(ExerciseLog.userId, parseInt(id)));

        return new Response(JSON.stringify(userLogs), {status: 200});
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}
