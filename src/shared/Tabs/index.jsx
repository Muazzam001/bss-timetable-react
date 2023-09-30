const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {

  const tabsList = tabs.map((tab, index) => {
    return (
      <div key={`${index}`} className={`flex items-center justify-center cursor-pointer border-b-2 ${selectedTab == index + 1  ? "border-blue-dark2" : "border-gray-medium"}`} onClick={() => setSelectedTab(index + 1)}>
        <span className={`font-primary text-md pb-2 ${selectedTab == index + 1 ? "text-blue-dark2" : "text-gray-dark1"}`}>{tab}</span>
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