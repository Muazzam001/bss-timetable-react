import "./tooltips.scss";
import Tooltip from '@mui/material/Tooltip';

const Tooltips = ({title, children, position}) => {
    return (
        <>
            <Tooltip
                placement={position}
                title={title}
                componentsProps={
                    {
                        tooltip: {
                            sx: {
                                bgColor: '#C8C8C8',
                                border: 1,
                                color: "white",
                                borderColor: "black",
                                '& .MuiTooltip-arrow': {
                                    color: '#C8C8C8',
                                },
                            },
                        },
                    }
                }
            >
                <span className="flex items-center justify-center">{children}</span>
            </Tooltip>
        </>
    );
}

export default Tooltips;