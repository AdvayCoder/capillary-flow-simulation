const getUserInput = async (message) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) =>
        readline.question(message, (res) => {
            resolve(res);
            readline.close();
        })
    );
};

module.exports = getUserInput;
