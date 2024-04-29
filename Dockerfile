# FROM node:20.12.0-alpine3.19

# WORKDIR /app

# COPY package.json package-lock.json ./

# RUN npm install 

# COPY . .

# RUN npx prisma generate

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]

FROM node:20.12.0-alpine3.19

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies including tailwindcss
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js application will run
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
