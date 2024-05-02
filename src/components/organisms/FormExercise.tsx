"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Form} from "@/components/ui/form";

import {toast} from "@/components/ui/use-toast";
import FormFieldUser from "../molecules/Forms/FormFieldUser";
import FormFieldInputNumber from "../molecules/Forms/FormFieldInputNumber";
import ButtonForm from "../atoms/Buttons/ButtonForm/ButtonForm";
import {FormSchema} from "@/lib/constants";
import FormFieldDatePicker from "../molecules/Forms/FormFieldDatePicker";
import ExerciseService from "@/lib/Services/Exercise.service";
import {getWeek} from "date-fns";
import {
    toastAddExercise,
    toastExistingExercise,
} from "@/lib/constantsComponents";
import {useState} from "react";
import AlertWrapper from "../templates/AlertWrapper";

const FormExercise = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState<number | null>(null);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const handleAction = async () => {
        if (!id) return;
        await ExerciseService.updateExercise(form.getValues(), id);
        toast(toastExistingExercise);
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        try {
            const exerciseExist = await ExerciseService.existWeeklyExercise(
                getWeek(new Date(data.date)),
                data.userId
            );
            console.log(exerciseExist);
            if (exerciseExist.exists) {
                setOpen(true);
                console.log(exerciseExist.id);
                setId(exerciseExist.id);
            } else {
                await ExerciseService.uploadExercise(data);
                toast(toastAddExercise(data));
            }
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
                    <FormFieldUser form={form} name="userId" />
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
            <AlertWrapper
                title="Este ejercicio ya existe"
                description="¿Estás seguro de que quieres añadir este ejercicio? Una vez añadido, no podrás modificarlo."
                open={open}
                setOpen={setOpen}
                handleAction={handleAction}
                handleCancel={() => setOpen(false)}
            />
        </Form>
    );
};

export default FormExercise;
