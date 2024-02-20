import React from 'react'

const Navbar = () => {
  return (
    <>
     <div
        className="nav sticky top-0 z-50 flex justify-between px-8 py-5 items-center w-full bg-[#14131a]"
      >
      <div className="left flex gap-2">
          <div className="h-4 w-4 bg-[#2bd576] rounded-full"></div>
          <div className="h-4 w-4 bg-[#2bd576] rounded-full"></div>
        </div>
        <div className="right">
          <a href = "mailto:nikhilarya3108202@gmail.com">
          <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-[#2bd576] text-white text-xs py-2 px-4">Contact Me <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
          </a>
        </div>
      </div> 
    </>
  )
}

export default Navbar;
