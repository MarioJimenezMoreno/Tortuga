import "./MainPage.css";
import HeaderMP from './HeaderMP'
import Team from "./Team";
import { ThemeProps } from "./types";

function MainPage({onThemeChange}:ThemeProps) {
    
  return (
    <> 
    <HeaderMP onThemeChange={onThemeChange}/>
    <div className="h-screen px-80 py-28">
          <div className="cont_imagen">
            <img className="imagen" alt="placeholder" />
          </div>
          <div className="textos">
            <h1 className="titulo">Boostea tu PRODUCTIVIDAD</h1>
            <div className="parrafo">
              Con esta aplicación podrás organizarte como nunca antes con la
              revolucionaria tecnologia tortuga
            </div>
          </div>
          <div className="box_texto flex der"> 
          <div className="cont_imagen">
            <img className="imagen" alt="placeholder" />
          </div>
          <div className="textos">
            <h1 className="titulo">O tu vida social</h1>
            <div className="parrafo">
              Permite que Tortuga Corporation calcule, analice y recomiende tus actividades de ocio.
            </div>
          </div>
      </div>
        </div>

      <Team/>
    </>
  )
}
export default MainPage;