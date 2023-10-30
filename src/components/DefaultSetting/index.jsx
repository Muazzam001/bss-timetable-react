import {useContext, useState} from 'react';
import InputField from "../../shared/Input";
import {TimetableContext} from '../../utils/timetableContext.js';
import Tabs from '../../shared/Tabs';
import BasicSetting from '../BasicSetting';
import AdvanceSetting from '../AdvanceSetting';

const DefaultSetting = () => {
    const [defaultSelectedTab, setDefaultSelectedTab] = useState(1);
    const {defaultValue: lesson} = useContext(TimetableContext);

    return (
        <>
            <div className='px-4 pt-5 pb-18 flex flex-col gap-y-5 h-full'>
                <InputField placeholder={lesson} readOnly/>

                <Tabs
                    tabs={[
                        {
                            id: 1,
                            full: "Basic Lesson Settings",
                            short: "Basic Lesson Settings",
                        },
                    ]}
                    selectedTab={defaultSelectedTab}
                    setSelectedTab={setDefaultSelectedTab}
                    fontSize='text-xs'
                    gap="gap-x-3"
                />

                { defaultSelectedTab === 1 ? (
                    <BasicSetting/>
                ) : defaultSelectedTab === 2 ? (
                    <AdvanceSetting/>
                ) : null}

            </div>
        </>
    );
}

export default DefaultSetting;
