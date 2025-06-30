import { Client, Databases, Storage } from "appwrite";

const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;
const DB_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const storage = new Storage(client);
const databases = new Databases(client);

function getImageUrl(fileId) {
	return `${client.config.endpoint}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${client.config.project}`;
}

export { client, storage, databases, getImageUrl, BUCKET_ID, DB_ID };
