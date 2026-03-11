// Using config
// import { Client } from 'pg';

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'mydb_test',
//   password: 'Kisanjena@123',
//   port: 5432,
// });

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log('Connected to PostgreSQL');

//     const res = await client.query('SELECT * FROM users_test');
//     console.log(res.rows);
//   } catch (err) {
//     console.error('Database connection error:', err);
//   } finally {
//     await client.end();
//   }
// }

// connectDB();

// Using connection string

import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:Kisanjena%40123@localhost:5432/mydb_test';

const pool = new Pool({
  connectionString: connectionString,
});

async function testDB() {
  try {
    const result = await pool.query('SELECT * FROM users_test');
    console.log(result);
    console.log("-------------------");
    console.log(result.rows);
  } catch (err) {
    console.error('Error:', err);
  }
}

testDB();