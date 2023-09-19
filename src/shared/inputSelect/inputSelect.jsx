import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const InputSelect = ({ options, className, defaultValue, setState, value, width, disabled, label }) => {

    const BootstrapInput = styled(InputBase)(({ theme }) => ({

        'label + &': {
            marginTop: theme.spacing(3),
            width: `${width}`,
        },
        '& .MuiInputBase-input': {
            borderRadius: 6,
            position: 'relative',
            backgroundColor: "#F7F7F6",
            border: `1px solid ${disabled && disabled ? "#D4D4D4" : "#1D5891"}`,
            fontSize: 16,
            padding: '0 26px 0 12px',
            '&:focus': {
                borderRadius: 6,
            },
        },
        '& .MuiPaper-root': {
            zIndex: 999,
        },
        '& .MuiSelect-select.css-1uwzc1h-MuiSelect-select-MuiInputBase-input': {
            display: "flex",
            alignItems: "center",
            height: "37px",
            fontSize: "13px",
        }
    }));


    const optionItems = options?.map((item, index) => {
        return (
            <MenuItem key={`${index}`} sx={{ width: `${width}` }} value={item}
                className='z-50 whitespace-normal'>{item}</MenuItem>
        )
    });

    const handleChange = (event) => {
        setState(event.target.value)
    }

    return (
        <>
            <div className="relative max-lg:flex-auto">
                <Select
                    value={value}
                    onChange={handleChange}
                    className={`bg-transparent z-50 border-0 h-10 text-xs ${className}`}
                    sx={{ width: `${width}` }}
                    input={<BootstrapInput />}
                    defaultValue={defaultValue ? defaultValue : ""}
                    IconComponent={ExpandMoreIcon}
                    disabled={disabled && disabled}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: 'transparent',
                                boxShadow: "none",
                                paddingX: "10px",
                                zIndex: 100000000,
                                '& .MuiPaper-root': {
                                    left: "0px",
                                },
                                '& .MuiList-root': {
                                    padding: 0,
                                    minWidth: "fit-content",
                                    width: { width },
                                },
                                '& .MuiButtonBase-root': {
                                    whiteSpace: "normal",
                                },
                                '& .MuiMenuItem-root.Mui-selected': {
                                    bgcolor: "#CEE8F5",
                                },
                                '& .MuiMenuItem-root': {
                                    fontSize: "13px",
                                    whiteSpace: 'whitespace-normal',
                                    color: "#7D7D92",
                                    paddingX: 1,
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    bgcolor: "#F7F7F6",
                                    border: 1,
                                    borderColor: "#E8E8E8",
                                    borderRadius: "6px",
                                    boxShadow: "1px 1px 4px #babac4",
                                    '&:hover': {
                                        bgcolor: "#175088",
                                        color: "white"
                                    }
                                },
                                '& .MuiMenuItem-root:first-of-type': {
                                    bgcolor: "#F7F7F6",
                                    '&:hover': {
                                        bgcolor: "#175088",
                                        color: "white"
                                    }
                                },

                            },
                            '& .MuiMenuItem-root:first-of-type': {
                                bgcolor: "#F7F7F6",
                                '&:hover': {
                                    bgcolor: "#175088",
                                    color: "white"
                                }
                            },
                        },
                    }}
                >
                    {optionItems}
                </Select>
            </div>
        </>
    )
}

export default InputSelect
