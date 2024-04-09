import MainDisplay from "../templates/MainDisplay";
import FormExercise from "../organisms/FormExercise";

const MainPage = () => {
    return (
        <MainDisplay
            add={{value: "add", name: "Añadir 💪🏻", content: <FormExercise />}}
            leaderboard={{
                value: "leaderboard",
                name: "Tablero 🏆",
                content: "Leaderboard content",
            }}
        />
    );
};

export default MainPage;
