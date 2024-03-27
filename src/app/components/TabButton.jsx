import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'border-b font-bold':''
  return (
    <button onClick={selectTab} className='md:w-40 md:h-16 mb-5 w-20 md:mr-0 mr-3 h-10 dark:border-black'>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton