const { Client } = require("pg");
require("dotenv").config();

// Set up script to populate messages

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log("Seeding...");

    await client.connect();
    await client.query(`CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
message VARCHAR(255), 
name VARCHAR(20),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);
    await client.query(`INSERT INTO messages (message, name, created_at)
VALUES
('It takes courage to grow up and become who you really are.', 'E.E. Cummings', '2024-10-02 14:21:44.508262' ),
('It always seems impossible until it''s done.', 'Nelson Mandela', '2024-10-10 14:58:44.502762');
`);
    console.log("Done.");
  } catch (error) {
    console.error("Error during seeding: ", error);
  } finally {
    await client.end();
  }
}

main();
