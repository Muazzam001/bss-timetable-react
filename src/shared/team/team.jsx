
const Team = ({items, title, name, onChange}) => {

    const teamData = items?.map((teamName, index) => {
        return (
            <div key={`${index}`} className='flex items-center justify-center flex-auto gap-x-5'>
                <input type="radio" name={name} id={teamName} className='peer hidden' value={teamName}
                       onChange={(e) => onChange(e.target)}/>
                <label htmlFor={teamName}
                       className="peer-checked:bg-blue-light1 min-w-[110px] rounded-lg w-full p-3 font-primary text-center text-sm text-navy-dark-blue bg-gray-light cursor-pointer">{teamName}</label>
            </div>
        )
    })

    return (
        <div className='rounded-md border-[1.5px] border-gray-medium'>
            <h2 className='font-primary p-3'>
                {title}
            </h2>

            <div className={`border-t-[1.5px] border-gray-medium`}>
                <div className="flex flex-wrap justify-start flex-auto gap-4 p-3">
                    {teamData}
                </div>
            </div>
        </div>
    )
}

export default Team
