import React from "react";

interface GameButtonsProps {
    categories: string[];
    onCategorySelect: (selectedCategory: string) => void;
    selectedCategory: string;
    correctCategory: string;
}

const GameButtons: React.FC<GameButtonsProps> = ({
    categories,
    onCategorySelect,
    selectedCategory,
    correctCategory,
}) => {
    const handleButtonClick = (selectedCategory: string) => {
        onCategorySelect(selectedCategory);
    };

    return (
        <div>
            {categories.map((category, index) => (
                <button
                    className="w-1/2 p-4 text-center text-xl text-white font-bold bg-secondary hover:bg-primary"
                    style={{
                        backgroundColor:
                            selectedCategory !== ""
                                ? category === correctCategory
                                    ? "green"
                                    : "red"
                                : "",
                    }}
                    key={index}
                    onClick={() => handleButtonClick(category)}
                    disabled={!!selectedCategory}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default GameButtons;
