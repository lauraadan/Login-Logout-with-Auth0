import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from '@chakra-ui/react'

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <Button onClick={loginWithRedirect} colorScheme='teal' variant='outline'>
        Login
    </Button>

}