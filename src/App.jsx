import logo from "./assets/img/icon/Logo.svg";
import search_icon from "./assets/img/icon/Search.svg";
import menu_icon from "./assets/img/icon/Justify-sm.svg";
import banner from "./assets/img/phone-pic/sm-banner.png";
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
        <section className="w-full bg-dark py-12 h-[610px] flex relative">
          <img
            src={banner}
            alt="banner"
            className="w-full h-[514px] object-cover absolute"
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
      </main>
    </>
  );
}

export default App;
