import perfume from './img/jillian.jpeg'
import lipstick from './img/lipstick.jpeg'
import serum from './img/serum.jpeg'
import toner from './img/toner.jpeg'
import makeup from './img/makeup.jpeg'
//bestsale
import ComeOut1 from "./img/ComeOut1.jpg"
import Creation81 from "./img/Creation81.jpg"
import BelovedJ1 from "./img/BelovedJ1.jpg"
import Edelweiss1 from "./img/Edelweiss1.jpg"
import ImYour1 from "./img/ImYour1.jpg"
//portfolio
import portfolio1 from './img/portfolio1.jpg'
import portfolio2 from './img/portfolio2.jpg'
import portfolio3 from './img/portfolio3.jpg'
import portfolio4 from './img/portfolio4.jpg'
import portfolio5 from './img/portfolio5.jpg'
import portfolio6 from './img/portfolio6.jpg'
import portfolio7 from './img/portfolio7.jpg'
import portfolio8 from './img/portfolio8.jpg'

const Data = {
    "slideShow": [
        {
            "title"   : "NƯỚC HOA JILLIAN",
            "content" : "Ra đời từ tình yêu và sự đam mê của những nghệ nhân nước hoa hàng đầu thế giới, Jillian là nước hoa tình yêu cho mỗi khoảnh khắc cuộc sống. ",
            "img"     : perfume,
            "url"     : "/shops/perfume"
        },
        {
            "title"   : "SON MÔI DIOR",
            "content" : "Dior nổi tiếng là “ông chúa” chiếm lĩnh thị trường ở nhiều lĩnh vực khác nhau, và son môi cũng là một trong số đó",
            "img"     : lipstick,
            "url"     : "/shops/lipstick"
        },
        {
            "title"   : "SERUM THIÊN NHIÊN",
            "content" : "Sản phẩm dưỡng da có dạng tinh chất dạng lỏng như nước hoặc có dạng gel, chuyên đặc trị các vấn đề về làn da. ",
            "img"     : serum,
            "url"     : "/shops/serum"
        },
        {
            "title"   : "TONER THIÊN NHIÊN",
            "content" : "Được sáng tạo ra với sứ mệnh bảo vệ làn da của bạn, mang đến sự cân bằng và loại bỏ những tác nhân gây hại",
            "img"     : toner,
            "url"     : "/shops/toner"
        },
        {
            "title"   : "MỸ PHẨM CAO CẤP",
            "content" : "Cái đẹp là thứ mà mọi người luôn hướng tới, và mỹ phẩm của chúng tôi sẽ giúp bạn là điều này dễ dàng hơn",
            "img"     : makeup,
            "url"     : "/shops/makeup"
        }
            ],
    "portfolio": [
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
    ],
    "bestSale": [
        {
            "id"          :"01",
            "name"        :"COME OUT",
            "price"       :5300000,
            "img"         :[ComeOut1],
            "propoties"   :{
                "type"        :"Product",
                "collection"  :"Mùa Xuân",
                "description" :"Whoever You Are, Whoever I Am? Bạn và tôi, ta đã từng là ai? Và sẽ là ai ?Come out mở đầu với cam Neroli bung toả đầy mạnh mẽ khắp không gian, điểm nhẹ sự khắc khoải từ thảo mộc, như vài nét chấm phá cuộc sống đầy màu sắc. Mùi hương cháy phừng phực mà vẫn mát xanh như tuổi trẻ, ngây ngô trong trẻo nhưng cũng đầy ắp niềm kiêu hãnh nhiệt thành. Kết nối bằng một chút chua nhẹ của trái cây nhiệt đới, Come out bỗng nhiên trầm mặc giữa vườn hoa tĩnh lặng với nhài, mẫu đơn và hoa hồng phảng phất. Khép lại bằng hỗn hợp xạ hương và rêu, gỗ, mùi hương đưa tâm trí ta trở về với thiên nhiên thuần khiết, với nơi chốn bình yên mà nhìn rõ mình từ trong sâu thẳm.Come out và Lê Kinh Tài có nhiều nét tương đồng. Dù là tranh, hay mùi hương, trái ngược với những gì phóng khoáng và cuồng nhiệt như ấn tượng ban đầu, sự hiện thân của một tâm hồn trưởng thành với nhiều vết xước và những câu chuyện còn bỏ ngỏ sẽ là điều thôi thúc bạn khám phá.Phong cách: Kiêu hãnh, sâu sắc, cá tính",
                        },
            "category"    :{
                            "id":"perfume",
                            "name":"perfume"
                        }
        },
        {
            "id"          :"02",
            "name"        :"CREATION 8",
            "price"       :2500000,
            "img"         :[Creation81],
            "propoties"   :{
                "type"        :"Product",
                "collection"  :"Mùa Hạ",
                "description" :"Mở đầu chuỗi hương đậm chất trái cây nhiệt đới sảng khoái với bưởi và quýt hồng, Creation8 - sáng tạo hương thứ 8 của BST Jillian dường như đã mang đến làn gió mát rượi thổi từ vùng biển trong xanh nước Ý, sảng khoái và mạnh mẽ đánh thức mọi giác quan. Khéo léo đan xen cùng bạc hà the mát, cùng chút cay nồng của các loại gia vị là hương thơm hoa hồng dịu dàng kín kẽ. Đó là sự kết hợp kì diệu gợi nên cảm giác thỏa mãn xa hoa, như một giấc mơ về kỳ nghỉ trên chuyến du thuyền và ngắm nhìn hòn đảo Capri xinh đẹp. Creation8 là mùi hương phù hợp với xu hướng hiện đại, với lối sống phóng khoáng và không chút e dè thể hiện bản thân. Khi hai tầng hương đầu dần khép lại, hỗn hợp gỗ tuyết tùng và xạ hương nam tính lịch lãm xuất hiện, khắc họa rõ nét một Creation8 trưởng thành đằng sau vẻ ngoài ồn ào náo nhiệt. Chuỗi hương kết thúc bằng một chút ướt át của rêu sồi, mùi thơm đặc trưng của da thuộc và thuốc lá. Trái ngược với khởi đầu cuồng nhiệt cháy bỏng, điều cô đọng mà Creation8 để lại là một cái tôi đơn giản và khác biệt như chính tên gọi của mình: Sáng tạo thứ 8.Nhóm hương: Woody Oriental (Gỗ Phương Đông)",
                        },
            "category"    :{
                            "id":"perfume",
                            "name":"perfume"
                        }
        },
        {
            "id"          :"03",
            "name"        :"BELOVED J",
            "price"       :2500000,
            "img"         :[BelovedJ1],
            "propoties"   :{
                "type"        :"Product",
                "collection"  :"Mùa Thu",
                "description" :"Beloved J là một tác phẩm nghệ thuật, là khu vườn nhỏ đầy hoa lặng lẽ nép mình giữa lòng thành phố, là âm nhạc phức điệu của Bach, là những họa tiết đối xứng trên ô gạch có tuổi đời chạm mốc trăm năm, là chiếc váy duyên dáng của người phụ nữ chơi vĩ cầm, là những nét đẹp cổ điển được xếp đặt tinh tế trong từng note hương. Nhóm hương: Flower mix Fresh",
                        },
            "category"    :{
                            "id":"perfume",
                            "name":"perfume"
                        }
        },
        {
            "id"          :"04",
            "name"        :"EDELWEISS",
            "price"       :2250000,
            "img"         :[Edelweiss1],
            "propoties"   :{
                "type"        :"Product",
                "collection"  :"Mùa Đông",
                "description" :"Edelweiss bộc lộ cá tính riêng biệt ngay từ phút đầu tiên với mùi hương tươi mát và sắc sảo. Nét dịu dàng của hoa nhung tuyết ôm lấy các nốt hương trái cây để rồi tone patchouli âm thầm đẩy cảm xúc lên đến đỉnh điểm như một lời gọi mời hấp dẫn. Edelweiss được đánh giá là một mùi hương tinh khiết và trong trẻo, mềm mại nhưng mãnh liệt tột cùng - như sức sống của loài hoa trắng muốt trên các dãy núi cao giá lạnh.Nhóm hương: Flower mix Fruity",
                        },
            "category"    :{
                            "id":"perfume",
                            "name":"perfume"
                        }
        },
        {
            "id"          :"05",
            "name"        :"I'M YOURS",
            "price"       :1200000,
            "img"       :[ImYour1],
            "propoties"   :{
                "type"        :"Product",
                "collection"  :"Mùa Xuân",
                "description" :"Tuy có mùi hương chủ đạo là vị gỗ phương Đông, I'm Yours vẫn gây bất ngờ khi kết hợp nốt hương citrus, vị cay của gừng và vị đắng từ cocoa cho phần mở đầu. Các tầng hương của I'm Yours không hoàn toàn tách biệt mà hòa trộn vào nhau một cách mượt mà nhất, mang đậm sắc thái nồng nàn và mãnh liệt. Nếu nhịp điệu ở giai đoạn đầu tương đối nhanh và gấp gáp thì khi đã ổn định trên da, các nốt hương dần mềm mại, ngọt ngào, dễ chịu hơn.I'm Yours sở hữu các mùi vị quen thuộc nhưng khi kết hợp lại trở thành sự chuyển biến khó ngờ. Các tầng hương đã tạo nên một vị ngọt vô cùng phức tạp: ngọt nhưng có đắng, có cay, có sâu thẳm, có ấm áp và có cả sự kéo dài dai dẳng. Các note trầm bổng khéo léo bám chặt vào nhau, làm nổi bật ưu điểm của nhau và cùng nhau thể hiện vẻ đẹp tinh tế của chính mình. Sự phối hợp nhịp nhàng giữa gừng, cocoa, quả maninka cùng một vài hương gỗ đặc biệt khác đã tạo nên một I'm Yours rất mới mẻ và ấn tượng. Mùi hương mang vị gỗ phương Đông với độ lan tỏa mạnh mẽ trong không gian thích hợp dùng vào buổi tối hoặc khi tiết trời mát mẻ. Nhóm hương: Woody Oriental (Gỗ Phương Đông)",
                        },
            "category"    :{
                            "id":"perfume",
                            "name":"perfume"
                        }
        }
    ]

}

export default Data;