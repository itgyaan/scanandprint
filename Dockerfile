FROM node:20-alpine

WORKDIR /app

# Copy project files
COPY package*.json ./
COPY server.js ./
COPY app ./app
COPY README.md ./

# Expose port (default 5173)
EXPOSE 5173

ENV PORT=5173
ENV NODE_ENV=production

# Start zero-dependency server
CMD ["node", "server.js"]
