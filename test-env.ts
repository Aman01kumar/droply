import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Print DATABASE_URL to confirm it's loaded
console.log('DATABASE_URL:', process.env.DATABASE_URL);
