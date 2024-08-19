import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' }); // Load environment variables

if (!process.env.DATABASE_URL) {
    console.log("Cannot find database url");
}
export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST || '',
        port: parseInt(process.env.DB_PORT || '', 10),
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
    },
} satisfies Config;