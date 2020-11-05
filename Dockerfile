### Build Image
FROM node:12-alpine AS builder

WORKDIR /home/node/tft-match-fetcher
RUN mkdir -p ./node_modules
RUN chown -R node:node .
USER node

COPY package.json .
RUN npm install
COPY --chown=node:node . .
RUN npm run build
RUN npm prune --production

### Production image
FROM node:12-alpine

WORKDIR /home/node/tft-match-fetcher
USER node
COPY --from=builder /home/node/tft-match-fetcher .

ENV NODE_ENV=production
CMD ["npm", "run", "start"]
