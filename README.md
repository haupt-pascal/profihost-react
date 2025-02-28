# Welcome to React on Profihost!

A modern, production-ready template for deploying React applications on Profihost hosting services.

## Features

- 🚀 Single-page application (SPA) with React
- ⚡️ Hot Module Replacement (HMR) for development
- 📦 Asset bundling and optimization
- 🔒 TypeScript by default
- 🎨 Modern CSS-in-JS or your preferred styling solution
- 🔀 Apache reverse proxy configuration
- 🔄 Daemon service for continuous uptime
- 🌐 Easy deployment on Profihost servers
- 📖 [React docs](https://react.dev/)

## Getting Started

### Prerequisites

First, install Node Version Manager (NVM) to manage your Node.js versions:

```bash
# Install NVM
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Load NVM environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install latest LTS version of Node.js
nvm install --lts

# Verify installation
node --version
npm --version
```

### Installation

Create a new React project using Vite and install dependencies:

```bash
# Create a new React project with Vite
npm create vite@latest my-react-app -- --template react-ts

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Deployment on Profihost

### 1. Set Up a Service Daemon

To keep your React Application up and running you need to set up a service daemon.
```bash
# Download the preconfigured daemon script
wget -O nuxt-daemon.json https://raw.githubusercontent.com/haupt-pascal/profihost-nuxt/main/daemon.sh
```

After downloading the daemon file:

1. Log in to your Profihost customer center
2. Navigate to your server settings
3. Look for the "Daemon" or "Service Daemon" option
4. Upload the `daemon.sh` file to your storage
5. Adjust the paths within the script as needed
6. Set the path to the script as the command/script
7. Activate the daemon

### 2. Configure Reverse Proxy with .htaccess

Set up an Apache reverse proxy to make your React application accessible through your domain:

```bash
# Create an .htaccess file in your website's root directory
cat > .htaccess << 'EOL'
DirectoryIndex disabled

RewriteEngine On

# Handle requests for static assets directly if they exist
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Forward all requests to the React app server
RewriteRule (.*) http://127.0.0.1:3000/$1 [P,L]

# Set headers for better security and caching
Header set Access-Control-Allow-Origin "*"
Header set X-Content-Type-Options "nosniff"
EOL
```

## Styling

This template works with any CSS approach you prefer:

- CSS Modules
- Styled Components
- Tailwind CSS
- Plain CSS or SCSS

## Troubleshooting

- If you encounter port conflicts, modify the port (default: 3000) in your daemon configuration
- For static asset issues, check your Vite configuration to ensure the correct base path
- For any issues, contact Profihost support at support@profihost.com

## Additional Resources

- [React Documentation](https://react.dev/) - Official React documentation
- [Vite Documentation](https://vitejs.dev/) - Learn about Vite features and API
- [Profihost Support](https://www.profihost.com/support/) - Contact Profihost for hosting-related issues

---

Built with ❤️ using React and hosted on Profihost.
