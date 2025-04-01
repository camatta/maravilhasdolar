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
                            O cliente fica, desde já, ciente de que a utilização indevida de informações de terceiros ou o fornecimento de dados falsos na confecção do cadastro implicará em prática de crime, sujeito às penalidades da legislação brasileira.
                        </p>
                        <p className={styles.paragraph}>
                            No intuito de veicular a lista de presentes no site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, o cliente deverá registrar obrigatoriamente um e-mail, para viabilizar o recebimento de informações relacionadas aos pedidos, em área restrita aos mesmos.
                        </p>
                        <p className={styles.paragraph}>
                            A contar da aceitação das regras concernentes à Lista de Presentes Maravilhas do Lar, o cliente registrará uma senha de acesso, com o intuito de verificar e administrar os dados de sua lista, ficando cientes de que será o único responsável por eventuais danos e/ou prejuízos causados pela utilização indevida da senha.
                        </p>
                        <p className={styles.paragraph}>
                            Fica facultado à Maravilhas do Lar a suspensão da publicação da lista de presentes, caso observe qualquer irregularidade com relação aos dados cadastrais fornecidos pelo cliente.
                        </p>

                        <h3 className={styles.sectionTitle}>LISTA DE PRESENTES</h3>
                        <p className={styles.paragraph}>
                            Não serão aceitos cadastros de listas de presentes por telefone, cadastre através do site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, sendo certo que não há um limite de produtos ou quantidades a serem incluídos na lista.
                        </p>
                        <p className={styles.paragraph}>
                            O cliente é o único responsável pelas atualizações da lista de presentes, referente à exclusão ou inclusão de produtos.
                        </p>
                        <p className={styles.paragraph}>
                            Os convidados poderão consultar a lista de casamento apenas através do site <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, não sendo possível ter acesso em Loja Física. Para tanto, basta que informem o nome dos anfitriões ou a data do evento. Poderão também acessar a lista mediante o compartilhamento do link da lista pelo cliente.
                        </p>

                        <h3 className={styles.sectionTitle}>1. MODALIDADES DE LISTA</h3>
                        <p className={styles.paragraph}>
                            A Maravilhas do Lar oferece a modalidade de lista Crédito ou Produtos. Ao criar uma Lista de Presentes, o cliente tem a opção de selecionar se deseja receber os presentes em Crédito, ou em Produtos.
                        </p>

                        <h3 className={styles.sectionTitle}>1.1 CONVERTER PRODUTOS EM CRÉDITO</h3>
                        <p className={styles.paragraph}>
                            A cada pedido aprovado no prazo de até 36 horas o valor será transformado em Crédito (Vale Presente) e o dono da lista utilizará para aquisição de produtos. O crédito não poderá ser convertido em espécie e, se houver diferença na aquisição de produtos, o dono da lista fará o complemento do valor. O crédito poderá ser utilizado apenas no Site.
                        </p>

                        <h3 className={styles.sectionTitle}>1.2 RECEBER OS PRODUTOS</h3>
                        <p className={styles.paragraph}>
                            Ao selecionar esta opção, a cada pedido realizado pelos convidados, será gerada uma entrega para o endereço selecionado pelo Dono da Lista. Caso o Dono da Lista queira realizar uma troca, o valor do frete não será convertido em créditos.
                        </p>

                        <h3 className={styles.sectionTitle}>2. ALTERAÇÃO DE PRODUTOS NA LISTA</h3>
                        <p className={styles.paragraph}>
                            Os produtos poderão ser alterados a qualquer momento, através da conta aberta para acompanhamento da lista.
                        </p>

                        <h3 className={styles.sectionTitle}>3. ENCERRAMENTO DA LISTA DE PRESENTES</h3>
                        <p className={styles.paragraph}>
                            Prazo de validade dos créditos: 90 dias.
                        </p>
                        <p className={styles.paragraph}>
                            A data de encerramento é definida pelo dono da lista no momento da criação da lista, no campo “Data limite de compra”.
                        </p>

                        <h3 className={styles.sectionTitle}>ENTREGA DOS PRODUTOS</h3>
                        <p className={styles.paragraph}>
                            O cliente somente poderá utilizar os créditos na loja on-line <a href="https://www.maravilhasdolar.com">www.maravilhasdolar.com</a>, não sendo possível a utilização nas lojas físicas.
                        </p>

                        <h3 className={styles.sectionTitle}>DA TROCA DE PRODUTOS</h3>
                        <p className={styles.paragraph}>
                            A troca de produtos deverá ser realizada em até 30 dias após recebimento, desde que comprovado que o produto não foi utilizado e esteja acondicionado em sua embalagem original, mediante apresentação de nota fiscal ou cupom fiscal. Para solicitar a troca o cliente deve enviar um e-mail para <a href="mailto:sac@maravilhasdolar.com.br">sac@maravilhasdolar.com.br</a>.
                        </p>

                        <h3 className={styles.sectionTitle}>DA PROTEÇÃO DE DADOS</h3>
                        <p className={styles.paragraph}>
                            A Maravilhas do Lar se compromete a aplicar e respeitar os princípios de lealdade e licitude, limitação da finalidade, transparência, livre acesso, adequação, necessidade, qualidade, confidencialidade, segurança e confiabilidade dos dados, prevenção e responsabilidade e prestação de contas, em qualquer momento durante o processamento de dados pessoais de acordo com as disposições da legislação brasileira.
                        </p>
                        <p className={styles.paragraph}>
                            A Maravilhas do Lar garante que ambas as finalidades se enquadram em uma das bases legais que autorizam o tratamento dos dados pessoais do cliente, em conformidade com art. 7º da Lei Geral de Proteção de Dados (“LGPD”).
                        </p>
                        <p className={styles.paragraph}>
                            Todos os cuidados que tomamos com seus dados pessoais, os seus direitos e como exercê-los, bem como outras disposições sobre como tratamos a sua privacidade podem ser consultadas em nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermosLista;
