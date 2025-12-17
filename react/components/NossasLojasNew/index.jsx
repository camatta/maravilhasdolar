import React, { useMemo, useState } from 'react'
import styles from './nossaslojasnew.css'

// Importa todas as imagens da pasta automaticamente
const imageContext = require.context('../../../assets/lojas', false, /\.(png|jpe?g|svg)$/)

// Cria um objeto { "arquivo.png": "url-resolvida" }
const images = imageContext.keys().reduce((acc, path) => {
  const imageName = path.replace('./', '')
  const mod = imageContext(path)
  acc[imageName] = mod && mod.default ? mod.default : mod
  return acc
}, {})


const toAbsoluteUrl = (src) => {
  if (!src) return ''
  if (/^https?:\/\//i.test(src)) return src

  const runtime = typeof window !== 'undefined' ? window.__RUNTIME__ : null
  const publicEndpoint = runtime && runtime.publicEndpoint ? runtime.publicEndpoint : ''

  if (src.startsWith('/') && publicEndpoint) return `${publicEndpoint}${src}`
  return src
}


const getImageSrc = (foto) => {
  if (!foto) return ''
  if (/^https?:\/\//i.test(foto) || (typeof foto === 'string' && foto.startsWith('/'))) return foto
  return images[foto] || ''
}

const lojasData = [
  {
    foto: 'americana.png',
    localizacao: 'Americana',
    numero: '12',
    endereco: 'Av. Afonso Pansan, 747 - Vila Bertine',
    cep: '13473620',
    cidade: 'Americana',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h 21/12: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'amparo.png',
    localizacao: 'Amparo',
    numero: '44',
    endereco: 'Avenida Dr. Carlos Burgos, 2900 - Amparo',
    cep: '13901350',
    cidade: 'Amparo',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 7h às 21h | Domingos: 9h às 18h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araraquara.png',
    localizacao: 'Araraquara',
    numero: '18',
    endereco: 'Av. Padre Francisco S. Colturato, 568 (Avenida 36)',
    cep: '14802000',
    cidade: 'Araraquara',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h-20h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araraquara2.png',
    localizacao: 'Araraquara',
    numero: '30',
    endereco: 'Rua 9 de Julho, 345 - Centro | Rua 2',
    cep: '14801295',
    cidade: 'Araraquara',
    estado: 'SP',
    horario: 'Seg a Sáb.: 01 a 04/12: 8h às 18h 05 a 23/12: 8h às 22h | Domingos: 07 e 21/12: 9h às 15h 14 e 28/12: Fechado | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'araras.png',
    localizacao: 'Araras',
    numero: '45',
    endereco: 'Avenida Dona Renata, 3474 - Araras SP',
    cep: '13600001',
    cidade: 'Araras',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'bauru-duque.png',
    localizacao: 'Bauru Duque',
    numero: '31',
    endereco: 'Avenida Duque de Caxias, 21-21 - Vila Cardia',
    cep: '17011066',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 22h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'bauru-castelo.png',
    localizacao: 'Bauru Castelo',
    numero: '32',
    endereco: 'Avenida Castelo Branco 9-55 - Vila Independência',
    cep: '17052000',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 22h 28/12: 8h20h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'bauru-shopping.png',
    localizacao: 'Boulevard Shopping Bauru',
    numero: '42',
    endereco: 'Rua General Marcondes Salgado, 11-39 - Chácara das Flores | Boulevard Shopping',
    cep: '17013113',
    cidade: 'Bauru',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 10h-22h 15 a 23/12: 10h-23h 26 a 30/12: 10h-22h | Domingos: 10h-22h | 24/12: 10h-17h| 31/12: 10h-16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'botucatu.png',
    localizacao: 'Botucatu',
    numero: '41',
    endereco: 'Avenida Professor José Pedretti Neto, 375 - Vila Assumpção',
    cep: '18606125',
    cidade: 'Botucatu',
    estado: 'SP',
    horario: 'Seg a Sáb.: 9h às 22h | Domingos: 8h às 20h| 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-guanabara.png',
    localizacao: 'Campinas - Guanabara',
    numero: '06',
    endereco: 'Avenida Barão de Itapura, 2142 - Guanabara',
    cep: '13073300',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 23h 26 a 30/12: 7h-22h | Domingos: 7 e 28/12: 7h-21h 14 e 21/12: 7h-22h | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-nova-campinas.png',
    localizacao: 'Campinas - Nova Campinas',
    numero: '08',
    endereco: 'Av. Dr. Moraes Sales, 2641 - Nova Campinas',
    cep: '13092111',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 23h 26 a 30/12: 7h-22h | Domingos: 7 e 28/12: 7h-21h 14 e 21/12: 7h-22h | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-shopping.png',
    localizacao: 'Campinas Shopping',
    numero: '27',
    endereco: 'Rua Jacy Teixeira Camargo, 940 - Jardim do Lago | Campinas Shopping',
    cep: '13050913',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg. a Qua.: 8h às 22h | Qui. a Sáb.: 8h às 23h | 23/12: 9h às 23h | Domingos: 07 e 14/12: 11h às 20h 21/12: 7h às 22h 28/12: 11h às 20h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-amoreiras.png',
    localizacao: 'Campinas Amoreiras',
    numero: '33',
    endereco: 'Avenida das Amoreiras, 1569 - Parque Industrial',
    cep: '13031435',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 23h 26 a 30/12: 7h-22h | Domingos: 7 e 28/12: 7h-21h 14 e 21/12: 7h-22h | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'campinas-dompedro.png',
    localizacao: 'Campinas Parque Dom Pedro',
    numero: '39',
    endereco: 'Avenida Guilherme Campos, 500 - Jardim Santa Genebra | Parque Dom Pedro',
    cep: '13087901',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 7h-22h 15 a 23/12: 7h-23h 26 a 30/12: 8h-22h | Domingos: 7 e 28/12: 11h-20h 14 e 21/12: 10h-23h | 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'mdl_10_capivari.jpg',
    localizacao: 'Capivari',
    numero: '10',
    endereco: 'Avenida Pio XII, 979 - Porto Alegre',
    cep: '13360000',
    cidade: 'Capivari',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h 21/12: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'cosmopolis.png',
    localizacao: 'Cosmópolis',
    numero: '16',
    endereco: 'Avenida Ester, 19 - Centro',
    cep: '13150029',
    cidade: 'Cosmópolis',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h 26 a 30/12: 8h-20h | Domingos: 9h às 18h 21/12: 9h-20h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'franca.png',
    localizacao: 'Franca',
    numero: '43',
    endereco: 'Avenida Brasil, 600 - Franca',
    cep: '13150029',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'franca-shopping.png',
    localizacao: 'Franca Shopping',
    numero: '46',
    endereco: 'Avenida Rio Negro, 1100 - Jardim Roselandia | Franca Shopping',
    cep: '14406901',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg a Sáb.: 10h às 22h | Domingos: 10h às 22h| 24 e 31/12: 10h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'hortolandia.png',
    localizacao: 'Hortolândia',
    numero: '38',
    endereco: 'Avenida da Emancipação, 347 - Jardim do Bosque',
    cep: '13186231',
    cidade: 'Franca',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h 21/12: 8h22h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'indaiatuba.png',
    localizacao: 'Indaiatuba',
    numero: '09',
    endereco: 'Rua dos Indaiás, 795 - Vila Brizzola',
    cep: '13343495',
    cidade: 'Indaiatuba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 7h-22h 20 a 23/12: 7h-23h 26 a 30/12: 7h-22h | Domingos: 7h-22h 28/12: 8h-20h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itapetininga.png',
    localizacao: 'Itapetininga',
    numero: '26',
    endereco: 'Rua Prudente de Moraes, 910 - Centro',
    cep: '13343495',
    cidade: 'Itapetininga',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 8h-22h 20 a 23/12: 7h-23h 26 a 30/12: 8h-22h 20/12: 8h-23h| Domingos: 7, 14 e 21/12: 8h-22h 28/12: 8h-20h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itu.png',
    localizacao: 'Itu',
    numero: '07',
    endereco: 'Rua Floriano Peixoto, 802/810 - Centro',
    cep: '13300005',
    cidade: 'Itu',
    estado: 'SP',
    horario: 'Seg. a Sexta: 01 a 12/12: 7h-21h 15 a 23/12: 7h-22h 26 a 30/12: 8h-19h| Sábados: 06/12: 8h-18 13/12: 7h-18h 20/12: 7h-19h 27/12: 8h-17h | Domingos: 7 e 14/12: 8h-17h  21/12: 8h-19h 28/12: Fechado | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'itu-shopping.png',
    localizacao: 'Itu - Plaza Shopping',
    numero: '28',
    endereco: 'Avenida Doutor Ermelindo Maffei, 1199 - Bairro São Luiz | Plaza Shopping Itu',
    cep: '13302231',
    cidade: 'Itu',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 10h-22h 20 a 23/12: 10h-23h 26 a 30/12: 10h-22h | Domingos: 11h-20h | 24/12: 10h-18h | 31/12: 10h-16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-matriz.png',
    localizacao: 'Jundiaí - Matriz',
    numero: '01',
    endereco: 'Rua Barão de Jundiaí, 1009',
    cep: '13343495',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. à Sex.: 01 a 23/12: 8h às 22h 26 a 30/12: 8h-18h | Sábados: 8h às 18h | Domingos: 9h-18h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja03novo.jpg',
    localizacao: 'Jundiaí - Praça Rui Barbosa',
    numero: '03',
    endereco: 'Rua Barão de Jundiaí, 464 - Centro',
    cep: '18200040',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-maxi.png',
    localizacao: 'Jundiaí - Maxi Shopping',
    numero: '05',
    endereco: 'Avenida Antônio Frederico Ozanan, 6000 - Vila Rio Branco | Maxi Shopping',
    cep: '13300005',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 10h-22h 15 a 23/12: 10h-23h 26 a 30/12: 10h-22h | Domingos: 07/12: 12h-22h 14 e 21/12: 10h-22h 28/12: 12h-20h | 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-multi.png',
    localizacao: 'Jundiaí - Multi Moda Center',
    numero: '34',
    endereco: 'Av. Antônio Frederico Ozanan, 3200 - Vila Rio Branco | Multi Moda Center',
    cep: '13218010',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h 21/12: 8h-22h | 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'leme.png',
    localizacao: 'Leme',
    numero: '40',
    endereco: 'Rua João Pessoa, 134 - Centro',
    cep: '13610110',
    cidade: 'Leme',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-campinas-bandeiras.jpg',
    localizacao: 'Campinas Shopping Pq. das Bandeiras',
    numero: '35',
    endereco: 'Avenida John Boyd Dunlop, 3900 - Jardim Ipaussurama | Parque das Bandeiras',
    cep: '13060905',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg. a Qua.: 10h às 22h | Qui. a Sáb.: 10h às 23h | 23/12: 10h às 00h | Domingos: 07/12: 12h às 20h 14/12: 11h às 20h 21/12: 10h às 22h 28/12: 12h às 20h| 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'lencois-paulista.png',
    localizacao: 'Lençóis Paulista',
    numero: '36',
    endereco: 'Avenida Nove de Julho, 3-36 - Centro',
    cep: '18680120',
    cidade: 'Lençóis Paulista',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h 21/12: 8h22h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'limeira.png',
    localizacao: 'Limeira',
    numero: '15',
    endereco: 'Av. Campinas, 1112 - Vila Cidade Jardim',
    cep: '13480290',
    cidade: 'Limeira',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h-20h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'marilia.png',
    localizacao: 'Marília',
    numero: '37',
    endereco: 'Avenida Tiradentes, 1301 - Fragata',
    cep: '17519000',
    cidade: 'Marília',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'mogi-guacu.png',
    localizacao: 'Mogi Guaçu Mall',
    numero: '29',
    endereco: 'Avenida Padre Jaime, 1930 - Vila Ricci',
    cep: '13844070',
    cidade: 'Mogi Guaçu',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 7h-22h 15 a 23/12: 7h-23h 26 a 30/12: 8h-22h | Domingos: 9h-18h | 24/12: 7h-18h| 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'paulinia.png',
    localizacao: 'Paulínia',
    numero: '47',
    endereco: 'Avenida José Paulino, 2279 - Morumbi',
    cep: '13140723',
    cidade: 'Paulínia',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 7h-22h 15 a 23/12: 7h-23h 26 a 30/12: 8h-22h | Domingos: 8h-20h 21/12: 8h-22h | 24/12: 7h-18h| 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'piracicaba.png',
    localizacao: 'Piracicaba',
    numero: '14',
    endereco: 'Av. 31 de Março, 1333 - Paulicéia',
    cep: '13424300',
    cidade: 'Piracicaba',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h 21/12: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'ribeirao-preto-amin.png',
    localizacao: 'Ribeirão Preto - Amin Calil',
    numero: '22',
    endereco: 'Rua Joaquim Nabuco, 584 - Vila Tibério | Rotatória Amin Calil',
    cep: '14050030',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'ribeirao-preto-independencia.png',
    localizacao: 'Ribeirão Preto - Av. Independência',
    numero: '24',
    endereco: 'Avenida Independência, 1640 - Jardim Sumaré',
    cep: '14025393',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    horario: 'Fechada temporariamente',
  },
  {
    foto: 'santa-barbara.png',
    localizacao: 'Santa Bárbara D’Óeste',
    numero: '13',
    endereco: 'Av. da Indústria, 902 - Jardim Pérola',
    cep: '13454200',
    cidade: 'Santa Bárbara D’Óeste',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 20h 21/12: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sao-carlos.png',
    localizacao: 'São Carlos',
    numero: '19',
    endereco: 'Av. São Carlos, 750 - Centro',
    cep: '13570660',
    cidade: 'São Carlos',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h-20h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sertaozinho.png',
    localizacao: 'Sertãozinho',
    numero: '21',
    endereco: 'Av. Antônio Paschoal, 1310 - Jardim Sumaré',
    cep: '14170500',
    cidade: 'Sertãozinho',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-simus.png',
    localizacao: 'Sorocaba - Simus',
    numero: '11',
    endereco: 'Avenida Doutor Américo Figueiredo, 505 - Jardim Simus',
    cep: '14170500',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 8h-22h 20 a 23/12: 7h-23h 26 a 30/12: 8h-22h 20/12: 8h-23h| Domingos: 7, 14 e 21/12: 8h-22h 28/12: 8h-20h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-iguatemi.png',
    localizacao: 'Sorocaba - Shopping Iguatemi Esplanada',
    numero: '17',
    endereco: 'Av. Profª Izoraida Marques Peres, 401 - Parque Campolim | Iguatemi Esplanada',
    cep: '18110902',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 8h-22h 20 a 23/12: 10h-23h 26 a 30/12: 10h-22h | Domingos: 7 e 14/12: 10h-20h 21/12: 10h-22h 28/12: 11h-20h | 24/12: 10h-18h | 31/12: 10h-16h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sorocaba-zona-norte.png',
    localizacao: 'Sorocaba - Zona Norte',
    numero: '23',
    endereco: 'Avenida Ipanema, 4000 - Novo Horizonte',
    cep: '18110902',
    cidade: 'Sorocaba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 19/12: 8h-22h 20 a 23/12: 7h-23h 26 a 30/12: 8h-22h 20/12: 8h-23h| Domingos: 7, 14 e 21/12: 8h-22h 28/12: 8h-20h | 24/12: 7h-18h | 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'sumare.png',
    localizacao: 'Sumaré',
    numero: '25',
    endereco: 'Avenida Rebouças, 485 - Centro',
    cep: '13170023',
    cidade: 'Sumaré',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h 21/12: 8h-22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'valinhos.png',
    localizacao: 'Valinhos',
    numero: '20',
    endereco: 'Av. Gessy Lever, 94 - Lenheiro',
    cep: '13272000',
    cidade: 'Valinhos',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 22h 22 e 23/12: 7h-23h | Domingos: 7h às 18h 21/12: 7h-20h | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja02novo.jpg',
    localizacao: 'Várzea Paulista',
    numero: '02',
    endereco: 'Avenida Fernão Dias Paes Leme, 2347 - Vila Santa Terezinha',
    cep: '13220005',
    cidade: 'Várzea Paulista',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-ribeiraopreto48.jpg',
    localizacao: 'Ribeirão Preto - Av. Saudade',
    numero: '48',
    endereco: 'Avenida da Saudade, 1227 - Campos Elíseos',
    cep: '14085000',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 8h às 22h | 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-botucatu2.jpg',
    localizacao: 'Botucatu II',
    numero: '49',
    endereco: 'Rua Major Matheus, 690 - Vila dos Lavradores',
    cep: '18609083',
    cidade: 'Botucatu',
    estado: 'SP',
    horario: 'Seg a Sáb.: 9h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h| 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-campinas-saudade.jpg',
    localizacao: 'Campinas - Av. Saudade',
    numero: '50',
    endereco: 'Av. da Saudade, 1214 - Pte. Preta, Campinas - SP, 13041-670',
    cep: '13041670',
    cidade: 'Campinas',
    estado: 'SP',
    horario: 'Seg a Sáb.: 7h às 23h 26 a 30/12: 7h-22h | Domingos: 7 e 28/12: 7h-21h 14 e 21/12: 7h-22h | 24 e 31/12: 7h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-itatiba.jpg',
    localizacao: 'Itatiba',
    numero: '51',
    endereco: 'Avenida Maria de Lourdes Abreu, 95 Anexo Av. Independência',
    cep: '13250253',
    cidade: 'Itatiba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 7h-22h 15 a 23/12: 7h-23h 26 a 30/12: 7h-22h | Domingos: 9h-21h 21/12: 9h-22h | 24/12: 7h-18h| 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-jau.jpg',
    localizacao: 'Jaú',
    numero: '52',
    endereco: 'Avenida Netinho Prado, 40 - Jardim Netinho Prado',
    cep: '17208263',
    cidade: 'Jaú',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h 21/12: 8h22h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-pirassununga.jpg',
    localizacao: 'Pirassununga',
    numero: '53',
    endereco: 'Av Antonio Joaquim Mendes, 451 - Vila Industrial',
    cep: '13631110',
    cidade: 'Pirassununga',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'loja-aracatuba.jpg',
    localizacao: 'Araçatuba – Shopping Praça Nova',
    numero: '54',
    endereco: 'Av. Carlos Pereira da Silva, 600 - Guanabara',
    cep: '16026035',
    cidade: 'Araçatuba',
    estado: 'SP',
    horario: 'Seg. a Sáb.: 01 a 13/12: 10h-22h 15 a 23/12: 10h-23h 26 a 30/12: 10h-22h | Domingos: 11h-22h | 24 e 31/12: 10h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'jundiai-loja.jpg',
    localizacao: 'Jundiaí',
    numero: '55',
    endereco: 'Avenida Antônio Pincinato, 78',
    cep: '13211771',
    cidade: 'Jundiaí',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h | Domingos: 9h às 20h | 24 e 31/12: 9h-18h | 25/12 e 01/01: Fechado',
  },
  {
    foto: 'catanduva-novo.jpg',
    localizacao: 'Catanduva',
    numero: '56',
    endereco: 'Avenida Comendador Antônio Stocco, 525',
    cep: '15800610',
    cidade: 'Catanduva',
    estado: 'SP',
    horario: 'Seg a Sáb.: 8h às 22h 22 e 23/12: 8h-23h | Domingos: 8h às 20h 21/12: 8h22h| 24 e 31/12: 8h-18h | 25/12 e 01/01: Fechado',
  },

  // Adicionar mais lojas conforme necessário
];

const NossasLojasNew = ({ lojas = lojasData }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Não muta o array vindo por props (sort altera o array original)
  const sortedLojas = useMemo(() => {
    return [...lojas].sort((a, b) => (a.localizacao || '').localeCompare(b.localizacao || ''))
  }, [lojas])

  const filteredLojas = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    if (!term) return sortedLojas
    return sortedLojas.filter(
      (loja) => loja.localizacao && loja.localizacao.toLowerCase().includes(term)
    )
  }, [sortedLojas, searchTerm])

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

      {searchTerm && <p className={styles.searchTerm}>Resultados para: "{searchTerm}"</p>}

      <div className={styles.lojasContainer}>
        {filteredLojas.map((loja, index) => {
          const src = getImageSrc(loja.foto)

          return (
            <div key={index} className={styles.lojasBloco}>
              <div className={styles.blocoColunaEsquerda}>
                {src ? (
                  <img src={src} alt={`Foto da loja em ${loja.localizacao}`} />
                ) : (
                  <div style={{ padding: 12, fontSize: 12 }}>
                    Imagem não encontrada: {String(loja.foto)}
                  </div>
                )}
              </div>

              <div className={styles.blocoColunaDireita}>
                <div className={styles.nomeNumeroLoja}>
                  <p className={styles.nomeLoja}>
                    <strong>{loja.localizacao}</strong>
                  </p>
                  <p className={styles.numeroLoja}>Loja {loja.numero}</p>
                </div>

                <div className={styles.textosLoja}>
                  <p>{loja.endereco}</p>
                  <p>
                    CEP: {loja.cep} - {loja.cidade}/{loja.estado}
                  </p>
                  <p>
                    <strong>Funcionamento: </strong>
                    {loja.horario}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Default do schema já com URL absoluta (Admin preview)
const lojasDefault = lojasData.map((loja) => ({
  __editorItemTitle: `Loja ${loja.numero} - ${loja.localizacao}`,
  foto: toAbsoluteUrl(images[loja.foto] || loja.foto),
  localizacao: loja.localizacao,
  numero: loja.numero,
  endereco: loja.endereco,
  cep: loja.cep,
  cidade: loja.cidade,
  estado: loja.estado,
  horario: loja.horario,
}))

NossasLojasNew.schema = {
  title: 'Nossas Lojas',
  type: 'object',
  properties: {
    lojas: {
      type: 'array',
      title: 'Lojas',
      default: lojasDefault,
      items: {
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Título no editor',
            type: 'string',
            default: 'Loja',
            widget: { 'ui:widget': 'hidden' },
          },
          foto: {
            type: 'string',
            title: 'Foto da Loja',
            description: 'URL da imagem da loja',
            widget: { 'ui:widget': 'image-uploader' },
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
}

export default NossasLojasNew