const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

console.log('DATABASE_URL:', process.env.DATABASE_URL);
