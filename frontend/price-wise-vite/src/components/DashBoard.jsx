import React from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Switch,
  Group,
  useMantineColorScheme,
  ActionIcon,
  useMantineTheme,
  Drawer,
} from "@mantine/core";
import { ReactComponent as Wallet } from "../assets/icon/wallet.svg";
import { ReactComponent as Expense} from "../assets/icon/expense.svg"
import { ReactComponent as Budget } from "../assets/icon/budget.svg"
import { ReactComponent as Scheduled } from "../assets/icon/scheduled.svg"
import { ReactComponent as Security } from "../assets/icon/security.svg"
import { ReactComponent as NoteIcon } from "../assets/icon/noteicon.svg"
import { ReactComponent as Notify } from "../assets/icon/notify.svg"



function DashBoard() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="flex flex-col  p-4 bg-black w-screen rounded-xl mt-4 m-2">
        <div className="text-2xl font-semibold "></div>
        <div className="flex justify-between">
          <input type="text" />
          <div className="light-mode-buttons flex  gap-4 p-0.2">
            <NoteIcon/>
            <Notify/>
          </div>
        </div>
        <div className="multi-container grid text-white ">
          <div className="text mt-5">Our services</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6  gap-4 mt-5 place-items-center text-center text-white h-64">
            <div className="box-1">
              <div className="icon mt-2">
                <Wallet />
              </div>
              <p>Digital Banking</p>
            </div>
            <div className="box-1">
              <div className="icon">
                <Expense />
              </div>
              <p>Expense Analysis</p>
            </div>
            <div className="box-1 ">
              <div className="icon">
                <Drawer
                  opened={opened}
                  onClose={close}
                  title="Focus demo"
                  position="bottom"
                  size="50%"
                  overlayProps={{ opacity: 0.5, blur: 4 }}
                >
                  <p className="text-center text-2xl text-bold">Make Payment</p>
                </Drawer>
              </div>
              <div className="icon">
                <Budget/>
              </div>
              <p onClick={open} onClose={close}>
                Budget Planning
              </p>
            </div>
            <div className="box-1 ">
              <div className="icon">
                <Scheduled/>
              </div>
              <p>Scheduled Payments</p>
            </div>
            <div className="box-1 ">
              <div className="icon">
                <Budget/>
              </div>
              Automatic Payroll
            </div>
            <div className="box-1 ">
              <div className="icon ">
                <Security/>
              </div>
              Data Security
            </div>
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
