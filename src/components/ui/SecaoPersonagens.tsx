import { motion } from "framer-motion";
import CardPersonagem from "../ui/CardPersonagem";

export default function SecaoPersonagens() {
    const letters = "Nhân vật".split("");

  return(<>
  <div className="bg-black gap-5 justify-center py-10">
    <h2 id="personagens" className="text-amber-50 text-7xl font-bold text-center">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1, // atraso progressivo
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: false }}
            >
              {letter}
            </motion.span>
          ))}
    </h2>

    <div className="flex gap-3 justify-center py-20">
    <CardPersonagem
      nome="Frieren"
      descricao="là nhân vật chính của Frieren: Beyond Journey's End. Cô là Pháp sư của Đảng Anh hùng và đi cùng với Anh hùng Himmel, Chiến binh Eisen và Linh mục Heiter trong cuộc hành trình mười năm để đánh bại Quỷ Vương."
      imagem="/Frierenfoto.jpeg"
      tags={["Pháp sư", "Tiên tộc", "Mạo hiểm giả"]}
    />
    <CardPersonagem
      nome="Fern"
      descricao=" là một pháp sư trẻ tuổi, và cô ấy đi cùng Frieren với tư cách là học trò và thành viên trong nhóm của mình. Cô là một người tị nạn chiến tranh mồ côi đến từ Southern Lands, sau đó được Heiter nhận nuôi và được Frieren chăm sóc sau khi anh qua đời.
      imagem="/Fern.jpeg"
      tags={["Pháp sư", "Con người", "Mạo hiểm giả"]}
    />
    <CardPersonagem
      nome="Stark"
      descricao="Là một Chiến binh con người. Sau khi ngôi làng của anh bị tấn công bởi Ác quỷ, anh chạy trốn và trở thành học trò của Eisen. Theo chỉ thị của Eisen, ông gia nhập nhóm của Frieren với tư cách là đội tiên phong của họ."
      imagem="/Stark.jpeg"
      tags={["Chiến binh", "Con người", "Mạo hiểm giả"]}
    />
    </div>

  </div>
  </>)
}
