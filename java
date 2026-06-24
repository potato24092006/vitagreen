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
    image: "food.png",
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
    name: "VitaGreen Bone & Joint Care",
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
    category: "Giấc ngủ & Stress",
    name: "VitaGreen Sleep & Calm",
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