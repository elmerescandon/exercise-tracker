export interface ISelectOption {
    value: string;
    label: string;
}

export interface IExerciseLog {
    userId: string | number;
    date: Date;
    armLeft: number;
    armRight: number;
    legLeft: number;
    legRight: number;
    chest: number;
    weight: number;
    bfi: number;
    week?: number;
}

export interface ITab {
    value: string;
    name: string;
    content: React.ReactNode;
}
