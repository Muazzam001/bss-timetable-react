import HeaderTop from "../HeaderTop";
import Header2 from "../Header2";
import Footer from "../Footer";

const MainLayout = ({children, headerItem}) => {
    return (
        <>
            <HeaderTop/>

            <Header2 headerItem={headerItem}/>

            <main className='bg-gray-light-yellowish'>{children}</main>

            <Footer/>
        </>
    )
}

export default MainLayout;