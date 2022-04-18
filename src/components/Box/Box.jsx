
import classes from "./Box.module.scss";

const Box = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Box;
