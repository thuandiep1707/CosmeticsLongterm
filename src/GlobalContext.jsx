import {createContext, useContext, useState, Provider} from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) =>{
    const [token, setToken] = useState()
    const [cart, setCart] = useState({
        "id"          :"01",
        "name"        :"COME OUT",
        "price"       :5300000,
        "img"         :[],
        "propoties"   :{
            "type"        :"Product",
            "collection"  :"Mùa Xuân",
            "description" :"Whoever You Are, Whoever I Am? Bạn và tôi, ta đã từng là ai? Và sẽ là ai ?Come out mở đầu với cam Neroli bung toả đầy mạnh mẽ khắp không gian, điểm nhẹ sự khắc khoải từ thảo mộc, như vài nét chấm phá cuộc sống đầy màu sắc. Mùi hương cháy phừng phực mà vẫn mát xanh như tuổi trẻ, ngây ngô trong trẻo nhưng cũng đầy ắp niềm kiêu hãnh nhiệt thành. Kết nối bằng một chút chua nhẹ của trái cây nhiệt đới, Come out bỗng nhiên trầm mặc giữa vườn hoa tĩnh lặng với nhài, mẫu đơn và hoa hồng phảng phất. Khép lại bằng hỗn hợp xạ hương và rêu, gỗ, mùi hương đưa tâm trí ta trở về với thiên nhiên thuần khiết, với nơi chốn bình yên mà nhìn rõ mình từ trong sâu thẳm.Come out và Lê Kinh Tài có nhiều nét tương đồng. Dù là tranh, hay mùi hương, trái ngược với những gì phóng khoáng và cuồng nhiệt như ấn tượng ban đầu, sự hiện thân của một tâm hồn trưởng thành với nhiều vết xước và những câu chuyện còn bỏ ngỏ sẽ là điều thôi thúc bạn khám phá.Phong cách: Kiêu hãnh, sâu sắc, cá tính",
                    },
        "category"    :{
                        "id":"perfume",
                        "name":"perfume"
                    }
    })
    const value = {
        token,
        setToken,
        cart,
        setCart
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export {GlobalContext,GlobalProvider}