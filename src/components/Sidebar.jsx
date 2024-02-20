import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [active,setActive] = useState(false)

  const handleClick = ()=>{
    setActive(active=>!active)
  }

  return (
    <>
    <button
    onClick={handleClick}
      type="button"
      class="menu-btn z-40 fixed bottom-10 right-10 inline-flex items-center p-2 text-sm  rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 bg-green-400 focus:ring-gray-600"
    >
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="text-gray-100"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
      <aside
      className={`navigation fixed top-0 left-0 z-40 w-64 md:pl-4 h-screen pt-[70px] transition-transform ${active?"translate-x-0":"-translate-x-full"} sm:translate-x-0 bg-[#14131a]`}
    >
      <div className="w-full h-full bg-[#1c1b23] p-4 rounded-lg">
        <div className="navs">
          <NavLink
          to={"/portfolio/"}
            className= {({isActive})=>`flex p-4 mb-1 gap-x-4 items-center cursor-pointer ${isActive?"bg-green-400/45 ":""} hover:bg-green-400/30 group rounded-md`}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-white">Home</span>
          </NavLink>
          <NavLink
          to="/portfolio/projects"
          className= {({isActive})=>`flex p-4 gap-x-4 mb-1 items-center cursor-pointer ${isActive?"bg-green-400/45":"bg-transparent"} hover:bg-green-400/30 group rounded-md`}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="text-white">Projects</span>
          </NavLink>
          <NavLink
            to="/portfolio/cheatsheats"
            className= {({isActive})=>`flex p-4 gap-x-4 mb-1 items-center cursor-pointer ${isActive?`bg-green-400/45`:'bg-transparent'} hover:bg-green-400/30 group rounded-md`}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
              ></path>
            </svg>
            <span className="text-white">Trending</span>
          </NavLink>
          <NavLink
            to="/portfolio/games"
            className= {({isActive})=>`flex p-4 gap-x-4 mb-1 items-center cursor-pointer ${isActive?`bg-green-400/45`:'bg-transparent'} hover:bg-green-400/30 group rounded-md`}
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"
              />
            </svg>
            <span className="text-white">Games</span>
          </NavLink>
        </div>
        <div className="socials pt-4 text-[#8b8a91]">
          <h3>Socials</h3>
          <a target='_blank' href='https://github.com/mrarya2002' className="flex p-4 gap-x-4 items-center hover:bg-black/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2a9d8f"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="text-[#8b8a91]">Github</span>
          </a>
          <a className="flex p-4 gap-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0277b5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="text-[#8b8a91]">Linkdin</span>
          </a>
          <a className="flex p-4 gap-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f77f00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span className="text-[#8b8a91]">HackerRank</span>
          </a>
          <a className="flex p-4 gap-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b5179e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span className="text-[#8b8a91]">Instagram</span>
          </a>
        </div>
      </div>
    </aside> 
    </>
  )
}

export default Sidebar;
