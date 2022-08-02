import { SET_DANH_SACH_PHIM, SET_FILM_SAP_CHIEU,SET_FILM_DANG_CHIEU, SET_THONG_TIN_PHIM } from "../actions/types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";



const stateDefault = {
    arrFilm: [
        {
            "maPhim": 8909,
            "tenPhim": "JURASSIC WORLD DOMINION  ",
            "biDanh": "jurassic-world-dominion",
            "trailer": "https://www.youtube.com/embed/3y0KM5jUnmk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-dominion_gp01.jpg",
            "moTa": "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-05-10T00:00:00",
            "danhGia": 8,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 8909,
            "tenPhim": "JURASSIC WORLD DOMINION  ",
            "biDanh": "jurassic-world-dominion",
            "trailer": "https://www.youtube.com/embed/3y0KM5jUnmk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-dominion_gp01.jpg",
            "moTa": "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-05-10T00:00:00",
            "danhGia": 8,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          }
    ],
    dangChieu: true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail:{},

    thongTinPhim:{}



}

export const QuanLyPhimReducer = (state=stateDefault,action ) => {
    switch(action.type) {

        case SET_DANH_SACH_PHIM : {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return {...state}
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu );
            return {...state}
        }
        case SET_FILM_SAP_CHIEU : {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu );
            return {...state}
        }

        case SET_CHI_TIET_PHIM :{
            state.filmDetail = action.filmDetail;
            return {...state};
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }



        default : return {...state}
    }
}