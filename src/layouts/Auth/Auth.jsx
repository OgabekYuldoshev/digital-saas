import { Button, Layout } from "antd";
import LangSwitch from "../../components/LangSwitch";
import classes from "./Auth.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Auth = ({ children }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Layout className={classes.wrapper}>
      <div className={classes.header}>
        <LangSwitch />

        {pathname === "/login" ? (
          <Button size="small" onClick={() => history.push("/register")}>
            {t("sign_up")}
          </Button>
        ) : (
          <Button size="small" onClick={() => history.push("/login")}>
            {t("sign_in")}
          </Button>
        )}
      </div>
      <Layout.Content className={classes.content}>{children}</Layout.Content>
    </Layout>
  );
};

export default Auth;
