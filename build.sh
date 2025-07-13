#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  build-prod    Build production Docker image"
    echo "  build-dev     Build development Docker image"
    echo "  run-prod      Run production container"
    echo "  run-dev       Run development container"
    echo "  stop          Stop all containers"
    echo "  clean         Clean up Docker images and containers"
    echo "  logs          Show container logs"
    echo "  help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 build-prod"
    echo "  $0 run-prod"
    echo "  $0 run-dev"
}

# Function to build production image
build_production() {
    print_status "Building production Docker image..."
    docker build --target production -t eqlzr-website:prod .
    if [ $? -eq 0 ]; then
        print_success "Production image built successfully!"
    else
        print_error "Failed to build production image"
        exit 1
    fi
}

# Function to build development image
build_development() {
    print_status "Building development Docker image..."
    docker build --target development -t eqlzr-website:dev .
    if [ $? -eq 0 ]; then
        print_success "Development image built successfully!"
    else
        print_error "Failed to build development image"
        exit 1
    fi
}

# Function to run production container
run_production() {
    print_status "Starting production container..."
    docker run -d \
        --name eqlzr-website-prod \
        -p 80:80 \
        --restart unless-stopped \
        eqlzr-website:prod
    
    if [ $? -eq 0 ]; then
        print_success "Production container started on http://localhost"
        print_status "Health check available at http://localhost/health"
    else
        print_error "Failed to start production container"
        exit 1
    fi
}

# Function to run development container
run_development() {
    print_status "Starting development container..."
    docker run -d \
        --name eqlzr-website-dev \
        -p 5173:5173 \
        -v $(pwd):/app \
        -v /app/node_modules \
        --restart unless-stopped \
        eqlzr-website:dev
    
    if [ $? -eq 0 ]; then
        print_success "Development container started on http://localhost:5173"
    else
        print_error "Failed to start development container"
        exit 1
    fi
}

# Function to stop containers
stop_containers() {
    print_status "Stopping containers..."
    docker stop eqlzr-website-prod eqlzr-website-dev 2>/dev/null || true
    docker rm eqlzr-website-prod eqlzr-website-dev 2>/dev/null || true
    print_success "Containers stopped and removed"
}

# Function to clean up
clean_up() {
    print_status "Cleaning up Docker resources..."
    docker system prune -f
    docker image prune -f
    print_success "Cleanup completed"
}

# Function to show logs
show_logs() {
    print_status "Showing container logs..."
    echo "Production container logs:"
    docker logs eqlzr-website-prod 2>/dev/null || print_warning "Production container not running"
    echo ""
    echo "Development container logs:"
    docker logs eqlzr-website-dev 2>/dev/null || print_warning "Development container not running"
}

# Main script logic
case "$1" in
    "build-prod")
        build_production
        ;;
    "build-dev")
        build_development
        ;;
    "run-prod")
        run_production
        ;;
    "run-dev")
        run_development
        ;;
    "stop")
        stop_containers
        ;;
    "clean")
        clean_up
        ;;
    "logs")
        show_logs
        ;;
    "help"|"--help"|"-h"|"")
        show_usage
        ;;
    *)
        print_error "Unknown command: $1"
        show_usage
        exit 1
        ;;
esac 