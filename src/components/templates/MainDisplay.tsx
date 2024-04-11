import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import type {ITab} from "@/lib/interfaces";

type MainDisplayProps = {
    tabs: ITab[];
};

const MainDisplay = ({tabs}: MainDisplayProps) => {
    const defaultValue = tabs[0]?.value;

    return (
        <Tabs defaultValue={defaultValue} className="w-full h-4/5 mx-28">
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default MainDisplay;
