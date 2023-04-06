import React from "react";
import { useDisclosure } from "@mantine/hooks";
import {Drawer} from '@mantine/core';
import {ReactComponent as Icon} from '../assets/expense.svg';

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6  gap-4 mt-5 place-items-center text-center text-white h-64">
          <div className="box-1">
            <div className="icon">
              <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.603027" y="0.15789" width="60.8222" height="63.1579" rx="20" fill="#19191B"/>
                <path d="M19 30.8571C19 28.0957 21.2386 25.8571 24 25.8571H38C40.7614 25.8571 43 28.0957 43 30.8571V38C43 40.7614 40.7614 43 38 43H24C21.2386 43 19 40.7614 19 38V30.8571Z" fill="#F7F4F7"/>
                <line x1="25.8572" y1="34.4328" x2="36.1429" y2="34.4328" stroke="black"/>
                <path d="M25.954 21.2924C26.3307 20.0263 27.6699 19.2791 28.9452 19.6233L27.7639 23.5928C27.5128 24.4368 26.6199 24.935 25.7698 24.7055C25.3447 24.5908 25.1019 24.1557 25.2275 23.7337L25.954 21.2924Z" fill="#F7F4F7"/>
                <path d="M29.1986 19.9307C29.1993 19.7323 29.3608 19.572 29.5592 19.5727L33.595 19.5868C36.326 19.5963 38.5315 21.818 38.521 24.5491C38.5206 24.6583 38.4317 24.7465 38.3224 24.7462L31.1802 24.7212C30.0756 24.7174 29.1836 23.8188 29.1879 22.7143L29.1986 19.9307Z" fill="#F7F4F7"/>
              </svg>

            </div>
            <p>Digital Banking</p>
          </div>
          <div className="box-1" onClick={open} onClose={close}>
            <div className="icon">
              <Icon/>
            </div>
            
          </div>
          <div className="box-1 ">
            <div className="icon">
              <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60.8222" height="63.1579" rx="20" fill="white"/>
                <path d="M18 26C18 23.2386 20.2386 21 23 21H37C39.7614 21 42 23.2386 42 26V40C42 42.7614 39.7614 45 37 45H23C20.2386 45 18 42.7614 18 40V26Z" fill="black"/>
                <path d="M24.2106 34.0526L28.1247 38.1625" stroke="white"/>
                <line x1="24.2106" y1="30.2369" x2="28.4211" y2="30.2369" stroke="white"/>
                <line x1="30.5262" y1="35.7632" x2="35.7894" y2="35.7632" stroke="white"/>
                <line x1="30.5262" y1="37.9737" x2="35.7894" y2="37.9737" stroke="white"/>
                <line y1="-0.5" x2="5.67549" y2="-0.5" transform="matrix(0.68966 -0.724133 0.68966 0.724133 24.5066 38.4737)" stroke="white"/>
                <line x1="30.5262" y1="30.2369" x2="35.7894" y2="30.2369" stroke="white"/>
                <line x1="33.1316" y1="27.4211" x2="33.1316" y2="32.9474" stroke="white"/>
              </svg>

            </div>
            <p>Digital Banking</p>
          </div>
          <div className="box-1 ">
            <div className="icon">
              <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60.8222" height="63.1579" rx="20" fill="#19191B"/>
                <path d="M19 18C19 16.8954 19.8954 16 21 16H29.0553H38.2878C39.3923 16 40.2878 16.8954 40.2878 18V47.1272C40.2878 47.4616 39.8232 47.5452 39.7066 47.2318L38.2121 43.2133C37.5631 41.4681 35.091 41.4788 34.457 43.2295L32.743 47.9632C32.6454 48.2327 32.2615 48.2249 32.1749 47.9517L30.9619 44.123C30.3722 42.2617 27.7384 42.2617 27.1487 44.123L25.9546 47.8919C25.8661 48.1711 25.4711 48.1711 25.3826 47.8919L24.2185 44.2176C23.626 42.3477 20.9757 42.3595 20.4 44.2347L19.5868 46.8833C19.4857 47.2126 19 47.1398 19 46.7953V18Z" fill="#D9D9D9"/>
                <path d="M24.25 34.4124L24.2852 34.3722L24.25 34.4124ZM24.25 34.4124L24.2583 34.373L24.1233 35.0146L24.25 34.4124ZM24.6663 35.183C24.6491 34.9441 24.6994 34.703 24.8104 34.4931C25.0178 34.5976 25.1932 34.764 25.3123 34.9692C25.122 35.1035 24.8963 35.1782 24.6663 35.183ZM25.1713 34.0789L25.2224 34.0906L25.1713 34.0789Z" fill="black" stroke="black" stroke-width="3"/>
                <path d="M24.831 33.4186C24.464 33.8313 24.4895 34.4757 24.8881 34.858C25.2867 35.2403 25.9074 35.2157 26.2744 34.803L24.831 33.4186ZM26.2744 34.803L37.5553 22.1206L36.1118 20.7362L24.831 33.4186L26.2744 34.803Z" fill="black"/>
              </svg>
              <p>Scheduled Payments</p>
            </div>
          </div>
          <div className="box-1 ">
            <div className="icon">
              <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4659 33.579C21.4659 30.8175 23.7045 28.579 26.4659 28.579H36.74C39.5014 28.579 41.74 30.8175 41.74 33.579V39.3684C41.74 42.1298 39.5014 44.3684 36.74 44.3684H26.4659C23.7045 44.3684 21.4659 42.1299 21.4659 39.3684V33.579Z" fill="#F7F4F7"/>
                <line x1="27.2584" y1="36.4381" x2="35.9473" y2="36.4381" stroke="black"/>
                <path d="M27.3811 24.2247C27.6768 23.1414 28.7898 22.5202 29.8671 22.8372L28.842 26.5932C28.6448 27.3154 27.9029 27.7296 27.1847 27.5182C26.8256 27.4125 26.6144 27.0341 26.7129 26.673L27.3811 24.2247Z" fill="#F7F4F7"/>
                <path d="M30.0814 23.0929C30.082 22.9253 30.2184 22.79 30.386 22.7906L33.4179 22.8021C35.9334 22.8117 37.9654 24.8586 37.9565 27.3741C37.9561 27.4747 37.8743 27.556 37.7737 27.5556L32.0658 27.5339C30.9612 27.5297 30.069 26.6308 30.0729 25.5263L30.0814 23.0929Z" fill="#F7F4F7"/>
                <rect width="60.8222" height="63.1579" rx="20" fill="#D9D9D9"/>
                <path d="M18 23C18 20.2386 20.2386 18 23 18H37C39.7614 18 42 20.2386 42 23V37C42 39.7614 39.7614 42 37 42H23C20.2386 42 18 39.7614 18 37V23Z" fill="black"/>
                <path d="M23.0527 30.6316L27.7497 35.3285" stroke="#D9D9D9"/>
                <line x1="23.0527" y1="26.3421" x2="28.1054" y2="26.3421" stroke="#D9D9D9"/>
                <line x1="30.6315" y1="32.6579" x2="36.9473" y2="32.6579" stroke="#D9D9D9"/>
                <line x1="30.6315" y1="35.1842" x2="36.9473" y2="35.1842" stroke="#D9D9D9"/>
                <line y1="-0.5" x2="6.6425" y2="-0.5" transform="matrix(0.707111 -0.707102 0.707111 0.707102 23.4083 35.6842)" stroke="#D9D9D9"/>
                <line x1="30.6315" y1="26.3421" x2="36.9473" y2="26.3421" stroke="#D9D9D9"/>
                <line x1="33.658" y1="23.0527" x2="33.658" y2="29.3684" stroke="#D9D9D9"/>
              </svg>

            </div>
            Auto Pay</div>
          <div className="box-1 ">
            <div className="icon ">
              <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2601 31.3158C19.2601 28.5544 21.4987 26.3158 24.2601 26.3158H34.5342C37.2956 26.3158 39.5342 28.5544 39.5342 31.3158V37.1053C39.5342 39.8667 37.2956 42.1053 34.5342 42.1053H24.2601C21.4987 42.1053 19.2601 39.8667 19.2601 37.1053V31.3158Z" fill="#F7F4F7"/>
                <line x1="25.0527" y1="34.1749" x2="33.7416" y2="34.1749" stroke="black"/>
                <path d="M25.1755 21.9615C25.4711 20.8782 26.5841 20.257 27.6614 20.574L26.6363 24.3301C26.4392 25.0523 25.6972 25.4664 24.979 25.2551C24.6199 25.1494 24.4087 24.771 24.5072 24.4099L25.1755 21.9615Z" fill="#F7F4F7"/>
                <path d="M27.8756 20.8298C27.8762 20.6622 28.0126 20.5268 28.1802 20.5275L31.2121 20.539C33.7276 20.5486 35.7595 22.5955 35.7507 25.111C35.7503 25.2116 35.6685 25.2928 35.5678 25.2924L29.86 25.2707C28.7554 25.2665 27.8632 24.3677 27.8671 23.2631L27.8756 20.8298Z" fill="#F7F4F7"/>
                <rect width="60.8222" height="63.1579" rx="20" fill="#D9D9D9"/>
                <path d="M18 23C18 20.2386 20.2386 18 23 18H37C39.7614 18 42 20.2386 42 23V37C42 39.7614 39.7614 42 37 42H23C20.2386 42 18 39.7614 18 37V23Z" fill="black"/>
                <path d="M26.3319 31.9602C25.9161 31.5967 25.8737 30.965 26.2371 30.5492L32.1325 23.8055C32.496 23.3897 33.1278 23.3473 33.5436 23.7108L35.1616 25.1254C36.409 26.2158 36.5362 28.1111 35.4457 29.3585L32.183 33.0906C31.0926 34.338 29.1973 34.4652 27.9499 33.3747L26.3319 31.9602Z" fill="#D9D9D9"/>
                <path d="M23.0527 33.7895H38.2106" stroke="#D9D9D9" stroke-linecap="round"/>
                <path d="M29.4373 22.0867C30.0506 21.3873 31.1146 21.3174 31.8141 21.9306C32.1638 22.2372 32.1987 22.7693 31.8921 23.119L25.5077 30.4007C25.2011 30.7504 24.6691 30.7853 24.3194 30.4787C23.62 29.8655 23.5501 28.8014 24.1633 28.102L29.4373 22.0867Z" fill="#D9D9D9"/>
                <path d="M29.3685 32.1316L30.8685 30.6316" stroke="black" stroke-width="0.2" stroke-linecap="round"/>
                <path d="M30.8685 31.9119L31.9292 30.8513" stroke="black" stroke-width="0.2" stroke-linecap="round"/>
              </svg>

            </div>
            Data Security</div>
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
