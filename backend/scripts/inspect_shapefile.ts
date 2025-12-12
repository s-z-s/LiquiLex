import * as shapefile from 'shapefile';
import * as fs from 'fs';
import * as path from 'path';

async function inspect() {
    const shpPath = path.resolve('..', 'data', 'austin-zones.shp');
    console.log(`Reading ${shpPath}...`);

    try {
        const source = await shapefile.open(shpPath);
        const result = await source.read();

        if (result.done) {
            console.log('Shapefile is empty.');
            return;
        }

        console.log('First Feature Properties:');
        console.log(JSON.stringify(result.value.properties, null, 2));

        console.log('\nGeometry Type:', result.value.geometry.type);
    } catch (error) {
        console.error('Error reading shapefile:', error);
    }
}

inspect();
