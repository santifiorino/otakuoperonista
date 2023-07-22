import React, {useState} from "react";
import GamePicture from "./GamePicture";
import GameButtons from "./GameButtons";
import GameHeader from "./GameHeader";
import Modal from "./Modal";
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
    const [isOpen, setIsOpen] = useState(false);

    const handleCategorySelection = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory);
        if (selectedCategory === pictures[pictureIndex].category) {
            setScore((prevScore) => prevScore + 1);
            onNewScore(score + 1);
            setTimeout(() => {
                setSelectedCategory("");
                setPictureIndex(
                    (prevIndex) => (prevIndex + 1) % pictures.length
                );
            }, 2000);
        } else {
            setTimeout(() => {
                openModal();
            }, 2000);
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const restartGame = () => {
        onNewScore(score);
        pictures.sort(() => Math.random() - 0.5);
        setScore(0);
        setPictureIndex(0);
        setSelectedCategory("");
    };

    const closeModal = () => {
        setIsOpen(false);
        restartGame();
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
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <div className="bg-primary px-24 py-3 mb-5">
                        <h1 className="text-2xl font-bold text-white">
                            PERDISTE
                        </h1>
                    </div>
                    <p className="mb-5 text-xl font-bold">SCORE: {score}</p>
                    <button
                        className="bg-primary hover:bg-secondary text-white font-bold px-10 py-2 mb-5"
                        onClick={closeModal}
                    >
                        REINICIAR
                    </button>
                </Modal>
            </div>
        </div>
    );
};

export default Game;
