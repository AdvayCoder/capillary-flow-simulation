const fs = require('fs');

const logData = (fileName, data) => {
    fs.readFile(fileName, 'utf8', (err, jsonData) => {
        if (err) {
            throw Error('Error reading file');
        } else {
            const parsedJsonData = JSON.parse(jsonData);
            parsedJsonData.coordsData.push(data);
            const writableData = JSON.stringify(parsedJsonData);
            fs.writeFile(fileName, writableData, 'utf8', (err) => {
                if (err) throw Error('Error writing to file');
            });
        }
    });
};

module.exports = logData;
