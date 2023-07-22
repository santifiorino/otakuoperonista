import React, {ReactNode, useEffect} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    useEffect(() => {
        // Add or remove class on mount/unmount to control scrolling
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white z-20">{children}</div>
        </div>
    );
};

export default Modal;
