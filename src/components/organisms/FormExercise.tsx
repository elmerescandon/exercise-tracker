"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Form} from "@/components/ui/form";

import {toast} from "@/components/ui/use-toast";
import FormFieldUser from "../molecules/FormFieldUser";
import FormFieldInputNumber from "../molecules/FormFieldInputNumber";
import ButtonForm from "../atoms/Buttons/ButtonForm/ButtonForm";
import {formErrors, inputNumberZ} from "@/lib/constants";
import FormFieldDatePicker from "../molecules/FormFieldDatePicker";

const FormSchema = z.object({
    user: z.string({
        required_error: formErrors.user,
    }),
    date: z.date({
        required_error: formErrors.date,
    }),
    armLeft: inputNumberZ,
    armRight: inputNumberZ,
    legLeft: inputNumberZ,
    legRight: inputNumberZ,
    chest: inputNumberZ,
    weight: inputNumberZ,
    bfi: inputNumberZ,
});

const FormExercise = () => {
    // TODO: Show all the errors in a toast, not below the input
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        try {
            await fetch("/api/exercise", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            {JSON.stringify(data, null, 2)}
                        </code>
                    </pre>
                ),
            });
        } catch (error) {
            toast({
                title: "Some error ocurred",
                description: (error as Error).message,
            });
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8 px-4 pt-14"
            >
                <div className="flex flex-col gap-4">
                    <FormFieldUser form={form} name="user" />
                    <FormFieldDatePicker form={form} />
                    <div className="flex gap-4">
                        <FormFieldInputNumber
                            form={form}
                            placeholder="Brazo Izq. (cm)"
                            type="number"
                            name="armLeft"
                        />
                        <FormFieldInputNumber
                            form={form}
                            placeholder="Brazo Der. (cm)"
                            type="number"
                            name="armRight"
                        />
                    </div>
                    <div className="flex gap-4">
                        <FormFieldInputNumber
                            form={form}
                            placeholder="Pierna Izq. (cm)"
                            type="number"
                            name="legLeft"
                        />
                        <FormFieldInputNumber
                            form={form}
                            placeholder="Pierna Der. (cm)"
                            type="number"
                            name="legRight"
                        />
                    </div>

                    <FormFieldInputNumber
                        form={form}
                        placeholder="Pecho (cm)"
                        type="number"
                        name="chest"
                    />
                    <FormFieldInputNumber
                        form={form}
                        placeholder="Peso (kg)"
                        type="number"
                        name="weight"
                    />
                    <FormFieldInputNumber
                        form={form}
                        placeholder="Índice de grasa corporal (%)"
                        type="number"
                        name="bfi"
                    />
                </div>

                <ButtonForm
                    type="submit"
                    onClick={() => {}}
                    title="Subir ejercicio"
                />
            </form>
        </Form>
    );
};

export default FormExercise;
