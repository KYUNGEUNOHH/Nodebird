import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <label htmlFor="user-id">비밀번호</label>
      <br />
      <Input
        name="user-password"
        type="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <div>
        <Button type="primary" htmlType="submit" laoding={false}>
          {" "}
          로그인{" "}
        </Button>
        <Link href="/sginup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
      <div></div>
      <div></div>
    </Form>
  );
};

export default LoginForm;
