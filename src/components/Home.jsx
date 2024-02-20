import React from 'react'

const Home = () => {
  return (
    <>
    <div class="px-4 sm:ml-64 relative">
      <div className="home">
          <div
            className="profile-wrapper w-full bg-[url('https://www.hindustantimes.com/ht-img/img/2023/07/19/1600x900/One_Piece_Wano_1679966485338_1689764999669.webp')] bg-no-repeat bg-cover"
          >
            <div
              className="profile w-full backdrop-blur-sm px-5 md:px-10 py-5 flex justify-between items-center"
            >
              <div className="image flex justify-between items-center gap-x-6 md:gap-x-9">
                <div className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://wallpapers.com/images/hd/monkey-d-luffy-and-pirate-flag-5o7fotrqeem4kqne.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col text-white">
                  <h2 className="font-bold text-3xl md:text-4xl">Nikhil Arya</h2>
                  <p>@luffy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about m-auto mt-6 md:w-[50%] w-full text-center">
            <p className="text-lg text-center font-semibold text-gray-400">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
          </div>

          <div className="skills mt-5">
            <h1 className="text-lg font-semibold text-gray-200">What I Know</h1>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5 text-zinc-300 pt-6"
              >
                  <div
                    className="flex-1 flex flex-col gap-4 bg-[#1c1b23] p-4 rounded-md shadow-lg"
                  >
                    <div
                      className="text-primary font-medium text-lg tracking-wider"
                    >
                      Frontend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-md bg-body text-xs text-primary p-2">
                        HTML
                      </div>
                      <div className="rounded-md bg-body text-xs text-primary p-2">
                        CSS
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60"
                      >
                        Tailwind
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60"
                      >
                        Javascript
                      </div>
                      <div className="rounded-md bg-body text-xs text-primary p-2">
                        Typescript
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60"
                      >
                        React Js
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-black/60"
                      >
                        Next Js 13
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col gap-4 bg-[#1c1b23] p-4 rounded-md shadow-lg"
                  >
                    <div
                      className="text-primary font-medium text-lg tracking-wider"
                    >
                      Backend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60"
                      >
                        Node Js
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60"
                      >
                        Express Js
                      </div>
                      <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                        PHP
                      </div>
                      
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col gap-4 bg-[#1c1b23] p-4 rounded-md shadow-lg"
                  >
                    <div
                      className="text-primary font-medium text-lg tracking-wider"
                    >
                      Database
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60"
                      >
                        MySql
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-emerald-500/60"
                      >
                        MongoDB
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col gap-4 bg-[#1c1b23] p-4 rounded-md shadow-lg"
                  >
                    <div
                      className="text-primary font-medium text-lg tracking-wider"
                    >
                      Others
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60"
                      >
                        C/C++
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60"
                      >
                       Python
                      </div>
                      <div
                        className="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60"
                      >
                        Git
                      </div>
                      <div className="rounded-md bg-body text-xs text-primary p-2">
                        Java
                      </div>
                    </div>
                  </div>
                
              </div>
          </div>
      </div> 
    </div>
    </>
  )
}

export default Home;
