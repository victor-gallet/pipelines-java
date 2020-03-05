import {BlobServiceClient, StorageSharedKeyCredential} from "@azure/storage-blob";

import * as dotenv from "dotenv";
dotenv.config();

export class AppStorageClient {

    private blobServiceClient: BlobServiceClient;

    constructor() {
        const account = process.env.ACCOUNT_NAME || "";
        const accountKey = process.env.ACCOUNT_KEY || "";

        // Use StorageSharedKeyCredential with storage account and account key
        // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
        const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

        this.blobServiceClient = new BlobServiceClient(
            // When using AnonymousCredential, following url should include a valid SAS or support public access
            `https://${(account)}.blob.core.windows.net`,
            sharedKeyCredential
        );
    }

    public listContainers() {
        // let i = 1;
        // let containers = new Array();
        // for await (const container of this.blobServiceClient.listContainers()) {
        //     console.log(`Container ${i++}: ${container.name}`);
        //     containers.push(`Container ${i++}: ${container.name}`);
        // }
        //
        // return containers;
        return this.blobServiceClient.listContainers();
    }

    listBlob(containerName: string) {
        return this.blobServiceClient.getContainerClient(containerName).listBlobsFlat();
    }
}