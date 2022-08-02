import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { TYPE_USER, USER_LOGIN } from '../../util/settings/config';




export default function Login() {
    const dispatch = useDispatch();
    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(userLogin);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').min(6,'Tài khoản tối thiếu 6 ký tự !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(3,'Mật khẩu tối thiểu 3 ký tự !').max(32,'Mật khẩu tối đa 32 ký tự !')
        }),
        onSubmit: values => {
            const action = dangNhapAction(values);
            dispatch(action);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <img src="https://inc42.com/wp-content/uploads/2019/04/movie-ticketing.jpg" width='100px' />
                    </div>
                    <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">MOVIE APP</div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">Đăng nhập</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder="Nhập vào tài khoản" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div  className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
      </div>
                                <div>
                                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                          cursor-pointer">
                                        Quên mật khẩu ?
        </a>
                                </div>
                            </div>
                            <input type="password" name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder="Nhập vào mật khẩu" />
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg">
                                Đăng nhập
    </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Bạn chưa có tài khoản ? <NavLink to="register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
                    </div>
                </div>
            </div>
        </form>
    )

}