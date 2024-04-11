import {FormField, FormItem, FormMessage} from "../../ui/form";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";
import {users} from "@/lib/constants";

type FormFieldUserProps = {
    form: any;
    name: string;
};

const FormFieldUser = ({form, name}: FormFieldUserProps) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <InputSelect
                        placeholder="¿Quién eres?"
                        defaultValue={field.value}
                        onChange={field.onChange}
                        options={users}
                    />
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormFieldUser;
