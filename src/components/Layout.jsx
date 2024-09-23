import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to="nav1">nav 1</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to="nav2">nav 2</Link>,
              
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to="nav3">nav 3</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:'flex',
            justifyContent:'space-between'
          }}
        >   
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <h1 style={{marginTop:'-4px'}}>Routing project</h1>
          <button style={{borderRadius:'8px',backgroundColor:'#87d068',color:'white',border:'1px solid white',height:"25px",width:'60px',margin:'15px'}}>logout</button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Changing URL
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
