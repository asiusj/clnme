FROM mongo:4.4.4-bionic

RUN mkdir -p /var/dump
COPY ./dump/ /var/dump/
#RUN mongorestore --username admin --password qwe333221 /var/dump
#mongo --port 27017 -u "admin" -p "qwe333221" --authenticationDatabase "admin"