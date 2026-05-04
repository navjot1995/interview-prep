import { Category, Question } from "../types";

export const systemDesignQuestions: Question[] = [
  {
    id: 1,
    question: "What is System Design?",
    answer:
      "System design is the process of defining the architecture, components, modules, interfaces, and data flow of a system to meet specific requirements.",
    category: "Basics",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "What is scalability?",
    answer:
      "Scalability is the ability of a system to handle increased load by adding resources (horizontal or vertical scaling).",
    category: "Fundamentals",
    difficulty: "Easy",
  },
  {
    id: 3,
    question: "Horizontal vs Vertical scaling?",
    answer:
      "Vertical scaling adds more power (CPU/RAM) to a single machine, while horizontal scaling adds more machines to distribute load.",
    category: "Fundamentals",
    difficulty: "Easy",
  },
  {
    id: 4,
    question: "What is load balancing?",
    answer:
      "Load balancing distributes incoming traffic across multiple servers to ensure reliability and high availability.",
    category: "Architecture",
    difficulty: "Medium",
  },
  {
    id: 5,
    question: "What is caching?",
    answer:
      "Caching stores frequently accessed data in memory to reduce latency and improve performance.",
    category: "Performance",
    difficulty: "Easy",
  },
  {
    id: 6,
    question: "What is CDN?",
    answer:
      "A Content Delivery Network (CDN) distributes content across geographically distributed servers to reduce latency and improve performance.",
    category: "Performance",
    difficulty: "Medium",
  },
  {
    id: 7,
    question: "What is database sharding?",
    answer:
      "Sharding splits a large database into smaller, faster, more manageable pieces across multiple servers.",
    category: "Database",
    difficulty: "Medium",
  },
  {
    id: 8,
    question: "What is replication?",
    answer:
      "Replication is copying data across multiple databases to improve availability and fault tolerance.",
    category: "Database",
    difficulty: "Medium",
  },
  {
    id: 9,
    question: "CAP theorem?",
    answer:
      "CAP theorem states that a distributed system can guarantee only two of the following: Consistency, Availability, and Partition tolerance.",
    category: "Concepts",
    difficulty: "Hard",
  },
  {
    id: 10,
    question: "What is eventual consistency?",
    answer:
      "Eventual consistency means that all nodes will become consistent over time, even if they are temporarily inconsistent.",
    category: "Concepts",
    difficulty: "Medium",
  },
  {
    id: 11,
    question: "What is rate limiting?",
    answer:
      "Rate limiting restricts the number of requests a user can make in a given time to prevent abuse.",
    category: "Security",
    difficulty: "Medium",
  },
  {
    id: 12,
    question: "What is API Gateway?",
    answer:
      "An API Gateway is a single entry point that manages requests, routing, authentication, and rate limiting in microservices architecture.",
    category: "Architecture",
    difficulty: "Medium",
  },
  {
    id: 13,
    question: "Monolith vs Microservices?",
    answer:
      "Monolith is a single unified application, while microservices split functionality into independent services.",
    category: "Architecture",
    difficulty: "Medium",
  },
  {
    id: 14,
    question: "What is message queue?",
    answer:
      "A message queue allows asynchronous communication between services using messages.",
    category: "Architecture",
    difficulty: "Medium",
  },
  {
    id: 15,
    question: "Design a URL Shortener (like Bitly).",
    answer:
      "Use hashing for short IDs, database for mapping, caching for fast lookup, and load balancer for scalability.",
    category: "Design Problems",
    difficulty: "Hard",
    codeExample: `
Client → Load Balancer → App Server → DB
                  ↓
                Cache
`,
  },
  {
    id: 16,
    question: "Design a chat system.",
    answer:
      "Use WebSockets for real-time communication, message queue for delivery, and database for persistence.",
    category: "Design Problems",
    difficulty: "Hard",
  },
  {
    id: 17,
    question: "What is database indexing?",
    answer:
      "Indexing improves query performance by creating a data structure that allows faster lookup.",
    category: "Database",
    difficulty: "Easy",
  },
  {
    id: 18,
    question: "What is fault tolerance?",
    answer:
      "Fault tolerance is the ability of a system to continue operating even when some components fail.",
    category: "Reliability",
    difficulty: "Medium",
  },
  {
    id: 19,
    question: "What is high availability?",
    answer:
      "High availability ensures that a system remains operational with minimal downtime.",
    category: "Reliability",
    difficulty: "Medium",
  },
  {
    id: 20,
    question: "What is distributed system?",
    answer:
      "A distributed system consists of multiple independent machines working together as a single system.",
    category: "Basics",
    difficulty: "Easy",
  },
];

export const systemDesignCategories: Category[] = [
  { id: "all", name: "All", icon: "🧠", count: systemDesignQuestions.length },
  { id: "basics", name: "Basics", icon: "📘", count: 2 },
  { id: "fundamentals", name: "Fundamentals", icon: "⚙️", count: 2 },
  { id: "architecture", name: "Architecture", icon: "🏗️", count: 4 },
  { id: "performance", name: "Performance", icon: "⚡", count: 2 },
  { id: "database", name: "Database", icon: "🗄️", count: 3 },
  { id: "concepts", name: "Concepts", icon: "📊", count: 2 },
  { id: "security", name: "Security", icon: "🔐", count: 1 },
  { id: "reliability", name: "Reliability", icon: "🛡️", count: 2 },
  { id: "design", name: "Design Problems", icon: "🧩", count: 2 },
];