import {userObjects} from "@/lib/constants";
import React from "react";

type CompetitorNameProps = {
    userId: string;
};

const CompetitorName = ({userId}: CompetitorNameProps) => {
    return (
        <div className="flex gap-2 justify-center items-center">
            <img
                className="w-5 h-5 rounded-full"
                src="/mapu_square.jpg"
                alt="User"
            />
            {userObjects[Number(userId) as keyof typeof userObjects]}
        </div>
    );
};

export default CompetitorName;
