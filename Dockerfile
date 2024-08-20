FROM node:18-slim as base
WORKDIR /suivi-patient-front
COPY . .
FROM base
RUN npm install --silent
EXPOSE 3000
CMD ["/bin/bash", "-c"," npm run start"]