import React from 'react'
import { AppBar, Toolbar, styled, Box } from "@mui/material"

import Dialogue from "./Dialogue"

const BoxOverride = styled(Box)`
    background-color: #e9edef;
    height:100vh;
    
`

const AppBarOverride = styled(AppBar)`
    height:222px;
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
                <Dialogue />
            </AppBarOverride>
        </BoxOverride>

    )
}
export default Header
