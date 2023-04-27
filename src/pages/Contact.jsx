import TabContent from "../components/TabContent";
import Tabbar from "../components/Tabbar";
import "../static/css/Contact.css";
import { useState } from "react";


function Contact() {
  const [tab, setTab] = useState("sns");
  return (
    <div className="contact">
      <h2 className="form-title">Get in Touch!</h2>
      <div className="contact-area">
        <Tabbar setTab = {setTab} tab={tab}/>
        <TabContent tab={tab} />

      </div>
    </div>
  )
}

export default Contact