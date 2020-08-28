import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    table{
        svg{
            color: ${theme.colors.light};
        }
        a{
            padding: 8px 16px;
            background-color: ${theme.colors.info};
            border-radius: 8px;
        }
    }
`;

export const PostFilter = styled.div`

    margin-bottom: 20px;
    form{
        display: flex;
        width: 100%;
        input, select{
            width: 100%;
        }
        
        button, select{
            margin-left: 20px;
        }
        
    }
    select{
        padding: 8px 16px;
        border-radius: 8px;
        border: 2px solid ${theme.colors.primary};
    }
`