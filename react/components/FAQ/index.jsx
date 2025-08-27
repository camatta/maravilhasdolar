import React, { useState } from 'react';
import styles from './faq.css';

const faqData = [
    { 
        question: "Quais as formas de pagamento e parcelamento de compras na maravilhasdolar.com?",
        answer: "As formas de pagamento disponíveis na maravilhasdolar.com são Cartão de crédito, Cartão Maravilhas do Lar e PIX. O parcelamento pode ser feito via pagamento com cartão de crédito em até 10x, ou pelo cartão Maravilhas do Lar em até 15x fixas. O valor mínimo das parcelas e a quantidade de parcelas sem juros podem variar de acordo com as campanhas ativas. Confira sempre nossa Política de Compra.",
        category: "Online" 
      },
      { 
        question: "Posso alterar a forma de pagamento de um pedido realizado?",
        answer: "Não. Após a finalização de um pedido não é possível alterar a forma de pagamento. Um novo pedido deve ser realizado.",
        category: "Online" 
      },
      { 
        question: "Posso efetuar pagamento com 2 cartões de crédito?",
        answer: "Não é possível realizar pagamento com 2 cartões de crédito.",
        category: "Online" 
      },
      { 
        question: "É permitido compra de Pessoa Jurídica?",
        answer: "Temos um canal exclusivo para Pessoa Jurídica através do link https://www.maravilhasdolar.com/empresas. Porém só entregamos os pedidos para o Estado de SP. Para compra faturada em Loja Física, você deve entrar em contato através do e-mail: vendas@maravilhasdolar.com.br ou através do WhatsApp (11) 93236-1811.",
        category: "Online" 
      },
      { 
        question: "Como acompanhar o andamento do meu pedido?",
        answer: "Para acompanhar o andamento do seu pedido, basta acessar sua conta com login e senha em Minha Conta, em seguida clique em Meus Pedidos e em VER DETALHES do pedido. Ou acesse o link: https://www.maravilhasdolar.com/rastreio.",
        category: "Online" 
      },
      { 
        question: "Qual o prazo de aprovação do pedido?",
        answer: "Todas as compras efetuadas com cartão de crédito estarão sujeitas a análise de risco, para confirmação de dados no prazo máximo de 3 dias úteis. ATENÇÃO o prazo de entrega só é contado após a confirmação enviada pelo banco. Não aceitamos comprovante de pagamento para a liberação dos pedidos. Os pedidos realizados com PIX a aprovação é imediata.",
        category: "Online" 
      },
      { 
        question: "Quais canais de atendimento e horários?",
        answer: "Telefone 4000-1567 – Segunda a sábado das 8h às 18h, exceto em feriados. E-mail: sac@maravilhasdolar.com.br Chat – Segunda à quinta das 9h às 18h e Sexta das 9h às 17h.",
        category: "Online" 
      },
      { 
        question: "Esqueci de adicionar um produto no meu pedido. O que fazer?",
        answer: "Entre em contato imediatamente com a nossa equipe via e-mail sac@maravilhasdolar.com.br ou telefone (11) 4000-1567. O pedido deverá ser cancelado e você realizará um novo pedido, pois não é possível adicionar produtos após a finalização de um pedido.",
        category: "Online" 
      },
      { 
        question: "Não recebi todos os produtos do meu pedido.",
        answer: "Os pedidos podem ser entregues em entregas diferentes, portanto é normal não receber todos os produtos de uma vez. Se mesmo assim você receber todos os pacotes e está faltando produtos, favor entrar em contato por e-mail sac@maravilhasdolar.com.br que verificaremos o ocorrido.",
        category: "Online" 
      },
      { 
        question: "Posso comprar no site e retirar na loja física?",
        answer: "Sim! Na finalização da sua compra você pode escolher a opção de entrega Retirada na Loja. Ao selecionar essa opção, abrirá uma lista com as lojas para que você possa selecionar a loja para retirada do seu pedido.",
        category: "Online" 
      },
      { 
        question: "Qual o Prazo de Entrega para Retirada na Loja?",
        answer: "Após a aprovação de pagamento do seu pedido, a loja tem até 1 dia útil para separar o seu pedido e deixar prontinho para você retirar. Você receberá um e-mail quando estiver pronto.",
        category: "Online" 
      },
      { 
        question: "A loja física que quero retirar meu pedido está indisponível. O que significa?",
        answer: "Significa que um dos itens do seu carrinho não está disponível em estoque na loja selecionada. Por isso não será possível seguir com a loja selecionada. Escolha outra forma de entrega, ou entre em contato com a nossa equipe de atendimento.",
        category: "Online" 
      },
      { 
        question: "Como rastrear a entrega do meu pedido?",
        answer: "Os nossos prazos de entrega englobam Prazo de Separação + Prazo de Faturamento + Prazo de Transporte. Os prazos de entrega variam de acordo com cada região de entrega. No momento da sua compra, ao calcular o frete, o prazo de entrega é informado. Você pode conferir o prazo também após a finalização do pedido, em Meus Pedidos Atenção: o prazo começa a ser contado após a aprovação do pagamento!",
        category: "Online" 
      },
      { 
        question: "Qual o Prazo de Entrega do meu Pedido?",
        answer: "Para rastrear a entrega do seu pedido, acesse o link: https://www.maravilhasdolar.com/rastreio. Caso não tenha informações sobre seu pedido, é porque ainda não está com a transportadora e está no prazo de separação.",
        category: "Online" 
      },
      { 
        question: "Gostaria de comprar via boleto, é possível?",
        answer: "Por tempo indeterminado, não estamos aceitando Boleto como opção de pagamento. Experimente as vantagens de comprar em PIX.",
        category: "Online" 
      },

      {
        question: "Quero cancelar uma compra que ainda não foi aprovada, o que devo fazer?",
        answer: "Se a compra foi no PIX e você não realizou o pagamento, será cancelado automaticamente. Porém, se for com cartão ou PIX já pago, entre em contato pelos canais de atendimento: E-mail: sac@maravilhasdolar.com.br, chat ou telefone (11) 4000-1567.",
        category: "Trocas"
      },
      {
        question: "Como trocar ou devolver um produto?",
        answer: "Você tem até 7 dias corridos após a entrega para solicitar a troca ou devolução. Para isso, acesse sua conta em Meus Pedidos, clique em VER DETALHES e em 'Solicitar troca ou devolução'. Escolha o produto, informe o motivo e opte pelo estorno ou recebimento de outro item. Nossa equipe responderá em até 3 dias úteis e enviará um código de autorização de postagem nos Correios. O produto deve estar completo, sem sinais de mau uso, na embalagem original e em perfeito estado. A análise técnica será feita em até 7 dias úteis após o recebimento. Caso os requisitos não sejam atendidos, a devolução não será aceita e o item será enviado de volta sem restituição de valores.",
        category: "Trocas"
      },
      {
        question: "Recebi um produto quebrado. O que fazer?",
        answer: "Infelizmente, isso pode acontecer ☹. Envie fotos do item quebrado e da embalagem recebida para sac@maravilhasdolar.com.br. Após análise, providenciaremos o envio de um novo item ou realizaremos o estorno. Caso prefira a substituição, enviaremos um novo produto igual ao adquirido.",
        category: "Trocas"
      },

      {
        question: "Como funciona a Lista de Presentes?",
        answer: "A lista de presentes da Maravilhas do Lar é feita diretamente no site, permitindo que você escolha entre receber os presentes em créditos para usar no site ou receber os produtos escolhidos no seu endereço. A lista funciona 100% online, sem possibilidade de criação ou troca em lojas físicas. Após finalizada, não é possível alterar a forma de recebimento.",
        category: "Presentes"
      },
      {
        question: "Como criar uma Lista de Presentes?",
        answer: "Para criar sua lista de presentes, acesse https://www.maravilhasdolar.com/listas-de-presentes e escolha o tipo de lista desejado. Depois, adicione os produtos e compartilhe o link com seus amigos e familiares para que possam comprar.",
        category: "Presentes"
      },
      {
        question: "Meus convidados podem comprar nas Lojas Físicas?",
        answer: "Não, os convidados só terão acesso à sua lista diretamente pelo site, não sendo possível a compra na loja física.",
        category: "Presentes"
      },
      {
        question: "Compra no site com retirada na Loja Física. Como funciona?",
        answer: "Se um convidado escolher a opção de retirada na loja, ele será responsável por buscar o produto na loja selecionada e entregá-lo ao dono da lista. Ele também pode informar o anfitrião como contato para retirada e notificá-lo sobre a loja escolhida.",
        category: "Presentes"
      },
      {
        question: "Qual o prazo de troca da lista de presentes?",
        answer: "Caso tenha selecionado a opção de crédito, os vales-compras recebidos terão validade de 90 dias.",
        category: "Presentes"
      },
      {
        question: "Onde posso encontrar os termos de uso da lista de presentes?",
        answer: "Você pode acessar os termos de uso completos em: https://www.maravilhasdolar.com/conteudo/politicas-e-termos/termos-lista-de-presentes.",
        category: "Presentes"
      },

      {
        question: "Qual o horário de funcionamento das lojas?",
        answer: "Para conferir o horário de atendimento das nossas lojas acesse o link: https://www.maravilhasdolar.com/nossas-lojas",
        category: "Lojas"
      },
      {
        question: "Em qual cidade tem loja da Maravilhas do Lar?",
        answer: "A Maravilhas do Lar está presente em 25 cidades do interior de São Paulo com mais de 40 lojas. Para saber todos os endereços e horários de funcionamento acesse o link: https://www.maravilhasdolar.com/nossas-lojas",
        category: "Lojas"
      },
      {
        question: "Quais as formas de pagamento nas lojas?",
        answer: "Nas lojas físicas o pagamento pode ser realizado através do cartão de crédito ou débito, cartão Maravilhas do Lar, dinheiro e, também por Pix pelo QR Code.",
        category: "Lojas"
      },
      {
        question: "Posso levar meu pet nas lojas?",
        answer: "Seu pet é muito bem-vindo em nossas lojas, lembrando que durante as compras o seu amiguinho deve permanecer a todo momento no colo ou no carrinho.",
        category: "Lojas"
      },
      {
        question: "As lojas possuem acessibilidade para deficientes físicos?",
        answer: "As lojas Maravilhas do Lar contam com espaços acessíveis a pessoas com dificuldade de locomoção assim como a disponibilização de cadeiras de rodas em todas as unidades.",
        category: "Lojas"
      },
      {
        question: "Qual o telefone de contato para falar nas lojas?",
        answer: "Não temos um número para contato com as lojas, você pode utilizar o telefone (11) 4000 1567 do atendimento ao cliente e vamos te ajudar da melhor forma possível.",
        category: "Lojas"
      },
      {
        question: "Quero fazer uma reclamação",
        answer: "Sua reclamação pode ser encaminhada por e-mail no sac@maravilhasdolar.com.br vamos te ajudar a solucionar seu problema.",
        category: "Lojas"
      },
      {
        question: "Como trocar um produto comprado na loja física?",
        answer: "Você precisa ir até a loja onde foi efetuado a compra com o produto e o cupom fiscal em mãos em um prazo de 7 dias corridos. A troca deve ocorrer exclusivamente na mesma loja de compra.",
        category: "Lojas"
      },

      {
        question: "Sou pessoa jurídica e quero fazer uma compra. Qual o canal de vendas?",
        answer: "Temos um canal exclusivo para Pessoa Jurídica através do link https://www.maravilhasdolar.com/empresas. Porém só entregamos os pedidos para o Estado de SP. Para compra faturada em Loja Física, você deve entrar em contato através do e-mail: vendas@maravilhasdolar.com.br ou através do WhatsApp (11) 93236-1811",
        category: "Outros"
      },
      {
        question: "Quero trabalhar na Maravilhas do Lar. Como enviar meu currículo?",
        answer: "Envie o seu currículo para o e-mail recrutamento.lojas@maravilhasdolar.com.br, no assunto informe a Cidade de interesse. O currículo deve ser enviado como anexo.",
        category: "Outros"
      },
      {
        question: "Quero fazer parceria de Marketing",
        answer: "Para parcerias e oferecimento de mídia você pode encaminhar um e-mail para marketing@maravilhasdolar.com.br",
        category: "Outros"
      },
      {
        question: "Quero ser fornecedor de produtos",
        answer: "Cadastre sua empresa para ser fornecedor da Maravilhas do Lar, clicando aqui",
        category: "Outros"
      },
      {
        question: "Quero apresentar imóvel para abrir uma unidade Maravilhas do Lar",
        answer: "Você pode encaminhar um e-mail para sac@maravilhasdolar.com.br vamos direcionar para o responsável pela expansão da Maravilhas do Lar.",
        category: "Outros"
      },
      {
        question: "Quero abrir uma franquia da Maravilhas do Lar na minha cidade",
        answer: "A Maravilhas do Lar não é uma franquia. Somos uma rede de lojas de Utilidades para o lar.",
        category: "Outros"
      },
      {
        question: "Gostaria de um orçamento para venda Faturada (B2B)",
        answer: "Você pode encaminhar um e-mail para vendas@maravilhasdolar.com.br vamos te ajudar a efetuar sua compra com CNPJ.",
        category: "Outros"
      },
      {
        question: "A Maravilhas do Lar tem vale presente?",
        answer: "Não, temos disponível apenas a opção de lista de presente, com conversão em crédito, no site.",
        category: "Outros"
      },
      {
        question: "A Maravilhas do Lar vende por atacado?",
        answer: "Temos preços competitivos com relação ao mercado, por isso não atuamos com o fornecimento de produtos por atacado.",
        category: "Outros"
      },

      {
        question: "Como solicitar meu Cartão Maravilhas do Lar?",
        answer: "Solicite o seu Cartão Maravilhas do Lar em uma de nossas lojas ou pelo APP.\n\nLojas Físicas:\nBasta comparecer a uma de nossas lojas, no balcão de atendimento, com seus documentos pessoais (RG e CPF) e Celular, e não possuir restrições de crédito.\n\nObs1: O crédito está sujeito à aprovação.\nObs2: A idade mínima é de 18 anos.\n\nAplicativo:\nSolicite o seu cartão agora mesmo! Clique aqui, e baixe o app. https://play.google.com/store/apps/details?id=br.com.portaldocartao.cartaomaravilhasdolar",
        category: "Cartao"
      },
      {
        question: "Como desbloquear meu Cartão Maravilhas do Lar?",
        answer: "Para desbloquear o cartão, entre em contato com a central de Relacionamento Credsystem, nos telefones 4003-3900 para capitais e regiões metropolitanas ou 0800 729 3900 para demais localidades, somente para chamadas de telefone fixo, de segunda a sábado, das 8h às 22h, ou domingos e feriados das 9h às 20h. WhatsApp https://api.whatsapp.com/send?phone=551140033900 ou e-mail: atendimento@credsystem.com.br. Você pode também solicitar o desbloqueio na loja de emissão ou pelo site: https://www.portaldocartao.com.br/\n\nOs cartões emitidos nas lojas desbloqueiam nos caixas assim que efetuar a primeira compra.",
        category: "Cartao"
      },
      {
        question: "Em quantas vezes posso dividir minha compra com o Cartão Maravilhas do Lar?",
        answer: "Disponibilizamos o parcelamento de compras em até 10x* sem juros. Condições sujeitas a alteração e sem prévio aviso. Ou em até 15x* com juros.\n\n*Consulte tabela de informações do Cartão.",
        category: "Cartao"
      },
      {
        question: "Como tenho acesso a minha fatura e como posso pagar?",
        answer: "Referente às faturas mensais, a Credsystem não encaminha fatura física aos clientes. No portal www.portaldocartao.com.br/, acessando com CPF + data de nascimento, você pode aderir à fatura digital e recebê-la no celular (SMS) e/ou e-mail. Também disponibilizamos por WhatsApp através da Cléo 11 40033900, App Cartão Maravilhas do Lar ou em uma de nossas lojas. Os pagamentos podem ser realizados em qualquer agência bancária, internet banking, lotérica (quando houver boleto) ou em uma de nossas lojas (em dinheiro).",
        category: "Cartao"
      },
      {
        question: "Como solicitar cartão adicional?",
        answer: "Durante a solicitação do cartão (loja física ou App), o titular tem a possibilidade de incluir até 2 cartões adicionais. Após concluída a emissão, só é possível adicionar solicitando pela Central da Credsystem.\n\nObs1: As compras serão feitas por cartão digital, para o adicional não é gerado cartão físico.\nObs2: Os adicionais precisam ser maiores de 18 anos e passarão por análise de crédito.",
        category: "Cartao"
      },
      {
        question: "Como funciona a anuidade do meu Cartão Maravilhas do Lar?",
        answer: "A anuidade diferenciada (“AD”) é cobrada mensalmente, sempre que houver movimentação na conta do cliente, pela disponibilização e utilização do cartão na rede de estabelecimentos afiliados.\n\n(“AD”) R$ 5,99*\n\n**Será concedido o desconto de R$1,00 na Anuidade Diferenciada apenas aos clientes que efetuarem o pagamento em loja.",
        category: "Cartao"
      },
      {
        question: "Em quais lugares posso comprar com o meu cartão Maravilhas do Lar?",
        answer: "Você poderá utilizar o seu Cartão Maravilhas em qualquer uma de nossas lojas físicas ou em nosso e-commerce.",
        category: "Cartao"
      },
      {
        question: "Esqueci minha senha do Cartão Maravilhas do Lar, o que devo fazer?",
        answer: "Consulte nossa Central de Relacionamento Cred-System: Grande São Paulo: 4003 39 00 / Demais Localidades: 0800 729 3900.",
        category: "Cartao"
      },
      {
        question: "Como comunicar perda ou roubo do Cartão Maravilhas do Lar?",
        answer: "Para comunicar perda ou roubo do seu cartão você deverá entrar em contato com a nossa Central de Relacionamento Cred-System: Grande São Paulo: 4003 39 00 / Demais Localidades: 0800 729 3900.",
        category: "Cartao"
      }


];


