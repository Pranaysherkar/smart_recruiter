# Smart Recruiter: Dockerized PostgreSQL (pgvector) Setup & pgAdmin Connection

This guide will help you set up the PostgreSQL database (with pgvector extension) using Docker, and connect to it using pgAdmin.

---

## 1. Prerequisites
- [Docker](https://www.docker.com/get-started) installed
- [pgAdmin](https://www.pgadmin.org/download/) installed

---

## 2. Start the Database with Docker

1. Open a terminal in the project root directory (where `docker-compose.yml` is located).
2. Run:
   ```sh
   docker-compose up -d
   ```
   This will start the PostgreSQL database with the pgvector extension.

---

## 3. Database Connection Details

| Setting   | Value           |
|-----------|----------------|
| Host      | localhost      |
| Port      | 5433           |
| Username  | admin          |
| Password  | password       |
| Database  | smart_recruiter|

---

## 4. Connect with pgAdmin

1. Open **pgAdmin**.
2. Right-click on **Servers** → **Create** → **Server...**
3. **General Tab:**
   - Name: `pgvector-docker` (or any name)
4. **Connection Tab:**
   - Host name/address: `localhost`
   - Port: `5433`
   - Username: `admin`
   - Password: `password`
   - Maintenance database: `smart_recruiter`
5. Click **Save**.
6. Expand the server, then **Databases → smart_recruiter → Schemas → public → Tables** to see your tables.

---

## 5. Useful Docker Commands

- **Start containers:**
  ```sh
  docker-compose up -d
  ```
- **Stop containers:**
  ```sh
  docker-compose down
  ```
- **Stop only the database container:**
  ```sh
  docker stop pgvector-db
  ```
- **View running containers:**
  ```sh
  docker ps
  ```
- **Access psql inside the container:**
  ```sh
  docker exec -it pgvector-db psql -U admin -d smart_recruiter
  ```

---

## 6. Insert Data Example

Once inside the `psql` prompt (see above), you can run:
```sql
INSERT INTO your_table_name (column1, column2) VALUES ('value1', 'value2');
```

Or, from your host:
```sh
docker exec -it pgvector-db psql -U admin -d smart_recruiter -c "INSERT INTO your_table_name (column1, column2) VALUES ('value1', 'value2');"
```

---

## 7. Resetting the Database

To reset the database (remove all data and start fresh):
```sh
docker-compose down -v
```
Then start again with:
```sh
docker-compose up -d
```

---

## 8. Troubleshooting
- Make sure Docker is running.
- Make sure you use port **5433** in pgAdmin.
- If you can't connect, check your firewall or if another service is using port 5433.
- Use `docker logs pgvector-db` to see database logs.

---

**You're all set!** 
