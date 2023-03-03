import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);

export default function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
