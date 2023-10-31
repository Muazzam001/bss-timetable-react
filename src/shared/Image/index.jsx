const Image = ({src, alt, className, style, loading}) => {
    return (
        <>
            <img src={src} alt={alt} className={className} style={style}/>
        </>
    )
}

export default Image;