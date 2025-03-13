import React, { useState } from 'react';
import styles from './nossaslojas.css';

// Usando `require.context` para importar todas as imagens automaticamente
const imageContext = require.context('../../assets/lojas', false, /\.(png|jpe?g|svg)$/);

// Função para criar um objeto de imagens com chave como o nome do arquivo
const images = imageContext.keys().reduce((images, path) => {
  const imageName = path.replace('./', '');
  images[imageName] = imageContext(path);
  return images;
}, {});

const lojasData = [
  {
    foto: 'americana.png',
    localizacao: 'Americana',
    numero: '12',
    endereco: 'Av. Afonso Pansan, 747',
    cep: '13473620',
    cidade: 'Americana',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'amparo.png',
    localizacao: 'Amparo',
    numero: '44',
    endereco: 'Avenida Doutor Carlos Burgos, 2900',
    cep: '13901350',
    cidade: 'Amparo',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 18h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araraquara.png',
    localizacao: 'Araraquara',
    numero: '18',
    endereco: 'Av. Padre Francisco S. Colturato, 568 (Avenida 36)',
    cep: '14802000',
    cidade: 'Araraquara',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araraquara2.png',
    localizacao: 'Araraquara',
    numero: '30',
    endereco: 'Rua 9 de Julho (Rua 2), 345',
    cep: '14801295',
    cidade: 'Araraquara',
    estado: 'SP',
    horario: 'Seg a Sex.: 8h às 18h - 06/12 a 23/12: 8h às 22h | Sábados: 8h às 17h | Domingos 01/12 e 15/12: Fechado - 08/12 e 22/12: 8h às 16h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araras.png',
    localizacao: 'Araras',
    numero: '45',
    endereco: 'Avenida Dona Renata, 3474',
    cep: '13600001',
    cidade: 'Araras',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'bauru-duque.png',
    localizacao: 'Bauru Duque',
    numero: '31',
    endereco: 'Avenida Duque de Caxias, 21-21',
    cep: '17011066',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Funcionamento: Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h | Feriados 8h às 22h',
  },
  // Adicionar mais lojas conforme necessário
];

const NossasLojas = ({ lojas = lojasData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Ordena as lojas pela localizacao antes de aplicar o filtro
  const sortedLojas = lojas.sort((a, b) => a.localizacao.localeCompare(b.localizacao));

  // Função de filtro baseada na localizacao
  const filteredLojas = sortedLojas.filter(loja =>
    loja.localizacao && loja.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.wrapperTituloSearch}>
        <div className={styles.nomePagina}>
          <h1>Nossas Lojas</h1>
        </div>
        <div className={styles.inputSearch}>
          <input
            type="text"
            placeholder="Procure pelo nome da cidade"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Se houver texto no input, exibe a mensagem com o texto digitado */}
      {searchTerm && (
        <p>Resultados para: "{searchTerm}"</p>
      )}

      <div className={styles.lojasContainer}>
        {filteredLojas.map((loja, index) => (
          <div key={index} className={styles.lojasBloco}>
            <div className={styles.blocoColunaEsquerda}>
              <img src={images[loja.foto]} alt={`Foto da loja em ${loja.localizacao}`} />
            </div>
            <div className={styles.blocoColunaDireita}>
              <div className={styles.nomeNumeroLoja}>
                <p className={styles.nomeLoja}><strong>{loja.localizacao}</strong></p>
                <p className={styles.numeroLoja}>Loja {loja.numero}</p>
              </div>
              <p>{loja.endereco}</p>
              <p>CEP: {loja.cep} - {loja.cidade}/{loja.estado}</p>
              <p><strong>Funcionamento:</strong>{loja.horario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dinamicamente cria o conteúdo default para o esquema JSON
const lojasDefault = lojasData.map(loja => ({
  foto: loja.foto,
  localizacao: loja.localizacao,
  numero: loja.numero,
  endereco: loja.endereco,
  cep: loja.cep,
  cidade: loja.cidade,
  estado: loja.estado,
  horario: loja.horario,
}));

// Definição do esquema para tornar os dados editáveis via painel do site
NossasLojas.schema = {
  title: 'Nossas Lojas',
  type: 'object',
  properties: {
    lojas: {
      type: 'array',
      title: 'Lojas',
      default: lojasDefault,  // Usa lojasData para preencher o default dinamicamente
      items: {
        type: 'object',
        properties: {
            __editorItemTitle: {
                default: 'Loja',
                title: 'Nome da Loja',
                type: 'string'
             },
          foto: {
            type: 'string',
            title: 'Foto da Loja',
            description: 'URL da imagem da loja',
            widget: {"ui:widget": "image-uploader"}
          },
          localizacao: {
            type: 'string',
            title: 'Localização',
            description: 'Nome da cidade onde a loja está localizada',
          },
          numero: {
            type: 'string',
            title: 'Número da Loja',
            description: 'Número de identificação da loja',
          },
          endereco: {
            type: 'string',
            title: 'Endereço',
            description: 'Endereço completo da loja',
          },
          cep: {
            type: 'string',
            title: 'CEP',
            description: 'CEP completo da loja',
          },
          cidade: {
            type: 'string',
            title: 'Cidade',
            description: 'Cidade da loja',
          },
          estado: {
            type: 'string',
            title: 'Estado',
            description: 'Estado completo da loja',
          },
          horario: {
            type: 'string',
            title: 'Horário',
            description: 'Horário de funcionamento da loja',
          },
        },
      },
    },
  },
};

export default NossasLojas;