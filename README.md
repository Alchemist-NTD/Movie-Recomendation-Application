# Movie-Recomendation-Application

## Set up project in ubuntu 20.04
### Install Docker
**Run following command**

```
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -m 0755 -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Install Docker Compose

**Run following command**
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### Run Project
- Clone Project by SSH or HTTP
- Run following command at the root of project:
```
    docker compose build

    docker compose up
```
- Enter the site <a href='http://localhost:8000/admin'>Admin</a> to access administrator site
- Enter the site <a href='http://localhost:8000/'>Backend</a> to access backend site
- Enter the site <a href='http://localhost:3000/'>Frontend</a> to access frontend site

### Create Admin account
- Run Docker sub temporary service
```
docker compose exec backend bash

python manage.py createsuperuser
<type username>
<type password>
```

### Import SQL script to database container
- Move the .sql scripts into Data/initial inside project folder
- Run Docker sub temporary service

```
docker compose exec db bash

psql -U duy -d db -f /home/<filename>.sql

```