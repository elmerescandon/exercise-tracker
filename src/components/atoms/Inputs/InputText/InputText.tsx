import {Input} from "@/components/ui/input";

type InputTextProps = {
    placeholder: string;
    type: string;
};

const InputText = ({placeholder, type}: InputTextProps) => {
    return <Input type={type} placeholder={placeholder} />;
};

export default InputText;
