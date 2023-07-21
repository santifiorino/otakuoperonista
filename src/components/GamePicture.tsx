import React, {useEffect} from "react";
import {PictureData} from "../types";

interface GamePictureProps {
    picture: PictureData;
    showFullPicture: boolean;
}

const GamePicture: React.FC<GamePictureProps> = ({
    picture,
    showFullPicture,
}) => {
    useEffect(() => {
        const fullImage = new Image();
        fullImage.src = picture.fullPicture;
    }, [picture.fullPicture]);

    return (
        <div>
            {showFullPicture ? (
                <img src={picture.fullPicture} alt={""} />
            ) : (
                <img src={picture.partialPicture} alt={""} />
            )}
        </div>
    );
};

export default GamePicture;
