import React from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material"

import DialogChat from "./DialogChat"

const BoxOverride = styled(Box)`
    background-color: #e9edef;
    height:100vh;
    
`

const AppBarOverride = styled(AppBar)`
    height:112px;
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
                <DialogChat/>
            </AppBarOverride>
        </BoxOverride>

    )
}
export default Header
