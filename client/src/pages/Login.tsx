import { Button, Card, Input, Link,Notification } from "@arco-design/web-react";
import classnames from "classnames";
export default function Login() {
  return (
    <div
      className={classnames(
        "tw-select-none",
        "tw-min-h-screen",
        "tw-bg-gray-200",
        "tw-flex",
        "tw-justify-center",
        "tw-align-middle"
      )}
    >
      <div className="tw-flex tw-flex-col tw-justify-center tw-font-bold tw-align-middle">
        <div className="tw-shadow-lg tw-border tw-rounded-sm tw-bg-gray-50" style={{ width: "30em", height: "25em" }}>
          <img className=" tw-rounded-sm" src="./login-bg.png" alt="login" />
          <div className="tw-flex tw-flex-col tw-justify-center tw-align-middle tw-mt-5">
            <span className="tw-block tw-text-center tw-text-xl tw-mb-5">{"登录 IMG-BOT 客户端"}</span>
            <div className="tw-mx-auto">
              <Input.Password className="tw-mx-auto" style={{ width: 250 }} placeholder="请输入登陆令牌" />
              <Button
                type="primary"
                onClick={() => {
                  Notification.info({
                    title: "Normal",
                    content: "This is an error Notification!",
                  });
                }}
              >
                登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
