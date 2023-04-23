import React from "react";
import { Button, TextField, Grid } from "@mui/material";
import styles from "./login.module.css";

const LogIn = () => {
    return (
        <div className={styles.loginDiv}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        type="text"
                        label='email'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        // sx={{marginTop: '1rem'}}
                        type='password'
                        label='auth.password'
                        name="password"
                    // InputProps={{
                    //     endAdornment: (
                    //         <IconButton
                    //             aria-label="toggle password visibility"
                    //             onClick={(e) =>
                    //             setFieldValue('showPassword', !values.showPassword)
                    //             }
                    //             edge="end"
                    //             tabIndex={-1}
                    //         >
                    //             {values.showPassword ? (
                    //             <VisibilityOff/>
                    //             ) : (
                    //             <Visibility/>
                    //             )}
                    //         </IconButton>
                    //     ),
                    // }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'>
                        Log In
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default LogIn;
