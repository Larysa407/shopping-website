import { useContext } from "react"
import {SwitchContext} from "../Context/index"
import { GridFour, List } from "phosphor-react";

export default function Switcher(){
    const { isSelected, setIsSelected } = useContext(SwitchContext);
    const toggleView = () => {
      setIsSelected(!isSelected)
    }
    return (
        <div className="viewSwitcher">
        <button className="blockView" onClick={toggleView}>
          <GridFour size={25} weight={isSelected ? "light" : "bold"} />
        </button>
        <button className="tableView" onClick={toggleView}>
          <List size={25} weight={isSelected ? "bold" : "light"} />
        </button>
      </div>
    )
}