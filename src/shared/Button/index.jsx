import "./button.scss";

const Button = ({className, title, type, onClick, color, icon, rounded, hover, disabled}) => {

    const primaryBlue1 = "hover:border-blue-medium1 bg-blue-medium1 hover:text-blue-medium1 hover:bg-transparent"
    const primaryBlue2 = "hover:border-blue-medium2 bg-blue-medium2 hover:text-blue-medium2 hover:bg-transparent"
    const darkBlue1 = "hover:border-blue-dark1 bg-blue-dark1 hover:text-blue-dark1 hover:bg-transparent"
    const darkBlue2 = "hover:border-blue-dark2 bg-blue-dark2 hover:text-blue-dark2 hover:bg-transparent"
    const black = "hover:border-black bg-black hover:text-black hover:bg-transparent"

    let buttonColor;
    if (color === "blue-medium1") {
        buttonColor = primaryBlue1;
    } else if (color === "blue-dark2") {
        buttonColor = darkBlue2
    } else if (color === "black") {
        buttonColor = black
    } else if (color === "blue-medium2") {
        buttonColor = primaryBlue2;
    } else if (color === "blue-dark1") {
        buttonColor = darkBlue1;
    }

    return (
        <button
            className={`group flex items-center gap-x-2 font-primary font-medium text-white text-base p-2 border-2 border-transparent ${rounded ? "rounded-full" : "rounded-lg"} shadow-sm ${className} ${!disabled ? hover === false ? null : buttonColor : ""} justify-center ${disabled ? "cursor-not-allowed bg-blue-dark2/40 text-gray-medium" : "cursor-pointer"}`}
            type={type} onClick={onClick}>
            {icon ? (<div className={`group-hover:bg-green-400 w-5 h-5 z-50`}></div>) : null}

            {title}
        </button>
    );

}

export default Button;