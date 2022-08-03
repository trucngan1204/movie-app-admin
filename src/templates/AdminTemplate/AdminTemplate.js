import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    ScheduleOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { history } from "../../App";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



const AdminTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const [collapsed, setCollapsed] = useState(false);
    const getPath = props.location.pathname;
    const path = getPath.split("/");
    const defaultKey = (path) => {
        let key = "1";
        if (path === 'films') {
            key = "10";
        }
        if (path === 'showtimes' ) {
            key = "13";
        }
        if (path === 'list-theater') {
            key = "14";
        }
        if (path === 'schedule') {
            key = "15";
        }

        return key;
    }
    const getLink = (path, index) => {
        let result = '';
        for (let i = 0; i < index; i++) {
            result += `/${path[i]} `;
        }
        console.log(result);
        return result;
    }
    const renderPath = () => {
        let arrR = [];
        for (let i = 0; i < path.length; i++) {
            let data = <Breadcrumb.Item><NavLink to={`/${path[i - 1]}/${path[i]}`}>{path[i]}</NavLink></Breadcrumb.Item>
            arrR.push(data);
        }
        return arrR;
    }

    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />

    }

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
            // history.push('/profile')
        }}> <div style={{ fontSize:'17px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'50px' }} >
                {/* {className="text-2xl ml-5 rounded-full bg-red-200"} */}
                {/* {userLogin.taiKhoan.substr(0, 1)} */}
                {userLogin.taiKhoan}
            </div>
                
            </button> 
            <button className="btn btn-light" style={{fontSize:'17px'}} onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/');
                window.location.reload();
        }}>Đăng xuất</button> </Fragment> : ''}

    </Fragment>

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return  <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin'>Admin</NavLink>
                        </Menu.Item>
                        <SubMenu key="2" icon={<UserOutlined />} title="Quản lý users">
                            <Menu.Item key="sub1" icon={<UserOutlined />}>
                                <NavLink to="/admin/users">Danh sách users</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="3" icon={<DesktopOutlined />} title="Quản lý phim">
                            <Menu.Item key="sub2" icon={<DesktopOutlined />}>
                                <NavLink to="/admin/films">Danh sách phim</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="4" icon={<ScheduleOutlined />} title="Quản lý lịch chiếu phim">
                            <Menu.Item key="sub3" icon={<ScheduleOutlined />}>
                                <NavLink to="/admin/showtimes">Tạo lịch chiếu phim</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5" icon={<HomeOutlined />}>
                            <NavLink to='/home'>Home</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    <div className="text-right pr-10 pt-1">{operations}</div>
                </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="bg-gray" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />

}


export default AdminTemplate;