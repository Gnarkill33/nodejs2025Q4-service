FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

RUN npm install

COPY . .

RUN npm run build


FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

RUN npm install

RUN npx prisma generate

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/doc/api.yaml ./dist/doc/api.yaml
COPY --from=builder /app/doc/api.yaml ./doc/api.yaml         

EXPOSE 3000

CMD ["node", "dist/src/main.js"]