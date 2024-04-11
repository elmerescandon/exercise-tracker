import MainDisplay from "../templates/MainDisplay";
import FormExercise from "../organisms/FormExercise";
import TableLearboard from "../organisms/TableLearboard";

const MainPage = () => {
    return (
        <MainDisplay
            add={{value: "add", name: "Añadir 💪🏻", content: <FormExercise />}}
            leaderboard={{
                value: "leaderboard",
                name: "Tablero 🏆",
                content: <TableLearboard />,
            }}
        />
    );
};

export default MainPage;
