import { UserManagerSettings } from 'oidc-client';
import { createUserManager } from 'redux-oidc';

const settings : UserManagerSettings = {
    authority: "https://demo.identityserver.io",
    client_id: "implicit",
    automaticSilentRenew: false,
    metadata: {
        issuer: "https://demo.identityserver.io",
        jwks_uri: "https://demo.identityserver.io/.well-known/openid-configuration/jwks",
        authorization_endpoint: "https://demo.identityserver.io/connect/authorize",
        userinfo_endpoint: "https://demo.identityserver.io/connect/userinfo",
        end_session_endpoint: "https://demo.identityserver.io/connect/endsession"
    },
    redirect_uri: "http://localhost:3000/signin-callback",
    scope: "openid profile",
    signingKeys: [
        {
            kty: "RSA",
            use: "sig",
            kid: "958457e747d542b525bfed0cada825d6",
            e: "AQAB",
            n: "nYBM962_VAMdyzzzNhMj5LQNcMzf5exp9MHhcA5Loki3maU7v5GITq6pPp6tJxl9UiWKn4ZomNgvHidpg5hHb4g5Ytk0pMjQoi1AkgnHbain8TGIWJU51VRdUM4MCfs7gmhl0JKX5MrPoi_-KEBPuBRnq6erhyyrUHJOWAQW18MgISwg2Wp9UuXibsTjakXJKzq8Hfg2yH84REglIDp56ERJ6JeRbCSj1m8JwS9b4zEJpTlCF2Eh_Zaovl62x_IDe_f2uQvwOMb7XVZhajZTZe2vIZ8VYil6xlX8KOE0kXHllkQBqecO38YFvDOG-z6FCcLPGEyqz8Zf4_kC1RQUiQ",
            alg: "RS256"
        }
    ]
}

const userManager = createUserManager(settings);
export default userManager;
