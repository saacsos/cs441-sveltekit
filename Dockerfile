FROM oven/bun:1.2.3

WORKDIR /app

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=5173

COPY package.json ./

RUN bun install

COPY . .

CMD ["bun", "run", "dev", "--host"]
