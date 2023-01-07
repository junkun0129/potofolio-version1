import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Page.module.scss";

type Props = {
    children:ReactNode[];
    flip:string;
    each:number;
    now:number;
}

export const Page=({children,flip, each, now}:Props)=>{
   

    return(
        <>
        <motion.div className={styles.page} 
                    style = {{originX:"left", transformStyle:'preserve-3d', zIndex:each<=now?each:"-"+each}} 
                    animate = {now===each&&{rotateY:flip === "RIGHT"?"0.001turn":flip === "LEFT"?"-0.5turn":null,  transition:{duration:1}}}
        >
          <div className={styles.pageInside} style = {{transformStyle:'preserve-3d'}}>
            <div className={styles.front} style ={{backfaceVisibility:'hidden'}}>
              <div className={styles.frontContents}>{children[0]}{now}</div> 
            </div>
            <div className={styles.back}>
              <div className={styles.backContents}>{children[1]}{now}</div> 
            </div>
          </div>
        </motion.div>
        </>

    )
}