import React from "react";

interface GameHeaderProps {
    score: number;
    maxScore: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({score, maxScore}) => {
    return (
        <div className="bg-secondary text-white font-bold">
            <h2 className="bg-primary py-1">MAX SCORE: {maxScore}</h2>
            <h2 className="py-1">SCORE: {score}</h2>
        </div>
    );
};

export default GameHeader;
