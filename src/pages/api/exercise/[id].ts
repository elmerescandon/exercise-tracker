import {ExerciseLog, and, db, eq} from "astro:db";

export interface Params {
    id: string;
}

export async function GET({
    params,
    request,
}: {
    params: Params;
    request: Request;
}) {
    try {
        const {id} = params;
        const week = new URL(request.url).searchParams.get("week");

        if (!id) {
            throw new Error("No user ID provided");
        }

        const mainCondition = eq(ExerciseLog.userId, parseInt(id.toString()));
        const weekCondition = week
            ? eq(ExerciseLog.week, parseInt(week))
            : undefined;

        let userLogsQuery = db
            .select()
            .from(ExerciseLog)
            .where(and(mainCondition, weekCondition));

        const userLogs = await userLogsQuery;

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
