import React, {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import type {IExerciseLog} from "@/lib/interfaces";

const TableLearboard = () => {
    const [entries, setEntries] = useState<IExerciseLog[]>([]);

    useEffect(() => {
        const getLeaderboard = async () => {
            try {
                const response = await fetch("/api/exercise");
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
        <Table>
            <TableCaption>Leaderboard</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Arm left</TableHead>
                    <TableHead>Arm right</TableHead>
                    <TableHead>Leg left</TableHead>
                    <TableHead>Leg right</TableHead>
                    <TableHead>Chest</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>BFI</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {entries.map((entry, index) => (
                    <TableRow key={index}>
                        <TableHead>{index + 1}</TableHead>
                        <TableHead>{entry.userName}</TableHead>
                        <TableHead>
                            {new Date(entry.date).toLocaleDateString()}
                        </TableHead>
                        <TableHead>{entry.armLeft}</TableHead>
                        <TableHead>{entry.armRight}</TableHead>
                        <TableHead>{entry.legLeft}</TableHead>
                        <TableHead>{entry.legRight}</TableHead>
                        <TableHead>{entry.chest}</TableHead>
                        <TableHead>{entry.weight}</TableHead>
                        <TableHead>{entry.bfi}</TableHead>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableLearboard;
