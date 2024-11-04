const fs = require('fs');
const path = require('path');

const filePath = './data/tasks.json';

exports.writeTasksToFile = (tasks) => {
    if (Array.isArray(tasks) && tasks.length === 0) {
        fs.writeFileSync(filePath, '[]');
    } else {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    }
}