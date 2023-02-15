import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import connectMongo from './database/mongo.config';
import { router } from './routes/';

class Server {

    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || '3000', 10);
        this.connecionDB();
        this.middleware();
        this.routes();
    }

    private async connecionDB() {
        await connectMongo();
    }

    private middleware(): void {
        this.app.use(cors())
        this.app.use(express.json())
    }

    private routes(): void {
        this.app.use('/api', router);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on the port: ${this.port}`);
        });
    }
}

const server = new Server();
server.start();