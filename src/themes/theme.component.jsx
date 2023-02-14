import Modal from "../components/modal/modal.component";
import { primaryColors, backgroundColors } from "./data";
import PrimaryColor from "./primaryColor.component";
// import BackgroundColor from "./backgroundColor.component";
import './theme.styles.css'

const Theme = () => {
    return (
      <Modal className="theme__modal">
          <h3>Customize Your Theme</h3>
          <div className="theme__primary-wrapper">
              <h5>Primary Color</h5>
              <div className="theme__primary-colors">
                  {
                      primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                  }
              </div>
          </div>
          {/* <div className="theme__background-wrapper">
              <h5>Background Color</h5>
              <div className="theme__background-colors">
                  {
                      backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                  }
              </div>
          </div> */}
      </Modal>
    )
  }
  
  export default Theme