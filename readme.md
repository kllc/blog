# Localhost Testing With Docker

Type the following command at a command prompt

`docker run -d -p 8080:80 -v "%cd%:/usr/local/apache2/htdocs/" --name docker-httpd --rm httpd:alpine`

http://localhost:8080
