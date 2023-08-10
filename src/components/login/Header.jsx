import React from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material"

import Dialog from "./Dialogue"

const BoxOverride = styled(Box)`
    background-color:#dfe5e7;
    height:100vh;
    
`

const AppBarOverride = styled(AppBar)`
    height:220px;
    box-shadow:none;
    background-color:#00a884;
`


const Header = () => {
    return (
        <BoxOverride>
            <AppBarOverride>
                <Toolbar>
                    Whatsapp
                </Toolbar>
                <Dialog />
            </AppBarOverride>
        </BoxOverride>

    )
}
export default Header
