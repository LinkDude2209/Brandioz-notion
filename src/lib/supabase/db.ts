import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import fs from 'fs';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log('🔴 no database URL');
    process.exit(1);
}

const client = postgres(process.env.DATABASE_URL as string, {
    max: 1,
    timeout: 30000, // Increase the statement timeout to 30 seconds
});

const db = drizzle(client, { schema });

const migrateDb = async () => {
    try {
        console.log('🟠 Migrating client');
        if (!fs.existsSync('migrations')) {
            console.log('🔴 Migrations folder does not exist');
            process.exit(1);
        }
        await migrate(db, { migrationsFolder: 'migrations' });
        console.log('🟢 Successfully Migrated');
    } catch (error) {
        console.log('🔴 Error Migrating client', error);
        process.exit(1);
    }
};

migrateDb();
export default db;