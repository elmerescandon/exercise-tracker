import {FormControl} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type {ISelectOption} from "@/lib/interfaces";

type InputSelectProps = {
    placeholder: string;
    options: ISelectOption[];
    onChange: (...event: any[]) => void;
    defaultValue: string;
};

const InputSelect = ({
    placeholder,
    options,
    onChange,
    defaultValue,
}: InputSelectProps) => {
    return (
        <Select onValueChange={onChange} defaultValue={defaultValue}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {options.map((option, key) => (
                    <SelectItem key={key} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default InputSelect;
