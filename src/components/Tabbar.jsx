import "../static/css/Tabbar.css";
import ButtonLink from "./ButtonLink";

function Tabbar({setTab, tab}) {
  const activeClass = "tab-button--active";
  return (
    <div className="tabbar">
    <div className={`tab-button ${tab === "sns" && activeClass}`}>
      <ButtonLink 
        visual="link"
        name="SNS"
        onClick={(e) =>{
          e.preventDefault();
          setTab("sns")
        }}
      />
    </div>

    <div className={`tab-button ${tab === "form" && activeClass}`}>
      <ButtonLink
        visual="link"
        name="Send Message"
        onClick={(e) => {
          e.preventDefault();
          setTab("form");
        }}
      />
    </div>
    </div>
  )
}

export default Tabbar;