import GloablNav from "./GloablNav";
import "../static/css/Header.css"

function Header({setPage}) {
  return (
    <header className="header">
      <div className="header-block">
        <a href="/"><img src="/react-personal-site/public/img/logo.png" alt="yang site logo" className="header-logo"/></a>
        <h1 className="header-title">Yang's Personal Site</h1>
      </div>
      <GloablNav setPage={setPage} className="global-nav"/>
    </header>
  )
}

export default Header