const newman = require('newman'); 
const axios = require('axios')

function execute(monitorUrl) {
    const monitorRunner = new Promise((resolve, reject) => {
        axios.get(monitorUrl).then(res => {
            newman.run({
                collection: res.data,
                reporters: 'cli'
            }, function (err, results) {
                if (err) { throw err; }
                console.log('collection run complete!');
                resolve(results);
            });
        })
        .catch(error => {
            console.error(error)
        })
    });

    return monitorRunner;
}

module.exports = execute
