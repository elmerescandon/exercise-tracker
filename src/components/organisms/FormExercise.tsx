"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";

import {toast} from "@/components/ui/use-toast";
import FormFieldUser from "../molecules/FormFieldUser";

const FormSchema = z.object({
    user: z.string({
        required_error: "Por favor, selecciona a un usuario.",
    }),
});

const FormExercise = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
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
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
            >
                <FormFieldUser form={form} name="user" />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default FormExercise;
