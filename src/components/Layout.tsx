import { Outlet } from "react-router-dom";
import { AppWrapper } from "./StyledComponents/Wrappers";
import { motion } from "framer-motion";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <AppWrapper linear={"linear-gradient(to bottom right, #172542, #2e3b55)"}>
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>
    </AppWrapper>
  );
};
