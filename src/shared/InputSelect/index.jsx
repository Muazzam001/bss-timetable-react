import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {styled} from '@mui/material/styles';

const InputSelect = ({options, className, value, width, disabled, label, onChange, name}) => {

    const BootstrapInput = styled(InputBase)(({theme}) => ({

        'label + &': {
            width: `${width}`,
        },
        '& .MuiInputBase-input': {
            borderRadius: 6,
            position: 'relative',
            bgColor: "#F7F7F6 !important",
            border: `1px solid ${disabled && disabled ? "#D4D4D4" : "#1D5891"}`,
            fontSize: 16,
            color: "#175088 !important",
            padding: '0 26px 0 12px',
            '&:focus': {
                borderRadius: 6,
            },
        },
        '& .MuiPaper-root': {
            zIndex: 999,
        },
        '& .MuiSelect-icon': {
            color: "#175088 !important",
        },
        '& .MuiSelect-select.css-1uwzc1h-MuiSelect-select-MuiInputBase-input': {
            display: "flex",
            alignItems: "center",
            height: "48px",
            fontSize: "14px",
        }
    }));

    const optionItems = options?.map((item, index) => {
        return (
            <MenuItem key={`${index}`} sx={{width: `${width}`}} value={item}
                      className='z-50 whitespace-normal'>{item}</MenuItem>
        )
    });

    return (
        <>
            <div className="relative max-lg:flex-auto flex flex-col gap-2">
                {label ? (
                    <label className="text-sm font-medium leading-6 !text-dark-gray-200 font-primary">{label}</label>
                ) : null}
                <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    sx={{width: `${width}`}}
                    input={<BootstrapInput/>}
                    IconComponent={ExpandMoreIcon}
                    disabled={disabled && disabled}
                    className={`bg-transparent z-50 border-0 h-10 text-xs ${className}`}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'transparent',
                                boxShadow: "none",
                                paddingX: 0,
                                zIndex: 100000000,
                                '& .MuiPaper-root': {
                                    left: "0px",
                                    backgroundColor: "#F7F7F6 !important",
                                },
                                '& .MuiList-root': {
                                    padding: 0,
                                    minWidth: "fit-content",
                                    width: {width},
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
                                    fontSize: "14px",
                                    whiteSpace: 'normal',
                                    color: "#7D7D92",
                                    paddingX: 2,
                                    paddingY: 1.5,
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    backgroundColor: "#F7F7F6 !important",
                                    border: 1,
                                    borderColor: "#E8E8E8",
                                    borderRadius: "6px",
                                    boxShadow: "1px 1px 4px #babac4",
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
