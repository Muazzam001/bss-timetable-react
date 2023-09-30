import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Image from "../Image";

const MainModal = ({open, setOpen, image, label, border, btnColor, children}) => {
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50 " onClose={handleClose}>

                {/* <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child> */}

                <div className="fixed inset-0 z-10">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child as={Fragment}
                                          enter="ease-out duration-300"
                                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                                          leave="ease-in duration-200"
                                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel
                                className={`relative transform rounded-lg bg-white text-left transition-all sm:my-8 sm:p-6 p-4 ${border ? "border border-gray-dark1 rounded-lg" : ""} `}>
                                <div className={`flex flex-col items-center w-[600px] p-5`}>
                                    <Image src={image} alt="processing image" className="w-3/5"/>

                                    <span
                                        className={`${btnColor} text-white py-3.5 px-5 rounded-xl font-primary font-semibold text-sm w-full text-center`}>{label}</span>

                                    <div className='flex gap-5 mt-10'>{children}</div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default MainModal;