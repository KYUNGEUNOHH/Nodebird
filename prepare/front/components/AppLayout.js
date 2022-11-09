import PropTypes from "prop-types";
import Link from "next/link"; //네스트는 자체적인 라우터가 잇음 링크 컴포넌트
import { Menu, Input, Row, Col } from "antd";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const AppLayout = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>

        <Row gutter={8}>
          <Col xs={24} md={6}></Col>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}

          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a
              href="http://www.zerocho.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Made by 경은{" "}
            </a>
          </Col>
        </Row>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
