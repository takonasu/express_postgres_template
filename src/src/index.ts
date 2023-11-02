import 'reflect-metadata';
import express from 'express';
import { OriginalUser } from './entity/OriginalUser';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
	.then(() => {
		// here you can start to work with your database
	})
	.catch((error) => console.log(error));
const originalUserRepo = AppDataSource.getRepository(OriginalUser);

const expressApp = async () => {
	const app: express.Express = express();
	const port = 3000;
	app.get('/', (req, res) => {
		res.sendFile(__dirname + `/html/index.html`);
	});
	app.get('/save', async (req, res) => {
		const user = new OriginalUser();
		user.appleId = 'testtest';

		res.json(await originalUserRepo.save(user));
	});
	app.get('/allData', async (req, res) => {
		res.json(await originalUserRepo.find());
	});
	app.listen(port, () => {
		console.log(`App listening on port ${port}`);
	});
};
expressApp();
