import {FormControl, FormField, FormItem, FormMessage} from "../ui/form";
import {Input} from "../ui/input";

type FormFieldInputProps = {
    form: any;
    name: string;
    placeholder: string;
    type?: string;
};

const FormFieldInput = ({
    form,
    name,
    placeholder,
    type = "text",
}: FormFieldInputProps) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem className="w-full">
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormFieldInput;
