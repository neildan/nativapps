create table paciente (
    patient_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    id varchar(20) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(20) NOT NULL
);