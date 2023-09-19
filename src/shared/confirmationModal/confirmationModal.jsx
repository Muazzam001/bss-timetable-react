import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Button from '@/src/shared/button/button.jsx';

const ConfirmationModal = ({open, newValue, oldValue, confirm, setOpen}) => {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50 " onClose={() => console.log("")}>
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
                                <div className={`flex flex-col items-center w-[600px] p-5`}>
                                    <p className='font-primary'>Are you sure you want to change the count of lessons
                                        from {`${oldValue}`} to {`${newValue}`}?</p>

                                    <div className='flex gap-3 w-full justify-end mt-10 mr-20'>
                                        <Button
                                            title="No"
                                            rounded={true}
                                            hover={false}
                                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                                            onClick={() => {
                                                confirm(false)
                                                setOpen(false)
                                            }}
                                        />
                                        <Button
                                            rounded={true}
                                            type="button"
                                            title="Yes"
                                            color={"blue-dark2"}
                                            className="font-medium text-sm h-10 px-8 justify-start"
                                            onClick={() => {
                                                confirm(true)
                                                setOpen(false)
                                            }}
                                        />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}


export default ConfirmationModal