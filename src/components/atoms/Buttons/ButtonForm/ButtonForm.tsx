import {Button} from "@/components/ui/button";
import {ArrowUpCircleIcon} from "lucide-react";

type ButtonFormProps = {
    title: string;
    onClick: () => void;
};

const ButtonForm = ({title, onClick}: ButtonFormProps) => {
    return (
        <Button onClick={onClick}>
            <ArrowUpCircleIcon className="mr-2 h-4 w-4" />
            Subir Ejercicio
        </Button>
    );
};

export default ButtonForm;
