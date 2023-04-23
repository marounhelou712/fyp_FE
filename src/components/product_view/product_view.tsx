import { Card, Grid, Typography, Button, MenuList, MenuItem, ListItemIcon, ListItemText, Menu, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { Product } from '../types/types';
import { ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const ProductView = (props: Product) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



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
            <Card sx={{maxWidth: 300}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography>
                            Product Description
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Tooltip title="Interract">
                            <IconButton onClick={handleClick} sx={{color: 'red'}}>
                                <AddIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            Category: 
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {props.category_code}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            Sub-category: 
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {props.sub_category_code}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            Brand: 
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {props.brand}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            Price: 
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {props.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default ProductView;
