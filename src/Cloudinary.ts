import { sha256 } from '../deps.ts';

export default class Cloudinary {
    private static instance: Cloudinary;

    cloudName: string;
    apiKey: string;
    apiSecret: string;

    private constructor(cloud: string, key: string, secret: string) {
        this.cloudName = cloud;
        this.apiKey = key;
        this.apiSecret = secret;
    }

    static config(data: {cloud_name: string, api_key: string, api_secret: string}): Cloudinary {
        if (!Cloudinary.instance) {
            Cloudinary.instance = new Cloudinary(data.cloud_name, data.api_key, data.api_secret);
        }
        return Cloudinary.instance;
    }

    upload(file): void {
        const timestamp = Math.floor(Date.now() / 1000);
        const string = `public_id=image&timestamp= ${this.apiSecret}`
        const signature = sha256(string, 'utf-8', 'hex');

        
    }



}