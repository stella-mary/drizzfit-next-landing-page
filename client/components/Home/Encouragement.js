import styles from "@/styles/Encouragement.module.css"
import { useRouter } from "next/router"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const boxVariant = {
    visible: {
        opacity: 1,
        x: 0, // Change from y: 0 to x: 0
        transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, x: -50 }, // Change from y: 50 to x: -50
};


const Encouragement = () => {

    const control1 = useAnimation();
    const [ref1, inView1] = useInView();
    const control2 = useAnimation();
    const [ref2, inView2] = useInView();
    const control3 = useAnimation();
    const [ref3, inView3] = useInView();

    useEffect(() => {
        if (inView1) {
            control1.start("visible");
        } else {
            control1.start("hidden");
        }
    }, [control1, inView1]);

    useEffect(() => {
        if (inView2) {
            control2.start("visible");
        } else {
            control2.start("hidden");
        }
    }, [control2, inView2]);

    useEffect(() => {
        if (inView3) {
            control3.start("visible");
        } else {
            control3.start("hidden");
        }
    }, [control3, inView3]);


    return (
        <div className={styles.encouragement}>
            <div className={styles.encouragementMain}>
                <div className={styles.imageContainer1}>
                </div>

                <div className={styles.encouragementSub}>
                    <motion.div
                        className={styles.h1}
                        ref={ref1}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control1}
                    >
                        Do what you like!
                    </motion.div>
                    <motion.div
                        className={styles.para}
                        ref={ref1}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control1}
                    >
                        Swim/Dance/Jog/Trekk on your periods.
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Encouragement
