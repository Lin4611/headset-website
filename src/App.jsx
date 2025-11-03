import logo from "./assets/img/icon/Logo.svg";
import search_icon from "./assets/img/icon/Search.svg";
import menu_icon from "./assets/img/icon/Justify-sm.svg";
import sm_banner from "./assets/img/phone-pic/sm-banner.png";
import banner from "./assets/img/lg-banner.jpg";
import p_1 from "./assets/img/phone-pic/new-sm-1.png";
import p_2 from "./assets/img/phone-pic/new-sm-2.png";
import p_3 from "./assets/img/phone-pic/new-sm-3.png";
import item_1 from "./assets/img/phone-pic/item-sm-1.jpg";
import item_2 from "./assets/img/phone-pic/item-sm-2.jpg";
import item_3 from "./assets/img/phone-pic/item-sm-3.jpg";
import item_4 from "./assets/img/phone-pic/item-sm-4.jpg";
import item_5 from "./assets/img/phone-pic/item-sm-5.jpg";
import item_6 from "./assets/img/phone-pic/item-sm-6.jpg";
import item_7 from "./assets/img/phone-pic/item-sm-7.jpg";
import sm_bg from "./assets/img/phone-pic/bg-sm.png";
import form_p_1 from "./assets/img/p-1.jpg";
import form_p_2 from "./assets/img/p-2.jpg";
import form_p_3 from "./assets/img/p-3.jpg";
import form_p_4 from "./assets/img/p-4.jpg";
import { useEffect, useState } from "react";
function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <>
      <main className="mx-auto max-w-[1920px] w-full">
        <header className="w-full flex items-center py-4 px-3 justify-between lg:px-20 lg:py-6 ">
          <img
            src={logo}
            alt="logo"
            className="w-[88px] h-[33px] object-cover brightness-0"
          />
          <nav className="hidden lg:flex items-center justify-between gap-12">
            <div className="max-w-[62px] h-10 justify-center items-center p-2 hover:border-b">
              <a href="#" className="leading-1.5 font-normal">
                首頁
              </a>
            </div>
            <div className="flex h-10 justify-center items-center p-2 hover:border-b">
              <a href="#" className="leading-1.5 font-normal">
                最新消息
              </a>
            </div>
            <div className="flex h-10 justify-center items-center p-2 hover:border-b">
              <a href="#" className="leading-1.5 font-normal">
                商品列表
              </a>
            </div>
            <div className="flex h-10 justify-center items-center p-2 hover:border-b">
              <a href="#" className="leading-1.5 font-normal">
                關於我們
              </a>
            </div>
          </nav>
          <section className="flex items-center justify-between">
            <button
              type="button"
              className="w-14 h-14 flex items-center justify-center"
            >
              <img
                src={search_icon}
                alt="search"
                className="w-14 h-14 object-cover"
              />
            </button>
            <button
              type="button"
              className="flex lg:hidden w-14 h-14 items-center justify-center"
            >
              <img
                src={menu_icon}
                alt="menu"
                className="w-6 h-6 object-cover"
              />
            </button>
          </section>
        </header>
        <section className="flex lg:hidden w-full bg-dark py-12 h-[610px] relative">
          <img
            src={sm_banner}
            alt="banner"
            className="w-full h-[514px] object-cover absolute block"
          />
          <div className="z-10 w-full flex flex-col px-3 gap-4 absolute top-[399px]">
            <h2 className="text-h1 font-medium text-white">INEAR PRO MAX</h2>
            <div className="w-full flex flex-col justify-between">
              <p className="text-white font-normal">
                9/16 - 10/30 官網搶先販售
              </p>
              <p className="text-white font-normal">
                新色上市，搭載最新降噪技術，提供給您最高音質享受，採用適應性演算法，快速處理音效，讓您享受更高傳真的效果。
              </p>
            </div>
          </div>
        </section>
        <section className="hidden lg:flex w-full bg-dark h-[634px] items-center px-[312px] relative">
          <img
            src={banner}
            alt="banner"
            className="w-[856px] h-[514px] object-cover"
          />
          <div className="z-10 w-[636px] h-[139px] flex flex-col px-3 gap-4 absolute left-[972px]">
            <h2 className="text-h1 font-medium text-white">INEAR PRO MAX</h2>
            <div className="w-full flex flex-col justify-between">
              <p className="text-white font-normal">
                9/16 - 10/30 官網搶先販售
              </p>
              <p className="text-white font-normal">
                新色上市，搭載最新降噪技術，提供給您最高音質享受，採用適應性演算法，快速處理音效，讓您享受更高傳真的效果。
              </p>
            </div>
          </div>
        </section>
        <section
          className="w-full flex flex-col items-center gap-12 py-15 bg-cover bg-center lg:bg-[#2b2b2b]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #000000, #404040, #191919)",
          }}
        >
          <h2 className="text-white text-h2 font-medium">最新商品</h2>
          <div className="flex flex-col w-full px-3 lg:flex-row lg:px-[312px] lg:gap-6">
            <figure className="w-full flex flex-col gap-2 lg:gap-6">
              <img
                src={p_1}
                alt="p1"
                className="w-full h-auto object-cover aspect-square"
              />
              <p className="w-full font-medium text-white p-2">INEAR PRO II</p>
            </figure>
            <figure className="w-full flex flex-col gap-2 lg:gap-6">
              <img
                src={p_2}
                alt="p2"
                className="w-full h-auto object-cover aspect-square"
              />
              <p className="w-full font-medium text-white p-2">INEAR PRO MAX</p>
            </figure>
            <figure className="w-full flex flex-col gap-2 lg:gap-6">
              <img
                src={p_3}
                alt="p3"
                className="w-full h-auto object-cover aspect-square"
              />
              <p className="w-full font-medium text-white p-2">INEAR PRO I</p>
            </figure>
          </div>
        </section>
        <section
          className="flex w-full flex-col gap-12 py-15 px-3 items-center justify-between bg-no-repeat bg-cover bg-center lg:justify-center lg:px-[422px] lg:bg-none lg:bg-dark"
          style={{
            backgroundImage: `url(${sm_bg})`,
          }}
        >
          <div className="w-full flex flex-col gap-2 lg:items-center lg:justify-center">
            <h2 className="text-h2 text-white font-medium tracking-[2px] leading-tight">
              多色選擇，專屬你的與眾不同
            </h2>
            <p className="text-white font-normal tracking-[2px] leading-normal">
              我的風格我主張，獨創品牌限定色，除了耀眼更要獨一無二
            </p>
          </div>
          <div className="flex flex-col w-full gap-6 lg:hidden">
            <img
              src={item_1}
              alt="item1"
              className="w-full h-[202px] object-cover"
            />
            <img
              src={item_2}
              alt="item2"
              className="w-full h-[250px] object-cover"
            />
            <img
              src={item_3}
              alt="item3"
              className="w-full h-[250px] object-cover"
            />
            <img
              src={item_4}
              alt="item4"
              className="w-full h-[202px] object-cover"
            />
            <img
              src={item_5}
              alt="item5"
              className="w-full h-[219px] object-cover"
            />
            <img
              src={item_6}
              alt="item6"
              className="w-full h-[219px] object-cover"
            />
            <img
              src={item_7}
              alt="item7"
              className="w-full h-[219px] object-cover"
            />
          </div>
          <div className="hidden lg:flex w-full h-[706px]">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex justify-between gap-6 w-full max-w-[636px]">
                <img
                  src={item_1}
                  alt="item1"
                  className="w-full h-full max-w-[306px] max-h-[306px] object-cover"
                />
                <div className="flex flex-col w-full gap-6">
                  <img
                    src={item_2}
                    alt="item1"
                    className="w-full h-full max-w-[306px] max-h-[141px] object-cover"
                  />
                  <img
                    src={item_3}
                    alt="item1"
                    className="w-full h-full max-w-[306px] max-h-[141px] object-cover"
                  />
                </div>
              </div>
              <img
                src={item_4}
                alt="item4"
                className="w-full h-full max-w-[636px] max-h-[376px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-between items-center w-full gap-6 max-w-[416px]">
              <img
                src={item_5}
                alt=""
                className="w-full h-full object-cover max-w-[416px] max-h-[219px]"
              />
              <img
                src={item_6}
                alt=""
                className="w-full h-full object-cover max-w-[416px] max-h-[219px]"
              />
              <img
                src={item_7}
                alt=""
                className="w-full h-full object-cover max-w-[416px] max-h-[219px]"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col px-3 py-15 gap-6 bg-dark-muted lg:flex-row-reverse lg:items-center lg:justify-center lg:px-[312px] lg:py-[70px]">
          <div className="flex flex-col gap-12 w-full">
            <div className="w-full flex flex-col gap-12 lg:gap-6 lg:items-center">
              <h2 className="text-white text-h2 font-medium tracking-tight">
                訂製專屬於您的完美耳機
              </h2>
              <p className="text-white font-normal">
                請於下方留下您的詳細資料與訂製需求，將有專人於 3
                日內聯繫，此表單僅做為客服調查，不等同於完成訂製商品。
              </p>
            </div>
            <div className="w-full flex flex-col gap-6 justify-between">
              <div className="flex flex-col gap-1">
                <p className="hidden lg:block text-white">姓氏</p>
                <input
                  type="text"
                  className={`w-full border h-14 rounded-sm border-[#DEE2E6] text-white ${
                    isDesktop
                      ? "placeholder:text-[#ACACAC]"
                      : "placeholder:text-white"
                  } pl-3`}
                  placeholder={isDesktop ? "請輸入姓氏" : "姓氏"}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="hidden lg:block text-white">名字</p>
                <input
                  type="text"
                  className={`w-full border h-14 rounded-sm border-[#DEE2E6] text-white ${
                    isDesktop
                      ? "placeholder:text-[#ACACAC]"
                      : "placeholder:text-white"
                  } pl-3`}
                  placeholder={isDesktop ? "請輸入名字" : "名字"}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="hidden lg:block text-white">信箱</p>
                <input
                  type="email"
                  className={`w-full border h-14 rounded-sm border-[#DEE2E6] text-white ${
                    isDesktop
                      ? "placeholder:text-[#ACACAC]"
                      : "placeholder:text-white"
                  } pl-3`}
                  placeholder={isDesktop ? "請輸入信箱" : "信箱"}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="hidden lg:block text-white">聯絡電話</p>
                <input
                  type="phone"
                  className={`w-full border h-14 rounded-sm border-[#DEE2E6] text-white ${
                    isDesktop
                      ? "placeholder:text-[#ACACAC]"
                      : "placeholder:text-white"
                  } pl-3`}
                  placeholder={isDesktop ? "請輸入聯絡電話" : "聯絡電話"}
                />
              </div>

              <button
                type="button"
                className="w-full h-14 bg-white text-dark rounded-sm hover:bg-dark hover:text-white lg:w-[88px] lg:h-9 lg:self-end"
              >
                送出表單
              </button>
            </div>
          </div>

          <div className="w-full flex gap-4">
            <div className="w-full flex flex-col gap-4 mt-12">
              <img
                src={form_p_1}
                alt="p1"
                className="w-[168px] h-[168px] aspect-square object-cover lg:w-[306px] lg:h-[306px]"
              />
              <img
                src={form_p_3}
                alt="p3"
                className="w-[168px] h-[168px] aspect-square object-cover lg:w-[306px] lg:h-[306px]"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <img
                src={form_p_2}
                alt="p2"
                className="w-[168px] h-[168px] aspect-square object-cover lg:w-[306px] lg:h-[306px]"
              />
              <img
                src={form_p_4}
                alt="p4"
                className="w-[168px] h-[168px] aspect-square object-cover lg:w-[306px] lg:h-[306px]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
