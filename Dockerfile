FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]