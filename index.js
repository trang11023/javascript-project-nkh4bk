const { processData } = require('./utils');

async function main() {
    const config = require('../config/config.json');
    const data = await processData(config.dataPath);
    console.log(`Processed ${data.length} records`);
}

main().catch(console.error);
