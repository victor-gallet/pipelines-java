
import * as express from 'express'
import {AppStorageClient} from "./AppStorageClient";

class App {
    public express

    constructor () {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes (): void {
        const router = express.Router();
        const appStorageClient = new AppStorageClient();
        router.get('/', async (req, res) => {
            let containersJson = new Array();
            let i = 1;
            const iter = appStorageClient.listContainers();
            let containerItem = await iter.next();
            while (!containerItem.done) {
                let containerName = containerItem.value.name;
                containersJson.push(`Container ${i++}: ${containerName}`);
                const blobs = appStorageClient.listBlob(containerName);
                let blob = await blobs.next();
                while (!blob.done) {
                    containersJson.push(`Blob ${blob.value.name}`);
                    blob = await blobs.next();
                }
                containerItem = await iter.next();
            }
            res.json(containersJson);
        })
        this.express.use('/', router)
    }
}

export default new App().express