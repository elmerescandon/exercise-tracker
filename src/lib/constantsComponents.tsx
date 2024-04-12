import type {z} from "astro:content";
import type {FormSchema} from "./constants";

export const toastAddExercise = (data: z.infer<typeof FormSchema>) => {
    return {
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">
                    {JSON.stringify(data, null, 2)}
                </code>
            </pre>
        ),
    };
};

export const toastExistingExercise = {
    title: "Ya existe un ejercicio para esta semana",
    description: "Se están actualizando sus valores.",
};
