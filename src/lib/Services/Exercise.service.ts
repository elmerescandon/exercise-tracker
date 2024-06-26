import type {z} from "astro:content";
import type {FormSchema} from "../constants";
import type {IExerciseExist} from "./Exercise.interface";

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
    ): Promise<IExerciseExist> {
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
            return await response.json();
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

    public async updateExercise(
        data: z.infer<typeof FormSchema>,
        id: number
    ): Promise<void> {
        try {
            await fetch("/api/exercise", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({data, id}),
            });
        } catch (error) {
            throw error;
        }
    }
}

export default ExerciseService.getInstance();
