
import { Box, InputBase, styled } from '@mui/material';
import { Search } from '@mui/icons-material';

const Container = styled(Box)`
    background: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 8px;
    height: 100%;
    position: absolute;
`;
      
const Input = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

const MenuSearch = () => {

    return (
        <Container>
            <Wrapper>
                <Icon>
                    <Search fontSize="small"/>
                </Icon>
                <Input
                    placeholder="Search or start new chat"
                    inputProps={{ 'aria-label': 'search' }}
                    
                />
            </Wrapper>
        </Container>
    )
}

export default MenuSearch;