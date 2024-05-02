import MainDisplay from "../templates/MainDisplay";
import FormExercise from "../organisms/FormExercise";
import TableEntries from "../organisms/TableEntries";
import LeaderboardOverview from "../organisms/LeaderboardOverview";
import AddExercise from "../templates/AddExercise";

const MainPage = () => {
    const addTab = {value: "add", name: "Añadir 💪🏻", content: <AddExercise />};
    const leaderboardTab = {
        value: "leaderboard",
        name: "Tablero 🏆",
        content: <LeaderboardOverview />,
    };
    const entriesTab = {
        value: "entries",
        name: "Entradas 📋",
        content: <TableEntries />,
    };
    return <MainDisplay tabs={[addTab, leaderboardTab, entriesTab]} />;
};

export default MainPage;
