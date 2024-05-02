"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog";

type AlertWrapperProps = {
    title: string;
    description: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    handleAction?: () => void;
    handleCancel?: () => void;
};

const AlertWrapper = ({
    title,
    description,
    open,
    setOpen,
    handleAction,
    handleCancel,
}: AlertWrapperProps) => {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <button onClick={handleCancel}>
                            <span>Cancelar</span>
                        </button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <button onClick={handleAction}>
                            <span>Eliminar</span>
                        </button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertWrapper;
