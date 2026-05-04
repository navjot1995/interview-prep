import { Category, Question } from "../types";

export const databaseQuestions: Question[] = [
  {
    id: 1,
    question: "What is the difference between SQL and NoSQL?",
    answer:
      "SQL databases are relational, table-based, and use structured query language. NoSQL databases are non-relational, document-based, and can be more flexible.",
    category: "Database Types",
    difficulty: "Easy",
    codeExample: `-- SQL
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- NoSQL (MongoDB)
db.users.insert({
  _id: ObjectId(),
  name: "John"
})`,
  },
  // How to Save Data in DB
  {
    id: 1.1,
    question: "What are the different ways to save data in a database?",
    answer:
      "Data can be saved through: INSERT statements in SQL, ORM save methods (TypeORM .save(), Prisma create(), Sequelize create()), bulk inserts for performance, upserts (update or insert), import from files (CSV, JSON), database dumps, replication from other databases, and API endpoints for NoSQL databases like MongoDB's insertOne/insertMany.",
    category: "Data Operations",
    difficulty: "Medium",
    codeExample: `-- SQL INSERT
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');

-- Bulk INSERT
INSERT INTO users (name, email) VALUES 
  ('John', 'john@example.com'),
  ('Jane', 'jane@example.com');

-- Upsert (PostgreSQL)
INSERT INTO users (id, name) VALUES (1, 'John')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;

-- MongoDB
db.users.insertOne({ name: "John", email: "john@example.com" })
db.users.insertMany([{name: "John"}, {name: "Jane"}])

-- Prisma ORM
const user = await prisma.user.create({
  data: { name: 'John', email: 'john@example.com' }
});`,
  },

  // Types of Databases
  {
    id: 2,
    question:
      "Explain the different types of databases: SQL, NoSQL, and CacheDB?",
    answer:
      "SQL databases (PostgreSQL, MySQL) are relational with fixed schemas and ACID compliance. NoSQL databases include document (MongoDB), key-value (Redis), column-family (Cassandra), and graph (Neo4j) types. CacheDBs (Redis, Memcached) are in-memory stores for fast data access, used for session storage, caching, and real-time applications.",
    category: "Database Types",
    difficulty: "Easy",
    codeExample: `// SQL (PostgreSQL)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

// NoSQL (MongoDB Document)
db.users.insertOne({
  name: "John",
  email: "john@example.com",
  profile: { age: 30, city: "NYC" }
})

// NoSQL (Redis Key-Value)
SET user:123 name "John"
HSET user:123 email "john@example.com"

// CacheDB operations
redis.set('user:123', JSON.stringify(user), 'EX', 3600)
const cached = redis.get('user:123')`,
  },

  // Database Schema
  {
    id: 3,
    question: "What is a database schema and why is it important?",
    answer:
      "A database schema defines the structure of the database including tables, fields, relationships, indexes, and constraints. It serves as a blueprint for organizing data, ensuring data integrity, enforcing business rules, and optimizing queries. Schema design impacts performance, scalability, and maintainability of the application.",
    category: "Database Schema",
    difficulty: "Medium",
    codeExample: `-- SQL Schema Example
CREATE SCHEMA ecommerce;

CREATE TABLE ecommerce.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ecommerce.orders (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES ecommerce.users(id),
  total DECIMAL(10,2) CHECK (total >= 0),
  status VARCHAR(50) DEFAULT 'pending'
);

CREATE INDEX idx_orders_user ON ecommerce.orders(user_id);

// Prisma Schema
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}`,
  },

  // Schema Validation
  {
    id: 4,
    question: "What is schema validation and how to implement it?",
    answer:
      "Schema validation ensures data meets defined rules before insertion/update. Implementations: SQL constraints (CHECK, NOT NULL, UNIQUE, FOREIGN KEY), MongoDB JSON Schema validation, PostgreSQL CHECK constraints, ORM validators (class-validator, Zod), and database triggers. Validation prevents invalid data, maintains consistency, and enforces business logic at database level.",
    category: "Schema Validation",
    difficulty: "Medium",
    codeExample: `-- SQL CHECK constraints
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  price DECIMAL CHECK (price > 0),
  quantity INT CHECK (quantity >= 0),
  status VARCHAR(20) CHECK (status IN ('active', 'inactive'))
);

-- MongoDB Schema Validation
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email'],
      properties: {
        name: { bsonType: 'string', minLength: 2 },
        email: { bsonType: 'string', pattern: '^.+@.+$' },
        age: { bsonType: 'int', minimum: 0, maximum: 150 }
      }
    }
  }
});

// Zod validation with Prisma
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().positive().optional()
});`,
  },

  // ORM (Object Relational Mapping)
  {
    id: 5,
    question: "What is ORM and what are its advantages/disadvantages?",
    answer:
      "ORM (Object Relational Mapping) is a technique to map database tables to programming language objects. Popular ORMs: Prisma, TypeORM, Sequelize (Node.js), Hibernate (Java), Entity Framework (.NET). Advantages: faster development, database abstraction, query building, migration management. Disadvantages: performance overhead, complex query limitations, learning curve.",
    category: "ORM",
    difficulty: "Medium",
    codeExample: `// Prisma ORM
const user = await prisma.user.create({
  data: { email: 'user@example.com', name: 'John' },
  include: { posts: true }
});

// TypeORM
const user = new User();
user.name = "John";
await userRepository.save(user);

// Sequelize
const user = await User.create({ name: 'John' });
const users = await User.findAll({
  where: { status: 'active' },
  include: [Post]
});

// Raw SQL (without ORM)
const result = await pool.query(
  'SELECT * FROM users WHERE status = $1',
  ['active']
);`,
  },

  // Database Principles (SOLID)
  {
    id: 6,
    question: "How do SOLID principles apply to database design?",
    answer:
      "SOLID in database design: Single Responsibility (each table has one purpose), Open-Closed (extend with views, not alter tables), Liskov Substitution (subtypes usable as base types), Interface Segregation (specific views for different needs), Dependency Inversion (depend on abstractions via views/APIs). These principles lead to maintainable, scalable database architectures.",
    category: "Database Principles",
    difficulty: "Hard",
    codeExample: `-- Single Responsibility: Separate concerns
-- Bad: One table for everything
CREATE TABLE orders (
  id INT,
  customer_name VARCHAR,
  product_name VARCHAR,
  payment_info TEXT,
  shipping_address TEXT
);

-- Good: Separate tables
CREATE TABLE customers (id INT, name VARCHAR);
CREATE TABLE products (id INT, name VARCHAR);
CREATE TABLE orders (id INT, customer_id INT, product_id INT);
CREATE TABLE payments (order_id INT, info TEXT);
CREATE TABLE shipments (order_id INT, address TEXT);

-- Open-Closed: Use views for extensions
CREATE VIEW active_customers AS
SELECT * FROM customers WHERE status = 'active';

-- Interface Segregation: Specific views
CREATE VIEW customer_orders_view AS
SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;`,
  },

  // Normalization
  {
    id: 7,
    question: "What is database normalization and its normal forms?",
    answer:
      "Normalization organizes data to reduce redundancy and improve integrity. Normal forms: 1NF (atomic values, no repeating groups), 2NF (no partial dependencies), 3NF (no transitive dependencies), BCNF (every determinant is a candidate key), 4NF (no multi-valued dependencies). Denormalization increases read performance at cost of write overhead and redundancy.",
    category: "Normalization",
    difficulty: "Hard",
    codeExample: `-- Unnormalized (repeating groups)
CREATE TABLE orders (
  id INT,
  customer VARCHAR,
  product1 VARCHAR, product2 VARCHAR
);

-- 1NF (atomic values)
CREATE TABLE orders (
  id INT,
  customer VARCHAR,
  product VARCHAR
);

-- 2NF (remove partial dependencies)
-- Orders: order_id, customer
-- OrderItems: order_id, product_id, quantity

-- 3NF (remove transitive dependencies)
-- Before: Employees(dept_id, dept_name, dept_location)
-- After: Employees(dept_id), Departments(dept_id, name, location)

-- Denormalized for performance
CREATE TABLE order_summary (
  order_id INT,
  customer_name VARCHAR,
  total_items INT,
  total_amount DECIMAL
);`,
  },

  // ACID Properties
  {
    id: 8,
    question: "Explain ACID properties in database transactions?",
    answer:
      "ACID ensures reliable transaction processing: Atomicity (all or nothing), Consistency (valid state before/after), Isolation (concurrent transactions don't interfere), Durability (committed transactions persist). ACID is crucial for financial systems, banking, e-commerce, and any application requiring data integrity.",
    category: "ACID",
    difficulty: "Medium",
    codeExample: `-- ACID in action
BEGIN TRANSACTION;

-- Atomic: Both operations complete or none
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Check consistency
SELECT * FROM accounts WHERE balance < 0; -- Should return none

-- Isolation levels
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Durable: Commit makes changes permanent
COMMIT;

-- Rollback on error
ROLLBACK;

-- Save points
SAVEPOINT before_update;
UPDATE accounts SET balance = 0;
ROLLBACK TO SAVEPOINT before_update;`,
  },

  // BASE Transactions
  {
    id: 9,
    question: "What is BASE transaction model and how it differs from ACID?",
    answer:
      "BASE (Basically Available, Soft state, Eventual consistency) is used in NoSQL databases for scalability. Basically Available: system always responds, Soft state: state may change without input, Eventual consistency: system becomes consistent over time. BASE suits distributed systems, social media, analytics where absolute consistency isn't critical. Trade-off: availability vs consistency (CAP theorem).",
    category: "BASE",
    difficulty: "Hard",
    codeExample: `// BASE implementation (MongoDB)
// Basically Available - Write concerns
db.collection.insertOne(
  { name: "John" },
  { writeConcern: { w: 1, j: false } } // Acknowledge only primary
);

// Soft state - TTL indexes
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
);

// Eventual consistency - Replica sets
// Primary handles writes, secondaries catch up
rs.slaveOk(); // Allow reading from secondaries

// CAP Theorem trade-offs
// CP (Consistency + Partition tolerance): Traditional SQL
// AP (Availability + Partition tolerance): DynamoDB, Cassandra
// CA (Consistency + Availability): Not possible in distributed systems

// Example: Eventual consistency in practice
async function updateUserBalance(userId, amount) {
  // Write to primary (async)
  await db.users.updateOne(
    { _id: userId },
    { $inc: { balance: amount } },
    { writeConcern: { w: 1 } } // Just acknowledge
  );
  
  // Read might be from secondary (stale data possible)
  const user = await db.users.findOne(
    { _id: userId },
    { readPreference: 'secondary' }
  );
}`,
  },

  // Database Transactions
  {
    id: 10,
    question: "What are database transactions and how to manage them?",
    answer:
      "Database transactions group multiple operations into a single unit of work. Management includes: BEGIN/COMMIT/ROLLBACK statements, savepoints for partial rollbacks, isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable), optimistic/pessimistic locking, and distributed transactions (2PC, Saga pattern) for microservices.",
    category: "Transactions",
    difficulty: "Hard",
    codeExample: `-- Basic transaction
BEGIN;
  INSERT INTO orders (user_id) VALUES (1);
  INSERT INTO order_items (order_id, product_id) VALUES (LAST_INSERT_ID(), 100);
COMMIT;

-- With savepoints
BEGIN;
  INSERT INTO inventory (product_id, qty) VALUES (100, 10);
  SAVEPOINT before_order;
  INSERT INTO orders (user_id) VALUES (1);
  -- On error, rollback to savepoint
  ROLLBACK TO SAVEPOINT before_order;
COMMIT;

-- Optimistic locking
UPDATE products 
SET quantity = quantity - 1, version = version + 1
WHERE id = 100 AND version = 5;

-- Pessimistic locking
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;

-- Prisma transaction
await prisma.$transaction([
  prisma.user.create({ data: { email: 'test@test.com' } }),
  prisma.profile.create({ data: { userId: 1 } })
]);`,
  },

  // Cursor
  {
    id: 11,
    question: "What is a database cursor and when to use it?",
    answer:
      "A cursor is a database object that allows row-by-row processing of query results. Use cases: batch processing large datasets, complex row-by-row operations, data migration scripts, reporting. Cursors can be forward-only or scrollable, read-only or updatable. They're slower than set-based operations but necessary for row-level logic.",
    category: "Cursors",
    difficulty: "Medium",
    codeExample: `-- PostgreSQL cursor
BEGIN;
DECLARE user_cursor CURSOR FOR 
  SELECT id, name FROM users WHERE status = 'pending';

FETCH NEXT FROM user_cursor;
FETCH PRIOR FROM user_cursor;
FETCH ABSOLUTE 5 FROM user_cursor;

LOOP
  FETCH user_cursor INTO user_id, user_name;
  EXIT WHEN NOT FOUND;
  -- Process each row
  UPDATE users SET processed = true WHERE id = user_id;
END LOOP;

CLOSE user_cursor;
COMMIT;

-- MongoDB cursor
const cursor = db.users.find({ status: 'pending' });
while (cursor.hasNext()) {
  const user = cursor.next();
  // Process user
}

// Node.js cursor with streams
const stream = db.collection('users').find().stream();
stream.on('data', (doc) => console.log(doc));`,
  },

  // Database Scaling
  {
    id: 12,
    question: "What are different database scaling strategies?",
    answer:
      "Scaling strategies: Vertical scaling (add more resources to single server), Horizontal scaling (add more servers), Read replicas (distribute read queries), Connection pooling (manage database connections), Query optimization, Caching layer (Redis/Memcached), Partitioning (splitting tables), and Database proxies (PgBouncer, ProxySQL). Choose based on read/write ratio, data size, and budget.",
    category: "Scaling",
    difficulty: "Hard",
    codeExample: `-- Read replicas configuration (PostgreSQL)
-- Primary server
wal_level = replica
max_wal_senders = 10

-- Replica server
primary_conninfo = 'host=primary port=5432'

-- Connection pooling with PgBouncer
[databases]
mydb = host=localhost port=5432 dbname=mydb

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20

-- Application-level read/write splitting
const pool = {
  write: new Pool({ host: 'primary-db' }),
  read: new Pool({ host: 'replica-db' })
};

async function getUser(id) {
  return await pool.read.query('SELECT * FROM users WHERE id = $1', [id]);
}

async function updateUser(id, name) {
  return await pool.write.query('UPDATE users SET name = $1 WHERE id = $2', [name, id]);
}`,
  },

  // Sharding
  {
    id: 13,
    question: "What is database sharding and how to implement it?",
    answer:
      "Sharding horizontally partitions data across multiple databases. Strategies: Range-based (by date, ID ranges), Hash-based (consistent hashing), Directory-based (lookup service), Geographic (by region). Implementation includes application-level sharding, database-native (MongoDB sharding, Citus for PostgreSQL), or proxy-based (Vitess, ShardSphere). Challenges: cross-shard queries, rebalancing, joins.",
    category: "Sharding",
    difficulty: "Hard",
    codeExample: `// Hash-based sharding
function getShard(userId) {
  const shardCount = 4;
  const shardId = userId % shardCount;
  return \`db_shard_\${shardId}\`;
}

// Range-based sharding
// Shard 1: IDs 1-10000
// Shard 2: IDs 10001-20000
const shard = userId <= 10000 ? 'shard1' : 'shard2';

// MongoDB sharding
sh.enableSharding("myapp")
sh.shardCollection("myapp.users", { "user_id": "hashed" })

// Application-level routing
class ShardedDB {
  constructor() {
    this.shards = {
      shard1: new Pool({ host: 'db1' }),
      shard2: new Pool({ host: 'db2' })
    };
  }
  
  async saveUser(user) {
    const shardKey = this.getShardKey(user.id);
    return this.shards[shardKey].query(
      'INSERT INTO users VALUES ($1, $2)',
      [user.id, user.name]
    );
  }
}

// Consistent hashing
const hashRing = require('hash-ring');
const ring = new hashRing(['shard1', 'shard2', 'shard3', 'shard4']);
const shard = ring.getNode(userId.toString());`,
  },

  // Replica Set
  {
    id: 14,
    question: "What is a database replica set and how does it work?",
    answer:
      "A replica set is a group of database servers maintaining the same data set, providing redundancy and high availability. Components: Primary (handles writes), Secondaries (replicate from primary), Arbiter (votes in elections). Replication can be synchronous (all replicas confirm) or asynchronous. Automatic failover elects new primary if current primary fails.",
    category: "Replication",
    difficulty: "Hard",
    codeExample: `-- PostgreSQL replication config (primary)
# postgresql.conf
wal_level = replica
max_wal_senders = 10
wal_keep_segments = 32

# pg_hba.conf
host replication replicator 192.168.1.0/24 md5

-- Replica setup
pg_basebackup -h primary_ip -D /var/lib/postgresql/data -U replicator -P

# recovery.conf on replica
standby_mode = 'on'
primary_conninfo = 'host=primary_ip port=5432 user=replicator'

-- MongoDB replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb1:27017", priority: 2 },
    { _id: 1, host: "mongodb2:27017", priority: 1 },
    { _id: 2, host: "mongodb3:27017", priority: 1, arbiterOnly: true }
  ]
});

-- Check replication status
rs.status()
rs.conf()

-- Force failover
rs.stepDown()
rs.reconfig(config)`,
  },

  // Indexing
  {
    id: 15,
    question: "What are database indexes and how to optimize them?",
    answer:
      "Indexes are data structures (B-trees, hash tables, inverted indexes) that speed up data retrieval. Types: Primary, Unique, Composite, Full-text, Spatial, Partial, Covering. Best practices: index frequently queried columns, avoid over-indexing (slows writes), use EXPLAIN to analyze queries, consider index order in composite indexes, and maintain indexes (rebuild/reindex regularly).",
    category: "Indexing",
    difficulty: "Hard",
    codeExample: `-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);
CREATE INDEX idx_users_lower_email ON users(LOWER(email));
CREATE INDEX idx_orders_status_partial ON orders(order_date) 
  WHERE status = 'pending';
CREATE INDEX CONCURRENTLY idx_users_name ON users(name);

-- Full-text index
CREATE INDEX idx_posts_content ON posts USING GIN(to_tsvector('english', content));

-- B-tree, Hash, GiST indexes
CREATE INDEX idx_hash ON users USING HASH (email);
CREATE INDEX idx_gist ON locations USING GIST (coordinates);

-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';

-- Composite index best practice
-- Good: (user_id, created_at) for WHERE user_id = ? ORDER BY created_at
-- Bad: (created_at, user_id) for same query

-- Index maintenance
REINDEX INDEX idx_users_email;
REINDEX TABLE users;`,
  },

  // SQL vs NoSQL
  {
    id: 16,
    question: "When to use SQL vs NoSQL databases?",
    answer:
      "Use SQL when: data integrity critical (financial, banking), complex queries and joins needed, structured data with fixed schema, ACID compliance required, reporting and analytics. Use NoSQL when: high scalability needed, flexible schema, large volumes of simple data, real-time applications, caching/session storage, document-oriented data (CMS, catalogs). Many apps use both (polyglot persistence).",
    category: "SQL vs NoSQL",
    difficulty: "Medium",
    codeExample: `// SQL (PostgreSQL) use cases
-- Financial transaction (ACID required)
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- Complex reporting (joins needed)
SELECT 
  c.name, 
  COUNT(o.id) as order_count,
  SUM(o.total) as total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id;

// NoSQL (MongoDB) use cases
// Content management (flexible schema)
db.articles.insertOne({
  title: "My Post",
  content: "...",
  tags: ["tech", "javascript"], // Array
  metadata: {                  // Embedded object
    views: 1000,
    likes: 50
  }
});

// Real-time analytics (high write speed)
db.events.insertOne({
  type: "page_view",
  userId: 123,
  timestamp: Date.now(),
  page: "/home"
});

// Hybrid approach
const userProfile = {
  // Relational data in SQL
  sqlData: { id: 1, email: 'user@example.com' },
  // Flexible data in NoSQL
  nosqlData: { preferences: {}, activityLog: [] }
};`,
  },

  // Vector Database
  {
    id: 17,
    question: "What is a Vector Database and when to use it?",
    answer:
      "Vector databases are designed to store and query high-dimensional vectors, enabling similarity search and semantic operations. Use cases: AI/ML embeddings, recommendation systems, image/audio similarity search, NLP semantic search, anomaly detection. Popular vector DBs: Pinecone, Weaviate, Qdrant, Milvus, pgvector (PostgreSQL extension).",
    category: "Vector DB",
    difficulty: "Hard",
    codeExample: `-- pgvector (PostgreSQL)
CREATE EXTENSION vector;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding VECTOR(1536)  -- OpenAI embeddings dimension
);

-- Similarity search
SELECT content, 1 - (embedding <=> '[0.1, 0.2, ...]') as similarity
FROM items
ORDER BY embedding <=> '[0.1, 0.2, ...]'
LIMIT 5;

-- Create index for performance
CREATE INDEX idx_items_embedding ON items 
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

// Pinecone (managed vector DB)
import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({ apiKey: 'your-key' });
const index = pc.index('my-index');

// Upsert vectors
await index.upsert([{
  id: 'doc-1',
  values: [0.1, 0.2, 0.3, ...], // Vector embedding
  metadata: { text: 'Sample document' }
}]);

// Query similar vectors
const results = await index.query({
  vector: [0.15, 0.25, 0.35, ...],
  topK: 10,
  includeMetadata: true
});

// Similarity metrics
// Cosine similarity: dot product of normalized vectors
// Euclidean distance: straight-line distance
// Dot product: raw dot product for normalized vectors`,
  },
  // Database Migration
  {
    id: 18,
    question: "What are database migrations and how to manage them?",
    answer:
      "Database migrations are version-controlled changes to database schema. Tools: Prisma Migrate, TypeORM migrations, Flyway, Liquibase, Alembic (Python), Knex.js. Best practices: migrations should be idempotent, versioned in source control, testable, reversible (up/down methods). Include schema changes, data migrations, seeding, and rollback plans.",
    category: "Migrations",
    difficulty: "Medium",
    codeExample: `-- Prisma migration
// schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}

// Generate migration
npx prisma migrate dev --name add_user_email

// Migration SQL output
-- migration.sql
CREATE TABLE "User" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- TypeORM migration
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1234567890 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(\`
      CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
      )
    \`);
  }
  
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(\`DROP TABLE users\`);
  }
}

// Run migrations
npx prisma migrate deploy
npm run typeorm migration:run

// Data migration example
-- Migrate data safely
BEGIN;
  -- Add new column
  ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
  
  -- Migrate existing data
  UPDATE users SET full_name = CONCAT(first_name, ' ', last_name);
  
  -- Remove old columns
  ALTER TABLE users DROP COLUMN first_name, DROP COLUMN last_name;
COMMIT;`,
  },

  // Database Seeding
  {
    id: 19,
    question: "What is database seeding and best practices?",
    answer:
      "Database seeding is populating database with initial/default data. Use cases: development environment setup, testing data, reference data (countries, currencies), demo data, production configuration data. Best practices: make seeds idempotent, use factories for fake data, separate seed types (dev, test, prod), version control seed data, and clean up after tests.",
    category: "Seeding",
    difficulty: "Medium",
    codeExample: `// Prisma seed
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Bulk insert with upsert
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      role: 'ADMIN'
    }
  });
  
  // Seed with factory
  const users = Array.from({ length: 10 }).map((_, i) => ({
    email: \`user\${i}@example.com\`,
    name: \`User \${i}\`
  }));
  
  await prisma.user.createMany({ data: users });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());

// Package.json script
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}

// TypeORM seed
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateUsers implements Seeder {
  async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(10);
  }
}

// Factory definition
factory(User)(faker => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  age: faker.datatype.number({ min: 18, max: 99 })
}));

// Separate seed environments
// seeds/dev/users.ts
// seeds/test/users.ts
// seeds/prod/reference-data.ts

// Run seeds
npx prisma db seed
npm run seed:dev
npm run seed:test`,
  },

  // CAP Theorem
  {
    id: 20,
    question:
      "Explain CAP Theorem and its implications for distributed databases?",
    answer:
      "CAP theorem states distributed systems can only guarantee two of three: Consistency (all nodes see same data), Availability (every request gets response), Partition tolerance (system works despite network failures). Real-world examples: CP systems (HBase, MongoDB with strong consistency), AP systems (Cassandra, DynamoDB), CA systems (traditional SQL, but can't survive partitions). Choose based on use case: banking needs CP, social media can be AP.",
    category: "CAP Theorem",
    difficulty: "Hard",
    codeExample: `// CP System (MongoDB with majority write concern)
db.collection.insertOne(
  { name: "John" },
  { writeConcern: { w: "majority", j: true } }
);

// AP System (Cassandra)
// Tune consistency for availability
CONSISTENCY ONE;  // Fast but may be stale
CONSISTENCY QUORUM;  // Balance
CONSISTENCY ALL;  // Slow but consistent

// Eventual consistency in practice
async function updateSocialMedia(userId, post) {
  // Write - fast, may not be immediately consistent
  await db.posts.insert({ userId, post, timestamp: Date.now() });
  
  // Read - might not see the write immediately
  const posts = await db.posts.find({ userId })
    .readPreference('secondary')
    .toArray();
}

// PACELC theorem extension
// Partition (P) then trade-off between A and C
// Else (E) then trade-off between L (latency) and C (consistency)
// DynamoDB: P/A + E/L
// Spanner: P/C + E/C

// Choose based on requirements
const dbConfig = {
  // Banking/finance (choose Consistency)
  finance: { cp: true, consistency: 'strong' },
  
  // Social/real-time (choose Availability)
  social: { ap: true, consistency: 'eventual' },
  
  // E-commerce inventory (choose Consistency for stock)
  inventory: { cp: true, consistency: 'strong' }
};`,
  },
];

