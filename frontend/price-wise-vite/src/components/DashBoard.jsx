import React from "react";
import { useDisclosure } from "@mantine/hooks";
import {Drawer} from '@mantine/core';


function DashBoard() {
const [opened, {open,close}]= useDisclosure(false);
  return (
    <>
     
     <Drawer opened={opened} onClose={close} title="Focus demo" position="bottom" size="50%" overlayProps={{ opacity: 0.5, blur: 4 }}>
              <p className='text-center text-2xl text-bold'>Make Payment</p>
            </Drawer>
    <div className="flex flex-col  p-4 bg-indigo-700 w-screen rounded-xl mt-4 m-2">
      
      <div className="text-2xl font-semibold "></div>
      <div className="input flex justify-between">
        <input type="text" />
        <div className="light-mode-buttons">
          <button class="rounded-full ...  p-2">Light/Dark</button>
        </div>
      </div>
      <div className="multi-container grid text-white ">
        <div className="text mt-5">Our services</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-5 place-content-center text-center text-white w-full h-auto">
          <div className="box-1 ">
            <div className="icon"></div>
            Digital Banking
          </div>
          <div className="box-1 bg-red-100 h-60 w-full" onClick={open} onClose={close}>
           <p>
            Expense Analysis
            </p> 
            
          </div>
          <div className="box-1 ">Budget Planning</div>
          <div className="box-1 ">Scheduled Payments</div>
          <div className="box-1 ">Auto Pay</div>
          <div className="box-1 ">Data Security</div>
        </div>
      </div>
      <div className="down-multi-container text-white">
        <div className="down-text my-6">Today's Insights</div>
        <div className="down-container grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 text-center place-content-center h-60 w-full">
          <div className="down-first-container">
            <div className="down-first-text">Requests</div>
          </div>
          <div className="down-middle-container">
            <div className="down-first-text">Last Transactions</div>
          </div>
          <div className="down-end-container">
            <div className="down-first-text ">Subscriptions</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DashBoard;
