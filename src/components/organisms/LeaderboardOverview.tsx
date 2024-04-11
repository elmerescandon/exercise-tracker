import {userObjects} from "@/lib/constants";
import React from "react";
import CompetitorOverview from "./CompetitorOverview";

const LeaderboardOverview = () => {
    return (
        <div>
            {Object.keys(userObjects).map((user, index) => (
                <CompetitorOverview key={index} userId={user} />
            ))}
        </div>
    );
};

export default LeaderboardOverview;
