import React, {useState} from "react";
import GamePicture from "./GamePicture";
import GameButtons from "./GameButtons";
import GameHeader from "./GameHeader";
import {PictureData} from "../types";

interface GameProps {
    maxScore: number;
    categories: string[];
    pictures: PictureData[];
    onNewScore: (newScore: number) => void;
}

const Game: React.FC<GameProps> = ({
    maxScore,
    categories,
    pictures,
    onNewScore,
}) => {
    const [pictureIndex, setPictureIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelection = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory);
        if (selectedCategory === pictures[pictureIndex].category) {
            setScore((prevScore) => prevScore + 1);
        } else {
            onNewScore(score);
            setScore(0);
        }
        setTimeout(() => {
            pictures.sort(() => Math.random() - 0.5);
            setPictureIndex(0);
            setSelectedCategory("");
            setPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }, 2000);
    };

    return (
        <div className="bg-white py-4 text-center">
            <div
                className="bg-red-500 inline-block border-8 border-primary"
                style={{
                    borderColor:
                        selectedCategory !== ""
                            ? selectedCategory ===
                              pictures[pictureIndex].category
                                ? "green"
                                : "red"
                            : "",
                }}
            >
                <GameHeader score={score} maxScore={maxScore} />
                <GamePicture
                    picture={pictures[pictureIndex]}
                    showFullPicture={selectedCategory !== ""}
                />
                <GameButtons
                    categories={categories}
                    onCategorySelect={handleCategorySelection}
                    selectedCategory={selectedCategory}
                    correctCategory={pictures[pictureIndex].category}
                />
            </div>
        </div>
    );
};

export default Game;
