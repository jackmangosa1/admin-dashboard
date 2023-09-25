import styles from "../styles/New.module.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Image from "next/image"
import { UilImageUpload } from '@iconscout/react-unicons'
import { useState } from "react"

const New = ({userInputs, title}) =>{
    const [file, setFile] = useState("")

    return(
        <div className={styles.new}>
            <Sidebar/>
            <div className={styles.newContainer}>
                <Navbar/>
                <div className={styles.top}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <Image 
                        src= {file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                        height={100} 
                        width={100} 
                        className={styles.image}
                        />
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form}>
                            <div className={styles.formInput}>
                                <label className={styles.uploadLabel} htmlFor="file">
                                    Image upload 
                                    <UilImageUpload/>
                                </label>
                                <input type="file" id="file" onChange={ e => setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>
                            {userInputs.map( input => (
                                 <div className={styles.formInput} key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                           
                           
                            <button className={styles.button}> Send</button>
                        </form>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default New;