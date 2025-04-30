import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, pool } from './db';
import * as dotenv from 'dotenv';

dotenv.config();

// Run migrations
async function runMigrations() {
  console.log('Running migrations...');
  
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations(); 