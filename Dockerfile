FROM node:10

    WORKDIR /cadenza/documents/SDC/leaveReview

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3306

    CMD ["npm", "start"]