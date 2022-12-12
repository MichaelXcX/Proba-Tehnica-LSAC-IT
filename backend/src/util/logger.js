const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');
const fs = require('fs');

// E foarte bine sa faci logging, dar nu stiu cat de mult il folosesti aici,
// Daca vrei sa aflii mai multe despre partea asta de logging poti sa citesti despre Loki: 
// https://grafana.com/blog/2022/07/07/how-to-configure-grafana-loki-with-a-node.js-e-commerce-app/

// log directory path
const logDirectory = path.resolve(__dirname, '../../log');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory
})

module.exports = {
    dev: morgan('dev'),
    combined: morgan('combined', { stream: accessLogStream })
}