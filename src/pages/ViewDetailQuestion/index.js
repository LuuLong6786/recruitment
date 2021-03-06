import React from "react";
import className from "classnames/bind";
import styles from "./ViewDetailQuestion.module.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { DetailQuestion } from "../../features/getDetailQuestion";

const cx = className.bind(styles);

export const ViewDetailQuestion = () => {
  return (
    <div>
      <div className={cx("breadcrumb")}>
        <Breadcrumb>
          <Breadcrumb.Item href="/question">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/question">Question bank</Breadcrumb.Item>
          <Breadcrumb.Item active>Detail Question </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <DetailQuestion />
      </div>
    </div>
  );
};
