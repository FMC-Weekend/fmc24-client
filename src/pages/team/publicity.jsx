import React from "react";
import Classes from "./styles.module.css"


const Publicity = () => {
    return (
      <div className={Classes.margin}>
        <div class="mb-20 md:ml-40 lg:ml-40" id='pub'>
        <div class="xl:container mx-auto px-4 md:px-10">
          <div class="ml-20 mb-16 md:w-2/3 lg:w-1/2">
            <h2 class="md:ml-20 lg:ml-20 mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Publicity
            </h2>
          </div>
          <div class="md:ml-20 lg:ml-20 grid gap-12 px-4 sm:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
              <div class="h-[24rem]">
              <img
                class="mt-20mx-auto h-[18rem] w-full object-cover"
                src="/team/Aman.jpeg"
                alt="aman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Aman Kumar Yadav</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[24rem]">
              <img
                class="mx-auto h-[18rem] w-full object-cover"
                src="/team/Sundeep.png"
                alt="sundeep"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Sundeep Chowdary</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[24rem]">
              <img
                class="mx-auto h-[18rem] w-full object-cover"
                src="/team/Janhavi.png"
                alt="janhavi"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Janhavi Verma</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[24rem]">
              <img
                class="mx-auto h-[18rem] w-full object-cover"
                src="/team/Vishal.png"
                alt="vishal"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Vishal Sharma</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[24rem]">
              <img
                class="mx-auto h-[18rem] w-full object-cover"
                src="/team/Kancharla.png"
                alt="kancharla"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Kancharla Kiranmai</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[24rem]">
              <img
                class="mx-auto h-[18rem] w-full object-cover"
                src="/team/Ritesh.png"
                alt="ritesh"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Ritesh Soni</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head
</span>
                </div>
              </div>
            </div>
            
            
              
            </div>
          </div>
        </div>
      </div>
                                          
    )
}

export default Publicity