const fs = require('fs');

const logData = (fileName, data, writeStream, readStream, iterationNumber) => {
    fs.readFileSync(fileName, 'utf8', (err, jsonData) => {
        if (err) {
            throw Error('Error reading file');
        } else {
            const parsedJsonData = JSON.parse(jsonData);
            parsedJsonData.coordsData.push([data]);
            // if (!parsedJsonData.coordsData[iterationNumber]) {
            //     parsedJsonData.coordsData.push([data]);
            // } else {
            //     parsedJsonData.coordsData[iterationNumber].push(data);
            // }
            const writableData = JSON.stringify(parsedJsonData);
            
            writeStream.write( writableData, (err) => {
                if (err) throw Error('Error writing to file');
            });
        }
    });
};

module.exports = logData;
