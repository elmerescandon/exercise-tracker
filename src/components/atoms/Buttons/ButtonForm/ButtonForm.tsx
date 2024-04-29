import AlertWrapper from "@/components/templates/AlertWrapper";
import {Button} from "@/components/ui/button";
import {ArrowUpCircleIcon} from "lucide-react";

type ButtonFormProps = {
    title: string;
    onClick: () => void;
    type?: "submit" | "button";
};

const ButtonForm = ({title, onClick, type = "button"}: ButtonFormProps) => {
    return (
        <AlertWrapper
            onConfirm={() => {}}
            title="¿Deseas sobrescribir tu ejercicio?"
            description="El ejercicio ya existe, si deseas guardarlo nuevamente presionar continuar."
        >
            <Button onClick={onClick} type={type}>
                <ArrowUpCircleIcon className="mr-2 h-4 w-4" />
                {title}
            </Button>
        </AlertWrapper>
    );
};

export default ButtonForm;
