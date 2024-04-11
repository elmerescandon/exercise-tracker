import MainDisplay from "../templates/MainDisplay";
import FormExercise from "../organisms/FormExercise";
import TableEntries from "../organisms/TableEntries";

const MainPage = () => {
    const addTab = {value: "add", name: "Añadir 💪🏻", content: <FormExercise />};
    const leaderboardTab = {
        value: "leaderboard",
        name: "Tablero 🏆",
        content: <div>Hello</div>,
    };
    const entriesTab = {
        value: "entries",
        name: "Entradas 📋",
        content: <TableEntries />,
    };
    return <MainDisplay tabs={[addTab, leaderboardTab, entriesTab]} />;
};

export default MainPage;
