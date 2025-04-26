import React from 'react'

type Props = {
  name: string;
  button?: any;
  smallText?: boolean;
}

const Header = ({ name, button, smallText = false}: Props) => {
  return (
    <div className='mb-5 flex w-full items-center justify-between'>
      <h1 className={`${smallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white` }>
        {name}
      </h1>
      {button}
    </div>
  )
}

export default Header