

import img from "./img"

import './footer.scss'

export default () => {
    return (
        <div className="customer_footer">
            <div className="customer_footer_imgs">
                {img.map((img, index)=>{return <img src={img} alt="logo" key={index} className="customer_footer_imgs_img"/>})}
            </div>
            <div className="customer_footer_contact">
                <p className="customer_footer_contact_p1">LIÊN HỆ</p>
                <p className="customer_footer_contact_p2">UCC Cosmetics Longterm</p>
                <p className="customer_footer_contact_p3">Baarerstrasse 25, 6300 Zug Switzerland</p>
                <p className="customer_footer_contact_p2">Phân phối độc quyền tại Châu Á bởi Công ty TNHH Longterm</p>
                <p className="customer_footer_contact_p3">61/1 hẻm 129, đường Phan Văn Hớn, phường Tân Thới Nhất, quận 12, thành phố Hồ Chí Minh</p>
                <p className="customer_footer_contact_p3s">Hotline: 0333555777</p>
                <p className="customer_footer_contact_p3">Email: info@cosmeticlongterm.com | infor@longterm.com</p>
                <p className="customer_footer_contact_p3">Giấy chứng nhận Đăng ký Kinh doanh số 0315665350 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 07/05/2019</p>
            </div>
            <div className="customer_footer_infor">
                <div className="customer_footer_infor_locations">
                    <p className="customer_footer_infor_p1">CỬA HÀNG</p>
                    <p className="customer_footer_infor_p2">
                        Longterm Store - Diamond Plaza 
                        <br />Longterm Store - SC VIVO CITY  
                        <br />Longterm Store - Vincom Thảo Điền
                        <br />Showroom Longterm - Hà Nội
                        <br />Longterm Store - Vạn Hạnh Mall
                        <br />Longterm Flagship Store Hanoi
                    </p>
                </div>
                <div className="customer_footer_infor_location">
                    <p className="customer_footer_infor_p1">DỊCH VỤ</p>
                    <p className="customer_footer_infor_p2">
                        Bộ sưu tập mới
                        <br />Ưu đãi Cosnmetic Longterm
                        <br />Dịch vụ quà tặng
                        <br />Quà tặng doanh nghiệp
                    </p>
                </div>
                <div className="customer_footer_infor_infors">
                    <p className="customer_footer_infor_p1">THÔNG TIN</p>
                    <p className="customer_footer_infor_p2">
                        Chính sách bán hàng
                        <br />Chính sách bảo mật
                        <br />FAQS
                        <br />Tuyển dụng
                    </p>
                </div>
                <div className="customer_footer_contact_icon">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-google-plus-square"></i>
                </div>
            </div>
        </div>
    )
}