import { Question } from '../types';

export const dockerQuestions: Question[] = [
  // Docker Overview
  {
    id: 1,
    question: "What is Docker and how does it differ from virtual machines?",
    answer: "Docker is a containerization platform that packages applications and dependencies into isolated containers. Unlike VMs that virtualize hardware, containers virtualize the operating system, sharing the host OS kernel. This makes containers lightweight, faster to start, and more efficient in resource usage compared to traditional VMs.",
    category: "Docker Basics",
    difficulty: "Easy",
    codeExample: `# Docker container (lightweight, seconds to start)
docker run -d nginx

# VM comparison:
# - VM: GBs in size, minutes to start
# - Container: MBs in size, seconds to start
# - VM: Full OS per VM
# - Container: Shares host OS kernel`
  },
  
  // Docker Images
  {
    id: 2,
    question: "What are Docker images and how are they structured?",
    answer: "Docker images are read-only templates containing application code, libraries, dependencies, and configuration files to run a container. Images are built in layers using a Dockerfile, with each instruction creating a new layer. Layers are cached and reused, making builds faster and storage efficient.",
    category: "Docker Images",
    difficulty: "Medium",
    codeExample: `# Dockerfile showing layers
FROM node:18-alpine  # Base layer
WORKDIR /app         # Layer 2
COPY package*.json ./ # Layer 3
RUN npm install      # Layer 4
COPY . .            # Layer 5
CMD ["npm", "start"] # Final layer

# Image commands
docker images                     # List images
docker build -t myapp:latest .    # Build image
docker image history myapp:latest # Show layers
docker image inspect myapp        # Image details`
  },
  
  // Docker Containers
  {
    id: 3,
    question: "What is a Docker container and its lifecycle?",
    answer: "A Docker container is a runnable instance of a Docker image. Lifecycle states: created, running, paused, stopped, deleted, and killed. Containers are isolated but can communicate through networks, volumes, or environment variables. Each container has its own filesystem, networking, and process space.",
    category: "Docker Containers",
    difficulty: "Medium",
    codeExample: `# Container lifecycle commands
docker create nginx          # Created state
docker start container_id    # Running state
docker pause container_id    # Paused state
docker unpause container_id  # Unpause
docker stop container_id     # Stopped state
docker kill container_id     # Force stop
docker rm container_id       # Deleted state

# Container management
docker ps                    # List running containers
docker ps -a                 # List all containers
docker logs container_id     # View logs
docker exec -it container_id bash  # Execute inside container
docker stats container_id    # Resource usage`
  },
  
  // Docker Build
  {
    id: 4,
    question: "How to build Docker images efficiently?",
    answer: "Efficient Docker builds involve: ordering layers from least to most frequently changed, using multi-stage builds to reduce image size, leveraging build cache, minimizing layers by combining RUN commands, using .dockerignore files, and choosing appropriate base images (alpine for smaller size).",
    category: "Docker Build",
    difficulty: "Hard",
    codeExample: `# Efficient Dockerfile
# Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm prune --production

# Build with cache optimization
docker build -t myapp:latest .
docker build --no-cache -t myapp:latest .  # Disable cache
docker build --build-arg VERSION=1.0 -t myapp .  # Build args

# .dockerignore file
node_modules/
.git/
*.log
Dockerfile
.dockerignore`
  },
  
  // Docker Pull
  {
    id: 5,
    question: "What does 'docker pull' do and how to optimize pulls?",
    answer: "Docker pull downloads Docker images from a registry (Docker Hub by default). It pulls layers in parallel, reusing existing layers locally. Optimizations include: using specific tags instead of 'latest', pulling from private registries with authentication, using image caching, and implementing pull-through caches for CI/CD.",
    category: "Docker Pull",
    difficulty: "Easy",
    codeExample: `# Pull commands
docker pull nginx                    # Pull latest
docker pull nginx:1.21              # Pull specific tag
docker pull registry.example.com/app:latest  # Private registry

# Authenticated pulls
docker login
docker pull private/repo:tag

# Pull all tags
docker pull -a nginx

# Pull with platform
docker pull --platform linux/amd64 nginx

# Quiet pull
docker pull -q nginx

# Optimize in CI/CD
docker pull myapp:cache || true
docker build --cache-from myapp:cache -t myapp:latest .`
  },
  
  // Docker Push
  {
    id: 6,
    question: "How to push Docker images to registries?",
    answer: "Docker push uploads local images to container registries like Docker Hub, Amazon ECR, Google Container Registry, or Azure Container Registry. Push requires tagging images with registry URL, authentication, and proper permissions. Optimize by pushing only necessary layers and using CI/CD automation.",
    category: "Docker Push",
    difficulty: "Medium",
    codeExample: `# Tag and push to Docker Hub
docker tag myapp:latest username/myapp:v1.0
docker push username/myapp:v1.0

# Push to private registry
docker tag myapp localhost:5000/myapp
docker push localhost:5000/myapp

# Push with multiple tags
docker tag myapp username/myapp:latest
docker tag myapp username/myapp:v1.0
docker push username/myapp --all-tags

# Authenticate before push
docker login -u username -p password
docker push username/myapp

# Push to AWS ECR
aws ecr get-login-password | docker login --username AWS --password-stdin account.dkr.ecr.region.amazonaws.com
docker push account.dkr.ecr.region.amazonaws.com/myapp`
  },
  
  // Docker Run
  {
    id: 7,
    question: "Explain 'docker run' command and various options?",
    answer: "Docker run creates and starts a container from an image. Key options: -d (detached mode), -it (interactive terminal), -p (port mapping), -v (volume mount), --name (container name), -e (environment variables), --restart (restart policy), --network (network mode), and resource limits like --memory, --cpus.",
    category: "Docker Run",
    difficulty: "Medium",
    codeExample: `# Basic run
docker run nginx
docker run -d nginx                    # Detached mode
docker run -it ubuntu bash             # Interactive

# Port mapping
docker run -p 8080:80 nginx           # Map host:container
docker run -p 8080-8090:80 nginx      # Port range

# Volume mounting
docker run -v /host/data:/app/data nginx
docker run --mount type=bind,src=/host,dst=/container nginx

# Environment variables
docker run -e ENV=production -e DEBUG=true nginx

# Resource limits
docker run --memory="512m" --cpus="1.5" nginx

# Restart policy
docker run --restart=always nginx
docker run --restart=on-failure:5 nginx

# Network
docker run --network=my-network nginx
docker run --network=host nginx

# Complete example
docker run -d \
  --name webapp \
  -p 80:80 \
  -p 443:443 \
  -v /data:/var/www \
  -e NODE_ENV=production \
  --memory="1g" \
  --cpus="2" \
  --restart=unless-stopped \
  nginx`
  },
  
  // Docker Run Cluster Mode (Docker Swarm)
  {
    id: 8,
    question: "What is Docker Swarm and how to run containers in cluster mode?",
    answer: "Docker Swarm is Docker's native clustering and orchestration solution. It turns multiple Docker hosts into a single virtual host. Key concepts: managers (control plane), workers (run containers), services (defines desired state), tasks (containers scheduled on nodes), and stacks (multi-service applications using Compose files).",
    category: "Docker Swarm",
    difficulty: "Hard",
    codeExample: `# Initialize Swarm
docker swarm init --advertise-addr 192.168.1.1

# Join worker nodes
docker swarm join --token <token> manager-ip:2377

# Deploy services (cluster mode)
docker service create --name web --replicas 3 -p 80:80 nginx

# Service management
docker service ls                      # List services
docker service scale web=5             # Scale replicas
docker service update --image nginx:latest web
docker service rollback web
docker service rm web

# Deploy stack with compose file
# docker-stack.yml
version: '3.8'
services:
  web:
    image: nginx
    deploy:
      replicas: 5
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
      restart_policy:
        condition: on-failure
  redis:
    image: redis
    deploy:
      placement:
        constraints: [node.role == manager]

# Deploy stack
docker stack deploy -c docker-stack.yml myapp
docker stack ls
docker stack ps myapp
docker stack rm myapp

# Node management
docker node ls
docker node update --availability drain node1
docker node promote node2`
  },
  
  // Docker Hub
  {
    id: 9,
    question: "What is Docker Hub and how to use it effectively?",
    answer: "Docker Hub is Docker's official cloud-based registry service for storing and sharing container images. Features include: public/private repositories, automated builds from GitHub/Bitbucket, webhooks, organizations, teams, and official images. Best practices: use trusted images, implement image scanning, manage access with teams, and automate builds.",
    category: "Docker Hub",
    difficulty: "Medium",
    codeExample: `# Docker Hub commands
docker login                       # Login to Docker Hub
docker search nginx               # Search images
docker pull ubuntu                # Pull from Hub
docker tag myapp username/myapp   # Tag for Hub
docker push username/myapp        # Push to Hub
docker logout                     # Logout

# Automated builds (Docker Hub settings)
# 1. Link GitHub/Bitbucket
# 2. Configure build rules
# 3. Set build triggers

# Webhooks
# Configure in Docker Hub → Repository → Webhooks
curl -X POST https://myhook.com/deploy \\
  -H "Content-Type: application/json" \\
  -d '{"image": "myapp:latest"}'

# Rate limits (unauthenticated: 100 pulls/6 hours)
docker login  # Higher limits with authentication

# Organization management
docker org create myorg
docker org invite myorg user@example.com`
  },
  
  // Docker Compose (YML)
  {
    id: 10,
    question: "What is Docker Compose and how to use docker-compose.yml?",
    answer: "Docker Compose is a tool for defining and running multi-container Docker applications using YAML files. Key elements: services (containers), networks (communication between services), volumes (persistent storage), environment variables, dependencies, and health checks. Compose simplifies development and testing of complex applications.",
    category: "Docker Compose",
    difficulty: "Medium",
    codeExample: `# docker-compose.yml
version: '3.8'

services:
  # Web application
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./:/app
      - /app/node_modules
    depends_on:
      - redis
      - postgres
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Redis cache
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes

  # PostgreSQL database
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Nginx reverse proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web

volumes:
  redis_data:
  postgres_data:

networks:
  default:
    driver: bridge

# Compose commands
# docker-compose up -d          # Start services
# docker-compose down           # Stop and remove
# docker-compose logs -f        # View logs
# docker-compose ps             # List services
# docker-compose exec web bash  # Execute command
# docker-compose build          # Rebuild images
# docker-compose scale web=3    # Scale services`
  },
  
  // Jenkins Integration
  {
    id: 11,
    question: "How to integrate Docker with Jenkins for CI/CD?",
    answer: "Jenkins integrates with Docker through plugins like Docker Pipeline, CloudBees Docker Build/Publish, and Docker Slaves. Common patterns: building Docker images in Jenkins pipelines, running containers as build environments, pushing to registries, deploying to orchestrators, and using Docker agents for dynamic build nodes.",
    category: "Jenkins Integration",
    difficulty: "Hard",
    codeExample: `// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'registry.hub.docker.com'
        DOCKER_IMAGE = 'myapp'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                     docker.build("\${DOCKER_IMAGE}:\${env.BUILD_ID}")
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    docker.image("\${DOCKER_IMAGE}:\${env.BUILD_ID}").inside {
                        sh 'npm test'
                    }
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry("https://\${DOCKER_REGISTRY}", 'docker-hub-credentials') {
                        docker.image("\${DOCKER_IMAGE}:\${env.BUILD_ID}").push()
                        docker.image("\${DOCKER_IMAGE}:\${env.BUILD_ID}").push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Swarm') {
            steps {
                sh '''
                    docker stack deploy -c docker-stack.yml myapp
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}

// Jenkins with Docker agents
pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}`
  },
  
  // Docker Networks
  {
    id: 12,
    question: "Explain Docker networking modes and use cases?",
    answer: "Docker provides network drivers: bridge (default for standalone containers), host (shares host network), overlay (multi-host swarm networks), macvlan (assign MAC addresses), and none (no networking). Bridge networks are isolated, host gives best performance, overlay enables service discovery across swarm, macvlan for legacy applications needing physical network.",
    category: "Docker Networks",
    difficulty: "Medium",
    codeExample: `# Network types
# Bridge (default)
docker network create my-bridge
docker run --network my-bridge nginx

# Host (no isolation)
docker run --network host nginx

# Overlay (Swarm)
docker network create -d overlay my-overlay

# Macvlan
docker network create -d macvlan \
  --subnet=192.168.1.0/24 \
  --gateway=192.168.1.1 \
  -o parent=eth0 macnet

# Network operations
docker network ls                    # List networks
docker network inspect bridge        # Inspect network
docker network connect my-bridge container1
docker network disconnect my-bridge container1
docker network rm my-bridge

# Custom network with options
docker network create \
  --driver bridge \
  --subnet=10.0.0.0/24 \
  --ip-range=10.0.0.0/25 \
  --gateway=10.0.0.1 \
  my-custom-network`
  },
  
  // Docker Volumes
  {
    id: 13,
    question: "What are Docker volumes and data persistence strategies?",
    answer: "Docker volumes are the preferred mechanism for persisting data generated by containers. Types: named volumes (managed by Docker), bind mounts (map host directory), and tmpfs mounts (in-memory). Volumes survive container removal, can be shared between containers, and support backup/restore operations.",
    category: "Docker Volumes",
    difficulty: "Medium",
    codeExample: `# Named volumes
docker volume create mydata
docker run -v mydata:/app/data nginx
docker volume ls
docker volume inspect mydata
docker volume rm mydata

# Bind mounts
docker run -v /host/path:/container/path nginx
docker run --mount type=bind,src=/host,dst=/container nginx

# Tmpfs mount (in-memory)
docker run --tmpfs /app/temp:rw,noexec,nosuid,size=1g nginx

# Share volumes between containers
docker run --name container1 -v shared:/data nginx
docker run --name container2 --volumes-from container1 nginx

# Backup volume
docker run --rm -v mydata:/source -v $(pwd):/backup alpine \
  tar czf /backup/backup.tar.gz -C /source .

# Restore volume
docker run --rm -v mydata:/target -v $(pwd):/backup alpine \
  tar xzf /backup/backup.tar.gz -C /target

# Prune unused volumes
docker volume prune`
  },
  
  // Docker Registry
  {
    id: 14,
    question: "How to set up a private Docker registry?",
    answer: "Private Docker Registry can be set up using Docker's official registry image with storage backends like filesystem, S3, Azure Blob, or Google Cloud Storage. Features include: authentication (basic auth, token), TLS/HTTPS, garbage collection, image deletion, and replication. Popular alternatives include Harbor, Nexus, and Artifactory.",
    category: "Docker Registry",
    difficulty: "Hard",
    codeExample: `# Run private registry
docker run -d -p 5000:5000 --name registry registry:2

# Configure registry with storage
# docker-compose.yml
version: '3'
services:
  registry:
    image: registry:2
    ports:
      - "5000:5000"
    environment:
      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY: /data
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
    volumes:
      - ./data:/data
      - ./auth:/auth

# Generate htpasswd
docker run --entrypoint htpasswd httpd:2 -Bbn user password > auth/htpasswd

# Use private registry
docker tag myapp localhost:5000/myapp
docker push localhost:5000/myapp
docker pull localhost:5000/myapp

# Secure with TLS
# Configure daemon.json for insecure registry
{
  "insecure-registries": ["myregistry:5000"]
}

# Registry API
curl -X GET http://localhost:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/myapp/tags/list
curl -X DELETE http://localhost:5000/v2/myapp/manifests/<digest>`
  },
  
  // Docker Security
  {
    id: 15,
    question: "What are Docker security best practices?",
    answer: "Docker security best practices: run containers as non-root users, use trusted base images, keep images minimal (alpine), implement image scanning, use secrets for sensitive data, enable user namespaces, apply resource limits, use read-only root filesystems, drop unnecessary capabilities, and regularly update Docker daemon and images.",
    category: "Docker Security",
    difficulty: "Hard",
    codeExample: `# Run as non-root user in Dockerfile
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
USER nodejs

# Drop capabilities
docker run --cap-drop=ALL --cap-add=NET_ADMIN nginx

# Read-only root filesystem
docker run --read-only --tmpfs /tmp nginx

# Resource limits
docker run --memory="512m" --memory-swap="1g" --cpus="2" nginx

# Security options
docker run --security-opt=no-new-privileges nginx
docker run --security-opt=seccomp=my-profile.json nginx

# Docker Bench Security
docker run -it --net host --pid host --userns host \
  --cap-add audit_control \
  -e DOCKER_CONTENT_TRUST=$DOCKER_CONTENT_TRUST \
  -v /var/lib:/var/lib \
  -v /var/run/docker.sock:/var/run/docker.sock \
  docker/docker-bench-security

# Scan images for vulnerabilities
docker scan myapp:latest
docker scout quickview

# Use Docker secrets (Swarm)
echo "db_password" | docker secret create db_pass -
docker service create --secret db_pass --name db postgres`
  },
  
  // Dockerfile Best Practices
  {
    id: 16,
    question: "What are Dockerfile best practices for production?",
    answer: "Production Dockerfile best practices: use specific image tags (not 'latest'), multi-stage builds, minimize layers, use .dockerignore, run as non-root, handle PID1 correctly, use HEALTHCHECK, leverage build cache, optimize layer order, clean package managers, use COPY instead of ADD, and implement proper logging.",
    category: "Dockerfile",
    difficulty: "Hard",
    codeExample: `# Production-ready Dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy source code
COPY . .

# Build application
RUN yarn build

# Production stage
FROM node:18-alpine

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app

# Copy built artifacts
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

# Security optimizations
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

# Switch to non-root user
USER nodejs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Expose port
EXPOSE 3000

# Use dumb-init as entrypoint
ENTRYPOINT ["dumb-init", "--"]

CMD ["node", "dist/server.js"]

# Labels for metadata
LABEL maintainer="team@example.com"
LABEL version="1.0"
LABEL description="Production-ready Node.js app"`
  },
  
  // Docker Logging
  {
    id: 17,
    question: "How to manage Docker container logs?",
    answer: "Docker provides logging drivers: json-file (default), syslog, journald, fluentd, awslogs, gelf, and none. Configure log rotation to prevent disk overflow through max-size and max-file options. Centralize logs using ELK stack, Grafana Loki, or Datadog. Use 'docker logs' for debugging and implement structured logging in applications.",
    category: "Docker Logging",
    difficulty: "Medium",
    codeExample: `# Configure log driver (daemon.json)
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3",
    "labels": "production",
    "env": "env"
  }
}

# Per-container logging
docker run --log-driver=json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  nginx

# Fluentd logging
docker run --log-driver=fluentd \
  --log-opt fluentd-address=localhost:24224 \
  --log-opt tag="docker.{{.ID}}" \
  nginx

# AWS CloudWatch logs
docker run --log-driver=awslogs \
  --log-opt awslogs-region=us-east-1 \
  --log-opt awslogs-group=myapp \
  --log-opt awslogs-stream=web \
  nginx

# View logs
docker logs container_id
docker logs -f container_id        # Follow
docker logs --tail 100 container_id
docker logs --since 2023-01-01 container_id

# Clean logs
docker system prune --volumes -f
truncate -s 0 /var/lib/docker/containers/*/*-json.log`
  },
  
  // Docker Monitoring
  {
    id: 18,
    question: "How to monitor Docker containers and resource usage?",
    answer: "Monitor Docker using built-in commands (docker stats, docker events), cAdvisor (Google's container monitoring), Prometheus + Grafana stack, Datadog, or ELK. Track metrics: CPU, memory, network I/O, disk I/O, container uptime, and health status. Set up alerts for resource exhaustion and container failures.",
    category: "Docker Monitoring",
    difficulty: "Hard",
    codeExample: `# Basic monitoring
docker stats                    # Real-time resource usage
docker stats --no-stream        # One-shot stats
docker events                   # Real-time events

# cAdvisor setup
docker run -d \
  --name cadvisor \
  -p 8080:8080 \
  -v /:/rootfs:ro \
  -v /var/run:/var/run:ro \
  -v /sys:/sys:ro \
  -v /var/lib/docker/:/var/lib/docker:ro \
  google/cadvisor:latest

# Prometheus configuration (prometheus.yml)
scrape_configs:
  - job_name: 'docker'
    static_configs:
      - targets: ['localhost:9323']  # Docker metrics

# Enable Docker metrics
# daemon.json
{
  "metrics-addr": "0.0.0.0:9323",
  "experimental": true
}

# Get metrics endpoint
curl http://localhost:9323/metrics

# Custom monitoring script
#!/bin/bash
THRESHOLD=90
CPU_USAGE=$(docker stats --no-stream --format "{{.CPUPerc}}" container_id | tr -d '%')
if (( $(echo "$CPU_USAGE > $THRESHOLD" | bc -l) )); then
  echo "High CPU usage: $CPU_USAGE%"
  # Send alert
fi

# Docker Desktop dashboard
# Includes built-in resource monitoring
# CPU, Memory, Disk, Network graphs`
  }
];

