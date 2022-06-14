docker pull postgres

docker run -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=nativapps -v /data:/var/lib/postgresql/data --name postgresql -d postgres:latest

docker pull dpage/pgadmin4:latest

docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=root@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=root' -d dpage/pgadmin4

docker build -f Dockerfile -t nativapps .

docker run -p 3000:3000 --name nativapps -d nativapps

open http://localhost:82/