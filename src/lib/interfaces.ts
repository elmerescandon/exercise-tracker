export interface ISelectOption {
    value: string;
    label: string;
}

export interface IExerciseLog {
    user: string;
    armLeft: number;
    armRight: number;
    legLeft: number;
    legRight: number;
    chest: number;
    weight: number;
    bfi: number;
}

export interface ITab {
    value: string;
    name: string;
    content: React.ReactNode;
}
