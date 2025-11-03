import logo from "./assets/img/icon/Logo.svg";
import search_icon from "./assets/img/icon/Search.svg";
import menu_icon from "./assets/img/icon/Justify-sm.svg";
import sm_banner from "./assets/img/phone-pic/sm-banner.png";
import banner from "./assets/img/lg-banner.jpg";
import p_1 from "./assets/img/phone-pic/new-sm-1.png";
import p_2 from "./assets/img/phone-pic/new-sm-2.png";
import p_3 from "./assets/img/phone-pic/new-sm-3.png";
function App() {
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
      </main>
    </>
  );
}

export default App;
