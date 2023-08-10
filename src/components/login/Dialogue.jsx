import React from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import { qrCodeImage } from "../resource/imgData"


const Container = styled(Box)`
    display:flex;
    `;


const BoxText = styled(Box)`
    padding:67px 0px 50px 59px;
    
`;

const QrcodeStyle = styled('img')({
    height: 264,
    width: 264,
    margin: '32px 0 0 32px',

})

const Title=styled(Typography)`
    font-size: 28px;
    font-weight: 200;
    line-height: normal;
    color: #8d8f90;
    margin-bottom:44px;
   

`

const DialogueStyle = {
    height: '980%',
    width: '76%',
    maxWidth: '90%',
    maxHeight: '100%',
    marginTop: '17%',
    boxShadow: 'none',
    overflow: 'none'
}

const Dialogue = () => {
    return (
        <Dialog open={true}
            PaperProps={{ style: DialogueStyle }}>
            <Container>
                <BoxText>
                    <Title>Use WhatsApp on your computer</Title>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Setting and select Linked Devices</ListItem>
                        <ListItem>3. Tap on Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </List>
                </BoxText>

                <Box>
                    <QrcodeStyle src={qrCodeImage} alt='qrcode'></QrcodeStyle>
                </Box>
            </Container>



        </Dialog>
    )
}

export default Dialogue
