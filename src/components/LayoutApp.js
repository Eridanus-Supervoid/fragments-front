import React, {useState, useContext, useEffect} from 'react'
import { Layout, Menu} from 'antd';
import {
    BookOutlined,
    LoginOutlined,
    TeamOutlined,
    BuildOutlined
} from '@ant-design/icons';
import {logOut} from "../services"
import {MyContext} from "../context"
import {Link, useHistory} from "react-router-dom"
import '../index.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LayoutApp ({children}) {
    const history = useHistory()
    const [collapsed, setCollapsed] = useState(false)
    const {clearCtxUser, user} = useContext(MyContext)
    const onCollapse = collapsed => {
        setCollapsed( collapsed );
    };

    const logoutProcess = async () => {
        await logOut()
        clearCtxUser()
        history.push("/login")
    }


    return (
    <Layout style={{ minHeight: '100vh' }}>
        <link href="https://fonts.googleapis.com/css2?family=Bellota+Text:wght@700&display=swap" rel="stylesheet"></link>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
        <div className="logo" style={{height:"63px", display:"flex"}} > 
        <img src="./g26.png" alt="logoFragments" style={{height:"35px", margin:"16px 5px 14px 20px"}}/>
        <p style={{margin:"17px 10px", fontSize:"1.3rem", fontFamily:'Bellota Text', borderBottom: "1px solid #c24983"}}>FRAGMENTS</p>
        </div>
        <Menu theme="dark" mode="inline"  defaultSelectedKeys={['5']} >
            {!user && (
            <>
                <Menu.Item key="2" icon={<LoginOutlined />}>
                    <Link to="/signup">Signup</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<LoginOutlined />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </>
            )}
            {user && (
                <>
                <Menu.Item key="5" icon={<BookOutlined />}>
                    <Link to="/fragments">My Fragments</Link>
                </Menu.Item>
                </>
            )}
        </Menu>
        </Sider>
        <Layout className="site-layout" >
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {user &&(<Menu theme="dark" mode="horizontal" style={{float: 'right', backgroundColor: "#161616"}}>
            <Menu.Item key="12"  onClick={logoutProcess}>Logout</Menu.Item>
        </Menu>)}
        </Header>
        <Content style={{ margin: '0 16px' }}>
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