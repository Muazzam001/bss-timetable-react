import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const InputSelect = ({ options, className, value, width, disabled, label, onChange, name }) => {
    const optionItems = options?.map((item, index) => {
        return (
            <MenuItem
                key={`${index}`}
                // sx={{width: `${width}`}}
                value={item}
                className='z-50 whitespace-normal'
            >{item}</MenuItem>
        );
    });

    return (
        <>
            <div className="relative max-lg:flex-auto flex flex-col gap-y-1">
                {label ? (
                    <label className={`${className} text-sm text-gray-dark1 font-primary font-normal`}>{label}</label>
                ) : null}
                <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    sx={{
                        border: `1px solid ${disabled && disabled ? "#D4D4D4" : "#1D5891"}`,
                        backgroundColor: "#F7F7F6 !important",
                        color: "#175088",
                        borderRadius: "8px",
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: "none !important",
                        },
                        '& .MuiSelect-select': {
                            '&.MuiInputBase-input': {
                                padding: "13px 14px",
                            }
                        }
                    }}
                    IconComponent={ExpandMoreIcon}
                    disabled={disabled && disabled}
                    className={`bg-transparent z-50 border-0 text-xs ${className}`}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'transparent',
                                boxShadow: "none",
                                paddingX: 0,
                                '& .MuiPaper-root': {
                                    left: 0,
                                    backgroundColor: "#F7F7F6 !important",
                                },
                                '& .MuiList-root': {
                                    padding: 0,
                                    minWidth: "fit-content",
                                    // width: {width},
                                },
                                '& .MuiButtonBase-root': {
                                    whiteSpace: "normal",
                                },
                                '& .MuiMenuItem-root.Mui-selected': {
                                    backgroundColor: "#F7F7F6 !important",
                                    borderColor: "#175088",
                                    color: "#175088"
                                },
                                '& .MuiMenuItem-root': {
                                    paddingX: 2,
                                    paddingY: 1.5,
                                    fontSize: 14,
                                    fontWeight: "400",
                                    color: "#7D7D92",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    borderRadius: "6px",
                                    whiteSpace: 'normal',
                                    border: 1,
                                    borderColor: "#E8E8E8",
                                    boxShadow: "1px 1px 4px #babac4",
                                    backgroundColor: "#F7F7F6 !important",
                                    '&:hover': {
                                        backgroundColor: "#175088 !important",
                                        borderColor: "#F7F7F6",
                                        color: "#F7F7F6"
                                    }
                                },
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

export default InputSelect;
