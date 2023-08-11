//slideshow
import perfume from './img/home/jillian.jpeg'
import lipstick from './img/home/lipstick.jpeg'
import serum from './img/home/serum.jpeg'
import toner from './img/home/toner.jpeg'
import makeup from './img/home/makeup.jpeg'
//portfolio
import portfolio1 from './img/home/portfolio1.jpg'
import portfolio2 from './img/home/portfolio2.jpg'
import portfolio3 from './img/home/portfolio3.jpg'
import portfolio4 from './img/home/portfolio4.jpg'
import portfolio5 from './img/home/portfolio5.jpg'
import portfolio6 from './img/home/portfolio6.jpg'
import portfolio7 from './img/home/portfolio7.jpg'
import portfolio8 from './img/home/portfolio8.jpg'
//footer
import logo3ce from "./img/footer/3ce.jpg"
import logoDior from "./img/footer/Dior.jpg"
import logojillian from "./img/footer/jillian.jpg"
import logohasaki from "./img/footer/hasaki.jpg"


const slideShow = [
    {
        "title"   : "NƯỚC HOA JILLIAN",
        "description" : "Ra đời từ tình yêu và sự đam mê của những nghệ nhân nước hoa hàng đầu thế giới, Jillian là nước hoa tình yêu cho mỗi khoảnh khắc cuộc sống. ",
        "img"     : perfume
    },
    {
        "title"   : "SON MÔI DIOR",
        "description" : "Dior nổi tiếng là “ông chúa” chiếm lĩnh thị trường ở nhiều lĩnh vực khác nhau, và son môi cũng là một trong số đó",
        "img"     : lipstick
    },
    {
        "title"   : "SERUM THIÊN NHIÊN",
        "description" : "Sản phẩm dưỡng da có dạng tinh chất dạng lỏng như nước hoặc có dạng gel, chuyên đặc trị các vấn đề về làn da. ",
        "img"     : serum
    },
    {
        "title"   : "TONER THIÊN NHIÊN",
        "description" : "Được sáng tạo ra với sứ mệnh bảo vệ làn da của bạn, mang đến sự cân bằng và loại bỏ những tác nhân gây hại",
        "img"     : toner
    },
    {
        "title"   : "MỸ PHẨM CAO CẤP",
        "description" : "Cái đẹp là thứ mà mọi người luôn hướng tới, và mỹ phẩm của chúng tôi sẽ giúp bạn là điều này dễ dàng hơn",
        "img"     : makeup
    }
]  
 
const bestSales = [
    {
        "id"          :"01",
        "name"        :"COME OUT",
        "author"      :"EAU DE PARFUM",
        "price"       :5300000,
        "img"         :["http://drive.google.com/uc?export=view&id=1sbV1Jyr8MDMHwCJlgY1EYYw8CZu5ISuq"],
        "categoryName"  : "perfume"
    },
    {
        "id"          :"02",
        "name"        :"CREATION 8",
        "author"      :"EAU DE PARFUM",
        "price"       :2500000,
        "img"         :["http://drive.google.com/uc?export=view&id=13rwrd15e76AYtelBowQLZOKofKtNmbeP"],
        "categoryName"  : "perfume"
    },
    {
        "id"          :"03",
        "name"        :"BELOVED J",
        "author"      :"EAU DE PARFUM",
        "price"       :2500000,
        "img"         :["http://drive.google.com/uc?export=view&id=13_ke5kUcnSSAO0wN4kPOZC29QvvNAVtO"],
        "categoryName"  : "perfume"
    },
    {
        "id"          :"04",
        "name"        :"EDELWEISS",
        "author"      :"EAU DE PARFUM",
        "price"       :2250000,
        "img"         :["http://drive.google.com/uc?export=view&id=1JD4GWTGhH2vsYhREuyl07QQQ3Tc4-39Y"],
        "categoryName"  : "perfume"
    },
    {
        "id"          :"05",
        "name"        :"I'M YOURS",
        "author"      :"EAU DE PARFUM",
        "price"       :1200000,
        "img"         :["http://drive.google.com/uc?export=view&id=13BuNyOSckZ4QTnCEWJSwFD28ePsQSZop"],
        "categoryName"  : "perfume"
    },
    {
        "id"          :"05",
        "name"        :"BEWITCHING KISS",
        "author"      :"EAU DE PARFUM",
        "price"       :2000000,
        "img"         :["http://drive.google.com/uc?export=view&id=1ZaiIuGxfqF5avmSalLW6qs3IRWDf_P7b"],
        "categoryName"  : "perfume"
    }
]

const portfolio = [
    {
        "title":"LIP LINER",
        "content":"Beauty, Bodycare",
        "img": portfolio1
    },
    {
        "title":"SCRATCH EYELINER",
        "content":"Beauty, Cosmetics",
        "img": portfolio2
    },
    {
        "title":"BAKED BLUSH",
        "content":"Beauty, Make Up",
        "img": portfolio3
    },
    {
        "title":"POINTY BALL",
        "content":"Beauty, Bodycare",
        "img": portfolio4
    },
    {
        "title":"MINERAL BLUSH",
        "content":"Beauty, Cosmetics",
        "img": portfolio5
    },
    {
        "title":"FACE PRIMER",
        "content":"Beauty,  Make Up",
        "img": portfolio6
    },
    {
        "title":"COOL PRIMER",
        "content":"Beauty, Bodycare",
        "img": portfolio7
    },
    {
        "title":"SKINCARE",
        "content":"Beauty, Cosmetics",
        "img": portfolio8
    },
]
const footerData = [logo3ce,logoDior,logojillian,logohasaki]
export {slideShow, bestSales, portfolio, footerData}