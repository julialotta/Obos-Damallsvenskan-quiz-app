import { Outlet } from "react-router-dom";
import { AppWrapper } from "./StyledComponents/Wrappers";
import { motion } from "framer-motion";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100vw" },
  };
  return (
    <AppWrapper>
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 1 }}
      >
        <Outlet />
      </motion.main>
    </AppWrapper>
  );
};
