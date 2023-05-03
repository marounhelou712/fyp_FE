import { Card, Grid, Typography, Button, MenuList, MenuItem, ListItemIcon, ListItemText, Menu, IconButton, Tooltip, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { Product } from '../types/types';
import { ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { getSubCategory } from '../function.services';


import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import SportsMmaOutlinedIcon from '@mui/icons-material/SportsMmaOutlined';

const ProductView = (props: Product) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [iconLogo, setIcon] = useState(<></>);

    useEffect(() => {
        props.category_id === 1 && setIcon(<ShoppingBagOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 2 && setIcon(<CoffeeMakerOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 3 && setIcon(<SyncAltOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 4 && setIcon(<ComputerOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 5 && setIcon(<ConstructionOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 6 && setIcon(<FlagOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 7 && setIcon(<CableOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 8 && setIcon(<ChairOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 9 && setIcon(<ChildCareOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 10 && setIcon(<LocalHospitalOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 11 && setIcon(<BookmarksOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 12 && setIcon(<SportsFootballOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 13 && setIcon(<DiamondOutlinedIcon sx={{color: '#b8860b'}}/>);
        props.category_id === 14 && setIcon(<SportsMmaOutlinedIcon sx={{color: '#b8860b'}}/>);

    }, [props.category_id])



    return (
        <div>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                <MenuList>
                    <MenuItem  onClick={handleClose}>
                    <ListItemIcon>
                        <RemoveRedEyeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>View</ListItemText>
                    </MenuItem>

                    <MenuItem  onClick={handleClose}>
                    <ListItemIcon>
                        <ShoppingCartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add to Cart</ListItemText>
                    </MenuItem>

                    <MenuItem  onClick={handleClose}>
                    <ListItemIcon>
                        <CheckIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Purchase</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>


            <Card sx={{maxWidth: 300, borderRadius: '10px'}}>
                <Grid container 
                sx={{padding: '0.6rem'}}
                >
                    <Grid item xs={10}>
                        <Typography>
                            Product Description
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Tooltip title="Interract">
                            <IconButton onClick={handleClick} sx={{color: '#b8860b'}}>
                                <PendingActionsIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    { props.recommended &&
                    <Grid container>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            {iconLogo}
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <Typography sx={{fontSize: '12px', fontWeight: 'medium'}}>
                                {props.category_code.toUpperCase()}
                            </Typography>
                        </Grid>

                    </Grid>
                    }

                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography>
                            {getSubCategory(props.sub_category_code)}
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Typography>
                             
                        </Typography>
                    </Grid> */}
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography>
                            From {props.brand}
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Typography>
                        </Typography>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography sx={{fontWeight: 'bold'}}>
                            {props.price}$
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default ProductView;
