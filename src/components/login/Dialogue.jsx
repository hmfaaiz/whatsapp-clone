import React from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import { qrCodeImage } from "../resource/imgData"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"

import { useContext } from "react";
import { UserContext } from '../Authentication/Users'


const Container = styled(Box)`
    display:flex;
    `;


const BoxText = styled(Box)`
    padding:67px 0px 50px 57px;
    
`;

const QrcodeStyle = styled('img')({
    height: 277,
    width: 277,
    margin: '32px 0 0 32px',
    padding: '25px',
    marginLeft: '115px',

})

const Title = styled(Typography)`
    font-size: 27px;
    font-weight: 200;
    line-height: normal;
    color: #8d8f90;
    margin-bottom:37px;
   

`
const StyledList = styled(List)` 
    &  > li {   //by default listitem is li
        padding: 4px;
        margin-top: 0px;
        font-size: 20px;
        line-height: 37px;
        color: #4a4a4a;
    }
`;

const DialogueStyle = {
    height: '980%',
    width: '76%',
    maxWidth: '90%',
    maxHeight: '100%',
    marginTop: '17%',
    // boxShadow: 'none',
    overflow: 'hidden',
}


const Dialogue = () => {
    const { setUserAccount } = useContext(UserContext)
    const onLoginSuccess = (res) => {
        const data = jwt_decode(res.credential)
        setUserAccount(data)
        console.log("Success", data)
    }
    const onLoginError = (err) => {
        console.log("Error", err)
    }
    return (
        <Dialog open={true}
            PaperProps={{ style: DialogueStyle }}
            hideBackdrop={true}>
            <Container>
                <BoxText>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Setting and select Linked Devices</ListItem>
                        <ListItem>3. Tap on Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </StyledList>
                </BoxText>

                <Box>
                    <QrcodeStyle src={qrCodeImage} alt='qrcode'></QrcodeStyle>
                    <Box>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>

                </Box>

            </Container>




        </Dialog>
    )
}

export default Dialogue
