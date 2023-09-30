const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {

  const tabsList = tabs.map((tab, index) => {
    return (
      <div key={`${index}`} className={`flex items-center justify-center cursor-pointer border-b-2 ${selectedTab == tab?.id ? "border-blue-dark2" : "border-gray-medium"}`} onClick={() => setSelectedTab(tab?.id)}>
        <span className={`font-primary text-md pb-2 ${selectedTab == tab?.id ? "text-blue-dark2" : "text-gray-dark1"}`}>{tab?.short}</span>
      </div>
    )
  });

  return (
    <div className='flex gap-5'>
      {tabsList}
    </div>
  );
}

export default Tabs;