const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DATA_DIR = path.join(__dirname, '../../data/chunks');
const BUCKET_NAME = 'austin-codes';
const CONCURRENCY = 10; // Number of parallel uploads

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function uploadFile(filePath) {
    const relativePath = path.relative(path.join(__dirname, '../../data'), filePath).replace(/\\/g, '/');
    const command = `raindrop object put "${filePath}" "${relativePath}" --bucket "${BUCKET_NAME}"`;

    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Failed to upload ${relativePath}: ${stderr}`);
                reject(error);
            } else {
                console.log(`Uploaded: ${relativePath}`);
                resolve();
            }
        });
    });
}

async function main() {
    console.log(`Scanning ${DATA_DIR}...`);
    const allFiles = await getFiles(DATA_DIR);
    console.log(`Found ${allFiles.length} files.`);

    const queue = [...allFiles];
    const active = new Set();

    while (queue.length > 0 || active.size > 0) {
        while (queue.length > 0 && active.size < CONCURRENCY) {
            const file = queue.shift();
            const promise = uploadFile(file).then(() => {
                active.delete(promise);
            }).catch(() => {
                active.delete(promise);
            });
            active.add(promise);
        }
        if (active.size > 0) {
            await Promise.race(active);
        }
    }
    console.log("All uploads complete!");
}

main();
