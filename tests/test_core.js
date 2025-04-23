const { processData } = require('../src/utils');

test('processData returns 100 records', async () => {
    const data = await processData('dummy_path');
    expect(data.length).toBe(100);
});
