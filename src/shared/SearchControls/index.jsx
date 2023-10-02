import React, {useState} from 'react'
import Tickbox from '../Tickbox'

const SearchControls = ({header, data, setData}) => {
    const [checked, setChecked] = useState('');

    const handleTickboxChange = (item) => {
        setData((prevData) => {
            return prevData.map((dataItem) => {
                if (dataItem?.short === item?.short) {
                    return {...dataItem, check: !dataItem.check}
                }
                return dataItem
            });
        });
    }

    const tickboxes = data?.map((item, index) => {
        return (
            <div className='flex' key={`${index}`}>
                <div className='w-3/5 flex flex-col p-2 gap-y-4 overflow-auto border-r border-gray-medium'>
                    <Tickbox
                        htmlFor={item?.short}
                        name={item?.short}
                        id={item?.short}
                        label={item?.label}
                        isChecked={item?.check}
                        handleTickboxChange={() => handleTickboxChange(item)}
                    />
                </div>

                <div className='w-2/5 flex flex-col p-2 gap-y-4 overflow-auto'>
                    <span
                        className={`font-primary text-sm text-center ${item?.check ? "text-blue-dark2" : "text-gray-900"}`}>{item?.short}</span>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className='bg-gray-light-yellowish w-90 rounded-sm border border-blue-dark2 overflow-y-auto'>
                <div className='px-1 py-2 flex justify-end border-b border-gray-medium'>
                    <p className='text-xs font-primary flex gap-2'>
                        <span className={`cursor-pointer ${checked ? 'text-blue-dark2 ' : ''}`}
                              onClick={() => {
                                  setData((prevData) => prevData.map((dataItem) => ({
                                      ...dataItem,
                                      check: true
                                  })));
                                  setChecked(true);
                              }}>Select All</span>
                        <span>|</span>
                        <span className={`cursor-pointer ${!checked ? 'text-blue-dark2 ' : ''}`}
                              onClick={() => {
                                  setData((prevData) => prevData.map((dataItem) => ({
                                      ...dataItem,
                                      check: false
                                  })));
                                  setChecked(false);
                              }}>UnSelect All</span>
                    </p>
                </div>

                <div className='flex flex-col max-h-[500px] overflow-auto relative'>
                    <div
                        className='sticky top-0 z-[100] bg-gray-light-yellowish flex items-center justify-center font-primary text-xs font-semibold border-b border-gray-medium'>
                        <span className='w-3/5 py-2 text-center border-r border-gray-medium'>{header}</span>

                        <span className='w-2/5 py-2 text-center'>Short</span>
                    </div>
                    {tickboxes}
                </div>
            </div>
        </>
    );
}

export default SearchControls;