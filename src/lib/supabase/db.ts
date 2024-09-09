import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: '.env' });

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
    console.error('🔴 No database URL found in environment variables');
    process.exit(1);
}

// Initialize database client
const client = postgres(DATABASE_URL, {
    max: 1,           // Limit to 1 connection
    timeout: 30000,   // Increase the statement timeout to 30 seconds
});

// Create drizzle instance with schema
export const db = drizzle(client, { schema }); // Named export of 'db'

// Migration function
export const migrateDb = async (): Promise<void> => {
    try {
        console.log('🟠 Starting database migration');

        const migrationsPath = path.resolve('migrations'); // Resolve path to migrations folder
        if (!fs.existsSync(migrationsPath)) {
            console.error('🔴 Migrations folder does not exist');
            process.exit(1);
        }

        // Run migrations
        await migrate(db, { migrationsFolder: migrationsPath });
        console.log('🟢 Migration completed successfully');
    } catch (error) {
        console.error('🔴 Error occurred during migration:', error);
        process.exit(1);
    }
};

// Execute migration
migrateDb().catch((err) => {
    console.error('🔴 Migration failed with an unexpected error:', err);
    process.exit(1);
});
