import { useState } from "react"
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputProps {
    name: string;
    isPassword: boolean;
    style?: React.CSSProperties;
    setValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ name, isPassword, style, setValue }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <TextField 
                    id="outlined-basic" 
                    label={name} 
                    variant="outlined"
                    type={isPassword ? (showPassword ? "text" : "password") : "text"} 
                    sx={{
                        color: 'white',
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                        },
                        '& .MuiInputLabel-outlined': {
                            color: 'white',
                            '&.Mui-focused': { // Add this block
                                color: 'white',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}
                    InputProps={isPassword ? { // Add this prop
                        endAdornment: (
                          <InputAdornment position="end">
                           <IconButton
                                onClick={handleClickShowPassword}
                                edge="end"
                                color="inherit" // Add this prop
                                sx={{ color: 'white' }} // Add this prop
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      } : {}}
                    style={style}
                    onChange={(e) => setValue(e.target.value)}
                />
    )
};