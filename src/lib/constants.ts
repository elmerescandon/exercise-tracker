import type {ISelectOption} from "./interfaces";
import {z} from "zod";

export const users: ISelectOption[] = [
    {label: "Raúl", value: "raul"},
    {label: "Guti", value: "guti"},
    {label: "Mapu", value: "mapu"},
    {label: "Math", value: "mathi"},
];

export const formErrors = {
    user: " El usuario es requerido",
    metric: "La métrica es requerida",
};

export const inputNumberZ = z.coerce
    .number({
        required_error: formErrors.metric,
    })
    .refine((value) => value !== 0, {
        message: formErrors.metric,
    })
    .default(0);
