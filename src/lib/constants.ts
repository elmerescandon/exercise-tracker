import type {ISelectOption} from "./interfaces";
import {date, z} from "zod";

export const users: ISelectOption[] = [
    {label: "Raúl", value: 1},
    {label: "Guti", value: 2},
    {label: "Mapu", value: 3},
    {label: "Math", value: 4},
];

export const formErrors = {
    userName: " El usuario es requerido",
    metric: "La métrica es requerida",
    date: "La fecha es requerida",
};

export const inputNumberZ = z.coerce
    .number({
        required_error: formErrors.metric,
    })
    .refine((value) => value !== 0, {
        message: formErrors.metric,
    })
    .default(0);
