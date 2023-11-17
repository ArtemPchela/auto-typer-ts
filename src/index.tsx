import React, {useEffect, useState} from 'react';

type TOption = 'typing' | 'deleting' | 'paused';

type Props = {
    styling?: string;
    titles?: string[];
    typingSpeedMax?: number;
    typingSpeedMin?: number;
    deletingSpeed?: number;
    blinkingSpeed?: number;
    pauseDelay?: number;
};

const Typing = ({
                    styling = "typer",
                    titles=["test text", "for auto-typer-ts"],
                    typingSpeedMax = 110,
                    typingSpeedMin = 50,
                    deletingSpeed = 70,
                    blinkingSpeed = 600,
                    pauseDelay = 1500
                }: Props) => {
    const [typingState, setTypingState] = useState<TOption>('typing');
    const [selectedTitleIndex, setSelectedTitleIndex] = useState<number>(0);
    const [typingLength, setTypingLength] = useState<number>(0);
    const createTypingTimeout = () => {
        return setTimeout(
            () => {
                setTypingLength(typingLength + 1);
                if (typingLength + 1 === titles[selectedTitleIndex].length) {
                    setTypingState('paused');
                }
            },
            Math.floor(
                Math.random() * (typingSpeedMax - typingSpeedMin + 1) +
                typingSpeedMin
            )
        );
    };

    const createPausedTimeout = () => {
        return setTimeout(() => {
            setTypingState('deleting');
        }, pauseDelay);
    };

    const createDeletingTimeout = () => {
        return setTimeout(() => {
            const nextTitleIndex = (selectedTitleIndex + 1) % titles.length;
            const currentSlice = titles[selectedTitleIndex].slice(
                0,
                typingLength
            );
            const nextSlice = titles[nextTitleIndex].slice(0, typingLength);

            if (currentSlice === nextSlice) {
                setSelectedTitleIndex(nextTitleIndex);
                setTypingState('typing');
            } else {
                setTypingLength(typingLength - 1);
            }
        }, deletingSpeed);
    };

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        switch (typingState) {
            case 'typing':
                timeoutId = createTypingTimeout();
                break;
            case 'deleting':
                timeoutId = createDeletingTimeout();
                break;
            case 'paused':
                timeoutId = createPausedTimeout();
                break;
        }

        return () => clearTimeout(timeoutId);
    }, [typingLength, typingState, selectedTitleIndex, titles]);

    const currentTitle = titles[selectedTitleIndex];

    return (
        <React.Fragment>
            <style>{`
                .${styling} {}
                
                @keyframes typerAnimation {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                }

                    .${styling}::after {
                        content: '|';
                        animation: typerAnimation ${blinkingSpeed}ms infinite;
                    }
                `}
            </style>
            <span
                className={`${styling} ${
                    typingState === 'paused' ? 'paused' : ''
                }`}
            >
                {currentTitle.slice(0, typingLength)}
            </span>
        </React.Fragment>
    );
};

export default Typing;
