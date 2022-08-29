import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

interface IAppThemeProviderProps {
    children: React.ReactNode
  }

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) =>{
    
    const theme =useTheme();
    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)}>
                    <Box width='100%' height={theme.spacing(15)} display="flex" alignItems="center"  justifyContent="center">
                        <Avatar 
                        sx={{heigth: theme.spacing(12), width: theme.spacing(6)}}
                        src="https://www.pngmart.com/files/7/Domestic-Robot-PNG-Clipart.png"
                        />                        
                    </Box>
                    <Box width='100%' height={theme.spacing(6)} display="flex" alignItems="center"  justifyContent="center">
                            Nome do Usuario
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        home
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary = "Pagina inicail" />
                            </ListItemButton>
                        </List> 
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
            {children}
            </Box>
        </>
        
    );
};