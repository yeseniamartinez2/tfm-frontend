import { useAuth0 } from "@auth0/auth0-react";
import { React } from "react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>Login</button>;
};
