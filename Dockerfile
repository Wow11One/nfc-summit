FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.5.1 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN test -f env/.env && pnpm build

EXPOSE 4173

CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4173"]
