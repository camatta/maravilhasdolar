import React from 'react';
import styles from './termos-lista.css';

const TermosLista = () => {
    return (
        <div className={styles.containerTermosLista}>
            <div className={styles.wrapperTermosLista}>
                <div className={styles.mainTermosLista}>
                    <div className={styles.titleTermosLista}>
                        <h1>Termos Lista de Presentes</h1>
                        <h2>TERMOS DE USO DA LISTA DE PRESENTES MARAVILHAS DO LAR</h2>
                    </div>

                    <div className={styles.contentTermosLista}>
                        <h3 className={styles.sectionTitle}>DADOS CADASTRAIS</h3>
                        <p className={styles.paragraph}>
                            O cliente fornecerá todos os dados pessoais necessários à elaboração de um cadastro, comprometendo-se com a veracidade das informações prestadas, bem como, de posteriores atualizações, caso seja necessário.
                        </p>
                        <p className={styles.paragraph}>
                            O cliente fica, desde já, ciente de que a utilização indevida de informações de terceiros ou o fornecimento de dados falsos na confecção do cadastro implicará em prática de crime, sujeito às penalidades da legislação brasileira
                        </p>
                        <p className={styles.paragraph}>
                            No intuito de veicular a lista de presentes no site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a> e/ou listadepresentes.maravilhasdolar.com, o cliente deverá registrar obrigatoriamente um e-mail, para viabilizar o recebimento de informações relacionadas aos pedidos, em área restrita aos mesmos. Somente o e-mail cadastrado como “dono da lista” terá permissão para acessar e utilizar os créditos (vale-presentes). É responsabilidade do cliente verificar se o e-mail informado está correto, pois não será possível liberar o uso dos créditos a terceiros.
                        </p>
                        <p className={styles.paragraph}>
                            A contar da aceitação das regras concernentes à Lista de Presentes Maravilhas do Lar, o cliente registrará uma senha de acesso, com o intuito de verificar e administrar os dados de sua lista, ficando cientes de que será o único responsável por eventuais danos e/ou prejuízos causados pela utilização indevida da senha.
                        </p>
                        <p className={styles.paragraph}>
                            A Maravilhas do Lar poderá suspender a publicação da lista caso identifique qualquer irregularidade nos dados fornecidos
                        </p>

                        <h3 className={styles.sectionTitle}>2. LISTA DE PRESENTES</h3>
                        <p className={styles.paragraph}>
                            Não serão aceitos cadastros de listas de presentes por telefone. A criação deve ser realizada exclusivamente pelo link  <a href="https://listadepresentes.maravilhasdolar.com/">listadepresentes.maravilhasdolar.com.</a> Não há limite de produtos ou quantidades a serem incluídos.
                        </p>
                        <p className={styles.paragraph}>
                            A atualização da lista — inclusão, exclusão ou alteração de produtos — é de responsabilidade exclusiva do cliente.
                        </p>
                        <p className={styles.paragraph}>
                            Os convidados poderão consultar a lista apenas pelo site, informando o nome dos anfitriões, a data do evento ou acessando o link enviado pelo cliente. O acesso à lista não está disponível em lojas físicas.
                        </p>

                        <p className={styles.paragraph}>
                            A Maravilhas do Lar oferece duas modalidades:<br></br><strong>(a) Lista Crédito<br></br>(b) Lista Produtos</strong>
                        </p>

                        <h3 className={styles.sectionTitle}>2.1 LISTA CRÉDITO – Conversão em Vale-Presente</h3>
                        <p className={styles.paragraph}>
                            Para pedidos aprovados, o valor será convertido em <strong>Crédito (Vale-Presente)</strong> no prazo de até 36 horas.
                        </p>

                        <p className={styles.paragraph}>
                            Esse crédito pode ser utilizado exclusivamente no site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>
                        </p>

                        <h3 className={styles.sectionTitle}>Validade e regras importantes</h3>
                        <p className={styles.paragraph}>
                            • O vale-presente em crédito possui <strong>validade de 90 dias a partir da data da compra realizada pelo convidado</strong><br></br>
                            • <strong>O prazo de validade não pode ser prorrogado.</strong><br></br>
                            • Após o período de 90 dias, <strong>os créditos expirarão e o valor será perdido pelo dono da lista,</strong> não havendo possibilidade de reativação ou reembolso.<br></br>
                            • O crédito não pode ser convertido em dinheiro
                            • Caso o valor dos produtos escolhidos seja superior ao saldo disponível, o cliente poderá complementar o pagamento com outra forma de pagamento
                        </p>

                        <h3 className={styles.sectionTitle}>Como usar os créditos (vale-presente)</h3>
                        <p className={styles.paragraph}>
                            • <strong>Verifique seu saldo:</strong><br></br>Acesse <a href="https://listadepresentes.maravilhasdolar.com/">listadepresentes.maravilhasdolar.com.</a>, faça login e consulte o saldo disponível.
                        </p>
                        <p className={styles.paragraph}>
                            • <strong>Utilize seus créditos:</strong><br></br>Entre em sua conta no site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, adicione ao carrinho os produtos desejados e, na forma de pagamento, selecione <strong>"Utilizar Créditos da Lista de Presentes".</strong>
                        </p>

                        <h3 className={styles.sectionTitle}>2.2 LISTA PRODUTOS – Recebimento dos itens</h3>
                        <p className={styles.paragraph}>
                            Caso o cliente opte por receber os produtos, cada pedido realizado pelos convidados gerará uma entrega para o endereço cadastrado como destino da lista.
                        </p>
                        <p className={styles.paragraph}>
                             <strong>Importante:</strong><br></br>Caso o convidado realize a compra selecionando a modalidade <strong>Retirada na Loja, é de responsabilidade exclusiva do comprador retirar os produtos na loja escolhida e entregar ao dono da lista.</strong><br></br>A Maravilhas do Lar <strong>não se responsabiliza pela entrega no endereço do dono da lista</strong> para pedidos realizados com a opção <strong>Retira na Loja,</strong> independentemente da modalidade selecionada pelo criador da lista.<br></br>Caso o Dono da Lista queira realizar uma troca, o valor do frete não será convertido em créditos.
                        </p>

                        <h3 className={styles.sectionTitle}>3. ALTERAÇÃO DE PRODUTOS</h3>
                        <p className={styles.paragraph}>
                            Os produtos da lista podem ser alterados a qualquer momento por meio da conta criada pelo cliente para acompanhamento da lista.
                        </p>

                        <h3 className={styles.sectionTitle}>4. ENCERRAMENTO DA LISTA</h3>
                        <p className={styles.paragraph}>
                           O cliente definirá a data de encerramento da lista no momento de sua criação, no campo "Data do evento".<br></br>O prazo de validade dos créditos é de <strong>90 dias</strong> a partir de cada compra aprovada realizada pelos convidados, conforme descrito na modalidade Crédito.
                        </p>

                        <h3 className={styles.sectionTitle}>5. ENTREGA DOS PRODUTOS</h3>
                        <p className={styles.paragraph}>
                            Os créditos da lista podem ser utilizados <strong>somente na loja on-line</strong> <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, não sendo aceitos em lojas físicas.
                        </p>
                        
                        <h3 className={styles.sectionTitle}>6. TROCA DE PRODUTOS</h3>
                        <p className={styles.paragraph}>
                             A troca poderá ser realizada em até <strong>30 dias após o recebimento,</strong> desde que o produto esteja sem uso, com embalagem original e acompanhado de nota ou cupom fiscal.<br></br>As solicitações devem ser enviadas para  <a href="mailto:sac@maravilhasdolar.com.br">sac@maravilhasdolar.com.br.</a>
                        </p>

                        <h3 className={styles.sectionTitle}>7. PROTEÇÃO DE DADOS</h3>
                        <p className={styles.paragraph}>
                            A Maravilhas do Lar se compromete a tratar os dados pessoais do cliente conforme os princípios de lealdade, licitude, limitação da finalidade, transparência, segurança, confidencialidade, necessidade, qualidade e responsabilidade, conforme a Lei Geral de Proteção de Dados (LGPD).<br></br>As finalidades descritas neste documento estão amparadas por bases legais previstas no art. 7º da LGPD.<br></br>Informações completas sobre tratamento de dados, direitos do titular e medidas de proteção estão disponíveis em nossa <a href="/politica-de-privacidade">Política de Privacidade.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermosLista;
