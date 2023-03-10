### Authenticated server with keyloak and nginx ###

- This is a simple authentication app that focuses on keycloack and nginx as a reverse proxy integration
- The simplest way to run this application is via docker-compose with "bash run.sh"
- You can also use "bash run-kube.sh" command to deploy this server on a kubernetes cluster

### keycloak setup ###

- In order to setup keycloak you have to those actions in keycloak dashboard on "http://<'your domain name'>/auth*":

1) Create a realm (remember to change env var properly to match your realm name, default: react-realm)
2) Create a client (remember to change env var properly to match your client name, default: user)
3) Set up client valid_redirect_uri to "http://<'your domain name'>:3000/*" and "http://<'your domain name'>/*"
4) Set up the kind of authentication you want (register, email, remember me etc.) in login settings
5) setup all the env variables to match your needs and the ip address to match yours

### what this application does ###

- Once the configuration on keycloak is done, the react app is on "http://<'your domain name'>/"
- You'll be redirected to the keycloak auth page, and once logged you'll be redirected to the homepage
- Here you can do an action (a counter button) that sends a request to the nodejs serverthat via middleware it'll authenticate the token with the same domain as the react app
- This is just a demostration of how to use keycloak and nginx tecnologies to handle user auth and reverse proxy requets to server
