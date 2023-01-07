import { useState } from 'react'
import { motion, useMotionValue } from "framer-motion"
import { transform } from "framer-motion"
import { useTransform } from 'framer-motion';
import styles from "./App.module.scss";
import {Box} from "./component/Box"
import Book from './Book';
import PageProvider from './provider/PageProvider';
import List from './component/List';

function App() {


 
  
  return (
    <>
    <div className={styles.global}>

      <PageProvider>
        <List></List>
        <Book></Book>
      </PageProvider>
    </div>
    </>
  )
}

export default App
