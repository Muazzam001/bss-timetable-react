import ArrowRight from "../../assets/icons/arrowRight.jsx";

const SideModal = ({isOpen, setIsOpen, children, title}) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-50 overflow-y-hidden"
                     onClick={() => setIsOpen(false)}/>
            )}

            <div
                className={`fixed top-0 right-0 min-h-screen overflow-y-auto border border-gray-medium transform transition-transform ease-in-out duration-700 bg-gray-light-bluish ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <div className='w-full bg-white py-5 px-3 border-y border-slate-300 cursor-pointer'>
                    <div className='flex items-center gap-2'>
                        <ArrowRight className="!w-8 !h-8 text-blue-dark2" onClick={() => setIsOpen(false)}/>

                        <h5 className='text-h5 font-primary'>{title}</h5>
                    </div>
                </div>

                {children &&
                    (
                        <div className="flex flex-col gap-y-14 bg-white lg:mx-8 mx-2 my-8 p-4 rounded-md border border-gray-300 overflow-y-auto">
                            {children}
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default SideModal;