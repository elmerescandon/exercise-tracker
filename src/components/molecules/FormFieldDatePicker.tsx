import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "../ui/popover";
import {Button} from "../ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "../ui/calendar";
import {format} from "date-fns";

type FormFieldDatePickerProps = {
    form: any;
};

const FormFieldDatePicker = ({form}: FormFieldDatePickerProps) => {
    return (
        <FormField
            control={form.control}
            name="date"
            render={({field}) => (
                <FormItem className="flex flex-col">
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Escoge una fecha</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormFieldDatePicker;
