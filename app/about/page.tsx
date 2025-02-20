"use client";

import { useLanguageStore } from "@/store/language";
import Image from "next/image";

export default function AboutPage() {
  const { language } = useLanguageStore();
  return (
    <main className="flex-grow">
      <div className="relative h-52 bg-[url('/about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            {language === "vn"
              ? "Khám phá Quy Nhơn cùng chúng tôi"
              : "Discover Quy Nhon with Us"}
          </h1>
        </div>
      </div>

      <div className="maxContainer maxPadding sectionPadding mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-primary">
          {language === "vn" ? "Về Chúng Tôi" : "About Us"}
        </h2>
        <div className="space-y-4 text-[18px] text-gray-600">
          <p>
            {language === "vn"
              ? "Chúng tôi là một nền tảng đáng tin cậy chuyên cung cấp thông tin đầy đủ và chuyên sâu về Quy Nhơn. Chúng tôi hiểu rằng vẻ đẹp tự nhiên và sự phong phú của thành phố biển này rất ấn tượng, từ những bãi biển cát trắng mịn, những dãy núi trùng điệp cho đến nền ẩm thực phong phú đặc sắc. Thông qua nội dung của chúng tôi, du khách có thể tìm hiểu kỹ hơn về từng địa điểm, văn hóa địa phương cũng như các hoạt động du lịch đang được yêu thích."
              : "Chúng tôi exists as a trusted platform dedicated to bringing you complete and in-depth information about Quy Nhon. We understand the natural beauty and richness of this coastal city, from its fine white sandy beaches, majestic mountain ranges to its diverse and distinctive cuisine. Through our content, travelers can learn more about each location, local culture as well as popular tourist activities."}
          </p>
          <p>
            {language === "vn"
              ? "Chúng tôi cam kết giúp du khách lên kế hoạch cho những chuyến đi ý nghĩa và đáng nhớ. Với thông tin chính xác và hướng dẫn phù hợp, Chúng tôi đảm bảo rằng mọi du khách đều có thể tận hưởng những trải nghiệm tốt nhất, từ khám phá các điểm du lịch nổi tiếng đến tương tác với cộng đồng địa phương. Chúng tôi cũng cung cấp những lời khuyên thiết thực, đề xuất hoạt động để chuyến đi của bạn thật trọn vẹn và ý nghĩa."
              : "We are committed to helping travelers plan meaningful and memorable trips. With accurate information and appropriate guidance, Chúng tôi ensures that every traveler can enjoy the best experiences, from exploring famous tourist spots to interacting with local communities. We also provide practical advice and activity suggestions to make your trip complete and meaningful."}
          </p>
          <p>
            {language === "vn"
              ? "Cùng với Chúng tôi, chúng tôi muốn trở thành đối tác du lịch của bạn để khám phá vẻ đẹp sâu sắc của Quy Nhơn. Khám phá nét quyến rũ tự nhiên và kho tàng văn hóa tiềm ẩn, đồng thời để bản thân được truyền cảm hứng từ sự kỳ diệu ở mọi ngóc ngách. Hãy biến mỗi chuyến đi không chỉ là một kỳ nghỉ – một trải nghiệm giúp bạn mở mang tầm mắt, làm phong phú tâm hồn và tạo nên những kỷ niệm khó quên."
              : "Together with Chúng tôi, we want to be your travel partner to explore the profound beauty of Quy Nhon. Discover its natural charm and hidden cultural treasures, while letting yourself be inspired by the wonders in every corner. Make every trip more than just a vacation - an experience that opens your eyes, enriches your soul, and creates unforgettable memories."}
          </p>
          <Image
            src="/about-image-1.jpg"
            alt="about"
            width={900}
            height={900}
            className="h-52 w-full object-cover"
          />
          <p>
            {language === "vn"
              ? "Quy Nhơn là một thành phố ven biển thuộc tỉnh Bình Định, miền Trung Việt Nam. Thành phố này nổi tiếng với những bãi biển đẹp, trong đó có bãi biển Quy Nhơn, Eo Gió, Kỳ Co và Hòn Khô. Ngoài ra, Quy Nhơn còn có nhiều di tích lịch sử văn hóa quan trọng của nền văn hóa Chăm Pa cổ đại."
              : "Quy Nhon is a coastal city in Binh Dinh province, Central Vietnam. The city is famous for its beautiful beaches, including Quy Nhon Beach, Eo Gio, Ky Co, and Hon Kho. Additionally, Quy Nhon has many important historical and cultural relics of the ancient Cham Pa culture."}
          </p>
          <p>
            {language === "vn"
              ? "Nằm ở vị trí địa lý thuận lợi, Quy Nhơn sở hữu cảnh quan thiên nhiên đa dạng với núi, biển và đồng bằng. Thành phố này là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên, tận hưởng ẩm thực đặc sắc và tìm hiểu về văn hóa lịch sử. Quy Nhơn cũng được biết đến là quê hương của nhiều món ăn ngon như bánh xèo, bún chả cá và các món hải sản tươi ngon."
              : "Located in a favorable geographical position, Quy Nhon possesses diverse natural landscapes with mountains, sea, and plains. The city is an ideal destination for those who love exploring nature, enjoying distinctive cuisine, and learning about history and culture. Quy Nhon is also known as the homeland of many delicious dishes such as banh xeo, bun cha ca, and fresh seafood."}
          </p>
          <p>
            {language === "vn"
              ? "Người dân Quy Nhơn nổi tiếng với sự thân thiện và hiếu khách. Họ sống chủ yếu bằng nghề đánh bắt hải sản, nông nghiệp và du lịch. Văn hóa địa phương mang đậm bản sắc của vùng duyên hải miền Trung, với nhiều lễ hội truyền thống và nghệ thuật dân gian độc đáo."
              : "The people of Quy Nhon are famous for their friendliness and hospitality. They mainly live on fishing, agriculture, and tourism. Local culture strongly reflects the identity of the Central coastal region, with many traditional festivals and unique folk arts."}
          </p>
          <Image
            src="/about-image-2.jpg"
            alt="about"
            width={900}
            height={900}
            className="h-52 w-full object-cover"
          />
          <p>
            {language === "vn"
              ? "Quy Nhơn đang phát triển nhanh chóng như một điểm đến du lịch hấp dẫn, với nhiều dự án phát triển cơ sở hạ tầng và dịch vụ du lịch. Thành phố này cũng đang nỗ lực bảo tồn và phát huy các giá trị văn hóa, lịch sử và thiên nhiên của mình."
              : "Quy Nhon is rapidly developing as an attractive tourist destination, with many infrastructure and tourism service development projects. The city is also making efforts to preserve and promote its cultural, historical, and natural values."}
          </p>
          <p>
            {language === "vn"
              ? "Với sự phát triển của ngành du lịch, Quy Nhơn ngày càng thu hút nhiều du khách trong và ngoài nước. Thành phố này được đánh giá cao về môi trường du lịch an toàn, thân thiện và giá cả hợp lý, đồng thời vẫn giữ được nét đẹp hoang sơ và bản sắc văn hóa độc đáo của mình."
              : "With the development of tourism, Quy Nhon is increasingly attracting both domestic and international tourists. The city is highly rated for its safe, friendly tourism environment and reasonable prices, while still maintaining its pristine beauty and unique cultural identity."}
          </p>
        </div>
      </div>
    </main>
  );
}
