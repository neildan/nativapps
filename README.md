# nativapps

# Daniel Valencia - FullStack Developer
Email: `danielfelipeluis@outlook.com`

## Primeros pasos

1. Agregar .env en la raíz del proyecto
2. Tener Docker instalado

## Correr sh Docker (Opción 1) Forma automatizada

1. Ejecutar `sh Docker.sh`

## Docker API y PostgreSQL (Opción 2) Forma manual

1. Ejecutar `docker pull postgres`

2. Ejecutar `docker run -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=nativapps -v /data:/var/lib/postgresql/data --name postgresql -d postgres:latest`

3. Ejecutar `docker pull dpage/pgadmin4:latest`

4. Ejecutar `docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=root@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=root' -d dpage/pgadmin4`

5. Ejecutar `docker build -f Dockerfile -t nativapps .`

6. Ejecutar `docker run -p 3000:3000 --name nativapps -d nativapps`

7. Abrir `http://localhost:82/` en el navegador