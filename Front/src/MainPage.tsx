import "./MainPage.css";
import HeaderMP from './HeaderMP'
import { ThemeProps } from "./types";
import Home from "./Home";
import Info from "./Info";
import Team from "./Team";
function MainPage({onThemeChange}:ThemeProps) {

  return (
    <> 
      <HeaderMP onThemeChange={onThemeChange}/>
      <div id="home"/>
      <Home/>
      <div id="info"/>
      <Info/>
      <div id="team"/>
      <Team/>
    </>
  )
}
export default MainPage;