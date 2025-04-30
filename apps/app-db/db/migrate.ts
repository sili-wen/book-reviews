import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, pool } from './index';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

// Get absolute path to migrations folder
const migrationsFolder = path.join(__dirname, 'migrations');

// Run migrations
async function runMigrations() {
  console.log('Running migrations...');
  console.log(`Using migrations from: ${migrationsFolder}`);
  
  try {
    await migrate(db, { migrationsFolder });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations(); 