const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredQuestions = faqData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapperFaq}>
      <div className={styles.containerFaq}>
        <div className={styles.faqHeader}>
          <h1 className={styles.faqTitle}>FAQ</h1>
        </div>

        <div className={styles.wrapperCardsFaq}>
            {/* Card 1 */}
            <div className={styles.cardFaq}>
                <div className={styles.topoCardFaq}>
                    <div className={styles.iconCardFaq}>
                        <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.83 77.0724C30.508 76.8922 30.2695 76.5929 30.166 76.2387C30.0625 75.8845 30.1021 75.5038 30.2765 75.1786C30.4508 74.8534 30.7459 74.6096 31.0981 74.4998C31.4504 74.3899 31.8317 74.4228 32.16 74.5913C38.7239 78.0137 46.2664 79.0706 53.5181 77.5842C60.7699 76.0977 67.2883 72.1586 71.9763 66.4298C76.6644 60.7009 79.236 53.532 79.2583 46.1295C79.2806 38.727 76.7523 31.5428 72.0988 25.7858C72.0605 25.717 71.998 25.6649 71.9235 25.6394C71.849 25.614 71.7677 25.617 71.6952 25.6479C71.6228 25.6788 71.5644 25.7354 71.5312 25.8068C71.498 25.8782 71.4924 25.9594 71.5155 26.0347L71.7644 27.0302C72.2622 28.8502 69.5322 29.5113 69.0344 27.808L67.0511 20.1936C66.9816 19.9564 66.9783 19.7048 67.0417 19.4659C67.1051 19.2271 67.2327 19.0102 67.4106 18.8387C67.5885 18.6672 67.8099 18.5476 68.0509 18.4931C68.292 18.4385 68.5433 18.451 68.7777 18.5291L76.3066 20.5124C76.4859 20.5635 76.6533 20.6494 76.7994 20.7652C76.9454 20.881 77.0673 21.0244 77.1579 21.1872C77.2486 21.3501 77.3062 21.5292 77.3276 21.7144C77.3491 21.8995 77.3338 22.0871 77.2827 22.2663C77.2317 22.4456 77.1458 22.613 77.03 22.7591C76.9142 22.9052 76.7708 23.027 76.6079 23.1176C76.4451 23.2083 76.266 23.2659 76.0808 23.2874C75.8956 23.3088 75.7081 23.2935 75.5288 23.2424L74.0433 22.8302C73.7088 22.7447 73.4599 23.0791 73.7088 23.3202C78.9489 29.5154 81.877 37.3368 81.9935 45.45C82.1101 53.5632 79.4078 61.4655 74.3479 67.8086C69.2879 74.1516 62.1838 78.5425 54.2475 80.2319C46.3113 81.9213 38.0347 80.8046 30.83 77.0724ZM63.9944 15.3869C65.6433 16.2969 64.2433 18.778 62.6722 17.868C56.1399 14.2327 48.5468 12.9817 41.1936 14.3294C33.8403 15.6771 27.1844 19.5395 22.3659 25.2552C17.5474 30.9708 14.8662 38.184 14.7814 45.6593C14.6966 53.1345 17.2135 60.4067 21.9011 66.2302C21.953 66.2885 22.0232 66.3274 22.1001 66.3404C22.1771 66.3533 22.2561 66.3396 22.3242 66.3015C22.3923 66.2634 22.4453 66.2031 22.4744 66.1307C22.5036 66.0583 22.5071 65.9782 22.4845 65.9035L22.2356 64.9935C21.7378 63.1735 24.4678 62.5124 24.9656 64.2157L26.9489 71.8224C27.0229 72.0612 27.0298 72.3157 26.9686 72.5581C26.9075 72.8005 26.7809 73.0214 26.6025 73.1966C26.4241 73.3717 26.201 73.4944 25.9575 73.551C25.714 73.6077 25.4596 73.5963 25.2222 73.5179L17.6934 71.5346C15.8734 71.0368 16.62 68.3068 18.3545 68.8046L19.91 69.2168C20.2445 69.3024 20.4934 68.9679 20.2445 68.6413C8.50781 54.9135 9.41781 34.0769 22.2356 21.2591C27.6164 15.8819 34.6003 12.4009 42.1333 11.3416C49.6662 10.2823 57.3393 11.7022 63.9944 15.3869Z" fill="black"/>
                        </svg>
                    </div>
                    <div className={styles.titleCardFaq}>
                        <h3>Trocas e Devoluções</h3>
                    </div>
                </div>
                <div className={styles.listCardFaq}>
                    <ul>
                        <li><a href="/troca">Acompanhar troca</a></li>
                        <li><a href="/troca">Autorização de postagem</a></li>
                        <li><a href="/troca">Solicitar troca ou devolução</a></li>
                    </ul>
                </div>
            </div>

            {/* Card 2 */}
            <div className={styles.cardFaq}>
                <div className={styles.topoCardFaq}>
                    <div className={styles.iconCardFaq}>
                        <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.1346 32.3846V32.6346H64.3846H77.3077C78.3542 32.6346 79.2115 33.4919 79.2115 34.5385V70.8523C79.2115 77.4127 73.8742 82.75 67.3139 82.75H29.1477C22.5873 82.75 17.25 77.4127 17.25 70.8523V34.5385C17.25 33.4919 18.1073 32.6346 19.1538 32.6346H32.0769H32.3269V32.3846V29.1538C32.3269 20.3858 39.4627 13.25 48.2308 13.25C56.9989 13.25 64.1346 20.3858 64.1346 29.1538V32.3846ZM60.0769 32.6346H60.3269V32.3846V29.1538C60.3269 22.4789 54.9058 17.0577 48.2308 17.0577C41.5558 17.0577 36.1346 22.4789 36.1346 29.1538V32.3846V32.6346H36.3846H60.0769ZM21.3077 36.4423H21.0577V36.6923V70.8523C21.0577 75.3088 24.6912 78.9423 29.1477 78.9423H67.3139C71.7704 78.9423 75.4039 75.3088 75.4039 70.8523V36.6923V36.4423H75.1539H64.3846H64.1346V36.6923V42.0769C64.1346 43.1235 63.2773 43.9808 62.2308 43.9808C61.1842 43.9808 60.3269 43.1235 60.3269 42.0769V36.6923V36.4423H60.0769H36.3846H36.1346V36.6923V42.0769C36.1346 43.1235 35.2773 43.9808 34.2308 43.9808C33.1842 43.9808 32.3269 43.1235 32.3269 42.0769V36.6923V36.4423H32.0769H21.3077Z" fill="black" stroke="#FFCC00" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <div className={styles.titleCardFaq}>
                        <h3>Meus Pedidos</h3>
                    </div>
                </div>
                <div className={styles.listCardFaq}>
                    <ul>
                        <li><a href="/troca">Acompanhar entrega</a></li>
                        <li><a href="/troca">Imprimir boleto</a></li>
                        <li><a href="/troca">Cancelar pedido ou entrega</a></li>
                    </ul>
                </div>
            </div>

            {/* Card 3 */}
            <div className={styles.cardFaq}>
                <div className={styles.topoCardFaq}>
                    <div className={styles.iconCardFaq}>
                        <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M84.2 21H13.8C11.1536 21 9 23.1536 9 25.8V70.6C9 73.2464 11.1536 75.4 13.8 75.4H84.2C86.8464 75.4 89 73.2464 89 70.6V25.8C89 23.1536 86.8464 21 84.2 21ZM85.8 70.6C85.8 71.48 85.08 72.2 84.2 72.2H13.8C12.9169 72.2 12.2 71.48 12.2 70.6V25.8C12.2 24.9167 12.9169 24.2 13.8 24.2H84.2C85.08 24.2 85.8 24.9167 85.8 25.8V70.6Z" fill="#1C1C1C"/>
                            <path d="M87.4016 35.4H10.6016V41.8H87.4016V35.4Z" fill="#1C1C1C"/>
                            <path d="M87.4 33.8H10.6C9.71687 33.8 9 34.5167 9 35.4V41.8C9 42.6833 9.71687 43.4 10.6 43.4H87.4C88.2831 43.4 89 42.6833 89 41.8V35.4C89 34.5167 88.2831 33.8 87.4 33.8ZM85.8 40.2H12.2V37H85.8V40.2Z" fill="#1C1C1C"/>
                            <path d="M52.2008 53H23.4008C22.5177 53 21.8008 53.7169 21.8008 54.6C21.8008 55.4831 22.5177 56.2 23.4008 56.2H52.2008C53.0839 56.2 53.8008 55.4831 53.8008 54.6C53.8008 53.7167 53.0839 53 52.2008 53Z" fill="#1C1C1C"/>
                            <path d="M39.4008 59.4001H23.4008C22.5177 59.4001 21.8008 60.117 21.8008 61.0001C21.8008 61.8832 22.5177 62.6001 23.4008 62.6001H39.4008C40.2839 62.6001 41.0008 61.8832 41.0008 61.0001C41.0008 60.117 40.2839 59.4001 39.4008 59.4001Z" fill="#1C1C1C"/>
                        </svg>
                    </div>
                    <div className={styles.titleCardFaq}>
                        <h3>Cartão Maravilhas</h3>
                    </div>
                </div>
                <div className={styles.listCardFaq}>
                    <ul>
                        <li><a href="/troca">Acesse sua fatura</a></li>
                        <li><a href="/troca">Termos e condições de uso</a></li>
                        <li><a href="/troca">Solicite seu cartão</a></li>
                        <li><a href="/troca">Detalhamento Contrato</a></li>
                    </ul>
                </div>
            </div>

            {/* Card 4 */}
            <div className={styles.cardFaq}>
                <div className={styles.topoCardFaq}>
                    <div className={styles.iconCardFaq}>
                        <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7253 76.8776L20.7026 77.1484H20.9744H71.3589H71.6307L71.608 76.8776C70.6243 65.1301 61.3467 55.8672 50.0556 55.8672H42.2778C30.9866 55.8672 21.7091 65.1301 20.7253 76.8776ZM28.9167 29.457C28.9167 19.4052 36.6676 11.25 46.1667 11.25C55.6657 11.25 63.4167 19.4052 63.4167 29.457C63.4167 39.5089 55.6657 47.6641 46.1667 47.6641C36.6676 47.6641 28.9167 39.5089 28.9167 29.457ZM32.3056 29.457C32.3056 37.498 38.5111 44.0625 46.1667 44.0625C53.8223 44.0625 60.0278 37.498 60.0278 29.457C60.0278 21.4161 53.8223 14.8516 46.1667 14.8516C38.5111 14.8516 32.3056 21.4161 32.3056 29.457ZM50.0556 52.2656C56.725 52.2656 63.0113 55.0601 67.7573 60.1426C72.4807 65.2009 75.0833 71.8789 75.0833 78.9492C75.0833 79.9564 74.3123 80.75 73.3889 80.75H18.9444C18.021 80.75 17.25 79.9564 17.25 78.9492C17.25 71.8789 19.8526 65.2009 24.576 60.1426C29.322 55.0601 35.6084 52.2656 42.2778 52.2656H50.0556Z" fill="#1C1C1C" stroke="#FFCC00" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <div className={styles.titleCardFaq}>
                        <h3>Meus Dados</h3>
                    </div>
                </div>
                <div className={styles.listCardFaq}>
                    <ul>
                        <li><a href="/troca">Informações pessoais</a></li>
                        <li><a href="/troca">Senha e e-mail</a></li>
                        <li><a href="/troca">Meus telefones</a></li>
                        <li><a href="/troca">Endereços</a></li>
                    </ul>
                </div>
            </div>

        </div>

        <div className={styles.wrapperMainFaq}>
            <div className={styles.titleMainFaq}>
                <h2>Insira sua pergunta no campo abaixo</h2>
            </div>
            <div className={styles.inputMainFaq}>
                <input
                type="text"
                placeholder="Procure por um termo específico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                />

                {searchTerm && <p className={styles.searchResult}>Resultados para: "{searchTerm}"</p>}
            </div>
            
            <div className={styles.faqMainContent}>
                <div className={styles.sidebarMainFaq}>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Online")} className={selectedCategory === "Online" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M61.4412 48.896H23.8092L22.4012 43.648H53.2492C53.7612 43.648 54.2733 43.264 54.4012 42.88L62.7212 22.016C62.8492 21.632 62.8493 21.12 62.5933 20.864C62.3372 20.48 61.9532 20.352 61.5692 20.352H55.8092C55.0412 11.136 47.4892 3.968 38.2733 3.968C29.0572 3.968 38.2732 3.968 38.1452 3.968C29.1852 3.968 21.3773 10.88 20.7373 20.352H16.0012L11.6493 4.352C11.5213 3.712 11.0093 3.328 10.3693 3.328H2.56125C1.79325 3.328 1.28125 3.84 1.28125 4.608C1.28125 5.376 1.79325 5.888 2.56125 5.888H9.47325L21.6332 50.432C21.7612 50.944 22.2732 51.328 22.9132 51.328H25.4732C24.8332 52.224 24.4492 53.376 24.4492 54.656C24.4492 57.856 27.1373 60.544 30.3372 60.544C33.5373 60.544 36.2252 57.856 36.2252 54.656C36.2252 53.376 35.8412 52.352 35.2012 51.328H49.1533C48.5133 52.224 48.1292 53.376 48.1292 54.656C48.1292 57.856 50.8172 60.544 54.0173 60.544C57.2173 60.544 59.9052 57.856 59.9052 54.656C59.9052 53.376 59.5212 52.352 58.8812 51.328H61.4412C62.2092 51.328 62.7212 50.816 62.7212 50.048C62.7212 49.28 62.0812 48.896 61.4412 48.896ZM53.1213 20.224H47.7452C47.7452 18.944 47.6172 17.536 47.3612 16.384H52.2252C52.7372 17.536 52.9932 18.944 53.1213 20.224ZM47.3612 26.624C47.6172 25.344 47.7452 24.064 47.7452 22.784H53.1213C52.9932 24.192 52.7372 25.472 52.2252 26.624H47.3612ZM51.0732 29.184C49.5373 31.872 47.1052 33.92 44.2892 35.2C45.4412 33.536 46.3372 31.488 46.8492 29.184H51.0732ZM51.0732 13.824H46.8492C46.2092 11.392 45.3132 9.344 44.2892 7.808C47.1052 8.96 49.5373 11.136 51.0732 13.824ZM39.5532 6.784C41.4732 7.552 43.2652 10.112 44.2892 13.824H39.5532V6.784ZM39.5532 16.384H44.8013C45.0572 17.536 45.1852 18.816 45.1852 20.224H39.4252V16.384H39.5532ZM39.5532 22.784H45.3133C45.3133 24.192 45.0572 25.472 44.9292 26.624H39.6812V22.784H39.5532ZM39.5532 29.184H44.2892C43.2652 32.896 41.4732 35.456 39.5532 36.224V29.184ZM36.9932 6.784V13.824H32.2572C33.2812 10.112 35.0732 7.552 36.9932 6.784ZM31.6173 26.624C31.3612 25.472 31.2332 24.064 31.2332 22.784H36.9932V26.624H31.6173ZM36.9932 29.184V36.224C35.0732 35.456 33.2812 32.896 32.2572 29.184H36.9932ZM29.5693 29.184C30.2092 31.616 31.1052 33.664 32.1292 35.2C29.3132 33.92 26.8812 31.744 25.3452 29.184H29.5693ZM24.1932 26.624C23.8092 25.344 23.4253 24.064 23.2973 22.784H28.6732C28.6732 24.064 28.8013 25.472 29.0573 26.624H24.1932ZM31.2332 20.224C31.2332 18.816 31.4893 17.536 31.6173 16.384H36.8652V20.224H31.2332ZM32.1292 7.68C30.9772 9.344 30.0812 11.392 29.5693 13.696H25.3452C26.8812 11.136 29.3132 8.96 32.1292 7.68ZM24.1932 16.384H29.0573C28.8013 17.664 28.8012 18.944 28.6732 20.224H23.2973C23.4253 18.944 23.6812 17.536 24.1932 16.384ZM21.6332 41.088L16.6412 22.784H20.7373C21.3773 32.128 29.1852 39.04 38.1452 39.168H38.2733C47.2332 39.168 55.0412 32.128 55.6812 22.784H59.5212L52.2252 41.088H21.6332ZM30.2092 58.112C28.4172 58.112 26.8812 56.576 26.8812 54.784C26.8812 52.992 28.4172 51.456 30.2092 51.456C32.0012 51.456 33.5373 52.992 33.5373 54.784C33.5373 56.576 32.0012 58.112 30.2092 58.112ZM53.7612 58.112C51.9692 58.112 50.4333 56.576 50.4333 54.784C50.4333 52.992 51.9692 51.456 53.7612 51.456C55.5532 51.456 57.0892 52.992 57.0892 54.784C57.0892 56.576 55.6812 58.112 53.7612 58.112Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Loja<br/>Online</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Trocas")} className={selectedCategory === "Trocas" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.0312 41.6V24.32C49.0312 23.6237 48.5994 23.0008 47.948 22.7557L49.0312 41.6ZM49.0312 41.6C49.0312 42.2964 48.5992 42.9195 47.9484 43.1645M49.0312 41.6L47.9484 43.1645M47.9484 43.1645L32.5896 48.924C32.5895 48.924 32.5894 48.9241 32.5894 48.9241C32.3995 48.9944 32.1999 49.03 32.0012 49.03C31.8026 49.03 31.603 48.9944 31.4131 48.9241C31.4131 48.9241 31.413 48.924 31.4129 48.924L16.0541 43.1645C15.4033 42.9195 14.9712 42.2964 14.9712 41.6V24.32C14.9712 23.6237 15.4031 23.0008 16.0538 22.7557L47.9484 43.1645ZM13.0599 12.6217L12.6241 13.05H13.2352H20.4812C21.4043 13.05 22.1512 13.797 22.1512 14.72C22.1512 15.6431 21.4043 16.39 20.4812 16.39H8.96125C8.0382 16.39 7.29125 15.6431 7.29125 14.72V3.20003C7.29125 2.27698 8.0382 1.53003 8.96125 1.53003C9.8843 1.53003 10.6312 2.27698 10.6312 3.20003V9.74979V10.334L11.0539 9.93064C16.6727 4.56763 24.0543 1.53003 32.0012 1.53003C48.8021 1.53003 62.4712 15.1992 62.4712 32C62.4712 48.8008 48.8021 62.47 32.0012 62.47C15.2004 62.47 1.53125 48.8008 1.53125 32C1.53125 31.077 2.2782 30.33 3.20125 30.33C4.1243 30.33 4.87125 31.077 4.87125 32C4.87125 46.9599 17.0414 59.13 32.0012 59.13C46.9611 59.13 59.1312 46.9599 59.1312 32C59.1312 17.0402 46.9611 4.87003 32.0012 4.87003C24.7906 4.87003 18.0956 7.6733 13.0599 12.6217ZM22.021 24.0859L21.3966 24.32L22.021 24.5541L31.9135 28.2629L32.0012 28.2958L32.089 28.2629L41.9815 24.5541L42.6059 24.32L41.9815 24.0859L32.089 20.3771L32.0012 20.3442L31.9135 20.3771L22.021 24.0859ZM18.3112 40.2688V40.4421L18.4735 40.5029L29.9935 44.8229L30.3312 44.9496V44.5888V31.4112V31.238L30.169 31.1771L18.649 26.8571L18.3112 26.7305V27.0912V40.2688ZM45.529 40.5029L45.6912 40.4421V40.2688V27.0912V26.7305L45.3535 26.8571L33.8335 31.1771L33.6712 31.238V31.4112V44.5888V44.9496L34.009 44.8229L45.529 40.5029ZM32.5888 16.996L47.9478 22.7556L16.0541 22.7556L31.4129 16.996C31.413 16.996 31.4131 16.996 31.4132 16.996C31.7922 16.8556 32.2103 16.8556 32.5886 16.9959C32.5887 16.9959 32.5887 16.996 32.5888 16.996Z" fill="white" stroke="#660066" stroke-width="0.5"/>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Trocas e<br/>Cancelamentos</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Presentes")} className={selectedCategory === "Presentes" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4149_34364)">
                                    <path d="M43.5579 17.2944L43.2885 17.517L43.6169 17.6366L49.1062 19.6345C51.549 20.5236 52.8131 23.2345 51.9243 25.6773L49.6831 31.8348C49.4102 32.5841 48.5827 32.965 47.8398 32.6944L47.8398 32.6944L46.5724 32.233L46.304 32.1353V32.421V51.0855C46.304 53.6849 44.1889 55.8 41.5895 55.8H28.4839H21.9312H8.82565C6.22623 55.8 4.1111 53.6849 4.1111 51.0855V28.1509C4.1111 27.3566 4.75503 26.7126 5.54932 26.7126H5.55542H5.56201H5.56909H5.57667H5.58473H5.59328H5.60231H5.61183H5.62183H5.63231H5.64326H5.65469H5.66659H5.67897H5.69181H5.70512H5.7189H5.73313H5.74784H5.763H5.77861H5.79469H5.81122H5.8282H5.84563H5.8635H5.88183H5.9006H5.91981H5.93946H5.95954H5.98007H6.00103H6.02242H6.04424H6.06649H6.08917H6.11227H6.1358H6.15975H6.18411H6.20889H6.23409H6.2597H6.28572H6.31215H6.33899H6.36623H6.39388H6.42193H6.45038H6.47922H6.50846H6.5381H6.56813H6.59854H6.62935H6.66054H6.69211H6.72407H6.75641H6.78912H6.82221H6.85568H6.88952H6.92373H6.9583H6.99325H7.02856H7.06423H7.10026H7.13665H7.1734H7.2105H7.24796H7.28577H7.32392H7.36243H7.40127H7.44047H7.48H7.51987H7.56009H7.60063H7.64151H7.68272H7.72427H7.76614H7.80833H7.85085H7.89369H7.93685H7.98033H8.02413H8.06824H8.11266H8.1574H8.20244H8.24779H8.29344H8.33939H8.38565H8.43221H8.47906H8.52621H8.57365H8.62138H8.6694H8.7177H8.7663H8.81517H8.86433H8.91377H8.96348H9.01347H9.06373H9.11427H9.16507H9.21615H9.26748H9.31909H9.37095H9.42308H9.47546H9.5281H9.58099H9.63414H9.68753H9.74118H9.79507H9.8492H9.90358H9.9582H10.0131H10.0681H10.1235H10.179H10.2348H10.2909H10.3471H10.4036H10.4603H10.5172H10.5743H10.6317H10.6893H10.747H10.805H10.8632H10.9217H10.9803H11.0391H11.0981H11.1574H11.2168H11.2764H11.3362H11.3962H11.4564H11.5168H11.5774H11.6381H11.6991H11.7602H11.8215H11.883H11.9446H12.0064H12.0684H12.1306H12.1929H12.2554H12.3181H12.3809H12.4439H12.507H12.5703H12.6337H12.6973H12.7611H12.825H12.889H12.9532H13.0175H13.082H13.1466H13.2113H13.2762H13.3412H13.4063H13.4716H13.537H13.6025H13.6681H13.7339H13.7998H13.8657H13.9319H13.9981H14.0644H14.1308H14.1974H14.264H14.3308H14.3977H14.4646H14.5317H14.5988H14.666H14.7334H14.8008H14.8683H14.9359H15.0036H15.0714H15.1392H15.2071H15.2751H15.3432H15.4113H15.4795H15.5478H15.6162H15.6846H15.753H15.8216H15.8902H15.9588H16.0275H16.0963H16.1651H16.2339H16.3028H16.3718H16.4408H16.5098H16.5789H16.648H16.7171H16.7863H16.8555H16.9248H16.994H17.0633H17.1326H17.202H17.2713H17.3407H17.4101H17.4795H17.5489H17.6183H17.6878H17.7572H17.8266H17.8961H17.9655H18.035H18.1044H18.1739H18.2433H18.3127H18.3821H18.4515H18.5209H18.5903H18.6596H18.7289H18.7982H18.8675H18.9368H19.006H19.0752H19.1443H19.2135H19.2826H19.3516H19.4206H19.4896H19.5585H19.6274H19.6962H19.765H19.8337H19.9024H19.971H20.0396H20.1081H20.1765H20.2449H20.3132H20.3814H20.4496H20.5177H20.5857H20.6537H20.7216H20.7894H20.8571H20.9247H20.9923H21.0597H21.1271H21.1944H21.2616H21.3287H21.3957H21.4626H21.5294H21.5961H21.6626H21.7291H21.7955H21.8618H21.9279H21.994H22.0599H22.1257H22.1914H22.257H22.3224H22.3878H22.4529H22.518H22.5829H22.6477H22.7124H22.7769H22.8413H22.9056H22.9697H23.0336H23.0974H23.1611H23.2246H23.288H23.3512H23.4142H23.4771H23.5398H23.6024H23.6648H23.727H23.7891H23.851H23.9127H23.9743H24.0357H24.0969H24.1579H24.2187H24.2794H24.3398H24.4001H24.4602H24.5201H24.5798H24.6393H24.6986H24.7578H24.8167H24.8754H24.9339H24.9922H25.0503H25.1082H25.1658H25.2233H25.2805H25.3375H25.3943H25.4509H25.5073H25.5634H25.6193H25.6749H25.7304H25.7856H25.8405H25.8953H25.9497H26.004H26.058H26.1117H26.1653H26.2185H26.2715H26.3243H26.3768H26.429H26.481H26.5327H26.5842H26.6354H26.6863H26.7369H26.7873H26.8374H26.8873H26.9368H26.9861H27.0351H27.0838H27.1323H27.1804H27.2283H27.2759H27.3231H27.3701H27.4168H27.4632H27.5093H27.5551H27.6006H27.6457H27.6906H27.7352H27.7794H27.8234H27.867H27.9103H27.9533H27.9959H28.0383H28.0803H28.122H28.1633H28.2044H28.2451H28.2854H28.3254H28.3651H28.4045H28.4435H28.4821H28.5204H28.5584H28.596H28.6333H28.6702H28.7067H28.7429H28.7788H28.8142H28.8493H28.8841H28.9185H28.9525H28.9861H29.0194H29.0522H29.0848H29.1169H29.1486H29.18H29.211H29.2416H29.2718H29.3016H29.331H29.36H29.3886H29.4169H29.4447H29.4721H29.4991H29.5257H29.5519H29.5777H29.6031H29.6281H29.6526H29.6768H29.7005H29.7238H29.7467H29.7691H29.7911H29.8127H29.8338H29.8546H29.8748H29.8947H29.9141H29.9331H29.9516H29.9697H29.9873H30.0045H30.0212H30.0375H30.0533H30.0687H30.0836H30.098H30.112H30.1255H30.1386H30.1512H30.1633H30.1749H30.1861H30.1968H30.207H30.2167H30.226H30.2347H30.243H30.2508H30.2581H30.2649H30.2712L30.3396 26.3247L4.73668 17.006C3.99023 16.7345 3.60536 15.9091 3.87701 15.1627L6.1181 9.00525C7.00728 6.56246 9.71865 5.29824 12.1611 6.1874L12.1611 6.1874L17.3365 8.07106L17.6649 8.19059L17.6016 7.84689C17.1405 5.34413 18.1802 2.87969 20.134 1.45032C24.0419 -1.4087 29.5967 0.89983 30.3157 5.69781L31.0655 10.7224L31.1198 11.0866L31.3957 10.8427L35.1858 7.49233L35.0533 7.34248L35.1858 7.49232C38.8144 4.28461 44.5576 6.07288 45.7157 10.7832C46.305 13.1809 45.4832 15.7036 43.5579 17.2944ZM20.2929 52.9237H20.4929V52.7237V29.7891V29.5891H20.2929H7.18732H6.98732V29.7891V51.0855C6.98732 52.0993 7.81175 52.9237 8.82554 52.9237H20.2929ZM26.8456 52.9237H27.0456V52.7237V29.7891V29.5891H26.8456H23.5693H23.3693V29.7891V52.7237V52.9237H23.5693H26.8456ZM38.2354 15.678L38.2355 15.678C40.9212 16.654 43.6052 14.2465 42.9224 11.4701C42.2822 8.86619 39.104 7.86756 37.0908 9.64745L32.8445 13.4013L32.5925 13.6241L32.9086 13.7391L38.2354 15.678ZM27.4712 6.12448L27.4712 6.12436C27.0737 3.47292 24.0013 2.18522 21.8322 3.77195C19.5254 5.45931 20.0321 9.05177 22.7185 10.0301L22.7186 10.0301L28.045 11.9687L28.3608 12.0837L28.3112 11.7513L27.4712 6.12448ZM22.6537 20.4663L22.8416 20.5347L22.91 20.3468L25.1511 14.1892L25.2195 14.0012L25.0316 13.9328L11.1773 8.89032L11.1772 8.89031C10.2247 8.54381 9.16791 9.03629 8.82113 9.98898L9.00907 10.0574L8.82113 9.98898L7.14026 14.607L7.07185 14.795L7.25979 14.8634L22.6537 20.4663ZM28.8113 22.7076L28.9992 22.776L29.0676 22.5881L31.3088 16.4306L31.3772 16.2427L31.1893 16.1743L28.1105 15.0536L27.9225 14.9852L27.8541 15.1731L25.6129 21.3306L25.5445 21.5186L25.7325 21.587L28.8113 22.7076ZM29.9221 52.7237V52.9237H30.1221H41.5893C42.5355 52.9237 43.3167 52.2055 43.4167 51.2855H43.4276V51.0855V31.2284V31.0884L43.296 31.0405L39.3414 29.6011L39.3083 29.5891H39.273H30.1221H29.9221V29.7891V52.7237ZM47.2839 29.431L47.4719 29.4994L47.5403 29.3115L49.221 24.6933C49.5678 23.7408 49.0752 22.684 48.1225 22.3372L34.2681 17.2947L34.0801 17.2263L34.0117 17.4142L31.7705 23.5717L31.7021 23.7597L31.8901 23.8281L47.2839 29.431Z" fill="white" stroke="#660066" stroke-width="0.4"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4149_34364">
                                    <rect width="56" height="56" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Lista de<br/>Presentes</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Lojas")} className={selectedCategory === "Lojas" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4149_34370)">
                                    <path d="M45.4689 34.4912H36.7725C34.3925 34.4912 32.457 36.4266 32.457 38.8067V45.4761C32.457 47.8561 34.3925 49.7916 36.7725 49.7916H45.4689C47.8489 49.7916 49.7844 47.8561 49.7844 45.4761V38.8067C49.7844 36.4266 47.8489 34.4912 45.4689 34.4912ZM46.6458 45.4761C46.6458 46.13 46.1097 46.653 45.4689 46.653H36.7725C36.1187 46.653 35.5956 46.1169 35.5956 45.4761V38.8067C35.5956 38.1528 36.1317 37.6297 36.7725 37.6297H45.4689C46.1227 37.6297 46.6458 38.1659 46.6458 38.8067V45.4761Z" fill="white"/>
                                    <path d="M64 22.3686C64 22.0939 63.9346 21.8324 63.7908 21.597L54.2705 4.85814C53.9959 4.37428 53.4728 4.06042 52.9105 4.06042H11.0764C10.5141 4.06042 9.99101 4.3612 9.71639 4.85814L0.209236 21.597C0.0784634 21.8324 0 22.0939 0 22.3686C0 26.1217 2.26236 29.3387 5.49244 30.7641V58.3702C5.49244 59.2333 6.19861 59.9395 7.06171 59.9395H15.7319C15.745 59.9395 15.7581 59.9395 15.7711 59.9395H27.933C27.9461 59.9395 27.9591 59.9395 27.9722 59.9395H56.9252C57.7883 59.9395 58.4945 59.2333 58.4945 58.3702V30.9603C58.4945 30.8949 58.4945 30.8426 58.4814 30.7903C61.7246 29.3649 64 26.1348 64 22.3686ZM11.9918 7.21204H51.9951L59.436 20.3024H4.56396L11.9918 7.21204ZM45.548 23.4278C45.0511 26.2525 42.5795 28.3972 39.611 28.3972C36.6424 28.3972 34.1708 26.2525 33.6739 23.4278H45.548ZM30.3392 23.4278C29.8423 26.2525 27.3707 28.3972 24.4021 28.3972C21.4336 28.3972 18.962 26.2525 18.452 23.4278H30.3392ZM3.24316 23.4278H15.1304C14.6334 26.2525 12.1488 28.3972 9.18022 28.3972C6.21169 28.4102 3.74009 26.2525 3.24316 23.4278ZM26.3637 56.8009H17.3404V39.8659C17.3404 38.6366 18.3343 37.6297 19.5766 37.6297H24.1406C25.3698 37.6297 26.3768 38.6236 26.3768 39.8659V56.8009H26.3637ZM55.3559 56.8009H29.5023V39.8659C29.5023 36.9104 27.096 34.4912 24.1275 34.4912H19.5635C16.6081 34.4912 14.1888 36.8974 14.1888 39.8659V56.814H8.63098V31.5357C8.81406 31.5488 8.99714 31.5488 9.18022 31.5488C12.3449 31.5488 15.1434 29.9403 16.7912 27.4948C18.4389 29.9403 21.2374 31.5488 24.4021 31.5488C27.5668 31.5488 30.3523 29.9403 32.0131 27.4948C33.6608 29.9403 36.4593 31.5488 39.611 31.5488C42.7756 31.5488 45.5611 29.9403 47.2088 27.4948C48.8566 29.9403 51.6551 31.5488 54.8198 31.5488C55.0029 31.5488 55.1729 31.5357 55.3559 31.5357V56.8009ZM54.8198 28.4102C51.8512 28.4102 49.3797 26.2656 48.8827 23.4409H60.7699C60.2599 26.2525 57.7883 28.4102 54.8198 28.4102Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4149_34370">
                                    <rect width="64" height="64" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Lojas<br/>Físicas</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Outros")} className={selectedCategory === "Outros" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4149_34377)">
                                    <path d="M50.5805 39.6457C49.2703 38.2815 47.6899 37.552 46.0149 37.552C44.3535 37.552 42.7596 38.2679 41.3953 39.6322L37.1269 43.8871C36.7757 43.698 36.4245 43.5224 36.0868 43.3468C35.6005 43.1037 35.1413 42.8741 34.7496 42.6309C30.7513 40.0915 27.1177 36.7821 23.6328 32.5002C21.9443 30.366 20.8097 28.5695 19.9857 26.7459C21.0933 25.7329 22.1199 24.6793 23.1195 23.6662C23.4977 23.288 23.8759 22.8963 24.2541 22.518C27.0907 19.6814 27.0907 16.0074 24.2541 13.1708L20.5665 9.48317C20.1478 9.06444 19.7155 8.63219 19.3103 8.19995C18.4999 7.36247 17.6489 6.49799 16.7709 5.68753C15.4606 4.39079 13.8938 3.7019 12.2458 3.7019C10.5979 3.7019 9.00399 4.39079 7.65323 5.68753C7.63972 5.70103 7.63972 5.70103 7.62621 5.71454L3.03361 10.3477C1.30464 12.0766 0.318579 14.1838 0.102457 16.6287C-0.221726 20.5729 0.93993 24.247 1.83143 26.6514C4.01967 32.5542 7.28852 38.0248 12.1648 43.8871C18.0811 50.9516 25.1996 56.5303 33.3312 60.461C36.438 61.9333 40.5849 63.6758 45.218 63.973C45.5016 63.9865 45.7988 64 46.069 64C49.1892 64 51.8097 62.8789 53.8629 60.6501C53.8764 60.6231 53.9034 60.6096 53.9169 60.5826C54.6193 59.7316 55.4297 58.9616 56.2807 58.1377C56.8616 57.5839 57.4559 57.003 58.0367 56.3952C59.374 55.0039 60.0764 53.383 60.0764 51.7216C60.0764 50.0466 59.3605 48.4392 57.9962 47.0884L50.5805 39.6457ZM55.4162 53.8693C55.4027 53.8693 55.4027 53.8828 55.4162 53.8693C54.8894 54.4366 54.3491 54.9499 53.7683 55.5172C52.8903 56.3547 51.9988 57.2327 51.1613 58.2187C49.7971 59.6776 48.1897 60.3664 46.0825 60.3664C45.8798 60.3664 45.6637 60.3664 45.4611 60.3529C41.4493 60.0963 37.7212 58.5294 34.9252 57.1922C27.2798 53.4911 20.5665 48.2366 14.9879 41.5773C10.3818 36.0257 7.30203 30.8928 5.26238 25.3817C4.00617 22.0183 3.5469 19.3978 3.74952 16.9259C3.8846 15.3455 4.49244 14.0352 5.61357 12.9141L10.2197 8.30801C10.8816 7.68666 11.584 7.34897 12.2728 7.34897C13.1238 7.34897 13.8127 7.86226 14.245 8.2945C14.2585 8.30801 14.272 8.32152 14.2855 8.33502C15.1094 9.10496 15.8929 9.90191 16.7169 10.7529C17.1356 11.1851 17.5678 11.6174 18.0001 12.0631L21.6877 15.7507C23.1195 17.1825 23.1195 18.5063 21.6877 19.9381C21.2959 20.3298 20.9177 20.7215 20.526 21.0997C19.3914 22.2614 18.3108 23.342 17.1356 24.3956C17.1086 24.4226 17.0816 24.4361 17.0681 24.4631C15.9064 25.6248 16.1225 26.7594 16.3657 27.5294C16.3792 27.5699 16.3927 27.6104 16.4062 27.6509C17.3652 29.9743 18.716 32.1625 20.7691 34.7695L20.7827 34.783C24.5108 39.3756 28.4415 42.9551 32.7774 45.6971C33.3312 46.0483 33.8986 46.332 34.4389 46.6022C34.9251 46.8453 35.3844 47.0749 35.7761 47.3181C35.8302 47.3451 35.8842 47.3856 35.9382 47.4126C36.3975 47.6423 36.8297 47.7503 37.2755 47.7503C38.3966 47.7503 39.099 47.0479 39.3286 46.8183L43.9482 42.1987C44.4075 41.7394 45.1369 41.1856 45.9879 41.1856C46.8254 41.1856 47.5143 41.7124 47.933 42.1717C47.9465 42.1852 47.9465 42.1852 47.96 42.1987L55.4027 49.6414C56.794 51.0192 56.794 52.4375 55.4162 53.8693Z" fill="white"/>
                                    <path d="M34.5869 15.2239C38.1259 15.8182 41.3408 17.4932 43.9072 20.0596C46.4737 22.6261 48.1351 25.8409 48.7429 29.3799C48.8915 30.2714 49.6615 30.8927 50.5395 30.8927C50.6475 30.8927 50.7421 30.8792 50.8501 30.8657C51.8497 30.7036 52.5116 29.7581 52.3495 28.7585C51.6201 24.4766 49.5939 20.5729 46.5007 17.4797C43.4074 14.3864 39.5037 12.3603 35.2218 11.6309C34.2222 11.4688 33.2902 12.1306 33.1146 13.1167C32.939 14.1028 33.5874 15.0618 34.5869 15.2239Z" fill="white"/>
                                    <path d="M63.9236 28.2318C62.7214 21.1808 59.3985 14.7646 54.2927 9.65875C49.1868 4.55286 42.7706 1.22998 35.7196 0.0278007C34.7336 -0.147799 33.8016 0.527583 33.626 1.51364C33.4639 2.51321 34.1257 3.44523 35.1253 3.62083C41.4199 4.68794 47.1606 7.67312 51.7262 12.2252C56.2918 16.7908 59.2635 22.5315 60.3306 28.8261C60.4791 29.7176 61.2491 30.3389 62.1271 30.3389C62.2351 30.3389 62.3297 30.3254 62.4378 30.3119C63.4238 30.1633 64.0992 29.2178 63.9236 28.2318Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4149_34377">
                                    <rect width="64" height="64" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Outros<br/>Assuntos</h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardSidebarFaq}>
                        <div onClick={() => setSelectedCategory("Cartao")} className={selectedCategory === "Cartao" ? styles.active : ''}>
                            <div className={styles.iconCardSidebar}>
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.76 8.64001H3.24C1.45368 8.64001 0 10.0937 0 11.88V42.12C0 43.9063 1.45368 45.36 3.24 45.36H50.76C52.5463 45.36 54 43.9063 54 42.12V11.88C54 10.0937 52.5463 8.64001 50.76 8.64001ZM51.84 42.12C51.84 42.714 51.354 43.2 50.76 43.2H3.24C2.64389 43.2 2.16 42.714 2.16 42.12V11.88C2.16 11.2838 2.64389 10.8 3.24 10.8H50.76C51.354 10.8 51.84 11.2838 51.84 11.88V42.12Z" fill="white"/>
                                    <path d="M52.9181 18.36H1.07812V22.68H52.9181V18.36Z" fill="white"/>
                                    <path d="M52.92 17.28H1.08C0.483891 17.28 0 17.7638 0 18.36V22.68C0 23.2762 0.483891 23.76 1.08 23.76H52.92C53.5161 23.76 54 23.2762 54 22.68V18.36C54 17.7638 53.5161 17.28 52.92 17.28ZM51.84 21.6H2.16V19.44H51.84V21.6Z" fill="white"/>
                                    <path d="M29.1606 30.24H9.72063C9.12452 30.24 8.64062 30.7239 8.64062 31.32C8.64062 31.9161 9.12452 32.4 9.72063 32.4H29.1606C29.7567 32.4 30.2406 31.9161 30.2406 31.32C30.2406 30.7238 29.7567 30.24 29.1606 30.24Z" fill="white"/>
                                    <path d="M20.5206 34.5601H9.72063C9.12452 34.5601 8.64062 35.044 8.64062 35.6401C8.64062 36.2362 9.12452 36.7201 9.72063 36.7201H20.5206C21.1167 36.7201 21.6006 36.2362 21.6006 35.6401C21.6006 35.044 21.1167 34.5601 20.5206 34.5601Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.titleCardSidebar}>
                                <h4>Cartão Maravilhas do Lar</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.faqList}>
                    <div className={styles.titleFaq}>
                        <h1>Perguntas Frequentes</h1>
                    </div>
                    {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((faq, index) => (
                        <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}>
                        <button className={styles.questionFaq} onClick={() => toggleAccordion(index)}>
                            {faq.question}
                        </button>
                        {openIndex === index && <p className={styles.answerFaq}>{faq.answer}</p>}
                        </div>
                    ))
                    ) : (
                    <p>Nenhuma pergunta encontrada.</p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
