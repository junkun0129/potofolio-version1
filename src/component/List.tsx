import * as React from 'react';
import styles from "./List.module.scss";
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
function List() {

    const [iwatani, setIwatani] = useState(false);

    useEffect(()=>{
        console.log(iwatani)
    },[iwatani])

    return ( 
        <>

        {iwatani?<h1>iwatani</h1>:null}
            <ul>
                <motion.li whileHover={{scale:1.2}} onHoverStart = {e=>{setIwatani(true)}} onHoverEnd = {e=>{setIwatani(false)}} className={styles.list1}>list1</motion.li>
                <motion.li whileHover={{scale:1.2}} onHoverStart = {e=>{setIwatani(true)}} onHoverEnd = {e=>{setIwatani(false)}} className={styles.list2}>list2</motion.li>
                <motion.li whileHover={{scale:1.2}} onHoverStart = {e=>{setIwatani(true)}} onHoverEnd = {e=>{setIwatani(false)}} className={styles.list3}>list3</motion.li>
                <motion.li whileHover={{scale:1.2}} onHoverStart = {e=>{setIwatani(true)}} onHoverEnd = {e=>{setIwatani(false)}} className={styles.list4}>list4</motion.li>
            </ul>
        </>
     );
}

export default List;