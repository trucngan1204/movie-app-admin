import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";
import Swal from 'sweetalert2'




export const layDanhSachPhimAction = (tenPhim='') => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
             dispatch({
                 type:SET_DANH_SACH_PHIM,
                 arrFilm:result.data.content
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            if (result.data.statusCode === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch(layDanhSachPhimAction())
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


export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            if (result.data.statusCode === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if(result.isConfirmed){
                        dispatch(layDanhSachPhimAction())
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



export const layThongTinPhimAction =  (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);

   

            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}



export const xoaPhimAction = (maPhim) => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result.data.content);
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch(layDanhSachPhimAction())
                    }
                })            
        }catch (errors) {
            console.log('errors',errors.response?.data);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}