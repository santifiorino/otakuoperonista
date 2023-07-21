import React, {useEffect, useState} from "react";
import Game from "./components/Game";
import {PageFooter} from "./components/PageFooter";
import {PageHeader} from "./components/PageHeader";
import {PictureData} from "./types";

const App: React.FC = () => {
    const [picturesData, setPicturesData] = useState<PictureData[]>([]);
    const [maxScore, setMaxScore] = useState<number>(0);

    useEffect(() => {
        const savedMaxScore = localStorage.getItem("maxScore");
        if (savedMaxScore !== null) {
            setMaxScore(Number(savedMaxScore));
        }

        const fetchPicturesData = async () => {
            try {
                const response = await fetch(
                    "./otakuoperonista/data/picturesDictionary.bin"
                );
                const base64Data = await response.text();
                const jsonData = atob(base64Data);
                const data: PictureData[] = JSON.parse(jsonData);
                data.sort(() => Math.random() - 0.5);
                setPicturesData(data);
            } catch (error) {
                console.error("Error fetching pictures data:", error);
            }
        };

        fetchPicturesData();
    }, []);

    const handleNewScore = (newScore: number) => {
        if (newScore > maxScore) {
            setMaxScore(newScore);
            localStorage.setItem("maxScore", newScore.toString());
        }
    };

    if (picturesData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <PageHeader />
            <Game
                maxScore={maxScore}
                categories={["OTAKU", "PERONISTA"]}
                pictures={picturesData}
                onNewScore={handleNewScore}
            />
            <PageFooter />
        </div>
    );
};

export default App;
