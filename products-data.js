/* ============================================================
   VITAGREEN - DỮ LIỆU 20 SẢN PHẨM
   Dùng chung cho trang chủ (index.html) và trang chi tiết (product.html)
   ============================================================ */
const VITAGREEN_PRODUCTS = [
  {
    id: "multi-daily",
    badge: "BÁN CHẠY #1",
    badgeColor: "var(--gold)",
    image: "mutivit.png",
    icon: "💊",
    category: "Vitamin tổng hợp",
    name: "VitaGreen Multi Daily",
    desc: "23 loại vitamin và khoáng chất thiết yếu, bổ sung năng lượng và tăng cường đề kháng mỗi ngày.",
    benefits: ["Tăng đề kháng", "Giảm mệt mỏi", "Não bộ"],
    price: 320000,
    unit: "hộp 30 viên",
    audience: "Mọi lứa tuổi từ 12 tuổi",
    longDesc: "VitaGreen Multi Daily là công thức vitamin tổng hợp toàn diện, kết hợp 23 vitamin và khoáng chất thiết yếu giúp cơ thể hoạt động tối ưu mỗi ngày. Sản phẩm được nghiên cứu nhằm bổ sung những vi chất dễ thiếu hụt trong chế độ ăn hiện đại, hỗ trợ chuyển hoá năng lượng, tăng cường hệ miễn dịch và duy trì sự tỉnh táo, minh mẫn cho công việc và học tập.",
    ingredients: [
      { name: "Vitamin C", amount: "500mg" },
      { name: "Vitamin D3", amount: "1000IU" },
      { name: "Vitamin B Complex (B1, B2, B6, B12)", amount: "100% RDI" },
      { name: "Kẽm (Zinc)", amount: "15mg" },
      { name: "Selen", amount: "55mcg" },
      { name: "Acid Folic", amount: "400mcg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn sáng, dùng liên tục theo từng liệu trình 1-3 tháng.",
    caution: "Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Phụ nữ có thai nên tham khảo ý kiến dược sĩ trước khi dùng."
  },
  {
    id: "omega-pro",
    badge: "MỚI 2025",
    badgeColor: "var(--green-mid)",
    image: "omega.jpg",
    icon: "🐟",
    category: "Omega-3 cao cấp",
    name: "VitaGreen Omega Pro",
    desc: "Dầu cá hồi tự nhiên giàu EPA/DHA, bảo vệ tim mạch và cải thiện trí nhớ vượt trội.",
    benefits: ["Tim mạch", "Trí nhớ", "Mắt"],
    price: 450000,
    unit: "hộp 60 viên",
    audience: "Người trưởng thành từ 18 tuổi",
    longDesc: "VitaGreen Omega Pro chiết xuất từ dầu cá hồi Na Uy tự nhiên, giàu EPA và DHA – hai dưỡng chất quan trọng cho hệ tim mạch, mạch máu và chức năng não bộ. Sản phẩm trải qua công nghệ chưng cất phân tử giúp loại bỏ kim loại nặng, mang lại nguồn omega-3 tinh khiết, không gây tanh khi sử dụng.",
    ingredients: [
      { name: "EPA (Eicosapentaenoic Acid)", amount: "180mg" },
      { name: "DHA (Docosahexaenoic Acid)", amount: "120mg" },
      { name: "Vitamin E (chống oxy hoá)", amount: "5mg" }
    ],
    usage: "Uống 2 viên/ngày trong hoặc sau bữa ăn chính, dùng liên tục 2-3 tháng để đạt hiệu quả tối ưu.",
    caution: "Người đang dùng thuốc chống đông máu nên hỏi ý kiến bác sĩ trước khi sử dụng."
  },
  {
    id: "she-balance",
    badge: "",
    image: "balance.jpg",
    icon: "🌸",
    category: "Sức khoẻ phụ nữ",
    name: "VitaGreen She Balance",
    desc: "Collagen Type II + Coenzyme Q10 + Astaxanthin, cân bằng nội tiết và làm đẹp từ bên trong.",
    benefits: ["Nội tiết", "Da sáng", "Xương khớp"],
    price: 560000,
    unit: "hộp 30 viên",
    audience: "Phụ nữ 25-55 tuổi",
    longDesc: "VitaGreen She Balance là công thức chuyên biệt cho phụ nữ hiện đại, kết hợp Collagen Type II, Coenzyme Q10 và Astaxanthin giúp cân bằng nội tiết tố, cải thiện làn da từ sâu bên trong và hỗ trợ sức khoẻ xương khớp. Đây là lựa chọn lý tưởng cho phụ nữ trong giai đoạn tiền mãn kinh và mãn kinh.",
    ingredients: [
      { name: "Collagen Type II thuỷ phân", amount: "300mg" },
      { name: "Coenzyme Q10", amount: "50mg" },
      { name: "Astaxanthin", amount: "4mg" },
      { name: "Mầm đậu nành (Isoflavone)", amount: "50mg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn tối, dùng liên tục tối thiểu 2 tháng để thấy hiệu quả rõ rệt.",
    caution: "Không khuyến cáo dùng cho phụ nữ có thai hoặc đang cho con bú."
  },
  {
    id: "kids-grow",
    badge: "CHO BÉ",
    badgeColor: "var(--green-mid)",
    image: "food.png",
    icon: "🧒",
    category: "Dinh dưỡng trẻ em",
    name: "VitaGreen Kids Grow",
    desc: "Canxi, Vitamin D3 và DHA giúp bé phát triển chiều cao, tăng cường đề kháng và trí não.",
    benefits: ["Tăng đề kháng", "Hỗ trợ não", "Phát triển chiều cao"],
    price: 280000,
    unit: "hộp si-rô 200ml",
    audience: "Trẻ em 3-12 tuổi",
    longDesc: "VitaGreen Kids Grow được bào chế dạng siro vị cam dễ uống, cung cấp Canxi, Vitamin D3, DHA và kẽm giúp bé phát triển chiều cao, tăng cường hệ miễn dịch và hỗ trợ phát triển trí não toàn diện trong giai đoạn vàng tăng trưởng.",
    ingredients: [
      { name: "Canxi", amount: "200mg" },
      { name: "Vitamin D3", amount: "400IU" },
      { name: "DHA", amount: "50mg" },
      { name: "Kẽm Gluconate", amount: "5mg" },
      { name: "Lysine", amount: "100mg" }
    ],
    usage: "Trẻ 3-6 tuổi: 5ml/lần x 2 lần/ngày. Trẻ 7-12 tuổi: 10ml/lần x 2 lần/ngày, uống sau ăn.",
    caution: "Lắc đều trước khi dùng. Bảo quản nơi khô mát, tránh ánh nắng trực tiếp."
  },
  {
    id: "men-vitality",
    badge: "",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/zah/zah08206/l/24.jpg",
    icon: "💪",
    category: "Sức khoẻ nam giới",
    name: "VitaGreen Men Vitality",
    desc: "Kẽm, Nhân sâm và L-Arginine giúp tăng cường thể lực, sinh lý và sự dẻo dai cho nam giới.",
    benefits: ["Tăng thể lực", "Sinh lý", "Đề kháng"],
    price: 620000,
    unit: "hộp 30 viên",
    audience: "Nam giới từ 25 tuổi",
    longDesc: "VitaGreen Men Vitality kết hợp Nhân sâm Hàn Quốc, Kẽm và L-Arginine – những dưỡng chất quan trọng giúp nam giới duy trì thể lực sung mãn, cải thiện sức bền và hỗ trợ chức năng sinh lý một cách tự nhiên, an toàn cho sử dụng lâu dài.",
    ingredients: [
      { name: "Cao Nhân sâm Hàn Quốc", amount: "200mg" },
      { name: "L-Arginine", amount: "500mg" },
      { name: "Kẽm Gluconate", amount: "20mg" },
      { name: "Vitamin E", amount: "10mg" }
    ],
    usage: "Uống 1 viên/ngày vào buổi sáng sau ăn, dùng liên tục theo liệu trình 2 tháng.",
    caution: "Người huyết áp cao nên tham khảo ý kiến bác sĩ trước khi dùng nhân sâm liều cao."
  },
  {
    id: "bone-joint",
    badge: "",
    image: "bone.png",
    icon: "🦴",
    category: "Xương khớp",
    name: "VitaGreen Bone  Joint Care",
    desc: "Glucosamine, Chondroitin và Canxi giúp nuôi dưỡng sụn khớp, giảm đau nhức xương khớp.",
    benefits: ["Xương khớp", "Giảm đau nhức", "Vận động dẻo dai"],
    price: 480000,
    unit: "hộp 60 viên",
    audience: "Người trên 40 tuổi, vận động viên",
    longDesc: "VitaGreen Bone & Joint Care chứa Glucosamine Sulfate, Chondroitin và Canxi giúp tái tạo sụn khớp, giảm tình trạng khô khớp, đau nhức khi vận động, đặc biệt phù hợp với người trung niên, cao tuổi hoặc người thường xuyên vận động mạnh.",
    ingredients: [
      { name: "Glucosamine Sulfate", amount: "750mg" },
      { name: "Chondroitin Sulfate", amount: "200mg" },
      { name: "Canxi Carbonate", amount: "300mg" },
      { name: "Vitamin D3", amount: "400IU" }
    ],
    usage: "Uống 2 viên/ngày chia 2 lần sau ăn, dùng liên tục ít nhất 3 tháng để đạt hiệu quả tốt nhất.",
    caution: "Người dị ứng hải sản (nguồn Glucosamine từ vỏ tôm/cua) cần thận trọng khi sử dụng."
  },
  {
    id: "digestive-care",
    badge: "",
    image: "https://www.herbsforever.com/cdn/shop/files/bnr1_digestive-care_90Caps.jpg?v=1758632399&width=900",
    icon: "🌿",
    category: "Tiêu hoá",
    name: "VitaGreen Digestive Care",
    desc: "Enzyme tiêu hoá và chất xơ tự nhiên giúp giảm đầy hơi, khó tiêu, hỗ trợ hệ tiêu hoá khoẻ mạnh.",
    benefits: ["Tiêu hoá", "Giảm đầy hơi", "Hấp thu tốt"],
    price: 310000,
    unit: "hộp 30 viên",
    audience: "Người thường xuyên đầy hơi, khó tiêu",
    longDesc: "VitaGreen Digestive Care cung cấp các enzyme tiêu hoá (Amylase, Protease, Lipase) kết hợp chất xơ Inulin tự nhiên, hỗ trợ phân giải thức ăn hiệu quả, giảm cảm giác đầy hơi, chướng bụng sau ăn và tăng cường hấp thu dưỡng chất.",
    ingredients: [
      { name: "Amylase", amount: "100mg" },
      { name: "Protease", amount: "50mg" },
      { name: "Lipase", amount: "30mg" },
      { name: "Inulin (chất xơ)", amount: "200mg" }
    ],
    usage: "Uống 1 viên trước mỗi bữa ăn chính 15 phút.",
    caution: "Không dùng thay thế cho thuốc điều trị các bệnh lý tiêu hoá mạn tính."
  },
  {
    id: "sleep-stress",
    badge: "",
    icon: "🌙",
    image: "https://wowmart.vn/wp-content/uploads/2021/12/keo-deo-giup-ngu-ngon-xoa-diu-tam-tri-natrol-sleep-calm-60-vien-vi-strawberry-kna.jpg",
    category: "Giấc ngủ & Stress",
    name: "VitaGreen Sleep  Calm",
    desc: "Melatonin, Magie và tinh chất Lạc tiên giúp thư giãn thần kinh, cải thiện chất lượng giấc ngủ.",
    benefits: ["Ngủ ngon", "Giảm căng thẳng", "Thư giãn"],
    price: 390000,
    unit: "hộp 30 viên",
    audience: "Người mất ngủ, căng thẳng kéo dài",
    longDesc: "VitaGreen Sleep & Calm kết hợp Melatonin, Magie hữu cơ và tinh chất Lạc tiên (Passiflora) giúp làm dịu hệ thần kinh trung ương, giảm căng thẳng, lo âu, từ đó cải thiện chất lượng giấc ngủ tự nhiên mà không gây lệ thuộc.",
    ingredients: [
      { name: "Melatonin", amount: "3mg" },
      { name: "Magie Citrate", amount: "100mg" },
      { name: "Tinh chất Lạc tiên", amount: "150mg" },
      { name: "Vitamin B6", amount: "2mg" }
    ],
    usage: "Uống 1 viên trước khi ngủ 30 phút.",
    caution: "Không sử dụng khi cần vận hành máy móc, lái xe ngay sau khi uống."
  },
  {
    id: "eye-care",
    badge: "",
    icon: "👁️",
    image: "https://files2.nhathuocduochanoi.com.vn/image?f=auto&w=1024&url=content/0000/8/2024/11/04/eyecare-lo-15ml-r-1.jpg",
    category: "Sức khoẻ mắt",
    name: "VitaGreen Eye Care",
    desc: "Lutein, Zeaxanthin và Vitamin A giúp bảo vệ mắt, giảm mỏi mắt khi dùng thiết bị điện tử.",
    benefits: ["Sáng mắt", "Giảm mỏi mắt", "Chống lão hoá"],
    price: 350000,
    unit: "hộp 30 viên",
    audience: "Người làm việc với máy tính, học sinh, sinh viên",
    longDesc: "VitaGreen Eye Care chứa Lutein và Zeaxanthin chiết xuất từ hoa cúc vạn thọ, kết hợp Vitamin A và Beta-Caroten giúp lọc ánh sáng xanh có hại, giảm mỏi mắt, khô mắt khi tiếp xúc lâu với màn hình điện tử, đồng thời bảo vệ điểm vàng và võng mạc.",
    ingredients: [
      { name: "Lutein", amount: "10mg" },
      { name: "Zeaxanthin", amount: "2mg" },
      { name: "Vitamin A", amount: "800mcg" },
      { name: "Vitamin E", amount: "10mg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn, dùng liên tục 2-3 tháng.",
    caution: "Phụ nữ có thai cần tham khảo ý kiến bác sĩ về hàm lượng Vitamin A trước khi dùng."
  },
  {
    id: "liver-detox",
    badge: "",
    icon: "🍃",
    image: "https://m.media-amazon.com/images/I/71kNznwXtgL._AC_UF1000,1000_QL80_.jpg",
    category: "Giải độc gan",
    name: "VitaGreen Liver Detox",
    desc: "Silymarin từ cây kế sữa và Atiso giúp thanh lọc gan, hỗ trợ phục hồi tế bào gan.",
    benefits: ["Giải độc gan", "Mát gan", "Hỗ trợ tiêu hoá"],
    price: 420000,
    unit: "hộp 30 viên",
    audience: "Người thường uống rượu bia, men gan cao",
    longDesc: "VitaGreen Liver Detox chứa Silymarin chiết xuất từ cây kế sữa (Milk Thistle) kết hợp Atiso và Cao Diệp hạ châu, giúp hỗ trợ thanh lọc gan, giảm tình trạng nóng trong, mụn nhọt do chức năng gan suy giảm, đồng thời hỗ trợ phục hồi tế bào gan tổn thương.",
    ingredients: [
      { name: "Silymarin (cây kế sữa)", amount: "150mg" },
      { name: "Cao Atiso", amount: "100mg" },
      { name: "Cao Diệp hạ châu", amount: "100mg" }
    ],
    usage: "Uống 1-2 viên/ngày sau ăn, dùng theo liệu trình 1-2 tháng.",
    caution: "Người đang điều trị bệnh gan mạn tính cần hỏi ý kiến bác sĩ chuyên khoa trước khi dùng."
  },
  {
    id: "immune-c",
    badge: "PHỔ BIẾN",
    badgeColor: "var(--gold)",
    icon: "🛡️",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_Xl-l622FSGwocNQOhwl-aJM9JjExmpQEzbVLBxx85ngje3_70QBtme3jHZe2-iUzbMMNLM4adyoWLjJPkLoQYYPlsc4yeX8yAzkple-hlNmklm3MQc7nCMuKHxy7B5l44FKKKA&usqp=CAc",
    category: "Tăng đề kháng",
    name: "VitaGreen Immune C1000",
    desc: "Vitamin C liều cao kết hợp Kẽm và chiết xuất Tỏi đen giúp tăng cường hệ miễn dịch.",
    benefits: ["Tăng đề kháng", "Chống oxy hoá", "Phòng cảm cúm"],
    price: 260000,
    unit: "hộp 60 viên",
    audience: "Mọi lứa tuổi, đặc biệt khi giao mùa",
    longDesc: "VitaGreen Immune C1000 cung cấp Vitamin C liều cao 1000mg kết hợp Kẽm và chiết xuất Tỏi đen lên men, giúp tăng cường sức đề kháng tự nhiên của cơ thể, hỗ trợ phòng ngừa cảm cúm, đặc biệt hữu ích trong giai đoạn giao mùa hoặc khi cơ thể suy nhược.",
    ingredients: [
      { name: "Vitamin C", amount: "1000mg" },
      { name: "Kẽm Gluconate", amount: "10mg" },
      { name: "Chiết xuất Tỏi đen", amount: "100mg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn sáng.",
    caution: "Người có tiền sử sỏi thận nên hạn chế dùng Vitamin C liều cao kéo dài."
  },
  {
    id: "collagen-beauty",
    badge: "LÀM ĐẸP",
    badgeColor: "var(--gold)",
    icon: "✨",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFRUXGB4bGBgYFxgfGBgYGRoYHRgYHhgaHSghGBolHhcWIjEiJSkrMC4uGB8zODMsNygtLisBCgoKDg0OGhAQGyslICUwLS0vLi0tLS0vLy0uLy01LTAtLS81LS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0uLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABMEAACAQIEAwUEBgYIBQEJAQABAhEAAwQSITEFIkEGE1FhcSMygZEHFEJSobEzcoKywdEVJDRikqLC8ENTg7Ph8RYXJURjc5PS0wj/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADQRAAIBAgQDBgUDBAMAAAAAAAABAgMRBBIhMQVBURMyYYGRoRQiwdHwcbHhIzRC8SRy0v/aAAwDAQACEQMRAD8A3GiiigAooooAKKKKACiiigAooooAKKKTvX1TVmVR5kD86AFKKiMR2nwae9iLf7LZj8lmo3EdvsGvutcf9VCP38tRmRF0WmiqM30iBjls4W47dASJ+Shqb4/tfxBRm+p92vi1u40fHQD41GdEZkaDRWO4ntvjX2vBR/dRR+JBP41E4rjmJf38RePl3jAfIGKjOhe0Rul6+qCWZVHiSB+dRWJ7VYJPexNr9lg37s1hlwyZOp8TvSTGozkdobHivpGwKe61y5+rbP8Ary1GH6WcKGAazfVTPNCGIjcBttelZS7Ux4gdF9T/AKaMzFdRn0TwntdgsTHdYhCT9luVp8IaJPpU5XycrEajSrHwLtxjMLAS6WQfYfVfSDt8Iqc5Maq5n0dRWb8B+lqxchcShtH7y6r6xuPhmq+8O4lZvrms3EuD+6QY9RuD5GmuWpp7DuiiipJCiiigAooooAKKKKACiiigAooooAKqP0icVvYe3a7m4ULMQSAJIA21Bj4VbqqX0g8IvYlLQsrmKsxOoESBG9LLYiV7aGdX+M4l/ev3T5d40fIGKYESZOp8atNjsFi23NtfVjPyiPxp7Z+ju6fevKB+rr+dZ3JFWSTKTUt2a4G2Lu5Boi6u3gOgH94wY+J6VcLP0d2vtXXPpH5Zf41ZuCcGt4W3ktjQmSTuT5moz9BlTfM8w2Cs4Oye7QKqiT4sR4nqa7wPEFuWRcaF6Gdgw8KadoA3c3APAH4Agn8AagOC22ugLrGYx4ATBb4x+VYZ15Z9F/s12gqDlzvb2Oe23ZVbi/WMOvPuyqP0gPWPvaz5+sVTE7LYxtrDfEoP9WlbTECNhSQxSZsudc33cwn5b1sztIyuKZkydgsYdwi+pM/gI/GnWH+jW+3v3VT0E/6q1Siq3VkCjHoZ1b+i5PtX29RH5Ff41xxb6MLJVQlxwwkydjMbjXw6RWjk1Te2t36zZy4cu7JdAPduFbNleMrZhqCV0nXappSlKVmx1BWbtojMuL9gsXYkhRdUdV3jxjp86rN+yyGHUqfAiPz3rRk7SY3CsqPcLElR3eKTK2sDluqAWg9YaRUt/wC0uHvLGMwjLI1ZVF22QNCZXmIEjQrpIrTZlThB7aGQU5wWOu2WD2rjIw2Kkg/hWnYjsHgcSA2Gu5CQGGVpBU7HK2seBEVVeLfR9i7MlQt5R1XRo/VP5SanYR0prVEvwH6WMTahcQi318fdf5gQfiJ861Hst2rw+PVjYLSkZ1YQy5pjyM5W69K+bsRYa2crqyt4MCD+Naj9Aw5sZ6WfzvU0XqNCcr2ZrtFFFWFwUUUUAFFUbtd2+bB32sLZDlQpJZiohw53AP3G6eHwgrP0wht8PHxn+IoWpVKtCLszVqKzez9KaFA5stHgoUn/ADXAKVP0sYeJFp/TqPP7vyb5VOVi/EU+podFUKx9KGHYSEefCNvjMUqPpLw32lYf4j/pqcrD4ml1LxXL1R3+lHBjo/wVv4gU3bt5axNy2thrlpgT7ycrTGm+o0pZQbVh4VqUnbMkX2iq7wztXbeVucpDMuYA5SVYqd9V1B3qftXVYSpDDxBmscoOO5qnTlDvIrvHe0ly3e+r4eyLtwLmaWgKPTroQT6/KHbtPjSsn6taBW60kXCfYmHEAnXqPGKlON9mLtzE/WLF4W2IUNKzqhUgj/Cuh8POmp7GXmEXMaxWCMq2wAAwIYCWgSCZga9aZONtTO8xFPjcddMNigoyM3LbT7JtiNYP/FGxJ5TAJ0prZwt7KF+s4kD6qL0KSiyVQhcwBEAMRJ3gaiasj9hbbRnxOKYhQo510UEEKOXQAgH4Cu7fYDBiMyXHj71xv9MUZoXvYWzM9w+DtXLNu7evzcN5cyNc17guEZtdZzSZnYT503xNm13WGGGyfWWKRkZi+fmzZgSVWG7qIj7U1qlvsdgRthkPrmP5k0sbWDwfNksWTH2VUMR8BmNR2t9EgjTlJ2SJYU14jxG3YXNcYKOnifIDrVV4r243FhP23/goP5/KqbjsY91i1xizHqf5dBTU8DOestEdnDcJqT1qaL3JztD2suX5S3Nu3/mb1PSlOzoBwr5hp32uk/Y8JH51ViatPZt4wrHPk9t73hyD8OnxrfKlGnTtFHRx9CFHCOMFbVExwsAi4VHfW2+zO2+gRwFGh+9tFM8T2dwR5gGwzToVJQAjaEebZPmAfI0/4deu5gM1pxPMye8FgwSNt9NKl/kRWY85ZMa4Hh627NuyfaBECywGsCJjaTSn1Yj3HZfI8w/zageQIrw4RJkAoR9wlR8Quh+IpHD3bhZ1BkqdM6xIJMEMsCND9n4mgkT4hw5LoIvWEuiNxGY/BogftGlOxPAMPhWvtYDL3mTMrZhGXPEBunMflSl/Euqk92c0GI5lnoOXmg+OWpDgN7PmOk5VkAzB59PXahRV7kSsS9FFFOIFFFFAGL/S5cP1uNoRum8Wlhp8i7D41mtobVfPpXaMfdDEL7JcgZll85hion3RB+IPjVEw4nTrrUxVkYasXmZI4cez+Jpu6edLWZFvYxO8H5TSJJPQ05mcXccYNNdDXt9DO9J4dyD7pNdvJPun5GmFyu53aTSpHs/pibfqfyphhwY90/I0/wCDMRftk6CdyCANutBKTuXrGKBcePvH5kyfxmuLV9kMoxU+RIpMsSzk6zcuR+r3j5fhliuWNOknGzPoVGP9KKfRfsStntHiF+3m/WANOU7YXRuiH5j+NV0tXIUsYAJPgBJ/CkeHpvkJLCUJbxRZ8difrJsG3cgrcVmm4FygMpJIOrEAMAB4xsZHXCeJLgbNwXWttcZpCWnLhiEUNcZiBlLsCxHn1M1VL1plALKwDaqSCAw8QTuNRtTdjVccGk99CiPDKcne+hKY3tFibkzdZQfsrygDwka/M1DO0mTQxpJ2rXGCjsjq0qUIaRSQM1Jk0Fq5JpzQkeE1bezE/VWjLPffa933BofXb41UCat/ZZZwjcuf2x5ZiYQaT/v47VVX7hz+L/2z/VFnweHCgNAViAGj3fgKdx5UhgbpZASuXplJkiNN6Wjy+VYTy6D50wwdz21wc5J15vdEGJU+BkaeRp/P+zTXBNrcHN75PN4H7v8Ad0J+PxoBjm4NDvt86ccA2MiDkTQmSPf0mm133Tvsfy8elOuAiJG3Imm8e/pPWpW4siWooophAoori7eVdWYKPMgfnQBUPpO4VZbA4m93Vs3Qg9pChoDLu+mgE6E1858VTu7sWwQCojeeZRO+vU/MV9CfSdxe2cFdsq0s6k7SctvmYqpjPGX03nY18+vcTEXk1UAhFIuEgaQGnmBYROoIMQN9KlMGzzDZhnt5iFRMwgkGWVVZZ3yEOwy7HSmpa5AXmIGqjUjzgfD8KsfCLVprmJDuha5FtIa9qgYC4pMtylUHvEnSKgBgSVkFJ6gsszlGYx03323AJgmmQaHdpr2UCGiZHLI1gMdR5L8q9a/fB/RnSSPZDXbwXUaDTb504wnAiMrXUGV9VObcKSDqqN1EeUdZrtuztxgWFtYVFJysrSzKXEwo1yrcJEEjJB85sRoeEA7gHXwG8+nmYq6dh+Fo9oXyWNwHq3KBBaQo68o3nrVTa2ZAaBlMczARlO0k+v8A6VfOyuEZMFa90k3ZORgxA7t5nJIBHKYMdOpALK3Mvwziqsc2xLsZqX7NqF7+9ALWbcqDqMxmD/l/GonEWSujBgRvI2napbsxLribIjPctcoJ3K5tP81O+6ehxLXYtrbT0ur+wreZMe9rUI622N9gsaLl28dz86dcD4clu/buWnZ7dyzcILCCCpUEH5/ga6wOCt2XSxyreuYe4r8322KZR4TAbbeK7wDrYNixcdA6WbpfmEKXZSqz47/Kkb0sjnVJvK4U27cl4a6+trDPiFqy1vBd+xVFwxaAYZyFtQg8zP4V4vZ6wb1k5bi2mstde2xOYZcmhO49/XXpTrC4y1kw4F20t1cGQjMywlzLb97eDp18DXlvilvvcOrXhd/q9y3ddJaGJtyxjULKnUipu+QKdVK0brvfX863G2G4LhcSuGuWrTW1uXWzgsxOVA5K77EqNRrBpW9wa0wtO2FWwVxITL0uWiYBYdZ038DXVjHWMJYwbI5eyLtxS5GpBFwFgvgGPyqLvY3B2Lloi8bzd/3jXJuEW7ckhcskE7bCd9tKFme1yxdtKXyuVtbbvm9/bfXoPsaLL2eIWVw9tBh9VKjUtzGfLVdh0MVnk1ajx6z/APEdWP1j9FynXR95933hvVTJq+mmr3Ovw+lKCkpJ8t/+qv7gTVv7MugwbG5OXvTMb6oAI+JqmE1fOwyk4fQwe9b9wdPClxHcF4uv+M/1Q8tW0UwuKIKk6MehytEHTQRttJ2mpLAB92uC4pAylY85Om/2aZvhL8nPbsXQdDoAYgAyY9aXs8ItwrFO7fQkIx0g7T1FYDyaJGfP50zwN2WuLDEhplpiDpCn7sg6dJp9XmWgY4ujlPofyp1wIRI2hE08Pf086Qy074V7z/qr+b1KIkSVFFFMVkX2m4yuDw1y+8co0k6SSAOuwmT5A1gPar6RMQ95hh7pyA8twrzsRrOVxyrqeWB8AQo0r6asZ3dnDEFh7WWiIKArm0OmbaJ03rH+P3FtHukRVDE5mZQzvlZgGkiAZLnTXrOsCHG4s3axxhcRxC+SHxN5ViGDXXRQr+KLAAfpIAbxio2zwU6+0VYMalTt1hGYkbe6G6+FTWFxdp7D53fNbU5QlrlCwOQ3IlVzSACSNcx1gA4fhEu2muLfVTbWXV8wY7mVgNm2A08RMTUqyK8zIxOBc4ZsRZOs6W7jSRr7rIFbXodINIrwPSM9uZ359vTLv5zUtdxha6BeuhsmVJBMZECwFISAoBjaJBOvXy/ds5iRdUKSSB7QlROgnIMxAjWNfCrFZg5jbF9mh3Npla2IDAsbdwBjmn3tcxAYDYQAKQt8KjNBw6yoGgvMZCgGJGmYgk9NdNNKstrGW3sLZF8HK5YAzl5lGgBUQ0gnc/hr7/RiLlZ7qZXDBefLJy8vMVI0YqY67VOgira2IPD8FBdDnVAANAVzSNS0s2hnYZdAAOk1fuG43BYZBduX3xJPIEunOwmJCI1pCJMa7aDXSqtbx6pZe2L4ZWhsgLKC6wJJZMp0mOYDTxghiIDLckMQOXYqAfAag+tRpsT2mpqVniOExKhLN0WmiFQEDYe7kPvroJFthtuKbcQwly3cELKPGVlJMXOqREidSPQjwFZzbbX/AH08tv8A0rQ+y3aAKtsXszDvQM+hjIO+BbXMYVCJgkldd6I2jqjXg8XOnU058jy5gbvPNt+TV5U8uky3hprSmF4LeuFxkZcisxzKdSkSn62oqcucVshbgNxSwtlBlF3KfY5RkBJnm5S7awB41zxHjOHY3ALpIdMQJyPym6LWQRGvutV2aXQ9B8RXekYezK2OHP3iI6lM9wW5I2aVB06xmHzqTw2Eu2cQfqTM7pK3C6Kq+9lCjM0NmI01kxpS3aPiA7/BlwVKLbuXR1DMULCPGEHzrnDdo1e5cN+7cyi+l20cubltuzBIkZZBGvlUtyauWynXqU1LLdNardb289Nd0JY/A47FBGuKiqFlFlEVVJXMcsyNSJnWo3FdnMRbnMEELcYw4MCzGcGOsMCB51I4vj9p3Z+YZsKtuI2fvc5HpHWlsR2kw7lwe8CuMQpIUSBeCZTBbX3T+FCclyCFTFQSUYJLokML3ZlltczIlwXGDlnAtrbFpLkzEzzioTiWDexca08ZliYMjUAgg+EEVa8R2rw7FjkuiSxRsqFkJs2kVgC0ZgUb5iqz2i4guIxD3lDANl0aM3KiqZg66rTwcr6mrBzxMp2qrSzfndfyRzGrv2SuFcHK2e+PfNC9RyjUGDHr51RTV37LAfUhmNwDvm1t+8IUeWo6UuJ7gvGf7XzRLXMblIzWcQubUZHukRmjVdApjWDT7huI75CVa8kGOcJm2B6g9DUauKtifb3gRIlgxjUmYB8FA1nfzrtcW8x9bE7HNb31aI0gdPwFYDyKZMd3d6XFP61sz81cD8K7Y3ANAhP6zL/paotMZdkgXrLT7sgjTr09evhXS4+/MZbLfq3B4Hx8wfnRcm6H/fuN7TH9VkI/zFT+FSfCJJcwRou/7X8xUJ9evdcOdjEOp1E6SPHlHxqZ4HeLB5RkgxDRr5iOmv4VKB7EpRRRTCGe/THwHEYvD2/q9o3WQmVBGaDl1AJGbbYa+VYr2ztsr2jcR7RYHluKysJc6EMARpX1S+9DgHQiR4Hai9gkr2Plbh7yzAbHC29h1F22Z8zA/E017PJcNvFMjQq2Paf3kZlGX56/CvqDE9mcFcJL4TDsSIJNlJI8CYkjyponYjAKly2uGREuCHVC6Bh+wwqbi5T5y4LwPEY26LOHTM51JOiooIl2b7Kj4noBOlavwf6EsOqj61iLt1+ot5Utg+AkFj6yPQVoHZ7szhcCHGFsi3nILczsTAgczkmBJ021PiaccYuMti6RMi2xEbjlOo86rlJRV2PGKlJIz3GfQxg3XNhsTftNEAlluW/AyIDEdCM1Zd2q7L4jAM1u+ohgSjqZS4JEkEjRoOoMESOkE7h2TxTpZZF19ocvlopgfE/Mmp/jXA7GNs9zirfeJIMSykMOoZSCp3Gh2JGxqijiI1m0t1uNiKUadWVNO9uZ8k2xp8KlcGZtrp4/ma+hbH0Y8KQyMICf71y834M5p9a7EcNXbA4Y9ea0ra/tA1pTsUOnc+drVwTE6nYAifzBq+dmeAYq7ayixcUZy+a4pRR7NljnhmJzmIB21itisYW3aEW0RB4IoUfICoDH/WLmKKF2WyHGUAoiFQttjmIJu3GzZtBlSNGnq2a6JpxySTK23ZDFfcX/ABr/ADpN+yGJ6qn+IVp1zY61nzdj8T3TBsTnfJcAJuMAzNYtW7ebKggKwvagfaB1O1M8XUXT0O1Hilbw9CKu9mr43y/4v/FIHs/c8U+Z/lTnEdlMSrZzdRhljujcu5T7RHFovElAoa3mImIMakUj/Qd6VV7gIQjmFxwzjuVVlYRy+1t22BBJifEg5pcQqr/KPp/JeuI1vAE7L3m2yf4j/KnCdiMUdu6/xn/9aYYLs/iABJsPyIMpuMFJS/3hUkWZhk5SwgT9iIjR+z6G1ZtW2fOURVLEnUgATJJJ+JmhcRq9U/L+SJcTrpaW9CgcQ7GYqzba4wRlUScjEkDqYIGg8qgO6rbuI4xLdp2ciMp0P2tPdHiTWQizXVw9eVSN2buH42pWjLtOQw+rGJgxMTBifCfGrv2Svm1hJCM/tG0UajQa+kj8aTwOMsjCFDlVuYQQXLOUI7yNMszGm0V3wdwmFQl3T2rHlBObl90x09fAVNaTcSjiOIlUoSTVrNeZLNxtZK93d0Me71+em+9D46ydTbJjqbfz/AVHLfXU/W7kCCeVtBMDyImlVx4AUfWjPj3ZO5Mb9d/lWM87cdXMXhR7yqIMa2/A+m0zSQvYJgdFgbwrDw8B5rTe3j2Mn63ygf8AK8ZAO3TT1ivH4gRqcShnTW2RqRIPu+EGPI0BceWvqmZSrKDOYHMd9PHTaPmPGrHwa8rhipBExI8RM1UBixs13DnzNs9Ph4VbOAWyqENlmZ5BA1np41MQZKUUUU4om+4qIPGQmKuWXgKFQg+BaZB8tKk7z86jxB/36Vn/AGxvBcTflobu7eURMkdPLcmfKptc6GAw8a83CXT6o0cGobtDiWXKO8NpSGJYDaFJHr00GpqscO7TPZtqSc4j3T/A9Ks2F41h8QnOBB3VwCP5Uri0JiOH1qWtrrqim4ji2JVjHExHeFcoSwzC2FMXNYkF1Zem4PWuOHcTx13up4hlW6sgtYsERktk6abPcZDruh9Kux4NgLv/AMvhn/6ds/wpDG8C4daQtcw2HVBAPsl6kACANTJApGYnF7FK4ficWBaVMULWe3duaYW3C5GAyhnYAklsxJiOum3HCeOY+7bt3Hx+XNeVShSxmFpuU3fcHL3kJEeJnSKueC7O8LuFhbwuGYqeaLS7yQDqNRKsJHVWHQ0+Xs5gU5vquGWOvdW/ziiMVHSKCzuVjs5xjENdsA3zdNyO8U92YzWkdiMnuBSzLDQ029ZDCr41Qz8QweGDNbW2PHukWT46rA+Zqs8X7YXLkrZ5EjU/bM9J2X4eG9OoNmzDcPr1norLq9ie7ScfW0CiHNc2MfY9fPyp1xVRFycolSASdZIjbwG81nNk5xBYAgggHdyzKIHnqT8DWicTH6T3RyNP3iIYQfATHyqzJY043CQw/Zwjvrd+hUsTwuASrElRLBhBA089xI+dKN2ffXnUQVGoYasQANtNSPnTfuaGt9atsb7VNs3sKWuAuwaHWQ+WObXWJ223+VcvwMgHmXMJka/ZjTbcyPKue7r02/WixP8AUv3vY5/oR8zLmWQ0faI93Mdl8P8AxThuzj/ZadpkHdoGkAzv8hSQDby0+p3G1KWbtxSCrsI8zGm2m1FiJdrykvQRu8CcBmzoQoJ3M6ZidI8FJqMZfI+flUtfvXGJLMxmZ1PWZ026nbxpqo3gGZ8CPLc0yLqUppfO7jXuqtvZkRY/aP8ACoEWxliObx8qsXAB7EeppKvdMmPnelbxJGiKKKzHFPMo8BXmQeA+VdUUAc92PAfIVIcM2PwpjT/hmzUIiWw9ooopisa4pAWWemoPUais47cjLi2YwQVUD1AEj5FT+0K0XF3CHQRIIOo6HpPkfHx9ao/a9bZuYhmWSiKFmYFxkENI20I0O5t+dPE63B55MRfwt6tFSRy0D5fHyq08Fw+dSkgCCSTOgAknT0qHwtkE8hLIulvMIOsFhH6xap3hr9y7C6CnIytpqoKnWOtOegxtS8Go77+Pp+akDxjhd5LxCK7wofPbDkZGmCSo5djvGxq04e9cGFi9lu2zbtsRnYOVuHk51gkypnf40xwXGsJaeFdrapdW4xKue+IturwBJXUjRoGlPOGcasMEHelYtYZTCtKshuZxqsaSNfPSokrrVGDFTrVIKMqbaVtbPX7eR6OIvaz9xh+7ZhLDnZoBY6KfcWWcwBEsTuarjYO+93M6XGh+ZirkKd4JjTp8xV0s4lbsi25zZEBZBcYqVukxJGYyOu2nhSWL4lbBdQ4BBuqwyOSc7iIYHLGhnQnTTzI2jsijD4h0bxp0rPnvcrvFLLpaJZWUEGMykHeDoR5j8KhLQ5f4fGrPx7FLdttkkw9xjofdZlI/L4VXL6ZYGsx/5/jTJ6HXwc3Kn8ys7nNm6RctxoQwPnuIrT8bB7xeWSDH3juNfLURWc8HW0WuG6YbKO7Gurzpt55dPAnwq88buhS5LAAA5so10JILn7o5oXrI8aV6s5HGZZq0IpbfxsR2KwJQgTMiRSPc064JebForsYzFgJOsKTsOulL37IDELsDpT35Cqo4vJLdbkb3NedzUh3VeG1RcbtBh3Ned1T82qTQBhI1FAZxn3NI5IYg9dR8tR/H4nwqTKUlcsAiD/v49DUh2gz+r5iF8SBrtqQKn+G2MiZdNGO21QV62fdlj47DTzYDT4a1O8Mzd2ucgkaaCNBt8aSr3TNi23DfQdUUUVnOcFFFFABT/hmx9aYU/wCGbH1oQsth7RRRTFY1xR5h6VQO08nFOo0BdPDYWQGBnpDj8av2LPMPSs77UYZrvECqugJCqMxGkoDsd5k+PSnijqcJt2zu7fK/oMeGXcqgEaK07awSDVl4hxLDOrZyusLLKwgFnOgALaZgTqs66xpVdw2G7rEd1egAOoc9CsjWegIMyOk1f8bwPDONbKR5CPjKxUVJKJ0cfVpRqQlK+uqcfIqWKt4DmcGzIUsQbhAL5NAFBE8wmB4+dJ8et2EDXrYUNculBkYlYUuzXAc0QwayIGgM7U3u4K2bhT+j7qjvAgfvbgBXvMSveRJ5QmHVvEm6oiCGKWHNgqguYe+o7st+mJRDkuPlBdBC+yYE6ag6GCaWNePiVxxlCLi89TTk+nr1LML1i5duw2iEj3raqFKtLJkAzQwUQc2/nSV44VQ5i3IzR7R9SqoV0D6ySw+EeNR/D8NhWPs7d0ksqmLiRlZnUXQcvNaJTRhuGUxrXNsWWQn6oScitrevGc1022AFtOYKFzEqCDIjTUtnijN8Rh09JTtpt/slLd/CqjZGXKZXQMTHtQdxqCCnXXSqzx++j3SyGRAExElVAYxA6jwHpV0wnBrC2l9gFzKCUYlyrEAlZYnUHT4VU+0+HRbsWwF0EgaAHWdNhpG1RTqqUrI28PqUnXbjmb8beBGYPDP7O4V5GcANpqZ/8Grr2vugW7oMk5WhRECc3OY0UR1YzMAAEiqxh77uLNsmURwVHhqOvx2qx9rLfJeiBIYzlAnKpnrLnzOgnxirWtUV8RlKWIpZuvtdWKFgcfcsPnttlaI+BiRr00FWjhPay20LfGRvvD3D69V/3rVLJrgmr3FM9FXwdKt3lr1W5ryKCJEEHYjY16bdZjwfjd3DHkMr1RvdPp90+Y/GtG7P8ctYochAf7SNuPPzHmKrlFo89jMHVw/zbx6/cc/ViRI18aiccO7i3aCq7ySxGiIsZnI6xKgDxIqbxLOFi0QHJEE6rGYZtPQ1F8dtZnIHvZEUefNcHynKf2aWJjozebXYbWcCSuZb12ejMQQf2IjL8q7t3S1uYh5KkbgMpIY+Y0keoqStrBKyIWBHlA1/P5VH4Ek3GZFL5pddQAASFB1+93YI8Z6U1xs+a9xa3Y2Ubn/c1JKIAA2Aj5f7NNsO85bggCAddIB11pwj5tY0JJHmPHXpVVTYyVm2dUUUVSUBRRTZ8YAYhiBoXA5VPgT+ZAIHUigi45p/wzY+tMKf8M2PrQiJbD2iiimKxjxC4FZZIE6CT1JgD1JIFZV26YjH3CpIMJqND+jWdR8fnV67cKXTIty3bbL3itc9z2dy2GVj0DBwkiSM0jUCqz2gx9oYm+blpbtr2TBw1slc1pQCFJlgw2I+78pTOpwmq6dZySv8u227RWTxJy2djmYgBiesQB8YEVZeFYuwywL1xGjZSRrzdB+zt+EkiJGFwdy4MtxlUhNJiSTkIBdZ3KsZkwHPUQN2auZlyOjB8+RmzLm7sgE7ECcwI1MidfGy65nfrVsPUSjNuD8Vb+NCzOjFmy4tsoyxnk+8WEGfDLMgdelOrL3wQBi02J2URBAg8vXceMVUbZxNnKJUown2hWAApdixDFlACvqdDkMTUrge0FljleFIMSGDIY6h1Go89KnJF62Mk6DkrwakvBJ/S5ZMPexGobFJIj7kazrITypVXcznxDQJ202JEyPQHbrTXDW1IzKQQdiNR86VNmiyOdKMb8l5JDe/hkg5sRceZgDN/qYxr4xVfuYaQARrOojXY6fOrOMPTDirJZTO5jKdAN2MHlA8YJ9NzUppGmhWaeVO7f5yI/C2lQW82nMJPmSIA/LTzO1TXaZQyukMMwIJ0zkdQs7LOXwB0G5kUdOINevW2bQBxlUbKMw+Z8+v4Vbu0ljOt/QZcrydhIBCks3vMMo00CiesUt7sp4hTlCrTzPV+2pVT2XfJmN0A5C2U298sBhmVyNyIInTXypDifBO5u5TchPaHRSzKtsK0QcudouJtA32iKVwnZ201vOLuptu8qJUd0QH0yhmBaQBoY8dj5/QeKtxcW6oZVLrz3FcaKGgMuh1VdYnTptYpeJ0Y4ueZp19rrWNvyzIRxBImYO8ET4GDqJotuVIIJBGxG4qS4pwvEKzM4LBQeZnSclrIuozHmhk01JnrUZVsXdHZoVoVoXTT621LjwntE972ZZbV2OVhorup0nopZSwPQkL6VYMFYcW0bKPZAAg+805WYAkxMnT9XfmkZaRVw7N9oBd/q2IYjPyrezQ0EaIWOxJiG+eutLKHNHJx+ByxzUlpu19vt6Fg+trcuqoRGt68zDd4BAOYSjAg6HypbF4lLeIDTmLplKqQWBnSROgMwCYGp1qFs8Tw9vCpcxKJcZ8xS2VUwoJCgBthpMkzzamqxxTtJevDKsWrfRLYgfGKr1btFfYw0cHOtK0VZLRv83LdjuO20uxedERASLYOZmbTLIWTpqegmN4mpng/EFxFoXVzEEnVgASQSDoCYHh5RWNW7dap2GH9Tt+r/vGlqwtG7Y/EcDChRUk7u6X7/m5PVWuIcZuDEOqugsqDbML7QXwqXANYmbbMYGkKdZ0qy1CXez2a+103rgRg0WlgKrsFBfzMBt/vmsxwJX5Bw/G3QVQo7lm1Z4UgaAkLrK6ToeteNbfvVfuz3Ys5TzjKQwzMckTmnTczS+FweGsPIKi4V6vLlRvpPlvHjSWD4jh7l0W0LtDGBqEDDM066nYwNQDEAQKCLMmLYIAB3gT61I8M2PrTCpDhmx9alBLYeUUUUwhV+12GZ7uGa2AXV+UMSEMqzjNlBJAezbaB1UVVMVw+/ZuOtm5nNpbKtmVQXiys3M0gqZX3RA1PhVv7XYVrmTKC0bqC4J1kEFCGBBUbEVTuOHDnFEs/dPltFHX3EXuwCDy6rORdcu+vhUo24DWcl4dL81y/GR+JvIh/rGGNsG+twkInd92FVGQHKAVORyACR6xJ4wv1TvCQzp7Vx9pStsq5UghtMpULB1JuCQctSOI+tvnWzdW4MkAoRmAZW5+80m5AXUHcLGgNNsTi7gui5dwpXLmZyFVpIvW7rNmykADRZzaBxrTnahPNGy38J29peh6OHglSMcN1y8ytkYm5oYuwAoAlgIOekcVw9rue4bqsVstcM6mEYwpcQCzHMZ/ORTHid6yVTJbNtgWzyTBMjQSx2MiIEefRncskQSpEwRKkbiVIJ8RqD1FOkbqFCo7Tz2fRxjffwHOBx1y0SbblT5bH1Gx+NWbhfbPULiE/bT+K/yPwqokRpB1Gk/n6V3h7JdgBGu5JgADVmJ6KACT5CpNdfDUa0W5rz5+ppbccsCwb5YZRpAIzZuix94+fhO2tZxxXij4i53j6DZV6IvgPPxPX5ALL/WLluxbIRJhSwiTuzt/eOUegCiYE0v/AEVYC/pzceCSlpCSDA6ANMGfuyBM6EUphoUaOEbbvme2l7L7jXhrDvLf66/vCtA7Y3FFi4rHLmDAGCehYmBqdjVVbDi2QURbStcUDvCpvEC4ugAJjpJnx01qY7RYdrouc3dkXRrzDM0ZbbSPJrYkT7pGmsIcniVbPWpyWmv1X6lWtcHdbhXvkVgAQys4zTZu3VKtAEeyImfE9KSxVzFWoW490SpABuZtNJG5j7Jj0p0eHY0KX7zRkBcm6QcgXXN3sEKoYgztJiQaY4jD4i4Za2zt3eflVSxQRzEp7x2Guu3lV6eurR1qNVTqXqThKPPrt9zy5xS805rhaQwMhSYuAB4JEiQoGnhTOnWN4dcskhxs5QxJhwqMV23i4vqZiYpqTt5gEbbHUGrY25HRouha9K2vQ8pyqLbQXLgmf0aff8WPUWwdPM6DrRg7S81y5PdpBaN2Y+7bHmxB9AGPSo3GYprjl3iT0GiqBoFA6KBoBUPXQmTc5ZVtz+33FHxDXGzO0nbYAR4AdB5UoFpkDTqzcn1qbWVkWWsrI7y1p3Yn+x2/Vv3jWZRWndiv7Ha/a/faqa/dONxv+3X6/Rk5VY7aXWAtgMQC6TBInnqz1Ve2/wDwv17f/crIeVZXez36c+l7/u3Kkeyn9p/bf925Ud2c/TH9W9/3rtSPZL+0f9R/3XqSC91IcM2PrUfUhwz3T6/wqERLYeUUUUwhVO1XF/qt+27CbTIQ46iCYZR1IkyOo9BUTjE7/PicMbWJt3e70DQytZIIhjyhtNQwBB86PpWXltnpB/OvnnC8bxGExFx8Pee02dpynRoZoDKeVxqdCDUO9tC2lNwd0a9ewttC0d5hX75QuYXARZ7tVaGLZGIc3D70kabHSVsYHFQGXErcYZRbJylSbr92ZMMRCqrTJ+yI61Q+GfTFfUZcTh7d4dShKGOsghlPoAKs1ntXwy7DPZeyxjXu4+TWWJ/Ck7aa3j6HS+OU0lL3Sl++vuePxq4LltiFbus+UQ4/Se+DLE6MCszqAZ8K5sccYMxdFeTaJDH/AJOXLGhicv40577hbjlxIUDYNcZY66C6PGTp4muEweAbbG2/hfsfxFHxUOafodKGL4fKNpLw6c78n11GuM4mLqsO7C87OuUiAzMnWByqouKBt7SegrjGXBbt5R7zqGbyTRlTynRz+x4GpROH8NWC+OtxMw1+wAfLxg+VK3DwglnfGLcJJJi8rSSZMC2J+ApviYPa/oWLiODpWjC9lrbx82e2cCbORHs2c2bIXJLEnuzckZlCluUwAwMso0Bluzix7nfM7ZZ7vDL1CtlVsmZt8uzAanWkb3aXg6SQj3231S45J9b5A8KrnFfpoKA28Hg0tgaA3Dp5+ztwP8xqe1b5HKq4+MndXfov/XtYutjhFwa5Vw9qVa491gbjZGRpIzQslJJdiRmbQ1Gcd46ce/c4UzaTna5r7QrqoSBOUETIHMQI01ON9oe12Mxx/rF9mWdLYhbY8ORYBjxMnzrR+w2Ea5YVUc227tDmE6QFPTxozqPzSdkjEqsqlaDdlqv357tkreXFqs98zZQ4fMVKi2rlWPtDzIYXlIkzEVGpxW4rEgq3JkBKCIUgo0COYEAgnw1mpx+E40ai+jGCNdTBBBgshgkE6zOtRV7gGK/5MwAOXJEAADQHU6anqdatp4mjL/KJ6TDKlK6quD/Sy+iFML2idC/Ipzu7mGZYZwmx1iO7G4O5mQaT4lxQX1y5GQhsyqCpDMe7UAnKDooeI6sNKZXsFdT37dxf1kYD5kV3w+7kz3wRNocs9bj8tv5av+xV9o7o1PC4eL7WC1W1nz5CfFjzphUMhGynXR77EB2nwBhB5LPU0pwrD3bF1bhslxDCAyw0iN9Y94dOoHWCz4ItrvkF4xb1zEkiOU5TKkH3o6ipawtvNbW3euR3chRdXMzALHvjLbbmucv/ANMREg0+ysTWk4Ls7aW1bTtre+qeh3iOI2bgBbClDJYEWVYFDbARiQQWhhtoIIMyKazgzbhWKXtTzBwoOWIkT9pZ2/4h100kbGBuKi5cQqgWl3W2YcwTZMGdigjViW2jWi531ssYs3MsuzEEZwoU5o1XVbYiNNZ1moVuRkjOK0g35Sa/dfUaYi3hiHNtyIDFeYHMRdZEWCJHJkf0mr32L/sdr9r95qpWLVu7Zjhra5kV86upKrczFBlYA5o+7rC+A0u3Yz+x2v2v3mqqt3TLxGV8Nu+9zafJ9Caqq9tQSbQAnntbf/cq1VFY3hjXGLF8oDaAiRlhdxI1kN5a7VlPPspvAsK6XCzKQIujzk3rh26aMu/3h41KdnMEy3iVBMMxJIhZMrlETrLb+AJjxnsJhbFv3ZYwBvpy7bQCfPenufSBAGwAqt1Y9QysWdwBJIA8TT3gmJR1bIZhoMeMD571DXOD3bvkPFv5b1M8D4UMMhUMWzGSYjWANB8KiEpuW2gSy23JGiiiryohO1vBvrVgqPfXVfPxFfLnbXgNzC32LKQrMSD4EySp8DM/D419fUw4pwXD4lSt60lwEQZG48POglM+L6mcLxoAAOp0ESI1+BreuLfQjw66Ztm9YPgjgr/hcGPgRVaxX/8An8ye7x4joHsfxFz+FRYm5mw4pZP2o9Vb+Arv+kLJ+2Pkf5Vdb30CYse5isOfUXB+QNM3+griQ2u4Q/8AUufxtVFguirfXbH3l/H+VcniVgfaHwDfyq1f+4viX/Mwv/5Ln/8AKnFj6BseffxGFX0N1vzQUWDQot/jij3FJPidB8tz+FQTMSZ8a2jD/QBcPv45B+rZJ/NxVg4Z9BWBQg3b1+9HSVRT/hGb/NU2C5gnBuF3MTcFu2DPUxoo8T/vWvp7sJ2WFmzNxYJACqdCFHp8PlU1wPsthMGoWxYRI6xJnxk9fPepmocU1ZkXIx+CWztmHof50n/QsbP8x/5qXoqh4Oi/8Ru0l1IpcA48D8f50XeGo4y3LSOPBlVh/vU1K0URwsY91sntJFZv9i8A++GQfqll/dIqKxv0bYNvcN236OCP84NXuvCo8KvWdbSZfDHYiG036mW4j6N8v6PEketv+TCmL9mcfaMpiFbUtqzakgqSVZSCSpI1rW3wynpTW/woNsxHwmllUxC2aZqjxavtNp/qkZDisLjwjIbaspRbZKi3JRPdEiDp6eHhVv7NY1bOEtLclXAMrHMOZtx0qcxHZ9z7rKfWR/Omg7LXHaXZVXTbUmPkBWeWIxUllyImvjo1qeRpLW+mgxxHHmPuKB5nU/KksNh8RiDIDMPE6L+Onyq24Hs/Yt65M58X1/DYfKpSlWFqT1qy8kYHVS7qIHAdn8utxvgv8z/Kpmzh1T3QB+fzpWitUKUYL5UVSk5bhRRRVgoUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z",
    category: "Sắc đẹp & Da",
    name: "VitaGreen Collagen Beauty",
    desc: "Collagen Peptide thuỷ phân kết hợp Vitamin C và Glutathione giúp da sáng mịn, đàn hồi.",
    benefits: ["Da sáng", "Chống lão hoá", "Đàn hồi da"],
    price: 590000,
    unit: "hộp 30 gói",
    audience: "Phụ nữ từ 20 tuổi",
    longDesc: "VitaGreen Collagen Beauty là thức uống dạng bột hoà tan chứa Collagen Peptide phân tử thấp dễ hấp thu, kết hợp Vitamin C và Glutathione giúp làm sáng da, cải thiện độ đàn hồi, giảm nếp nhăn và nuôi dưỡng làn da từ sâu bên trong.",
    ingredients: [
      { name: "Collagen Peptide thuỷ phân", amount: "5000mg" },
      { name: "Vitamin C", amount: "200mg" },
      { name: "Glutathione", amount: "50mg" },
      { name: "Hyaluronic Acid", amount: "50mg" }
    ],
    usage: "Pha 1 gói với 150ml nước, uống 1 lần/ngày sau ăn tối.",
    caution: "Bảo quản nơi khô mát, sử dụng ngay sau khi pha để đạt hiệu quả tốt nhất."
  },
  {
    id: "probiotic-gut",
    badge: "",
    icon: "🦠",
    image: "data:image/jpeg;base64,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",
    category: "Lợi khuẩn đường ruột",
    name: "VitaGreen Probiotic 10 Bil",
    desc: "10 tỷ lợi khuẩn Probiotic kết hợp chất xơ Prebiotic giúp cân bằng hệ vi sinh đường ruột.",
    benefits: ["Cân bằng vi sinh", "Giảm táo bón", "Hấp thu tốt"],
    price: 340000,
    unit: "hộp 30 gói",
    audience: "Người rối loạn tiêu hoá, trẻ em trên 1 tuổi",
    longDesc: "VitaGreen Probiotic 10 Bil chứa 10 tỷ lợi khuẩn sống (Lactobacillus, Bifidobacterium) cùng chất xơ Prebiotic FOS giúp cân bằng hệ vi sinh đường ruột, cải thiện tình trạng táo bón, tiêu chảy và tăng cường hệ miễn dịch đường ruột.",
    ingredients: [
      { name: "Lactobacillus acidophilus", amount: "5 tỷ CFU" },
      { name: "Bifidobacterium lactis", amount: "5 tỷ CFU" },
      { name: "FOS (Prebiotic)", amount: "500mg" }
    ],
    usage: "Pha 1 gói với nước ấm dưới 40°C, uống 1 lần/ngày, tốt nhất khi bụng đói.",
    caution: "Không pha với nước nóng trên 40°C vì sẽ làm chết lợi khuẩn."
  },
  {
    id: "weight-mgmt",
    badge: "",
    icon: "⚖️",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdw7u5ZOK5Sl7EuAKF13bSf7s1ZpiWqCPOhb3iQdQYQGqWsXCOKtBWuDTmFCdvUYJ5O406oYulJAHsWhBXkFFCofHUM3FZ9OVQifofFZq4ukqJ_RnTIkiyqDLefYtQuK5DC-C5FA&usqp=CAc",
    category: "Kiểm soát cân nặng",
    name: "VitaGreen Slim Fit",
    desc: "Chiết xuất Trà xanh, Garcinia Cambogia và L-Carnitine hỗ trợ giảm mỡ, kiểm soát cân nặng.",
    benefits: ["Giảm mỡ", "Tăng chuyển hoá", "Kiểm soát cân nặng"],
    price: 470000,
    unit: "hộp 60 viên",
    audience: "Người trưởng thành cần kiểm soát cân nặng",
    longDesc: "VitaGreen Slim Fit kết hợp chiết xuất Trà xanh giàu EGCG, Garcinia Cambogia và L-Carnitine giúp tăng cường chuyển hoá năng lượng, hỗ trợ đốt mỡ tự nhiên trong quá trình tập luyện, kết hợp cùng chế độ ăn uống lành mạnh và vận động hợp lý.",
    ingredients: [
      { name: "Chiết xuất Trà xanh (EGCG)", amount: "300mg" },
      { name: "Garcinia Cambogia (60% HCA)", amount: "500mg" },
      { name: "L-Carnitine", amount: "200mg" }
    ],
    usage: "Uống 2 viên/ngày trước bữa ăn 30 phút, kết hợp tập luyện và ăn uống điều độ.",
    caution: "Không dùng cho người huyết áp thấp, phụ nữ có thai và cho con bú."
  },
  {
    id: "energy-b",
    badge: "",
    icon: "⚡",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjfa-rl1IiRdQZ6G14H3ZaV2v4SqcEc7C9YEZ5xMNpr05XREIyL_bVDYDVMP1iHBTBJaoxcJZh-qTgNSgpbjHpLMIMBzXtfYhOj7_8YCUoxp4V_n10uKTajYPrFbf5h5hDZiZABP7i_kc&usqp=CAc",
    category: "Năng lượng & B-Complex",
    name: "VitaGreen Energy B-Complex",
    desc: "Vitamin nhóm B liều cao kết hợp Nhân sâm giúp giảm mệt mỏi, tăng cường năng lượng tức thì.",
    benefits: ["Giảm mệt mỏi", "Tăng năng lượng", "Tỉnh táo"],
    price: 300000,
    unit: "hộp 30 viên",
    audience: "Người làm việc căng thẳng, mệt mỏi kéo dài",
    longDesc: "VitaGreen Energy B-Complex cung cấp đầy đủ 8 loại Vitamin nhóm B thiết yếu kết hợp chiết xuất Nhân sâm, giúp hỗ trợ chuyển hoá năng lượng từ thức ăn hiệu quả hơn, giảm cảm giác mệt mỏi, uể oải và tăng cường sự tỉnh táo trong công việc hàng ngày.",
    ingredients: [
      { name: "Vitamin B1, B2, B3, B5, B6, B7, B9, B12", amount: "100% RDI" },
      { name: "Cao Nhân sâm", amount: "100mg" },
      { name: "Vitamin C", amount: "60mg" }
    ],
    usage: "Uống 1 viên/ngày vào buổi sáng sau ăn.",
    caution: "Không nên uống vào buổi tối vì có thể gây khó ngủ ở một số người nhạy cảm."
  },
  {
    id: "memory-brain",
    badge: "",
    icon: "🧠",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRL2DBgPR6D2iG1rb-50zskZEnPddADKPQfAT9GWSx1Kg1vBHw8eiVmb2nsSNUR6S8ILMhfnEIZXFJDtnMvJqk1ukqNBkUweDm0EmzlPec4S3crNV1ZQSZl6k-Tma2MN7e-0poDMg&usqp=CAc",
    category: "Trí não",
    name: "VitaGreen Brain Boost",
    desc: "Ginkgo Biloba, Phosphatidylserine và DHA giúp tăng cường trí nhớ, sự tập trung.",
    benefits: ["Trí nhớ", "Tập trung", "Tuần hoàn não"],
    price: 530000,
    unit: "hộp 30 viên",
    audience: "Học sinh, sinh viên, người cao tuổi, dân văn phòng",
    longDesc: "VitaGreen Brain Boost kết hợp Ginkgo Biloba, Phosphatidylserine và DHA – các dưỡng chất đã được nghiên cứu hỗ trợ tuần hoàn máu não, tăng cường khả năng ghi nhớ, sự tập trung và phản xạ tư duy, phù hợp với người cần làm việc trí óc cường độ cao hoặc người cao tuổi suy giảm trí nhớ.",
    ingredients: [
      { name: "Ginkgo Biloba (24% Flavone glycosides)", amount: "120mg" },
      { name: "Phosphatidylserine", amount: "100mg" },
      { name: "DHA", amount: "100mg" },
      { name: "Vitamin B12", amount: "10mcg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn sáng, dùng liên tục 2-3 tháng.",
    caution: "Người đang dùng thuốc chống đông máu cần tham khảo ý kiến bác sĩ trước khi dùng Ginkgo Biloba."
  },
  {
    id: "heart-coq10",
    badge: "",
    icon: "❤️",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtbE4QhDQ53kTCbt2FtldnOyC-d5JVDPfmf_qATyediZaMcn7dA65fZ-JgwaClce9ZQTeEFBPN7AV5w5n4e4sUBmQCdC2LG0qRlnl_3WGwF-uXwP6maiBBRLfbshb0R5QQO2IZF3NL&usqp=CAc",
    category: "Tim mạch",
    name: "VitaGreen Heart CoQ10",
    desc: "Coenzyme Q10 và Kali giúp hỗ trợ chức năng tim, duy trì huyết áp ổn định.",
    benefits: ["Tim mạch", "Tuần hoàn máu", "Chống oxy hoá"],
    price: 510000,
    unit: "hộp 30 viên",
    audience: "Người trên 40 tuổi, người có nguy cơ tim mạch",
    longDesc: "VitaGreen Heart CoQ10 cung cấp Coenzyme Q10 dạng Ubiquinone dễ hấp thu kết hợp Kali và Magie, hỗ trợ sản sinh năng lượng cho tế bào cơ tim, tăng cường tuần hoàn máu và góp phần duy trì huyết áp, nhịp tim ổn định trong cuộc sống hiện đại nhiều áp lực.",
    ingredients: [
      { name: "Coenzyme Q10", amount: "100mg" },
      { name: "Kali", amount: "100mg" },
      { name: "Magie", amount: "50mg" },
      { name: "Vitamin E", amount: "10mg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn, tốt nhất vào buổi sáng.",
    caution: "Người đang dùng thuốc điều trị tim mạch nên hỏi ý kiến bác sĩ trước khi kết hợp sử dụng."
  },
  {
    id: "prenatal-care",
    badge: "CHO MẸ BẦU",
    badgeColor: "var(--green-mid)",
    icon: "🤰",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKqyeSqQGGd-EtDjqZzoJUx1WkPpa09854VDXa4mhGhGl5aI3j8evU4psdQOYhc7D2h15WOWLN2EkB0Vh_Wnq_H0HtuTNibXyprSWyYyXK4fPOikSzOon5MfD2KZdZQHsB1w_0CCk&usqp=CAc",
    category: "Dinh dưỡng thai kỳ",
    name: "VitaGreen Prenatal Care",
    desc: "Acid Folic, Sắt và DHA chuyên biệt cho phụ nữ mang thai và cho con bú.",
    benefits: ["Phát triển thai nhi", "Bổ máu", "Hỗ trợ trí não bé"],
    price: 480000,
    unit: "hộp 30 viên",
    audience: "Phụ nữ mang thai và cho con bú",
    longDesc: "VitaGreen Prenatal Care được nghiên cứu chuyên biệt cho phụ nữ mang thai và cho con bú, cung cấp Acid Folic, Sắt, Canxi và DHA giúp hỗ trợ sự phát triển toàn diện của thai nhi, ngăn ngừa thiếu máu thiếu sắt và dị tật ống thần kinh ở trẻ.",
    ingredients: [
      { name: "Acid Folic", amount: "800mcg" },
      { name: "Sắt Fumarate", amount: "27mg" },
      { name: "Canxi", amount: "200mg" },
      { name: "DHA", amount: "200mg" },
      { name: "Vitamin D3", amount: "600IU" }
    ],
    usage: "Uống 1 viên/ngày sau ăn, dùng suốt thai kỳ và giai đoạn cho con bú theo hướng dẫn bác sĩ.",
    caution: "Cần được tư vấn bởi bác sĩ sản khoa trước khi sử dụng để đảm bảo liều lượng phù hợp."
  },
  {
    id: "senior-multivit",
    badge: "",
    icon: "🧓",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_R52gZSrtMyItg_mQ8DIMmD8daWacnma36XT5Znn6Pqe1GOhSIZfuALLFYoPbpdtdDQFv5UMHM9xvdPkJAQwAmUNQvZtbZRcE50yRPzWLAsVVwMsO7jLRcAG042nL1wIK0R0ra4zd&usqp=CAc",
    category: "Người cao tuổi",
    name: "VitaGreen Senior 50+",
    desc: "Công thức vitamin và khoáng chất chuyên biệt cho người trên 50 tuổi, hỗ trợ xương khớp và tim mạch.",
    benefits: ["Xương khớp", "Tim mạch", "Tăng đề kháng"],
    price: 360000,
    unit: "hộp 60 viên",
    audience: "Người trên 50 tuổi",
    longDesc: "VitaGreen Senior 50+ là công thức vitamin tổng hợp được điều chỉnh hàm lượng phù hợp với nhu cầu dinh dưỡng của người trên 50 tuổi, bổ sung Canxi, Vitamin D3, CoQ10 và các vitamin nhóm B giúp hỗ trợ xương khớp chắc khoẻ, tim mạch ổn định và duy trì năng lượng tích cực mỗi ngày.",
    ingredients: [
      { name: "Canxi", amount: "300mg" },
      { name: "Vitamin D3", amount: "800IU" },
      { name: "Coenzyme Q10", amount: "30mg" },
      { name: "Vitamin nhóm B", amount: "100% RDI" }
    ],
    usage: "Uống 2 viên/ngày sau ăn sáng và tối.",
    caution: "Người có bệnh lý nền nên tham khảo ý kiến bác sĩ trước khi sử dụng dài hạn."
  },
  {
    id: "skin-glow-e",
    badge: "",
    icon: "🌟",
    image: "data:image/jpeg;base64,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",
    category: "Sắc đẹp & Da",
    name: "VitaGreen Skin Glow E",
    desc: "Vitamin E thiên nhiên kết hợp dầu mầm lúa mì giúp da mềm mại, chống lão hoá hiệu quả.",
    benefits: ["Da mềm mại", "Chống lão hoá", "Chống oxy hoá"],
    price: 290000,
    unit: "hộp 60 viên",
    audience: "Nam và nữ từ 18 tuổi",
    longDesc: "VitaGreen Skin Glow E cung cấp Vitamin E thiên nhiên chiết xuất từ dầu mầm lúa mì, một chất chống oxy hoá mạnh giúp bảo vệ tế bào da khỏi tác hại của gốc tự do, duy trì độ ẩm, mềm mại và làm chậm quá trình lão hoá da một cách tự nhiên.",
    ingredients: [
      { name: "Vitamin E thiên nhiên", amount: "400IU" },
      { name: "Dầu mầm lúa mì", amount: "200mg" }
    ],
    usage: "Uống 1 viên/ngày sau ăn, dùng liên tục để duy trì hiệu quả.",
    caution: "Người đang dùng thuốc chống đông máu nên tham khảo ý kiến bác sĩ trước khi dùng Vitamin E liều cao."
  }
];

// Hàm định dạng giá tiền VNĐ
function vgFormatPrice(n) {
  return n.toLocaleString('vi-VN') + '₫';
}