export const categories = [
  { id: 'all', name: 'All Questions', icon: '📚', count: dockerQuestions.length },
  { id: 'docker-basics', name: 'Docker Basics', icon: '🐳', count: dockerQuestions.filter(q => q.category === 'Docker Basics').length },
  { id: 'docker-images', name: 'Docker Images', icon: '🖼️', count: dockerQuestions.filter(q => q.category === 'Docker Images').length },
  { id: 'docker-containers', name: 'Docker Containers', icon: '📦', count: dockerQuestions.filter(q => q.category === 'Docker Containers').length },
  { id: 'docker-build', name: 'Docker Build', icon: '🔨', count: dockerQuestions.filter(q => q.category === 'Docker Build').length },
  { id: 'docker-pull', name: 'Docker Pull', icon: '⬇️', count: dockerQuestions.filter(q => q.category === 'Docker Pull').length },
  { id: 'docker-push', name: 'Docker Push', icon: '⬆️', count: dockerQuestions.filter(q => q.category === 'Docker Push').length },
  { id: 'docker-run', name: 'Docker Run', icon: '▶️', count: dockerQuestions.filter(q => q.category === 'Docker Run').length },
  { id: 'docker-swarm', name: 'Docker Swarm', icon: '🐝', count: dockerQuestions.filter(q => q.category === 'Docker Swarm').length },
  { id: 'docker-hub', name: 'Docker Hub', icon: '🌐', count: dockerQuestions.filter(q => q.category === 'Docker Hub').length },
  { id: 'docker-compose', name: 'Docker Compose', icon: '📝', count: dockerQuestions.filter(q => q.category === 'Docker Compose').length },
  { id: 'jenkins-integration', name: 'Jenkins Integration', icon: '🔧', count: dockerQuestions.filter(q => q.category === 'Jenkins Integration').length },
  { id: 'docker-networks', name: 'Docker Networks', icon: '🌐', count: dockerQuestions.filter(q => q.category === 'Docker Networks').length },
  { id: 'docker-volumes', name: 'Docker Volumes', icon: '💾', count: dockerQuestions.filter(q => q.category === 'Docker Volumes').length },
  { id: 'docker-registry', name: 'Docker Registry', icon: '📦', count: dockerQuestions.filter(q => q.category === 'Docker Registry').length },
  { id: 'docker-security', name: 'Docker Security', icon: '🔒', count: dockerQuestions.filter(q => q.category === 'Docker Security').length },
  { id: 'dockerfile', name: 'Dockerfile', icon: '📄', count: dockerQuestions.filter(q => q.category === 'Dockerfile').length },
  { id: 'docker-logging', name: 'Docker Logging', icon: '📝', count: dockerQuestions.filter(q => q.category === 'Docker Logging').length },
  { id: 'docker-monitoring', name: 'Docker Monitoring', icon: '📊', count: dockerQuestions.filter(q => q.category === 'Docker Monitoring').length },
];