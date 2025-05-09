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
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h | Feriados 8h às 22h',
  },
  {
    foto: 'bauru-castelo.png',
    localizacao: 'Bauru Castelo',
    numero: '32',
    endereco: 'Avenida Castelo Branco, 9-55',
    cep: '17052000',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'bauru-shopping.png',
    localizacao: 'Boulevard Shopping Bauru',
    numero: '42',
    endereco: 'Rua General Marcondes Salgado, 11',
    cep: '17013113',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Seg. a Sábado: 10h às 22h - 13/12 a 23/12: 10h às 23h | Domingos: 12h às 20h | 24/12: 10h às 17h | 31/12: 10h às 16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'botucatu.png',
    localizacao: 'Botucatu',
    numero: '41',
    endereco: 'Avenida Professor José Pedretti Neto, 375',
    cep: '18606125',
    cidade: 'Botucatu',
    estado: 'SP',
    horario: 'Seg a Sáb.: 9h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 9h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-guanabara.png',
    localizacao: 'Campinas - Guanabara',
    numero: '06',
    endereco: 'Av. Barão de Itapura, 2142',
    cep: '13073300',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 7h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-nova-campinas.png',
    localizacao: 'Campinas - Nova Campinas',
    numero: '08',
    endereco: 'Av. Dr. Moraes Sales, 2641',
    cep: '13092111',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 7h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-shopping.png',
    localizacao: 'Campinas Shopping',
    numero: '27',
    endereco: 'Rua Jacy Teixeira de Camargo, 940 Piso Térreo ao lado do Starbucks',
    cep: '13050913',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 9h às 22h | Domingos: 11h às 20h | 24/12: 9h às 18h | 31/12: 10h às 16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-amoreiras.png',
    localizacao: 'Campinas Amoreiras',
    numero: '33',
    endereco: 'Avenida das Amoreiras, 1569',
    cep: '13031435',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 7h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-bandeiras.png',
    localizacao: 'Campinas - Shopping Pq das Bandeiras',
    numero: '27',
    endereco: 'Av. John Boyd Dunlop, 3900 Loja 3100 - Piso L3 - Acesso C',
    cep: '13060905',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg. a Sábado: 10h às 22h - 16/12 a 21/12: 10h às 23h - 23/12: 10h às 00h | Domingos: 12h às 20h - 22/12: 10 às 22h | 24/12: 9h às 18h | 31/12: 10h às 15h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-dompedro.png',
    localizacao: 'Campinas Parque Dom Pedro',
    numero: '39',
    endereco: 'Avenida Guilherme Campos, 500 Entrada Pedras',
    cep: '13087901',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 9h às 22h 14/12 a 23/12: 9h às 23h | Domingos: 11h às 20h | 24/12: 9h às 17h | 31/12: 9h às 14h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'capivari.png',
    localizacao: 'Capivari',
    numero: '10',
    endereco: 'Avenida Pio XII, 979 Porto Alegre',
    cep: '13360000',
    cidade: 'Capivari',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'cosmopolis.png',
    localizacao: 'Cosmópolis',
    numero: '16',
    endereco: 'Av. Estér, 19',
    cep: '13150029',
    cidade: 'Cosmópolis',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'franca.png',
    localizacao: 'Franca',
    numero: '43',
    endereco: 'Avenida Brasil, 600',
    cep: '13150029',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'franca-shopping.png',
    localizacao: 'Franca Shopping',
    numero: '46',
    endereco: 'Rio Negro, 1.100 LOJA C1/C2',
    cep: '14406901',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg a Sáb.: 10h às 22h | Domingos: 10h às 22h | 24/12 e 31/12: 10h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'hortolandia.png',
    localizacao: 'Hortolândia',
    numero: '38',
    endereco: 'Av. da Emancipação, 347',
    cep: '13186231',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'indaiatuba.png',
    localizacao: 'Indaiatuba',
    numero: '09',
    endereco: 'Rua dos Indaiás, 795',
    cep: '13343495',
    cidade: 'Indaiatuba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itapetininga.png',
    localizacao: 'Itapetininga',
    numero: '26',
    endereco: 'Rua Prudente de Moraes, 910',
    cep: '13343495',
    cidade: 'Itapetininga',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h - 29/12: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itu.png',
    localizacao: 'Itu',
    numero: '07',
    endereco: 'Rua Floriano Peixoto, 802',
    cep: '13300005',
    cidade: 'Itu',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h - 29/12: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itu-shopping.png',
    localizacao: 'Itu - Plaza Shopping',
    numero: '28',
    endereco: 'Rua Doutor Ermelindo Maffei, 1199 Loja Térrea',
    cep: '13302231',
    cidade: 'Itu',
    estado: 'SP',
    horario: 'Seg. a Sábado: 10h às 22h - 14/12 e 19/12 a 21:12: 10h às 23h - 23/12: 9h às 23h | Domingos: 12h às 20h | 24/12: 9h às 18h | 31/12: 10h às 16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-matriz.png',
    localizacao: 'Jundiaí - Matriz',
    numero: '01',
    endereco: 'Rua dos Indaiás, 795',
    cep: '13343495',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-rui-barbosa.png',
    localizacao: 'Jundiaí - Praça Rui Barbosa',
    numero: '03',
    endereco: 'Rua Prudente de Moraes, 910',
    cep: '18200040',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h - 29/12: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-maxi.png',
    localizacao: 'Jundiaí - Maxi Shopping',
    numero: '05',
    endereco: 'Rua Floriano Peixoto, 802',
    cep: '13300005',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. a Sexta: 7h às 22h | Sábados: 8h às 18h | Domingos: 8h às 16h - 22/12: 8h às 18h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-multi.png',
    localizacao: 'Jundiaí - Multi Moda Center',
    numero: '34',
    endereco: 'Rua Oswaldo Cruz, 232',
    cep: '13218010',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 9h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'leme.png',
    localizacao: 'Leme',
    numero: '40',
    endereco: 'Rua João Pessoa, 134',
    cep: '13610110',
    cidade: 'Leme',
    estado: 'SP',
    horario: 'Seg. a Sex.: 8h às 22h | Sábados: 8h às 20h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'lencois-paulista.png',
    localizacao: 'Lençóis Paulista',
    numero: '36',
    endereco: 'Avenida Nove de Julho, 336',
    cep: '18680120',
    cidade: 'Lençóis Paulista',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'limeira.png',
    localizacao: 'Limeira',
    numero: '15',
    endereco: 'Av. Campinas, 1112',
    cep: '13480290',
    cidade: 'Limeira',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'marilia.png',
    localizacao: 'Marília',
    numero: '37',
    endereco: 'Avenida Tiradentes, 1301',
    cep: '17519000',
    cidade: 'Marília',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'marilia.png',
    localizacao: 'Marília',
    numero: '37',
    endereco: 'Avenida Tiradentes, 1301',
    cep: '17519000',
    cidade: 'Marília',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'mogi-guacu.png',
    localizacao: 'Mogi Guaçu Mall',
    numero: '29',
    endereco: 'Avenida Padre Jaime, 1930 Loja Térrea',
    cep: '13844070',
    cidade: 'Mogi Guaçu',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'paulinia.png',
    localizacao: 'Paulínia',
    numero: '47',
    endereco: 'Avenida José Paulino, 2279',
    cep: '13140723',
    cidade: 'Paulínia',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'piracicaba.png',
    localizacao: 'Piracicaba',
    numero: '14',
    endereco: 'Av. 31 de Março, 1333',
    cep: '13424300',
    cidade: 'Piracicaba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'ribeirao-preto-amin.png',
    localizacao: 'Ribeirão Preto - Amin Calil',
    numero: '22',
    endereco: 'Rua Joaquim Nabuco, 584 Rotatória Amin Calil',
    cep: '14050030',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'ribeirao-preto-independencia.png',
    localizacao: 'Ribeirão Preto - Av. Independência',
    numero: '24',
    endereco: 'Avenida Independência, 1640',
    cep: '14025393',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'santa-barbara.png',
    localizacao: 'Santa Bárbara D’Óeste',
    numero: '13',
    endereco: 'Av. da Indústria, 902',
    cep: '13454200',
    cidade: 'Santa Bárbara D’Óeste',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sao-carlos.png',
    localizacao: 'São Carlos',
    numero: '19',
    endereco: 'Av. São Carlos, 750',
    cep: '13570660',
    cidade: 'São Carlos',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sertaozinho.png',
    localizacao: 'Sertãozinho',
    numero: '21',
    endereco: 'Av. Antonio Paschoal, 1310',
    cep: '14170500',
    cidade: 'Sertãozinho',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-simus.png',
    localizacao: 'Sorocaba - Simus',
    numero: '11',
    endereco: 'Av. Antonio Paschoal, 1310',
    cep: '14170500',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-iguatemi.png',
    localizacao: 'Sorocaba - Shopping Iguatemi Esplanada',
    numero: '17',
    endereco: 'Av. Profª Izoraida Marques Peres, 401',
    cep: '18110902',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sábado: 10h às 22h - 16/12 a 23/12: 10h às 23h | Domingos: 12h às 20h | 24/12 e 31/12: 10h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-zona-norte.png',
    localizacao: 'Sorocaba - Zona Norte',
    numero: '23',
    endereco: 'Av. Profª Izoraida Marques Peres, 401',
    cep: '18110902',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sábado: 10h às 22h - 16/12 a 23/12: 10h às 23h | Domingos: 12h às 20h | 24/12 e 31/12: 10h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sumare.png',
    localizacao: 'Sumaré',
    numero: '25',
    endereco: 'Avenida Rebouças, 485',
    cep: '13170023',
    cidade: 'Sumaré',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'valinhos.png',
    localizacao: 'Valinhos',
    numero: '20',
    endereco: 'Av. Gessy Lever, 94',
    cep: '13272000',
    cidade: 'Valinhos',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h | Domingos: 8h às 20h | 24/12 e 31/12: 7h às 18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'varzea-paulista.png',
    localizacao: 'Várzea Paulista',
    numero: '02',
    endereco: 'Av. Fernão Dias Paes Leme, 2347 Vila Cristo',
    cep: '13220005',
    cidade: 'Várzea Paulista',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24/12 e 31/12: 8h às 18h | 25/12 e 01/01: Fechado',
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
              <div className={styles.textosLoja}>
                <p>{loja.endereco}</p>
                <p>CEP: {loja.cep} - {loja.cidade}/{loja.estado}</p>
                <p><strong>Funcionamento: </strong>{loja.horario}</p>
              </div>
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