
import { Request, Response, NextFunction } from "express";
import request from "request";

// middleware to validate tokens from keycloak
export const keycloakMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("New request");
    const token = req.headers["authorization"]?.split(" ")[1];
    const realm = process.env.REALM || "";

    const config = {
        method: 'GET',
        url: `http://keycloak:8080/auth/realms/${realm}/protocol/openid-connect/userinfo,
        `,
        headers: {
          authorization: `Bearer ${token}`
        },
    }

    request(config, (error, response, body) => {
        if (error) return res.status(400).json(error);
  
        // invalid token
        if (response.statusCode !== 200) {
          console.log("Not authorized transaction");
          return res.status(401).json(body);
        }
        next();
      });
}