export const categories = [
  {
    id: "all",
    name: "All Questions",
    icon: "📚",
    count: databaseQuestions.length,
  },
  {
    id: "data-operations",
    name: "Data Operations",
    icon: "💾",
    count: databaseQuestions.filter((q) => q.category === "Data Operations")
      .length,
  },
  {
    id: "database-types",
    name: "Database Types",
    icon: "🗄️",
    count: databaseQuestions.filter((q) => q.category === "Database Types")
      .length,
  },
  {
    id: "database-schema",
    name: "Database Schema",
    icon: "📐",
    count: databaseQuestions.filter((q) => q.category === "Database Schema")
      .length,
  },
  {
    id: "schema-validation",
    name: "Schema Validation",
    icon: "✅",
    count: databaseQuestions.filter((q) => q.category === "Schema Validation")
      .length,
  },
  {
    id: "orm",
    name: "ORM",
    icon: "🔄",
    count: databaseQuestions.filter((q) => q.category === "ORM").length,
  },
  {
    id: "database-principles",
    name: "Database Principles",
    icon: "⚙️",
    count: databaseQuestions.filter((q) => q.category === "Database Principles")
      .length,
  },
  {
    id: "normalization",
    name: "Normalization",
    icon: "📊",
    count: databaseQuestions.filter((q) => q.category === "Normalization")
      .length,
  },
  {
    id: "acid",
    name: "ACID",
    icon: "🔒",
    count: databaseQuestions.filter((q) => q.category === "ACID").length,
  },
  {
    id: "base",
    name: "BASE",
    icon: "🌐",
    count: databaseQuestions.filter((q) => q.category === "BASE").length,
  },
  {
    id: "transactions",
    name: "Transactions",
    icon: "💰",
    count: databaseQuestions.filter((q) => q.category === "Transactions")
      .length,
  },
  {
    id: "cursors",
    name: "Cursors",
    icon: "🖱️",
    count: databaseQuestions.filter((q) => q.category === "Cursors").length,
  },
  {
    id: "scaling",
    name: "Scaling",
    icon: "📈",
    count: databaseQuestions.filter((q) => q.category === "Scaling").length,
  },
  {
    id: "sharding",
    name: "Sharding",
    icon: "🔪",
    count: databaseQuestions.filter((q) => q.category === "Sharding").length,
  },
  {
    id: "replication",
    name: "Replication",
    icon: "🔄",
    count: databaseQuestions.filter((q) => q.category === "Replication").length,
  },
  {
    id: "indexing",
    name: "Indexing",
    icon: "📑",
    count: databaseQuestions.filter((q) => q.category === "Indexing").length,
  },
  {
    id: "sql-vs-nosql",
    name: "SQL vs NoSQL",
    icon: "⚔️",
    count: databaseQuestions.filter((q) => q.category === "SQL vs NoSQL")
      .length,
  },
  {
    id: "vector-db",
    name: "Vector DB",
    icon: "🧮",
    count: databaseQuestions.filter((q) => q.category === "Vector DB").length,
  },
  {
    id: "migrations",
    name: "Migrations",
    icon: "🚚",
    count: databaseQuestions.filter((q) => q.category === "Migrations").length,
  },
  {
    id: "seeding",
    name: "Seeding",
    icon: "🌱",
    count: databaseQuestions.filter((q) => q.category === "Seeding").length,
  },
  {
    id: "cap-theorem",
    name: "CAP Theorem",
    icon: "🎩",
    count: databaseQuestions.filter((q) => q.category === "CAP Theorem").length,
  },
];
