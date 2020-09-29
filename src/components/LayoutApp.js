import React, {useState, useContext} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {logOut} from "../services"
import {MyContext} from "../context"
import {Link} from "react-router-dom"
import '../index.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LayoutApp ({children}) {

    const [collapsed, setCollapsed] = useState(false)
    const {clearCtxUser, user} = useContext(MyContext)
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed( collapsed );
    };

    const logoutProcess = async () => {
        await logOut()
        clearCtxUser()
    }

    return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{backgroundColor:'#202124'}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'#202124'}}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            {!user && (
            <>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/signup">Signup</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </>
            )}
            {user && (
                <>
                <Menu.Item key="4" icon={<DesktopOutlined />} onClick={logoutProcess}>
                    <Link to="/logout">Logout</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<DesktopOutlined />}>
                    <Link to="/fragments">Fragments</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Fragments">
                    <Menu.Item key="6">Fragment 01</Menu.Item>
                    <Menu.Item key="7">Fragment 02</Menu.Item>
                    <Menu.Item key="8">Fragment 03</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Friends">
                    <Menu.Item key="9">Friend 01</Menu.Item>
                    <Menu.Item key="10">Friend 02</Menu.Item>
                </SubMenu>
                <Menu.Item key="11" icon={<FileOutlined />} />
            </>
            )}
        </Menu>
        </Sider>
        <Layout className="site-layout" >
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 Created by Jero Fernández</Footer>
        </Layout>
    </Layout>
    );
}

export default LayoutApp