const newman = require('newman'); 
const axios = require('axios')

function execute(collection_url) {
    const monitorRunner = new Promise((resolve, reject) => {
        axios.get(collection_url).then(res => {
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
