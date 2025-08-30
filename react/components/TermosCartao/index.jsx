import React from 'react';
import styles from './termos-cartao.css';

const TermosCartao = () => {

    return (
        
        <div className={styles.containerTermosCartao}>
            <div className={styles.wrapperTermosCartao}>
                <div className={styles.sidebarTermosCartao}>
                    <div className={styles.titleSidebarCartao}>
                        <h2>Cartão Maravilhas do Lar</h2>
                    </div>
                    <div className={styles.listSidebarCartao}>
                        <ul>
                            <li><a href="https://www.portaldafatura.com.br/boleto-rapido/login" target="_blank">Acesse sua fatura</a></li>
                            <li><a href="/termos-e-condicoes-cartao" className={styles.activeLink}>Termos e condições de uso</a></li>
                            <li><a href="https://lp.maravilhasdolar.com/cartao-maravilhas" target="_blank">Solicite seu cartão</a></li>
                            <li><a href="/cartao">Detalhamento Contrato Cartão MLar</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mainTermosCartao}>

                    <div className={styles.titleTermosCartao}>
                        <h1>Termos e condições de uso</h1>
                    </div>

                    <div className={styles.headerMainTermos}>
                        <div className={styles.infosDataTermos}>
                            <p>Cartão Maravilhas do Lar</p>
                            <p>Atualizado em 02/06/2022</p>
                        </div>
                        <div className={styles.infosAutorTermos}>
                            <p>Por Maravilhas do Lar</p>
                            <a href="/">www.maravilhasdolar.com/</a>
                        </div>
                    </div>

                    <div className={styles.saudacoesMainTermos}>
                        <div className={styles.textSaudacoesMainTermos}>
                            <p>Olá, seja bem-vindo(a) à nossa página de política de uso do cartão Maravilhas do Lar. Estamos atentos a cada detalhe para melhorar a sua experiência de compra conosco.</p>
                        </div>
                        <div className={styles.ctaCartaoMainTermos}>
                            <a href="https://lp.maravilhasdolar.com/cartao-maravilhas" target="_blank">Solicite seu cartão</a>
                        </div>
                    </div>

                    <div className={styles.textGeralMainTermos}>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>1.</p></div>
                                <div className={styles.tituloTextGeral}><h3>Adesão Cartão</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <h4>1.1 Lojas Físicas</h4>
                                <p>Para obter o seu Maravilhas do Lar, basta comparecer a uma de nossas lojas, no balcão de atendimento, com seus documentos pessoais:  RG e CPF.<br></br>Obs: Importante lembrar que a liberação só é válida para quem não possuir restrições de crédito.<br></br>Obs: O crédito está sujeito à aprovação. (Obs: A idade mínima é de 18 anos).</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>2.</p></div>
                                <div className={styles.tituloTextGeral}><h3>Desbloqueio do cartão</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <p>O Cartão Maravilhas do Lar é administrado pela Cred-System Administradora de Cartões de Crédito Ltda, portanto, para o desbloqueio será necessário entrar em contato com a central de Relacionamento Cred-System, nos telefones: 4003-3900 para capitais e regiões metropolitanas ou 0800 729 3900 para demais localidades.<br></br>Obs: As ligações serão válidas somente para chamadas de telefone fixo, de segunda a sábado, das 8h às 22h, ou domingos e feriados das 9h às 20h.<br></br>Obs: Você pode também solicitar o desbloqueio na loja de emissão ou pelo site: http:/portaldocliente.credsystem.com.br/</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>3.</p></div>
                                <div className={styles.tituloTextGeral}><h3>Parcelamento</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <p>Disponibilizamos o parcelamento de compras em até 10x sem juros ou 15x fixas.  Esta condição sujeita a alteração sem prévio aviso.<br></br>
                                *O Cartão Maravilhas do Lar é administrado pela CredSystem Administradora de Cartões de Crédito Ltda.<br></br>
                                Os planos de pagamento são de 1 a 10 vezes sem juros. Condições exclusivas para clientes que possuem o Cartão Maravilhas do Lar.<br></br>
                                O plano de pagamento em 15x com juros 4,99% a.m. e 79,38% a.a. terão incidência de IOF. Será cobrada Anuidade Diferenciada (AD) mensalmente, sempre que houver movimentação na conta do cliente, pela disponibilização e utilização do cartão na rede de estabelecimentos afiliados.
                                Todas as condições do Cartão Maravilhas do Lar estão sujeitas a análise de crédito. Consulte a Tabela de Informações em uma das lojas Maravilhas do Lar. Condições sujeitas a alteração sem aviso prévio. O prazo de 40 dias para começar a pagar varia de acordo com a data da compra e vencimento do cartão.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>4.</p></div>
                                <div className={styles.tituloTextGeral}><h3>Faturas</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <h4>4.1 Segunda via</h4>
                                <p>Para solicitar a segunda via do seu cartão, você deve entrar em contato com a nossa central de Relacionamento, nos telefones 4003-3900 para capitais e regiões metropolitanas ou 0800 729 3900 para demais localidades, somente para chamadas de telefone fixo, de segunda a sábado, das 8h às 22h, ou domingos e feriados das 9h às 20h.</p>
                                <h4>4.2 Fatura Digital</h4>
                                <p>A partir do momento em que você se torna um cliente digital, você passará a receber suas faturas por canais digitais (SMS e e-mail), evitando atrasos no recebimento e usufruindo de uma gama de benefícios.<br></br>
                                Cliente Digital: Pague sua fatura no vencimento e mantenha seus dados atualizados, para não perder o desconto na anuidade.</p>
                                <h4>4.3 Fatura Via Correios</h4>
                                <p>Caso você não seja um cliente digital, você recebe a fatura no endereço cadastrado e pode realizar o pagamento em qualquer agência bancária, internet, lotérica (quando houver boleto) ou em uma de nossas lojas.</p>
                                <p>Para se tornar um cliente digital, basta se cadastrar no portal https://www.portaldafatura.com.br/faq , acessando com CPF+ data de nascimento e aderir fatura digital para receber sua fatura no celular e/ou e-mail.</p>
                            </div>
                        </div>
                        
                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>5.</p></div>
                                <div className={styles.tituloTextGeral}><h3>Anuidade</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <p>A anuidade diferenciada (“AD”) é cobrada mensalmente, sempre que houver movimentação na conta do cliente, pela disponibilização e utilização do cartão na rede de estabelecimentos afiliados.<br></br>
                                *"AD" R$ 5,99*<br></br>
                                *Será concedido o desconto de R$1,00 na Anuidade Diferenciada apenas aos clientes que efetuarem o pagamento em loja.<br></br>
                                Valores sujeitos a alteração sem prévio aviso.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.wrapperTituloGeral}>
                                <div className={styles.numberTextGeral}><p>6.</p></div>
                                <div className={styles.tituloTextGeral}><h3>O Cartão</h3></div>
                            </div>
                            <div className={styles.contentTextGeral}>
                                <h4>6.1 Segunda via ou cartão adicional</h4>
                                <p>É possível solicitar a segunda via do cartão ou adicional por meio de nossa central de relacionamento Cred-System: Grande São Paulo: 4003 3900 / Demais Localidades: 0800 729 3900.</p>
                                <h4>6.2 Cobertura</h4>
                                <p>Você poderá utilizar o seu cartão Maravilhas em qualquer uma de nossas lojas ou no site da empresa: www.maravilhasdolar.com.br</p>
                                <h4>6.3 Bloqueios</h4>
                                <h5>6.3.1 Senhas</h5>
                                <p>Se esqueceu sua senha, consulte nossa Central de Relacionamento Cred-System: Grande São Paulo: 4003 39 00 / Demais Localidades: 0800 729 3900.</p>
                                <h5>6.3.2 Perda ou Roubo</h5>
                                <p>Para comunicar perda ou roubo do seu cartão você deverá entrar em contato com a nossa Central de Relacionamento Cred-System: Grande São Paulo: 4003 39 00 / Demais Localidades: 0800 729 3900.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default TermosCartao; 