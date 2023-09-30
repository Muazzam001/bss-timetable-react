import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';

const ConfirmationModal = ({open, close, children}) => {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50 " onClose={close}>
                <div className="fixed inset-0 z-10">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                                className={`relative transform rounded-lg bg-gray-light-bluish px-4 pt-5 pb-4 text-left transition-all sm:my-8 sm:p-6 border border-gray-dark2`}>
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