import React from 'react';
import HeaderTop from '@/src/shared/headerTop/headerTop.jsx';
import Header2 from '@/src/shared/header2/header2.jsx';
import Footer from '@/src/shared/footer/footer.jsx';

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

export default MainLayout