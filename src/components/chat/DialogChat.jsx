import React from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"

import Menu from "./Menu"
import Empty from "./Empty"

const DialogueStyle = {
    height: '94%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '15px 17px 17px 17px',
    borderRadius: 0,
    overflow: 'hidden',
    boxShadow: 'none',
}


const Container = styled(Box)`
    display:flex;
`

const LeftContainer=styled(Box)`
    min-width:385px;
    `
    
const RightContainer=styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
    `

const DialogChat = () => {
    return (
        <Dialog open={true}
            PaperProps={{ style: DialogueStyle }}
            hideBackdrop={true}>


            <Container>
                <LeftContainer>
                    <Menu />
                </LeftContainer>
                <RightContainer>
                    <Empty />
                </RightContainer>
            </Container>

        </Dialog>
    )
}

export default DialogChat
