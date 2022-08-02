import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType"


let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    arrUser:[
        {
            "taiKhoan": "abc123",
            "hoTen": "Hoang Minh",
            "email": "khongco@gmail.com",
            "soDT": "0909090909",
            "matKhau": "123456321",
            "maLoaiNguoiDung": "QuanTri"
        },
        {
            "taiKhoan": "abc123",
            "hoTen": "Hoang Minh",
            "email": "khongco@gmail.com",
            "soDT": "0909090909",
            "matKhau": "123456321",
            "maLoaiNguoiDung": "QuanTri"
        }

    ],
    arrUserDefault:[],
    userLogin: user,
    thongTinNguoiDung: {}
     
}



export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_NHAP_ACTION : {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }

        case SET_THONG_TIN_NGUOI_DUNG :{ 
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state};
        }
        case SET_DANH_SACH_NGUOI_DUNG : {
            state.arrUser = action.arrUser;
            state.arrUserDefault = state.arrUser;
            return {...state}
        }



        default:
            return { ...state }
    }
}