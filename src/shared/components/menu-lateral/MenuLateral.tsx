import { Avatar, Box, Divider, Drawer, useTheme } from "@mui/material"

interface IAppThemeProviderProps {
    children: React.ReactNode
  }

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) =>{
    
    const theme =useTheme();
    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)}>
                    <Box width='100%' height={theme.spacing(15)} display="flex" alignItems="center"  justifyContent="center">
                        <Avatar 
                        sx={{heigth: theme.spacing(12), width: theme.spacing(6)}}
                        src="../images/LAMPADA SUPER LED ALTA H1.jpg"
                        />                        
                    </Box>
                    <Box width='100%' height={theme.spacing(2)} display="flex" alignItems="center"  justifyContent="center">
                            Nome do Usuario
                    </Box>
                    <Divider />
                    <Box flex={1}>

                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
            {children}
            </Box>
        </>
        
    );
};