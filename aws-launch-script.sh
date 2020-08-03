# set env variables, must supply values
export POSTGRES_USER=
export POSTGRES_DB=
export POSTGRES_PASSWORD=
export POSTGRES_PORT=
export COOKIE_SESSION_SECRET=

# get my launch script from my public repo
curl -o lightsail-compose.sh https://raw.githubusercontent.com/TylerAuer/reddit-clone-2/master/lightsail-compose.sh

# change permissions so the file can be run
chmod +x ./lightsail-compose.sh

# run the launch script
./lightsail-compose.sh