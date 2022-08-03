import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, SET_TIM_KIEM_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import { history } from '../../App'
import { TOKEN, TYPE_USER, USER_LOGIN } from "../../util/settings/config";
import Swal from 'sweetalert2'


export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
                console.log(result);
                history.push('/admin');
            }

        } catch (error) {

        }

    }

}
 

export const layDanhSachNguoiDungAction = (taiKhoan = '') => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(taiKhoan);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                arrUser: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const timKiemNguoiDungAction = (tuKhoa ='')=>{

    return async(dispatch)=>{
        try {
            const result = await quanLyNguoiDungService.timKiemNguoiDung(tuKhoa);

            dispatch({
                type:SET_TIM_KIEM_NGUOI_DUNG,
                arrUser:result.data.content
            })
        }catch(errors){
            console.log('errors', errors)
        }
    };
}

export const xoaNguoiDungAction = (taiKhoan) => {


    return async (dispatch) => {
        try {

            let result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            // console.log('result',result.data.content);
            if (result.data.statusCode === 200) {
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(layDanhSachNguoiDungAction())
                    }
                })
            }



        } catch (errors) {
            // console.log('errors',errors.response?.data)
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })

        }
    }
}






export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
export const capNhatNguoiDungAction = (capNhat) => {
    capNhat.maNhom = "GP01";
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.capNhatNguoiDung(capNhat);
            if (result.data.statusCode === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(layDanhSachNguoiDungAction())
                    }
                })

            }


        } catch (errors) {
            console.log(errors.response?.data);
            Swal.fire({
                title: 'Cập nhật thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const themNguoiDungAction = (thongTinNguoiDung) => {
    thongTinNguoiDung.maNhom = "GP01";
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung);
            if (result.data.statusCode === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(layDanhSachNguoiDungAction())
                    }
                })

            }



        } catch (errors) {
            console.log(errors.response?.data);
            Swal.fire({
                title: 'Thêm thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

