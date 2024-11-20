export { player };

const player = (isHuman = true) => {
    const isHumanPlayer = isHuman;

    return { isHuman : isHumanPlayer };
};