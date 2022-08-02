import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
    layDanhSachNguoiDung = (taiKhoan='') => {
        if(taiKhoan.trim()!=''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&taiKhoan=${taiKhoan}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)

    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`);
    }
    themNguoiDung = (formData) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,formData);
    } 
    capNhatNguoiDung = (formData) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,formData);
    }
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
