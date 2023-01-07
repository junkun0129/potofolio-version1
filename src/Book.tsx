import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Page } from './component/Page';
import { Title } from './contents/Title';
import { Page1 } from './contents/Page1';
import Page2 from "./contents/Page2";
import Page3 from './contents/Page3';
import Page4 from './contents/Page4';
import Page5 from './contents/Page5';
import Page6 from './contents/Page6';
import Page7 from './contents/Page7';
import styles from "./Book.module.scss";
import { PageContext } from './provider/PageProvider';
import { transform } from 'framer-motion';



function Book() {

  const [flip, setFlip] = useState("RIGHT");
  let [eachPage, setEachPage] = useState(1);
  let [nowPage, setNowPage] = useState(3);
  const [tilt, setTilt] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100,100], [30,-30])
  const rotateY = useTransform(x, [-100,100], [-30,30])

  const page = useContext(PageContext);

  useEffect(()=>{
    if(nowPage<5&&nowPage>=0){

        window.addEventListener("keyup", (e) =>{
            switch(e.key){
                case "ArrowLeft":
                    setFlip("LEFT");
                    setNowPage(nowPage++)
                    break;
                    case "ArrowRight":
                        setFlip("RIGHT");
                        setNowPage(nowPage--);
                        break;
                    }
    })
}
},[])


 
  


    return ( 
        <>
            <motion.div className={styles.space} whileHover = {{}}>

            <motion.div className={styles.cube} style = {{x, y, rotateX, rotateY, z:100}} drag dragElastic = {0.5} dragConstraints = {{top:0, left:0, right:0, bottom:0}} whileHover = {{cursor:"grabbing"}}>

                <motion.div className={styles.book}>

                    <Page flip = {flip} each = {eachPage++} now = {nowPage}>
                    <Title></Title>
                    <Page1></Page1>
                    
                    </Page>

                    <Page flip = {flip} each = {eachPage++} now = {nowPage}>
                    <Page2></Page2>
                    <Page3></Page3>
                    </Page>

                    <Page flip = {flip} each = {eachPage++} now = {nowPage}>
                    <Page4></Page4>
                    <Page5></Page5>
                    </Page>

                    <Page flip = {flip} each = {eachPage++} now = {nowPage}>
                    <Page6></Page6>
                    <Page7></Page7>
                    </Page>

                </motion.div>

                <div className={styles.top}>top</div>
                <div className={styles.bottom}>bottom</div>
                <div className={styles.right}>right</div>
                <div className={styles.spine}>spine</div>
                <div className={styles.back}>back</div>
            </motion.div>
            </motion.div>
        </>
     );
}

export default Book;