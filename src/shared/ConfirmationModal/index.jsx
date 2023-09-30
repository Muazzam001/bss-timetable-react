import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ConfirmationModal = ({ open, close, children, position }) => {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50 " onClose={close}>
                <div className="fixed inset-0 z-10">
                    <div className={`flex min-h-full items-end text-center sm:items-center sm:p-0 p-4 mx-[150px] ${position}`}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >

                            <Dialog.Panel
                                className={`relative transform rounded-lg bg-gray-light-bluish sm:my-8 sm:p-6 p-4 text-left transition-all border border-gray-dark2`}>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ConfirmationModal;