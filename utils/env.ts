import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({path: path.resolve(__dirname, 'data.env') });

export const env = {
    email: process.env.EMAIL || '',
    password: process.env.PASSWORD || '',
    baseURL: process.env.BASE_URL || '',
};