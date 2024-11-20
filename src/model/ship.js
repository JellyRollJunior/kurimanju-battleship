export { ship };

const ship = (length = 1) => {
    let health = length;
    const getHealth = () => health;
    const hit = () => {
        health -= 1;
    }

    return { length, getHealth, hit,};
};
