export { ship };

const ship = (length = 1) => {
    let health = length;
    const getHealth = () => health;
    const hit = () => {
        health -= 1;
    };

    const isSunk = () => health <= 0 ? true : false;

    return { length, getHealth, hit, isSunk};
};
