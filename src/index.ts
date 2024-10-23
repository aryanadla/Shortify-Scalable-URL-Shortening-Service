import 'dotenv/config';
import { onDatabaseConnect } from './config/knex';

const main = async () => {
  try {
    await onDatabaseConnect();
    console.log('Database is connected');
    // Database is ready
  } catch(e){
    console.log(e);
  }
};

main();


