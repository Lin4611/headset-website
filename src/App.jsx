import logo from "./assets/img/icon/Logo.svg";
import search_icon from "./assets/img/icon/Search.svg";
import menu_icon from "./assets/img/icon/Justify-sm.svg";
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
            <button type="button" className="flex lg:hidden w-14 h-14 items-center justify-center">
              <img src={menu_icon} alt="menu" className="w-6 h-6 object-cover"/>
            </button>
          </section>
        </header>
      </main>
    </>
  );
}

export default App;
