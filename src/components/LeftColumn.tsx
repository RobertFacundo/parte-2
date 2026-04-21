import { FaClock, FaCode, FaUsers, FaMedal } from 'react-icons/fa';
import Button from './Button';
import { motion } from 'framer-motion';


const listItems = [
    {
        icon: <FaClock className="text-white" />,
        text: "+40 horas de conteúdo direto ao ponto;",
    },
    {
        icon: <FaCode className="text-white" />,
        text: "Projetos com Python + IA desde o módulo 1;",
    },
    {
        icon: <FaUsers className="text-white" />,
        text: "Suporte da comunidade com +20.000 alunos;",
    },
    {
        icon: <FaMedal className="text-white" />,
        text: "Certificado reconhecido pelo mercado.",
    },
];

const handleStartNow = () => {
    console.log('Iniciando ahora...');
};

const handleLearnMore = () => {
    console.log('Ver lo que aprenderás...');
};


const LeftColumn = () => {

    return (
        <div className="w-full lg:w-1/2 space-y-8  ml-8">
            <motion.h1
                className="text-4xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Aprenda <span className="text-green-500">Python</span> do zero e construa projetos reais com <span className="text-green-500">IA</span>
            </motion.h1>

            <motion.p
                className="text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <span className="text-green-500"> O curso mais prático</span> do <span className="text-green-500">Brasil</span> para quem quer entrar em tecnologia sem enrolação
            </motion.p>

            <ul className="list-disc pl-6 space-y-4 text-lg lg:text-xl">
                {listItems.map((item, index) => (
                    <motion.li
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="bg-[#089708] bg-opacity-80 p-3 rounded-lg">
                            {item.icon}
                        </div>
                        <span>{item.text}</span>
                    </motion.li>
                ))}
            </ul>

            <div className="space-x-10">
                <Button text="Quero começar agora" onClick={handleStartNow} />
                <Button text="Ver o que vou aprender" onClick={handleLearnMore} />
            </div>
        </div>
    )
}

export default LeftColumn