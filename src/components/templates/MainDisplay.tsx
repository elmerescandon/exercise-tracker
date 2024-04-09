import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import type {ITab} from "@/lib/interfaces";

type MainDisplayProps = {
    add: ITab;
    leaderboard: ITab;
};

const MainDisplay = ({add, leaderboard}: MainDisplayProps) => {
    return (
        <Tabs defaultValue={add.value} className="w-full h-3/5 mx-28">
            <TabsList>
                <TabsTrigger value={add.value}>{add.name}</TabsTrigger>
                <TabsTrigger value={leaderboard.value}>
                    {leaderboard.name}
                </TabsTrigger>
            </TabsList>
            <TabsContent value="add">{add.content}</TabsContent>
            <TabsContent value="leaderboard">{leaderboard.content}</TabsContent>
        </Tabs>
    );
};

export default MainDisplay;
