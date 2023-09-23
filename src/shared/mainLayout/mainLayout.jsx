import HeaderTop from "../headerTop/headerTop.jsx";
import Header2 from "../header2/header2.jsx";
import Footer from "../footer/footer.jsx";

const MainLayout = ({children, headerItem}) => {
    return (
        <>
            <HeaderTop/>

            <Header2 headerItem={headerItem}/>

            <main className='bg-gray-light-yellowish'>
                {children}
            </main>

            <Footer/>
        </>
    )
}

export default MainLayout;