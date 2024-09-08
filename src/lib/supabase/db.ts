import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import fs from 'fs';
import path from 'path';

// Load environment variables
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.error('🔴 No database URL found in environment variables');
    process.exit(1);
}

// Initialize database client
const client = postgres(process.env.DATABASE_URL, {
    max: 1,
    timeout: 30000, // Increase the statement timeout to 30 seconds
});

// Create drizzle instance with schema
const db = drizzle(client, { schema });

// Migration function
const migrateDb = async () => {
    try {
        console.log('🟠 Migrating database');

        const migrationsPath = path.resolve('migrations');
        if (!fs.existsSync(migrationsPath)) {
            console.error('🔴 Migrations folder does not exist');
            process.exit(1);
        }

        await migrate(db, { migrationsFolder: migrationsPath });
        console.log('🟢 Migration completed successfully');
    } catch (error) {
        console.error('🔴 Error occurred during migration', error);
        process.exit(1);
    }
};

// Execute migration
migrateDb();
export default db;
