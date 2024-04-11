import React, {useEffect, useState} from "react";
import MetricOverview from "./MetricOverview";
import type {IExerciseLog} from "@/lib/interfaces";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import {userObjects} from "@/lib/constants";
import Image from "astro/components/Image.astro";

type CompetitorOverviewProps = {
    userId: string;
};

const CompetitorOverview = ({userId}: CompetitorOverviewProps) => {
    const [entries, setEntries] = useState<IExerciseLog[]>([]);

    useEffect(() => {
        const getLeaderboard = async () => {
            try {
                const response = await fetch(`api/exercise/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch leaderboard");
                }
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error(error);
            }
        };
        getLeaderboard();
    }, []);

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={userId}>
                <AccordionTrigger>
                    <div className="flex gap-2 justify-center items-center">
                        <img
                            className="w-5 h-5 rounded-full"
                            src="/mapu_square.jpg"
                            alt="User"
                        />
                        {
                            userObjects[
                                Number(userId) as keyof typeof userObjects
                            ]
                        }
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    {entries.length > 0 ? (
                        <MetricOverview exerciseLog={entries[0]} />
                    ) : (
                        <p>No entries yet</p>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CompetitorOverview;
