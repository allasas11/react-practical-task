import { ReactNode } from "react";
import styles from "../styles/customers/ContainerMain.module.css"


interface ContainerMainProps {
    children: ReactNode;
  }

const ContainerMain:React.FC<ContainerMainProps> = ({children}) => {
    return (
        <div className={styles.mainContainer}>
            {children}
        </div>
    )
}
export default ContainerMain