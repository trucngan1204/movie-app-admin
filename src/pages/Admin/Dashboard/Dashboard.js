import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAction, timKiemNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { EditOutlined, SearchOutlined, DeleteOutlined} from '@ant-design/icons';
import { Button, Table } from 'antd';
import { Input } from 'antd';
import FormUser from './NewUser/NewUser';
const { Search } = Input;
export default function Dashboard(props) {

    const { arrUserDefault } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [showForm, setShowForm] = useState(false);
    const [capNhat, setCapNhat] = useState({ capNhat: [] });
    const [typeAction, setTypeAction] = useState('update');
    const handleCloseForm = () => setShowForm(false);
    const [q, setQ] =  useState("");

    const dispatch = useDispatch();

    console.log('arrUserDefault', arrUserDefault);

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());

    }, []);



    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if(emailA > emailB) {
                    return 1;
                }
                return -1;
            },
           
            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDT',
            sorter: (a, b) => a.soDT - b.soDT,
            sortDirections: ['descend', 'ascend'],
            width: '15%'

            // sortOrder:'descend'
        },
        {
            title: 'Mã loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            width: '15%'
        },

        {
            title: 'Hành động',
            dataIndex: 'taiKhoan',
            render: (text, user) => {
                return <Fragment>
                    <span className = "mr-2 text-base" style={{cursor:'pointer'}} onClick={()=>{
                        setTypeAction('update');
                        setCapNhat(user);
                        setShowForm(true);
                    }}><EditOutlined style={{ color: 'blue' }} /> </span>
                    <span style={{ cursor: 'pointer' }} key={2} className="text-base" onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá tài khoản  ' + user.taiKhoan)) {
                            //Gọi action
                            dispatch(xoaNguoiDungAction( user.taiKhoan));
                        }


                    }}><DeleteOutlined style={{ color: 'red' }} /> </span>

                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
    ];
    const data = arrUserDefault;



    const onSearch = value => {

        console.log(value);
        dispatch(timKiemNguoiDungAction(value));

    };

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>


            <h3 className="text-4xl">Quản lý người dùng</h3>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                setTypeAction('insert');
                setShowForm(true);
            }}>Thêm người dùng</Button>
            <Search
                className="mb-5"
                placeholder="Từ khoá"
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            />

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"taiKhoan"} />
            <FormUser show = {showForm} close ={handleCloseForm} capNhat = {capNhat} type = {typeAction}/>
        </div>
    )
}