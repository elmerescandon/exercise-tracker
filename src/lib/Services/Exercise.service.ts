import type {z} from "astro:content";
import type {FormSchema} from "../constants";

class ExerciseService {
    private static instance: ExerciseService;

    private constructor() {
        // Private constructor to prevent instantiation from outside the class
    }

    public static getInstance(): ExerciseService {
        if (!ExerciseService.instance) {
            ExerciseService.instance = new ExerciseService();
        }
        return ExerciseService.instance;
    }

    public async existWeeklyExercise(
        week: number,
        userId: string | number
    ): Promise<boolean> {
        try {
            const response = await fetch(
                `/api/exercise/valid?week=${week}&id=${userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return (await response.json()).exists;
        } catch (error) {
            throw error;
        }
    }

    public async uploadExercise(
        data: z.infer<typeof FormSchema>
    ): Promise<void> {
        try {
            await fetch("/api/exercise", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            throw error;
        }
    }
}

export default ExerciseService.getInstance();
