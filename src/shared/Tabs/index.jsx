const Tabs = ({tabs, selectedTab, setSelectedTab, fontSize, gap, tabWidth}) => {

    const tabsList = tabs?.map((tab, index) => {
        return (
            <div key={`${index}`} className={`flex ${tabWidth ? tabWidth : "flex-auto"} relative cursor-pointer`}
                 onClick={() => setSelectedTab(tab?.id)}>
                <span
                    className={`select-none font-primary ${fontSize ? fontSize : "text-md"} pb-2 ${selectedTab == tab?.id ? "text-blue-dark2" : "text-gray-dark1"}`}>{tab?.short}</span>

                <span
                    className={`absolute bottom-0 w-full h-[5px] border-b-[3px] rounded ${selectedTab == tab?.id ? "border-blue-dark2" : "border-gray-medium"}`}>&nbsp;</span>

            </div>
        )
    });

    return (
        <div className={`flex ${gap ? gap : "gap-x-5"}`}>
            {tabsList}
        </div>
    );
}

export default Tabs;