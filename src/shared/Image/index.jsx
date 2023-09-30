const Image = ({src, alt, className, style}) => {
    return (
        <>
            <img loading="lazy" src={src} alt={alt} className={className} style={style}/>
        </>
    )
}

export default Image;