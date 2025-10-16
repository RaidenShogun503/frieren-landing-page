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
      descricao="Một pháp sư du hành khắp thế giới với sự bình thản và trí tuệ."
      imagem="/Frierenfoto.jpeg"
      tags={["Pháp sư", "Tiên tộc", "Mạo hiểm giả"]}
    />
    <CardPersonagem
      nome="Fern"
      descricao="Một pháp sư du hành khắp thế giới với sự bình thản và trí tuệ."
      imagem="/Fern.jpeg"
      tags={["Pháp sư", "Con người", "Mạo hiểm giả"]}
    />
    <CardPersonagem
      nome="Frieren"
      descricao="Một pháp sư du hành khắp thế giới với sự bình thản và trí tuệ."
      imagem="/Stark.jpeg"
      tags={["Chiến binh", "Con người", "Mạo hiểm giả"]}
    />
    </div>

  </div>
  </>)
}