# nativapps

# Daniel Valencia - FullStack Developer
Email: `danielfelipeluis@outlook.com`

## Correr Docker PostgreSQL

1. `docker pull postgres`

2. `docker run --name postgresql -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres`

3. `docker pull dpage/pgadmin4:latest`

4. `docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=root@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=root' -d dpage/pgadmin4`

## Correr Docker API

1. `docker build -f Dockerfile -t nativapps .`

2. `docker run --publish 3000:3000 nativapps`