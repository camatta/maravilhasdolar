import { Link } from 'vtex.render-runtime'

import styles from './detalhamento-cartao.css';

const DetalhamentoCartao = () => {

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
                            <li><Link to="/termos-e-condicoes-cartao">Termos e condições de uso</Link></li>
                            <li><a href="https://lp.maravilhasdolar.com/cartao-maravilhas" target="_blank">Solicite seu cartão</a></li>
                            <li><Link to="/detalhamento-contrato-cartao-mlar" className={styles.activeLink}>Detalhamento Contrato Cartão MLar</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mainTermosCartao}>

                    <div className={styles.titleTermosCartao}>
                        <h1>RESUMO DO CONTRATO DOS CARTÕES DE CRÉDITO PRIVATE LABEL CREDSYSTEM</h1>
                    </div>

                    <div className={styles.headerMainTermos}>
                        <div className={styles.infosDataTermos}>
                            <p>Este é um Resumo do Contrato dos Cartões de Crédito Private Label Cred-System(“Contrato”). </p>
                            <p>Leia-o com bastante atenção, mas não deixe de ler, na íntegra, o Contrato para conhecer todas as regras para uso do Cartão, os seus direitos e suas obrigações. </p>
                        </div>
                    </div>

                    <div className={styles.textGeralMainTermos}>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p>O seu Contrato está distribuído da seguinte forma:</p>
                                <p>A. Definições usadas no Contrato do Cartão;</p>
                                <p>B. Informações sobre a Adesão ao Cartão e ao Sistema;</p>
                                <p>C. Informações sobre o Tratamento de seus Dados Pessoais;</p>
                                <p>D. Informações sobre o Uso do Cartão;</p>
                                <p>E. Informações sobre Encargos;</p>
                                <p>F. Informações sobre Medidas de Segurança;</p>
                                <p>G. Informações sobre Disposições Gerais</p>
                                <p>H. Informações sobre os Canais de Contato com a Cred-System.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>1. SOBRE O CARTÃO</h4>
                                <p>1.1. Seu Cartão é para uso pessoal e intransferível. Não empreste seu Cartão a ninguém.</p>
                                <p>1.2. Ao solicitar o Cartão você declara concordar com o Contrato e Encargos.</p>
                                <p>1.3. O Cartão pode ser utilizado para Transações: (i) de aquisição de bens e/ou serviços; e quando disponível, (ii) para contratação de seguros, planos de assistências, incluindo assistência odontológica, produtos financeiros e demais produtos ou serviços ofertados pela Emissora ou empresas conveniadas.</p>
                                <p>1.4. O Cartão tem cobrança de tarifa de anuidade. A Emissora poderá conceder descontos na anuidade, conforme critérios exclusivos.</p>
                                <p>1.5. Seus Dados Pessoais, incluindo sua biometria facial, solicitados na adesão ao Cartão, serão utilizados para análise cadastral e creditícia, autenticação de acessos ou Transações e conforme indicado no Contrato.</p>
                                <p>1.6. O Limite de Crédito do Cartão é único para uso do Titular e Adicional e pode ser consultado nos Canais Digitais disponibilizados pela Emissora.</p>
                                <p>1.7. Seu cadastro feito com a Emissora é único para todos os cartões e demais produtos ofertados pela Emissora e empresas do seu conglomerado.</p>
                                <p>1.8. Os seus Dados Pessoais poderão ser compartilhados para as finalidades previstas no Contrato e na nossa Política de Privacidade, em conformidade com a Lei nº 13.709, de 14 de agosto de 2018. Consulte o Portal da Privacidade da Emissora (https://privacidade.credsystem.com.br).</p>
                                <p>1.9. Em caso de atraso no pagamento da Fatura do seu Cartão, TODOS seus cartões emitidos pela Emissora poderão ser bloqueados ou cancelados, além da possibilidade da imediata comunicação do ocorrido aos órgãos de proteção ao crédito.</p>
                                <p>1.10. Sua Fatura poderá ser acessada, a qualquer tempo, no site www.credsystem.com.br.</p>
                                <p>1.11. Poderá ocorrer, conforme disponibilidade, a contratação de Operações de Financiamento (Transações parceladas com juros, financiamento do Rotativo, financiamento do Parcelamento da Fatura ou do saldo devedor total; financiamento do valor em Atraso).</p>
                                <p>1.12. O pagamento da Fatura em (i) valor inferior ao total e superior (ii) ao Pagamento Mínimo ou maior que a menor parcela ofertada para Parcelamento da Fatura, quando disponível, acarretará no financiamento da dívida, por meio de crédito Rotativo ou no Parcelamento, ficando o Titular obrigado ao pagamento dos Encargos decorrentes destas Operações de Financiamento.</p>
                                <p>1.13. Em caso de não pagamento do valor total da Fatura no respectivo vencimento, a Operação de Financiamento ensejará a cobrança de (i) juros remuneratórios, por dia de atraso, de acordo com a Operação de Financiamento contratada (Rotativo, Parcelamento ou Atraso); e, em caso de Atraso (ii) juros de mora de 1% ao mês e (iii) multa de 2% sobre o saldo devedor, além das demais despesas e Encargos incorridos pelo uso do Cartão ou operações realizadas. A aplicação das penalidades mencionadas nesta Cláusula, não exclui as demais previstas em Contrato.</p>
                                <p>1.14. O pagamento de valor inferior ao Pagamento Mínimo ou o não pagamento da Fatura acarretará na mora do Titular (“Atraso”), com o respectivo vencimento imediato dos valores a vencer, bem como o bloqueio de TODOS os cartões emitidos pela Emissora.</p>
                                <p>1.15. Em caso de dano, perda, furto ou roubo do Cartão você deverá avisar imediatamente a Emissora, via central de relacionamento ou outro meio disponibilizado para tal, para bloqueio ou Vf20220201cancelamento do Cartão. Você será responsável por todas as despesas até a comunicação à Emissora.</p>
                                <p>1.16. O Cartão poderá ser bloqueado ou cancelado, pela Emissora, por motivos de segurança, atraso no pagamento da Fatura, uso indevido e demais previsões contidas no Contrato.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>2. SOBRE OS ENCARGOS:</h4>
                                <p>2.1. Serão cobrados do Titular na Fatura:</p>
                                <p>(a) Tarifa – Anuidade Diferenciada, representada pela sigla “AD”;</p>
                                <p>(b) Tarifa - Emissão de 2ª via de Cartão;</p>
                                <p>(c) Tarifa - Envio de mensagem automática relativa à movimentação ou lançamento no Cartão;</p>
                                <p>(d) Prêmio do Seguro ou planos de assistências, incluindo odontológica, os quais, quando contratado por Você, passarão a ser cobrados na Fatura;</p>
                                <p>(e) Encargos decorrentes das Operações de Financiamento utilizadas (Transações parceladas com juros, financiamento do Rotativo, financiamento do Parcelamento da Fatura ou do saldo devedor total; financiamento do valor em Atraso), como juros remuneratórios, juros de mora e multa.</p>
                                <p>(j) IOF (Imposto sobre Operações Financeiras), quando for o caso.</p>
                                <p>2.2. Desde que Você seja previamente comunicado, poderão também ser cobrados outros serviços que venham a ser estabelecidos e/ou contratados.</p>
                                <p>2.3. Os Encargos estão disponíveis na Fatura e demais Canais Digitais disponibilizados pela Emissora, bem como na central de relacionamento.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>3. SOBRE SEUS PRINCIPAIS DIREITOS:</h4>
                                <p>3.1. Conhecer previamente as condições de uso do Cartão e seus respectivos Encargos;</p>
                                <p>3.2. Utilizar o Cartão até o Limite de Crédito disponível concedido pela Emissora;</p>
                                <p>3.3. Receber ou acessar a Fatura, mensalmente, fisicamente ou por meio eletrônico/digital.</p>
                                <p>3.4. Liquidar antecipadamente suas obrigações antes da data de vencimento, com a redução proporcional de encargos financeiros decorrentes da Operação de Financiamento das Transações feitas com juros, quando incidentes;</p>
                                <p>3.5. Cancelar o Cartão, a qualquer momento, via central de relacionamento, sem prejuízo do dever do Titular de pagar os valores ainda devidos à Emissora.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>4. SOBRE SUAS PRINCIPAIS OBRIGAÇÕES:</h4>
                                <p>4.1. Conferir atentamente a Fatura;</p>
                                <p>4.2. Pagar em dia a Fatura;</p>
                                <p>4.3. Pagar a Anuidade Diferenciada e demais Encargos devidos;</p>
                                <p>4.4. Acompanhar o Limite de Crédito disponível do seu Cartão;</p>
                                <p>4.5. Manter os dados cadastrais atualizados junto à Emissora;</p>
                                <p>4.6. NUNCA permitir o uso do Cartão por quaisquer terceiros, tampouco guardar sua senha, quando for o caso, com o Cartão ou fornecê-los a qualquer pessoa;</p>
                                <p>4.7. Comunicar a Emissora, imediatamente, em caso de não recebimento da Fatura em até 48 horas de antecedência da data de vencimento e consultar os Canais Digitais disponibilizados pela Emissora para tal. Os direitos e obrigações acima, não excluem os demais previstos no Contrato.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p>Site: www.credsystem.com.br</p>
                                <p>Central de Relacionamento: Grande São Paulo: (11)4003-3900</p>
                                <p>Outras Localidades: 0800-7293900</p>
                                <p>Endereço para correspondência: Al. Rio Negro, 161, 3ºandar, Barueri/SP, CEP:06454-000</p>
                                <p>E-mail: atendimento@credsystem.com.br</p>
                            </div>
                        </div>
                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p>Caso não tenha ficado satisfeito com seu atendimento em nossa Central de Relacionamento, contate a Ouvidoria 0800 777 5297 (de segunda à sexta-feira, das 9h às 17h, exceto feriados)</p>
                            </div>
                        </div>
                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p><strong>CONTRATO DOS CARTÕES DE CRÉDITO PRIVATE LABEL CREDSYSTEM</strong></p>
                                <p>Antes de aderir, desbloquear ou utilizar o Cartão, leia atentamente este Contrato e, em caso de dúvidas, entre em contato com nossos canais de atendimento, indicados ao final deste Contrato. Lembre-se que ao solicitar e/ou utilizar o Cartão, você estará concordando com todas as regras estabelecidas neste Contrato.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>A. DEFINIÇÕES</h4>
                                <p>1. Definições. Para perfeito entendimento e interpretação deste Contrato, todas as expressões definidas ou iniciadas com letra maiúscula, independentemente do gênero e se utilizadas no plural ou singular, deverão ser interpretadas de acordo com as seguintes definições:</p>
                                <p>i. Adicional: é a pessoa física, indicada por Você e aprovada pela Emissora para ser portadora do Cartão, cujos gastos, despesas e demais ações relacionadas ao Cartão são, perante a Emissora, de exclusiva responsabilidade do Titular;</p>
                                <p>ii. Anuidade Diferenciada: tarifa cobrada mensalmente na Fatura, identificada pela sigla “AD”, pela disponibilização e utilização do Cartão na rede de Estabelecimentos afiliados, para pagamento de bens e/ou serviços, bem como a disponibilização e gerenciamento, pela Emissora, de programas de benefícios e/ou recompensas vinculados ao Cartão;</p>
                                <p>iii. Canais Digitais: site, aplicativo de celular – quando disponível - e/ou portais do Cartão, Whatsapp, Chat (Cleo), conforme o caso. As informações disponibilizadas em cada um dos Canais Digitais poderão variar conforme canal consultado.</p>
                                <p>iv. Cartão: é o cartão de crédito virtual ou produzido de material plástico, emitido pela Emissora, em favor do Titular e/ou do Adicional, que podem possuir: (i) a marca da Emissora e/ou do Estabelecimento conveniado; (ii) nome do Titular ou do Adicional; (ii) número do Cartão; (iv) validade; (v) código de segurança (cvc); e (vi) chip, se emitido em material plástico. Por motivosde segurança, o cartão virtual não será dotado de numeração única;</p>
                                <p>v. Comprovante de Despesa: é o documento impresso no ato da aquisição de bens e/ou serviços nos Estabelecimentos que formaliza a Transação realizada e confirma a dívida contraída por Você e/ou Adicional;</p>
                                <p>vi. Conta: é a conta de pagamento pós paga, aberta pela Emissora quando da aprovação do seu Cartão ou de qualquer outro cartão de crédito emitido pela Emissora, em seu nome e sob a sua responsabilidade, a qual conterá seus dados cadastrais, o registro de suas Transações, pagamentos e demais informações relativas aos seus cartões de créditos, Transações ou demais produtos disponibilizados pela Emissora. O atraso no pagamento da Fatura do Cartão e/ou de qualquer outro cartão de crédito emitido pela Emissora, poderá acarretar no bloqueio da Conta e, consequentemente, de TODOS os cartões de crédito emitidos pela Emissora ou outros produtos eventualmente disponibilizados;</p>
                                <p>vii. Emissora: é a Credsystem Instituição de Pagamento Ltda. (atual denominação da CredSystem Administradora de Cartões de Crédito Ltda.), inscrita no CNPJ/ME sob o nº 04.670.195/0001-38, com sede na Alameda Rio Negro, 161, 3º andar, Barueri/SP, CEP 06454-000, responsável pela emissão do Cartão;</p>
                                <p>viii. Encargos: são todas as despesas devidas em decorrência do uso do Cartão, como tarifas, tributos, juros e multa devidos, inclusive quando da contratação de Operação de Financiamento, bem como da contratação de outros serviços ofertados e aceitos peloTitular que venham a ser acrescidos à Transação, fatura ou saldo devedor do Titular, conforme previsto neste Contrato, especialmente nas Cláusulas 7 e 8 deste;</p>
                                <p>ix. Estabelecimentos: são todos os estabelecimentos credenciados pela Emissora junto aos quais Você e/ou o Adicional poderá realizar Transações. As Transações realizadas por Você e/ou Adicional nestes Estabelecimentos serão aceitas exclusivamente na função cartão de loja (private label), na respectiva rede de Estabelecimentos;</p>
                                <p>x. Fatura: é o documento eletrônico disponibilizado a Você, mensalmente, que contém o demonstrativo mensal de despesas com as Transações realizadas e produtos ou serviços contratados por meio do Cartão, a data de vencimento da Fatura, os Encargos, o valor do pagamento mínimo, o Limite de Crédito, o custo efetivo total (“CET”), o local para efetuar o pagamento, avisos importantes, comunicações, dentre outras informações;</p>
                                <p>xi. Instituição Financeira: é a instituição financeira conveniada ao Sistema, com a qual o Titular poderá contratar Operações de Financiamento, por meio do mandato outorgado na Cláusula 6 do presente Contrato;</p>
                                <p>xii. LGPD ou Leis Aplicáveis ao Tratamento de Dados Pessoais: significa a Lei nº 13.709, de 14 de agosto de 2018 e demais leis aplicáveis ao Tratamento de Dados Pessoais, conforme periodicamente alterada, bem como das demais leis e regulamentos relacionados à proteção de dados pessoais e privacidade que possam ser aplicados a qualquer tratamento de Dados Pessoais no âmbito do Contrato. Os termos Dados Pessoais e Tratamento possuem os significados atribuídos a tais termos nas Leis Aplicáveis ao Tratamento de Dados Pessoais.</p>
                                <p>xiii. Limite de Crédito: é o valor máximo concedido pela Emissora a Você para a realização de Transações com o Cartão, segundo critérios de avaliação exclusivos e confidenciais da Emissora. O valor das Transações e Encargos, quando for o caso, serão deduzidos integralmente do valor do Limite de Crédito, o qual será recomposto na medida em que sua dívida for paga;</p>
                                <p>xiv. Operação de Financiamento: é a linha de crédito disponibilizada a Você, e quando for o caso, ao Adicional, por meio do mandato outorgado na Cláusula 6 do presente Contrato, cuja contratação dar-se-á nas hipóteses de: (i) financiamento de Transações parceladas que tenham incidência de juros;</p>
                                <p>(ii) financiamento de saldo devedor, nos casos em que não houver o pagamento integral da Fatura no vencimento; e</p>
                                <p>(iii) financiamento de saldo devedor, quando do parcelamento da Fatura ou da dívida total com a Emissora, mediante a cobrança de juros e outros</p>
                                <p>Encargos previstos em Contrato;</p>
                                <p>xv. Pagamento Mínimo: é o valor mínimo para pagamento da Fatura, estipulado pela Emissora e indicado na Fatura, que Você está obrigado a pagar até o vencimento da Fatura, para que Você não fique em Atraso e seu Cartão não seja bloqueado.</p>
                                <p>xvi. Programas de Benefício: programas que concedem descontos em Estabelecimentos conveniados e/ou prêmios para os Titulares que utilizarem o Cartão, conforme regras divulgadas pela Emissora para cada Programa de Benefício, as quais são definidas em observância à legislação em vigor;</p>
                                <p>xvii. Sistema: é o conjunto de pessoas (Emissora, Instituição Financeira, Titular e Adicional, Estabelecimentos e outras, que no presente não foram nominadas ou mesmo citadas),  procedimentos, contratos, normas e tecnologia operacional, necessários à emissão e administração do Cartão, além da abertura e manutenção da Conta dos Titulares;</p>
                                <p>xviii. Titular: é Você, pessoa física, maior de 18 (dezoito) anos, que nos termos deste Contrato e limites estabelecidos pela Emissora, está habilitada a realizar Transações, sendo responsável pelo cumprimento de todos os deveres, obrigações e dívidas assumidas por Você e Adicional mediante adesão a este Contrato;</p>
                                <p>xix. Transação: é toda e qualquer aquisição de bens e/ou serviços realizada por Você e/ou Adicional perante os Estabelecimentos, incluindo a contratação de outros produtos e serviços que eventualmente venham a ser oferecidos pela Emissora, Estabelecimentos ou empresas conveniadas por meio do Cartão.</p>
                                <p>xx. Voucher: autorização emitida ou disponibilizada, física ou eletronicamente, pela Emissora, para que o Titular ou Adicional faça Transações nos Estabelecimentos, a qual possui validade para uma única Transação e para o dia de sua emissão.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>B. ADESÃO AO CARTÃO E AO SISTEMA</h4>
                                <p>2. Adesão ao Cartão e ao Sistema. A adesão ao Cartão e, consequentemente ao Sistema,depende de aprovação da Emissora segundo seus critérios exclusivos de análise cadastral e creditícia. A adesão ocorrerá, quando da solicitação do Cartão pelo Titular, mediante a assinatura de proposta de adesão, após sua aprovação cadastral e creditícia.</p>
                                <p>2.1. Caso Você (i) desbloqueie seu Cartão e/ou, se existente, o Cartão do Adicional e/ou (ii) efetue Transações com o Cartão, ficará expressamente, confirmado que Você e/ou o Adicional concordou com as condições e regras para uso do Cartão vigentes no momento e com as condições previstas no Contrato em vigor.</p>
                                <p>2.2. A adesão ao Sistema implica na manifestação de sua concordância com as cláusulas do presente Contrato.</p>
                                <p>2.3. Uma vez que tenha aderido ao Sistema, Você fica expressamente ciente que:</p>
                                <p>2.3.1. a sua adesão ao Sistema dar-se-á uma única vez, ainda que, posteriormente, Você acolha ofertas realizadas pela Emissora ou por qualquer empresa integrante do Sistema, ou, ainda, Você venha a possuir qualquer outro cartão de crédito ou conta de pagamento de emissão da Emissora ou de gestão de empresas de seu grupo econômico, com os mesmos Adicionais ou não;</p>
                                <p>2.3.2. seu cadastro será único para registrar todas as suas Contas, Transações e de seus Adicionais, inclusive as realizadas com qualquer outro cartão emitido pela Emissora em seu nome e para empresas de seu conglomerado;</p>
                                <p>2.3.3. Você deverá manter seus dados cadastrais atualizados. Em caso de alteração, Você poderá realizar a atualização por meio da central de relacionamento ou nos Canais Digitais que tenha tal função habilitada.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>C. TRATAMENTO DE SEUS DADOS PESSOAIS:</h4>
                                <p>3.1. Tratamento de Dados Pessoais. A execução do objeto deste Contrato implicará em atividades de Tratamento de Dados Pessoais. Nesse sentido, a Emissora reconhece a necessidade  de garantir proteção aos Dados Pessoais objeto de Tratamento, nos termos deste Contrato e das Leis Aplicáveis ao Tratamento de Dados Pessoais, bem como declara e garante que todas as obrigações contidas nas Leis Aplicáveis ao Tratamento de dados pessoais e que sejam atribuíveis à Emissora em função desse Contrato serão observadas durante a execução deste Contrato.</p>
                                <p>3.1.1. A Emissora adota as melhores práticas de segurança para garantir a integridade e a confidencialidade dos Dados Pessoais coletados, adotando mecanismos de proteção contra o uso indevido, tentativas de acesso não autorizados, vazamentos, fraudes, danos, sabotagens, roubo e qualquer incidente envolvendo os dados pessoais.</p>
                                <p>3.1.2. Para verificar e validar a identificação e a qualificação do Titular e Adicional, bem como a autenticidade das informações por eles fornecidas, a Emissora poderá realizar a confrontação dessas informações com as disponíveis em bancos de dados de caráter público ou privado.</p>
                                <p>3.2. A Emissora poderá coletar e Tratar Dados Pessoais como os dados cadastrais, financeiros, transacionais, geolocalização, que podem ser informados diretamente por Você, recebidos em decorrência da prestação de serviços ou fornecimento de produtos pela Emissora a Você ou a Você relacionados, bem como recebidos de outras fontes conforme permitido pela lei, como por exemplo, fontes públicas, outras instituições dos sistema financeiro, empresas conveniadas, fornecedores, bureaus, bem como empresas e órgãos com os quais a Emissora tenha alguma relação contratual e com os quais Você possua ligação.</p>
                                <p>3.2.1. A Emissora poderá ainda coletar sua biometria, inclusive facial e digital, em produtos e serviços da Emissora para processos validação cadastral e creditícia, de identificação e autenticação, em sistemas eletrônicos próprios ou de terceiros, para fins de segurança e prevenção a fraudes.</p>
                                <p>3.3. A Emissora poderá realizar o Tratamento de Dados Pessoais para diversas finalidades relacionadas à emissão, manutenção, avaliação e ao aprimoramento do Cartão, tais como:</p>
                                <p>(i) manutenção e aperfeiçoamento das funcionalidade e recursos do Cartão;</p>
                                <p>(ii) oferta, divulgação, prestação de serviços e fornecimento de produtos;</p>
                                <p>(iii) permitir a utilização do Cartão, o acesso as suas informações nos Canais Digitais, canais de atendimento e a comunicação com Titular ou Adicional por meio de todos os canais de atendimento disponibilizados pela Emissora;</p>
                                <p>(iv) criação e manutenção de programas de relacionamento, campanhas de incentivo à utilização do Cartão e promoções diversas , bem como envio de correspondência contendo oferta de produtos e serviços próprios da Emissora ou de terceiros a ela relacionados,envio de avisos, cobranças, informações publicitárias, pesquisas de satisfação, especialmente em formato eletrônico/digital, via e-mail e/ou mensagem de texto via celular“SMS”, Whatsapp, Aplicativo ou Chat (Cleo);</p>
                                <p>(v) execução de contrato e de etapas prévias ao contrato;</p>
                                <p>(vi) avaliação do seu perfil e dos produtos, serviços e benefícios mais adequados para Você;</p>
                                <p>(vii) atividades de crédito, financeiras, de investimento, cobrança e demais atividades da Emissora; (viii) cumprimento de obrigações legais eregulatórias;</p>
                                <p>(ix) atendimento de requisições de autoridades administrativas e judiciais; (x) exercício regular de direitos, inclusive em contratos e processos administrativos, judiciais e arbitrais; (xii) análise, gerenciamento e tratamento de potenciais riscos, incluindo os de crédito, fraude e segurança em sistemas eletrônicos;</p>
                                <p>(xii) verificação da sua identidade e Dados Pessoais, inclusive dados biométricos, para fins de autenticação, segurança e/ou prevenção à fraude;</p>
                                <p>(xiii) verificação, análise e Tratamento de Dados Pessoais para fins de avaliação, manutenção e aprimoramento dos nossos serviços;</p>
                                <p>(xiv) hipóteses de legítimo interesse, como desenvolvimento e ofertas de produtos e serviços da Emissora;</p>
                                <p>(xv) proteção ao crédito; e</p>
                                <p>(xvi) execução do Contrato ou de procedimentos preliminares relacionados ao Contrato.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p>3.3.1. Além disso, a Emissora poderá solicitar o seu consentimento, de forma livre, informada e inequívoca, quando for necessária a realização de Tratamento de Dados Pessoais para qualquer outra finalidade que não esteja prevista neste Contrato, na Política de Privacidade da Emissora e que não esteja amparado nas demais hipóteses de tratamento de dados previstas nas Leis Aplicáveis ao Tratamento de Dados Pessoais.</p>
                                <p>3.3.2. Caso seu Cartão não seja aprovado, seus Dados Pessoais serão armazenados para as finalidades relacionadas ao cumprimento das normas regulatórias e legislações aplicáveis, inclusive para exercício regular de direitos pela Emissora, bem como para posterior reanálise cadastral e creditícia visando a concessão do Cartão a Você.</p>
                                <p>3.4. Os seus Dados Pessoais poderão ser compartilhados para as finalidades previstas no Contrato e na nossa Política de Privacidade, como por exemplo, com Estabelecimento credenciado onde tenha realizado Transações, com prestadores de serviços, fornecedores localizados no Brasil ou no exterior, bureaus (serviços de proteção) de crédito de acordo com as leis, outras entidades do sistema financeiro, órgãos reguladores e entidades públicas, inclusive administrativas e judiciais e, ainda com parceiros estratégicos para possibilitar a oferta e utilização de produtos e serviços, especialmente se a emissão do Cartão decorrer de parceria comercial, e também para oferta e utilização de benefícios dos parceiros relacionados ao Cartão. Apenas compartilharemos Dados Pessoais na medida necessária, com segurança e de acordo com a lei, garantindo o mesmo nível de proteção aos Dados Pessoais assegurado pela Emissora.</p>
                                <p>3.4.1. A Emissora, nos termos da Lei Complementar nº 105, de 10 de janeiro de 2001 (“Lei de Sigilo Bancário”), poderá ainda compartilhar informações suas, e do Adicional, quando for o caso,com instituições financeiras em geral, para fins cadastrais e deformalização de Operação de Financiamento, observando, se e quando for o caso, as normas baixadas pelo Conselho Monetário Nacional e pelo Banco Central do Brasil (BACEN) Você também autoriza expressamente a Emissora, inclusive para fins da Lei de Sigilo Bancário, a compartilhar suas informações com as empresas do grupo da Emissora;</p>
                                <p>3.5. A Emissora poderá, após o encerramento do Tratamento dos Dados Pessoais no âmbito deste Contrato, armazenar os Dados Pessoais para finalidades relacionadas ao cumprimento das normas regulatórias e legislações aplicáveis, observados os prazos legais estabelecidos, ou, ainda, quando remanescer a necessidade de armazenamento dos Dados Pessoais em razão de manutenção de outros produtos e/ou serviços contratados por Você.</p>
                                <p>3.6. Para mais informações sobre o Tratamento de seus Dados Pessoais, inclusive sobre o exercício de seus direitos em relação aos seus Dados Pessoais, tais como correção, acesso, eliminação, bloqueio, anonimização e portabilidade dos Dados Pessoais, consulte o Portal da Privacidade da Emissora (https://privacidade.credsystem.com.br).</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>D. USO DO CARTÃO</h4>
                                <p>4. Uso do Cartão. O uso Cartão é realizado mediante a utilização do Voucher, assinatura do Comprovante de Despesa, a digitação de senha ou, conforme o caso, por outros meios que caracterizam a sua expressa manifestação de vontade e concordância com a Transação em questão.</p>
                                <p>4.1. A Emissora poderá autorizar, a seu critério, novas formas de utilização do Cartão ou de aprovação das Transações, ficando expressamente proibida a sua utilização em desacordo com o previsto neste Contrato ou nas instruções publicadas pela Emissora.</p>
                                <p>ATENÇÃO: Transações realizadas com o uso senha são de sua exclusiva responsabilidade.</p>
                                <p>4.2. Uso irregular do Cartão. Caso seja identificado pela Emissora que o Cartão está sendo utilizado irregularmente ou em operações não permitidas por lei, o Cartão poderá ser bloqueado ou cancelado pela Emissora, conforme o caso.</p>
                                <p>4.3. Anuência com a Transação. A realização de Transações com o Cartão implicará na sua manifestação inequívoca de aceitar as condições financeiras da Transação e, quando for o caso, da Operação de Financiamento e Encargos correspondentes.</p>
                                <p>4.4. Uso Nacional. O Cartão poderá ser utilizado exclusivamente nos Estabelecimentos conveniados, conforme respectiva marca identificada no Cartão, em território nacional – quando houver Estabelecimentos em diversas localidades, conforme regras estabelecidas pela Emissora e, conforme o caso, do Estabelecimento conveniado, devendo sempre ser observado o Limite de Crédito disponível do Cartão, o qual poderá ser acessado, a qualquer momento, nos Canais Digitais.</p>
                                <p>4.5. Cancelamento de Transações. Em caso de cancelamento de qualquer compra ou préautorização de uma Transação, Você deverá obter do Estabelecimento, o comprovante docancelamento da referida Transação. Para que haja o estorno de um valor ou não lançamento de uma Transação na Fatura, cujo pagamento já tenha sido realizado, o Estabelecimento será oexclusivo responsável por fazer a comunicação de estorno à Emissora.</p>
                                <p>4.6. Restrições. A Emissora não é responsável pela eventual restrição dos Estabelecimentos ao uso do Cartão, tampouco pela política de preços, quantidade, qualidade, durabilidade, vícios e defeitos dos bens e serviços negociados, cabendo exclusivamente a Você conferir a exatidão dos valores das Transações, verificar o Cartão após a sua devolução, a efetiva prestação de serviços e a forma de parcelamento e os Encargos decorrentes da Transação, se houver, e ainda, promover, por sua conta e risco, qualquer reclamação junto aos Estabelecimentos.</p>
                                <p>4.7. Novas Funcionalidades. A Emissora poderá disponibilizar a Você e/ou seu Adicionaloutras funcionalidades no Cartão ou serviços que poderão ser cobrados no Cartão, cuja contratação dar-se-á mediante sua adesão.</p>
                                <p>4.8. Sobre a Fatura. Você deve pagar o valor integral da sua Fatura na data de seu vencimento. Para pagamento da Fatura, a Emissora irá disponibilizá-la, mensalmente, via Correios, caso tenha sido esta sua opção, nos Canais Digitais disponíveis e/ou em seus endereços eletrônicos (e-mail ou telefone celular) para que Você efetue o pagamento até a data de vencimento especificada, conforme instruções indicadas na Fatura. O não recebimento ou o extravio da sua Fatura não desobriga Você de saldar os compromissos existentes nas respectivas datas de vencimento.</p>
                                <p>4.9. Fatura digital. Você poderá receber somente a Fatura digital/eletronicamente e ela estará disponível nos Canais Digitais. Caso Você não tenha conseguido acessá-la ou recebela, Você deverá solicitar o reenvio desta via central de relacionamento com 48 (quarenta e oito) horas de antecedência do dia do seu vencimento.</p>
                                <p>4.10. Atraso. ATENÇÃO: O atraso no pagamento da Fatura poderá acarretar no bloqueio da Conta e de TODOS os cartões emitidos pela Emissora, além da imediata comunicação do ocorrido aos órgãos de proteção ao crédito. Você poderá consultar suas dívidas vencidas e a vencer, a qualquer tempo, em nossos Canais Digitais e central de relacionamento.</p>
                                <p>4.11. Pagamento indevido. É expressamente proibido o pagamento da Fatura em valor superior ao montante total indicado na mesma, sob pena de, a critério da Emissora, bloqueio ou cancelamento do Cartão. Caso não seja identificada nenhuma infração à legislação em vigor e existam dívidas a vencer, o valor que exceder o pagamento integral da Fatura será utilizado para amortizar o pagamento dos débitos a vencer.</p>
                                <p>4.12. Não envio de Fatura. A ausência de movimentações na Conta, dispensa à Emissora de disponibilizar ou enviar Fatura.</p>
                                <p>4.13. Custo Efetivo Total (“CET”). O CET de cada Operação de Financiamento prevista neste Contrato será informado pela Emissora na Fatura, nos Canais Digitais e/ou em outros meios de comunicação colocado a sua disposição, na forma da taxa percentual mensal e anual.</p>
                                <p>4.14. Boleto Proposta. Nos termos da Circular emitida pelo BACEN sob o nº 3.656 de 02/04/2013, poderá ser enviado boleto de proposta de oferta de produtos ou serviços, o qual, o Titular poderá não aderir. Caso Você não queira receber tais propostas, poderá solicitar à Emissora, via central de relacionamento e a qualquer momento, que seus Dados Pessoais não sejam utilizados para este fim.</p>
                                <p>5. Limite de Crédito. O Limite de Crédito disponibilizado será o valor máximo concedido pela Emissora para todas as Transações realizadas por Você e pelo Adicional (considerados em conjunto), independentemente de qual for o Cartão que eventualmente venha aser utilizado, desde que de emissão da Emissora.</p>
                                <p>5.1. Redução de Limite. A Emissora poderá reduzir seu Limite de Crédito, a qualquer tempo, mediante seu pedido na central de relacionamento, a critério da Emissora (mediante comunicação nos termos da regulamentação em vigor) ou se a Emissora identificar a deterioração do seu perfil de risco de crédito, conforme critérios exclusivos de avaliação creditícia da Emissora, hipótese em que você será comunicado previamente sobre a redução até sua efetiva realização.</p>
                                <p>5.2. Aumento de Limite. A Emissora poderá aumentar seu Limite de Crédito, sempre que disponível, nos termos da regulamentação em vigor. Fica assegurado a Você, o direito de revogar a autorização concedida à Emissora para o referido aumento do Limite de Crédito, via central de relacionamento da Emissora.</p>
                                <p>5.3. Caso Você realize Transações após a alteração do Limite de Crédito, a realização da Transação equivalerá a sua expressa aceitação quanto ao novo Limite de Crédito.</p>
                                <p>5.4. Após o efetivo pagamento da Fatura, o Limite de Crédito do Cartão será restabelecido em até 3 (três) dias úteis, na proporção do valor pago por Você. </p>
                                <p>5.5. Enquanto o pagamento da Fatura não for processado, a Emissora poderá recusar a autorização de Transações, caso não haja Limite de Crédito disponível.</p>
                                <p>5.6. Você fica ciente que, na opção por qualquer modalidade de pagamento, incluindo as Operações de Financiamento, o montante das Transações e Encargos, quando for o caso, serão deduzidos integralmente do valor do Limite de Crédito, o qual será recompostona medida em que sua dívida for paga.</p>
                                <p>5.7. O saldo devedor das Faturas, vencido e/ou a vencer, compromete seu Limite de Crédito até a quitação total do mesmo.</p>
                                <p>5.8. Carnê de Pagamento. Alguns Estabelecimentos possuem Carnês de Pagamento como instrumento de pagamento das dívidas contraídas pelos Titulares ou Adicionais. Nestes Estabelecimentos, cada Transação realizada gerará um Carnê de Pagamento o qual conterá o valor de cada prestação a ser paga, data do vencimento de cada uma das parcelas e demais informações relativas à Transação, conforme indicado no Comprovante de Pagamento. O Titular deverá comparecer a um dos endereços indicados pela Emissora para realizar o pagamento de cada uma das parcelas em seus respectivos vencimentos. Todas as demais condições previstas neste Contrato aplicáveis às Faturas, serão aplicáveis aos Carnês de Pagamento, incluindo, mas não se limitando ao comprometimento do Limite de Crédito disponível, bloqueio ou cancelamento do Cartão, cobrança de Encargos, negativação em órgãos de proteção ao crédito, Operações de Financiamento contratado, entre outros previstos neste Contrato.</p>
                                <p>6. Cláusula Mandato. Neste ato, Você outorga à Emissora, mandato especial para representa-lo junto às Instituições Financeiras, com poderes para obter, em seu nome e por sua conta, financiamento das Transações e de valores não excedentes ao saldo devedor de sua Conta, podendo, para tanto, a Emissora, negociar e ajustar prazos e condições, bem como o custo do financiamento (juros, atualização monetária, tarifas e demais encargos), assinar contratos de abertura de créditos, títulos de crédito ou instrumentos de qualquer natureza, necessários para a Operação de Financiamento, que será utilizado única e exclusivamente em seu benefício, para os fins e na forma prevista neste Contrato.</p>
                                <p>6.1. A Emissora não cobrará qualquer valor de Você pela execução da Cláusula Mandato, ficando a cobrança restrita aos Encargos decorrentes da Operação de Financiamento.</p>
                                <p>6.2. A Emissora intervirá nas Operações de Financiamento como garantidora das suas obrigações.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>E. ENCARGOS</h4>
                                <p>7. Tarifas. Serão cobrados de Você na Fatura, conforme a natureza da Transação, as seguintes Tarifas e respectivas siglas indicadas na Fatura: TarifasAnuidade Diferenciada (“AD”)Emissão de 2ª Via do Cartão (“2ª Via do Cartão”)Envio de mensagem automática relativa à movimentação ou lançamento no CartãoFornecimento de cópia ou de segunda via de comprovantes e documentos</p>
                                <p>7.1. A Emissora poderá, a seu exclusivo critério, conceder descontos na Anuidade Diferenciada, conforme critérios próprios e confidenciais.</p>
                                <p>8. Serviços Contratados. Também poderão ser cobrados na Fatura, quando disponível, contratados e/ou conforme a natureza da Transação realizada por Você:Serviços ContratadosPrêmio de SeguroMensalidade de Plano Odontológico (“Odonto Cartão”)Planos de assistências e demais produtos ou serviços contratadosEncargos decorrentes das Operações de Financiamento IOF – Imposto sobre Operação Financeira</p>
                                <p>8.1. Desde que comunicado previamente a Você, poderão também ser cobrados na Fatura outros serviços que venham a ser contratados ou estabelecidos e, ainda, outros valores passíveis de ressarcimento.</p>
                                <p>8.2. Operações de Financiamento. Quando necessário, e observadas as condições previstas neste Contrato, Você poderá realizar Operações de Financiamento indicadas neste Contrato, mediante o pagamento de juros e demais Encargos.</p>
                                <p>8.3. Rotativo. O crédito Rotativo é uma Operação de Financiamento disponibilizada a Você pelas Instituições Financeiras, quando Você não efetua o pagamento integral da Fatura na respectiva data de vencimento. Neste caso, a diferença entre o valor pago e o valor total da Fatura, acrescida dos Encargos previstos na Cláusula 8.6 deste Contrato, conforme o caso, deverão ser quitados integralmente por Você até a data de vencimento da próxima Fatura.</p>
                                <p>8.3.1. O saldo devedor não liquidado somente poderá ser objeto de financiamento na modalidade crédito Rotativo, até o vencimento da fatura subsequente.</p>
                                <p>8.3.2. Se até a data do vencimento da próxima Fatura Você não tiver liquidado o valor obtido através do uso do crédito Rotativo, Você deverá liquidar o valor total da Fatura subsequente composto de: a) valor não pago da Fatura anterior e que foi financiado pelo crédito Rotativo; b) valor dos juros de financiamento decorrentes do crédito Rotativo contratado; c) valor dos tributos; d) demais Transações, Encargos, parcelamentos e das despesas que forem debitados na Fatura.</p>
                                <p>8.3.3. Para que Você não fique em mora, deverá ser realizado o pagamento, no mínimo, do valor indicado como Pagamento Mínimo na sua Fatura. </p>
                                <p>8.4. Parcelamento. Quando disponível, a Fatura poderá ser quitada por Você com recursos próprios ou mediante a contratação da Operação de Financiamento na modalidade Parcelamento da Fatura ou do saldo devedor total, se for o caso. </p>
                                <p>8.4.1. Você terá a opção de parcelar o valor total da Fatura, conforme opções informadas na Fatura mediante a contratação de uma Operação de Financiamento, desde que pago o valor mínimo exigido para cada parcela (o valor mínimo exigido para cada parcelaserá comunicado pela Emissora na Fatura). Se a Emissora não conseguir adequar o valor pago por Você para pelo menos um plano de parcelamento, Você deverá pagar o valor total da Fatura com recursos próprios.</p>
                                <p>8.4.2. Para aderir a um dos planos de Parcelamento de Fatura ofertado, Você deverá pagar exatamente o valor da entrada do plano escolhido, conforme instruções contidas na Fatura, o qual conterá a incidência dos encargos da Operação de Financiamento contratada. </p>
                                <p>8.4.3. O valor da entrada pago abaterá o valor total da Fatura e a diferença será parcelada no mesmo plano de parcelamento (prazo e encargos) nas Faturas subsequentes.</p>
                                <p>8.4.4. Parcelamento automático. O pagamento efetuado em valor superior ao valor da menor parcela ofertada para Parcelamento da Fatura, fará a adesão automática ao Parcelamento da Fatura. O valor pago será considerado como entrada (1ª parcela) para este parcelamento e, a partir da 2ª parcela, iniciará a cobrança do saldo residual que será dividido no plano com valor de parcela mais próximo e inferior ao valor pago, o qual será acrescido dos encargos do Parcelamento decorrentes desta Operação de Financiamento contratada.</p>
                                <p>8.4.5. As condições do Parcelamento serão mais vantajosas para a Você em relação àquelas praticadas na modalidade Rotativo, inclusive no que diz respeito à cobrança de encargos financeiros. </p>
                                <p>8.4.6. Após a adesão ao Parcelamento da Fatura, as próximas Faturas irão conter:</p>
                                <p>(i) o valor da parcela devida no referido mês;</p>
                                <p>(ii) Transações vincendas;</p>
                                <p>(iii) outros valores não financiáveis e</p>
                                <p>(iv) Encargos. </p>
                                <p>8.5. Atraso. Se Você</p>
                                <p>(i) pagar um valor inferior ao Pagamento Mínimo indicado na Fatura;</p>
                                <p>(ii) pagar valor inferior ao da menor entrada dos planos ofertados para Parcelamento da Fatura ou</p>
                                <p>(iii) não realizar o pagamento de qualquer valor, sua Fatura ficará em atraso e o valor eventualmente pago será utilizado apenas para abater o saldo devedor da Fatura, hipótese em que Você ficará sujeito ao pagamento dos Encargos decorrentes da Operação de Financiamento pelo Atraso.</p>
                                <p>8.5.1. Desde já Você anui que, caso Você atrase, por 2 (dois) meses consecutivos, os pagamentos acordados na Fatura em sua integralidade na data dos respectivos vencimentos, considerar-se-á antecipadamente vencida a dívida, ensejando na próxima Fatura a cobrança das Transações já vencidas e a vencer, além dos Encargos e das penalidades previstas na Cláusula 8.6. deste, além do bloqueio ou cancelamento do Cartão, a critério da Emissora.</p>
                                <p>8.6. Na hipótese de não liquidação integral da Fatura na data de seu vencimento, serão cobrados na próxima Fatura os seguintes Encargos decorrentes da contratação de Operação de Financiamento (nas modalidades Rotativo, Parcelamento ou Atraso): </p>
                                <p>a) Juros remuneratórios, por dia de atraso, devidos em decorrência da Operação de Financiamento contratada;</p>
                                <p>b) Multa de 2% (dois por cento) sobre o saldo devedor, nos termos da legislação em vigor, uma vez constatado o atraso do Titular; e</p>
                                <p>c) Juros de mora de 1% (um por cento) ao mês, calculado sobre o saldo devedor, nos termos da legislação em vigor, uma vez constatado o atraso do Titular.</p>
                                <p>8.7. O recebimento de quaisquer importâncias pagas com atraso por Você, sem a cobrança descritana Cláusula 8.6, quando aceito pela Emissora, deverá ser entendido como ato de mera liberalidade, não importando em renúncia ou novação deste Contrato, nem constituirá precedente invocável.</p>
                                <p>8.8. Você declara estar ciente de que o Atraso no pagamento de seus débitos acarretará, além das cobranças descritas na Cláusula 8.6, a imediata comunicação do ocorrido aos órgãos de proteção ao crédito, além do bloqueio ou cancelamento do Cartão e dos demais cartões que Você possuir com a Emissora.</p>
                                <p>8.9. O atraso no pagamento da Fatura poderá causar o cancelamento de seguros e/ou planos assistências de qualquer natureza e/ou outros serviços que houver contratado dos Estabelecimentos, Emissora ou terceiros a elas conveniados, por meio do Cartão, nos termos do contrato firmado entre Você e a Emissora ou entre Você e as referidas empresas.</p>
                                <p>8.10. Liquidação Antecipada. Você poderá, a qualquer tempo, solicitar à central de relacionamento, a liquidação antecipada, total ou parcial, dos seus débitos a vencer, sendo os encargos de financiamento nas Transações realizadas ou parceladas com juros, calculados pró rata dia.</p>
                                <p>8.11. É sua obrigação efetuar os pagamentos nas datas e valores fixados. No caso de Você deixar de efetuar os pagamentos nos vencimentos acordados ou efetuá-los em valor inferior ao pagamento mínimo indicado na Fatura, tampouco aderir ao Parcelamento da Fatura ou Parcelamento Total, se disponível, o Titular estará em mora e sujeito às penalidades previstas em caso de Atraso prevista na Cláusula 8.6 acima.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>F. MEDIDAS DE SEGURANÇA</h4>
                                <p>9. Dano, Perda, Furto ou Roubo do Cartão. No caso de dano, perda, furto ou roubo do Cartão, é dever do Titular informar, imediatamente, a ocorrência à Emissora via central de relacionamento.</p>
                                <p>9.1. Você será responsável pelo pagamento da tarifa de emissão de 2ª via do Cartão, nos termos indicados no Contrato do Cartão, quando este for novamente solicitado, bem como das despesas oriundas da utilização ocorrida no seu Cartão e do Adicional, quando existentes, inclusive daquelas decorrentes da perda, furto ou roubo, até o momento da referida comunicação à Emissora, a qual deverá ser ratificada, imediatamente, por escrito, nos termos da Cláusula 9.2 abaixo.</p>
                                <p>9.2 Em caso de perda, furto ou roubo do Cartão, Você deverá enviar à Emissora no prazo de até 72 (setenta e duas) horas da data da referida comunicação, o Boletim de Ocorrência lavrado pela autoridade policial competente para efetiva comprovação.</p>
                                <p>9.3. A partir da comunicação indicada na Cláusula 9 e 9.2 acima, Você ficará desobrigado de arcar com o pagamento da Transações que vierem a ser realizadas após a data da referida comunicação, exceto se for constatado pela Emissora, a qualquer tempo, que Você realizou algum tipo de contratação anterior que ensejou a cobrança de alguma Transação e/ou dos Encargos.</p>
                                <p>9.3.1. Os custos devidos pela contratação referida na Cláusula 9.3, serão cobrados na Fatura e, acrescidos regularmente, para todos os fins, aos demais valores devidos por Você pelo uso do Cartão. </p>
                                <p>9.4 Até que seja comunicada a perda, furto ou roubo do Cartão, Você ficará responsável pelo pagamento das despesas realizadas antes do cancelamento/bloqueio do Cartão.</p>
                                <p>9.5. É seu dever e do Adicional informar toda vez que desconfiar que o Cartão esteja sendo usado indevidamente por terceiros.</p>
                                <p>9.6. O uso de senha inválida seguidamente causará o bloqueio do Cartão.</p>
                                <p>10. Prevenção à Fraudes. Com o objetivo de prevenir fraudes contra os Cartões, a Emissora, por meio de sistemas informatizados e equipe especializada, procederá ao monitoramento das Transações e pagamentos efetuados por Você e/ou por seu Adicional.</p>
                                <p>10.1. Para sua segurança e do Adicional, a Emissora poderá proceder ao bloqueio ou cancelamentode qualquer Cartão emitido, quando identificar qualquer indício de que este esteja sendo objeto de fraude ou de outras operações ilícitas, oferecendo risco de perda financeira imediata ou futura, a Você, Adicional e/ou à EMISSORA.</p>
                                <p>10.2. Caso tenha sido realizado o bloqueio preventivo e seja constatada a autenticidade da Transação, por confirmação via contato com Você, Adicional ou por qualquer outro meio, o Cartãoem questão, poderá ser desbloqueado.</p>
                                <p>10.3. No caso de suspeita de fraude na utilização do Cartão, fica a Emissora autorizada a diligenciar no sentido de apurar o ocorrido, bem como efetuar registro de ocorrência policial junto aos órgãos competentes e/ou cancelar Cartão, se for o caso.</p>
                                <p>10.4. Identificada a utilização do Cartão de modo indevido ou de forma vedada pela legislação brasileira, a Emissora fica, desde já autorizada a efetuar o cancelamento do referido Cartão,declarando o vencimento antecipado de todas as dívidas existentes neste, coma compensação dos débitos, com eventuais créditos existentes a seu favor, conforme o caso.</p>
                                <p>10.5. Você pode contestar os lançamentos realizados em sua Fatura, num prazo não superior a 45 (quarenta e cinco) dias após a data de vencimento da Fatura. Enquanto não for esclarecida a dúvida, após recebimento da contestação formal, ficará suspensa a exigibilidade dos valores contestados até conclusão da apuração. Se apurado como exato e devido o valor originalmente lançado, será este imediatamente exigível, acrescido dos Encargos devidos que seriam normalmente cobrados a partir da data do vencimento original e serão debitados na próxima Fatura. Em caso de procedência da contestação e respectiva confirmação da fraude, todos os valores envolvidos serão estornados na próxima Fatura.</p>
                                <p>ATENÇÃO: Transações realizadas com o uso senha são de sua exclusiva responsabilidade.Você isenta a Emissora de qualquer responsabilidade decorrente de</p>
                                <p>(i) Transações não realizadas em virtude da suspeita de crimes financeiros;</p>
                                <p>(ii) Transações realizadas por terceiros com o uso de sua senha;</p>
                                <p>(iii) Transações realizadas por terceiros não autorizados em decorrência da falta de informe de bloqueio imediato do Cartão, após furto, roubo e/ou perda do seu Cartão.</p>
                                <p>10.6. A Emissora comunicará ao BACEN, ao Conselho de Controle de Atividades Financeiras ou outros órgãos que a legislação previr, as operações que possam estar configuradas na Lei 9.613/98 (que dispõe sobre os crimes de lavagem ou ocultação de bens,direitos e valores) e demais disposições legais pertinentes à matéria.</p>
                                <p>11. Bloqueio ou Cancelamento do Cartão. A Emissora poderá, conforme seus critérios exclusivos, bloquear ou cancelar o Cartão, a qualquer momento e sem comunicação prévia, na ocorrência das seguintes hipóteses:</p>
                                <p>a) violação ao presente Contrato ou do princípio da boa-fé contratual;</p>
                                <p>b) uso indevido do Cartão; </p>
                                <p>c) retorno e/ou devolução de correspondência à Emissora ou não localização de seu endereço;</p>
                                <p>d) suspeita ou ocorrência de fraude no Cartão;</p>
                                <p>e) verificação de irregularidades nas informações prestadas, consideradas de natureza grave;</p>
                                <p>f) Atraso no pagamento da Fatura do Cartão ou qualquer outro emitido pela Emissora, na data do respectivo vencimento;</p>
                                <p>g) caso Você não concorde com as cláusulas ou Encargos indicados neste Contrato;</p>
                                <p>h) morte ou insolvência do Titular do Cartão;</p>
                                <p>i) inscrição dos seus dados em órgãos de restrições de crédito, protesto ou execução, ou ainda, requerer ou lhe for requerida a insolvência;</p>
                                <p>]j) qualquer situação que indicar prejuízo para a Emissora, hipótese em que Você será previamente comunicado;</p>
                                <p>k) pagamento de valor superior ao saldo total indicado na Fatura; </p>
                                <p>l) utilização incompatível com a capacidade financeira ou atividade desenvolvida por Você; </p>
                                <p>m) falta de uso do Cartão, a critério da Emissora;</p>
                                <p>n) falta de atualização cadastral, a critério da Emissora.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <p>11.1. Os Cartões são enviados ao seu endereço de correspondência bloqueados.</p>
                                <p>11.2. Nas situações em que for possível, o desbloqueio do Cartão obedecerá às rotinas de segurança estabelecidas pela Emissora.</p>
                                <p>11.3. Cancelamento do Cartão. Você poderá solicitar o cancelamento do Cartão a qualquer tempo, mediante comunicação à Emissora. </p>
                                <p>11.4. O cancelamento do Cartão, pela Emissora ou solicitado por Você, NÃO extingue as obrigações assumidas por Você junto à Emissora, especialmente no que se refere às obrigações de pagamento dos valores vencidos e a vencer lançados na sua Fatura e/ou Conta, o que ocorrerá somente após o pagamento integral dos valores ainda devidos.</p>
                                <p>11.5. Na hipótese de cancelamento do Cartão a dívida apurada na sua Conta, desde já, é reconhecida como líquida, certa e imediatamente exigível, permanecendo, todavia, em pleno vigor, as cláusulas e condições do presente Contrato até a integral liquidação do débito apurado na sua Conta.</p>
                                <p>11.6. Caso tenha sido cancelado, Você e o Adicional deverão destruir, imediatamente, seus respectivos Cartão.</p>
                                <p>11.7. Cancelamento do Cartão do Adicional. Você poderá, a qualquer momento, solicitar o cancelamento do Cartão do Adicional. Nessa hipótese, Você deverá efetuar o pagamento o saldo remanescente das Transações anteriormente realizadas pelo Adicional.</p>
                                <p>ATENÇÃO: Uma vez cancelado o Cartão, este não poderá, em nenhuma hipótese, ser restabelecido.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>G. DISPOSIÇÕES GERAIS</h4>
                                <p>12. Disposições Gerais. As alterações ou atualizações que se façam necessárias ao Contrato, para adaptações jurídicas, regulatórias, econômicas e operacionais que ocorrerem durante a sua vigência, promovidas e elaboradas pela Emissora, serão comunicadas previamente a Você por informações ou mensagens lançadas na Fatura, nos Canais Digitais e/ou outros meios eletrônicos/digitais disponibilizados pela Emissora. </p>
                                <p>12.1. Caso Você e/ou Adicional continue a movimentar a Conta e/ou Cartão, após a vigência das alterações previamente informadas, Você estará concordando expressamente com as referidas alterações. </p>
                                <p>12.2. Havendo discordância do texto do novo Contrato, Você deverá, até a data da entrada em vigor das alterações contratuais, abster-se de usar os serviços colocados à sua disposição e informar sua intenção de rescindir o Contrato à Emissora, liquidando a dívida apurada, que, desde já, reconhece como líquida, certa e exigível. </p>
                                <p>12.3. A Emissora poderá adotar medidas que visem evitar o superendividamento do Titular. </p>
                                <p>12.4. Você reconhece que é de titularidade da Emissora toda a propriedade intelectual empregada no Aplicativo e nos Sistemas. Tal propriedade intelectual engloba:</p>
                                <p>(a) marcas, denominações sociais, nomes de serviços, slogans, trade dress, logotipos, nome de domínio da internet e outros sinais distintivos, assim como todos os pedidos, registros, extensões e renovações relacionadas;</p>
                                <p>(b) patentes, pedidos de patente e todas as renovações relacionadas, modelos de utilidade, pedidos de modelos de utilidade, certificados de adição, pedidos de certificados de adição, extensões e renovações relacionadas e registros de invenções;</p>
                                <p>(c) registros de desenhos industriais e pedidos de registros de desenho industrial, extensões e renovações relacionadas;</p>
                                <p>(d) direitos autorais, programas de computador, layouts, formas de apresentação, combinações de cores, códigos fonte e registros e pedidos de registro relacionados; e</p>
                                <p>(e) segredos industriais e know-how. Você se compromete a não violar, reproduzir, imitar, total ou parcialmente, qualquer propriedade intelectual da Emissora, bem como a não utilizar qualquer propriedade intelectual da Emissora para quaisquer finalidades além das previstas neste Contrato e permitidas por lei.</p>
                                <p>13. Contratação de seguros e planos de assistências e demais produtos ou serviços ofertados. Havendo a contratação/adesão aos seguros e/ou plano de assistências, incluindo plano odontológico ou quaisquer outros produtos ofertados (todos de contrataçãoopcional e sujeita à cobrança de Encargos), Você fica, desde já ciente que:</p>
                                <p>13.1. Caso Você venha aderir ao seguro, mencionado na cláusula anterior, o mesmo deverá atender aos requisitos da contratação, observando-se as Condições Gerais e o Certificado Individual de Seguro emitido pela seguradora autorizada a funcionar pela Superintendência de Seguros Privados-SUSEP, que mantenha convênio com o Sistema.</p>
                                <p>13.2. Caso Você contrate plano de assistência odontológica, a contratação deverá obedecer às regras disponibilizadas pela empresa operadora de plano odontológico conveniada à Emissora. Atenção: verifique condições de contratação e rescisão deste produto. </p>
                                <p>13.3. A adesão do seguro, planos de assistência, incluindo odontológica ou demais produtos e serviços ofertados, poderá ser realizada por Você, mediante solicitação na central de relacionamento, via assinatura de termo de adesão em Estabelecimentosconveniados,via Canais digitais, quando disponível, ou ainda pelo pagamento do valor do seguro e/ou plano odontológico ou demais produtos ofertados, por meio do pagamento do boleto de proposta mencionado neste Contrato.</p>
                                <p>14. Ressarcimentos. A qualquer das Partes é assegurado o direito de ressarcir-se dos custos de cobrança das obrigações devidas pela outra Parte, conforme condições previamente informadas, por quaisquer meios de comunicação admitidos no presente Contrato.</p>
                                <p>15. Cessão. A Emissora fica, desde já autorizada, a qualquer tempo, a ceder, transferir, dar em penhor ou caucionar, total ou parcialmente, os créditos oriundos deste Contrato, inclusive de financiamento concedidos ao Titular, bem como ceder os direitos, títulos, garantias ou interesses seus a terceiros, na forma prevista na legislação aplicável à matéria.</p>
                                <p>16. Tolerância. A tolerância ou transigência no cumprimento das obrigações contratuais será considerada ato de mera liberalidade, não constituindo renúncia ou novação ou modificação deste Contrato.</p>
                                <p>17. Prazo. O presente Contrato tem prazo de vigência indeterminado, passando a vigorar a partir da data da adesão do Titular ao mesmo.</p>
                                <p>18. Vigência. Para o Titular já integrante do Sistema, a vigência deste Contrato terá início após comunicação enviada ao Titular e/ou divulgação da nova versão no site www.credsystem.com.br.</p>
                                <p>19. Cumprimento das Obrigações. A Emissora e o Titular somente ficarão desobrigados dos efeitos do presente Contrato, após totalmente liquidadas e cumpridas todas as obrigações nele fixadas.</p>
                                <p>20. Registro. Para todos os efeitos legais e de publicidade, acha-se o presente Contrato registrado no Cartório de Registro de Títulos e Documentos da Cidade de Barueri, Estado de São Paulo. </p>
                                <p>20.1. O presente Contrato substitui o anteriormente registrado sob o nº 1405143, perante o Cartório de Registro de Títulos e Documentos da Cidade de Barueri, Estado de São Paulo. </p>
                                <p>21. Foro. Fica eleito o foro da Comarca do domicílio do Titular, para dirimir quaisquer dúvidas ou controvérsias que venham a surgir em virtude deste Contrato.</p>
                            </div>
                        </div>

                        <div className={styles.topicoTextMainTermos}>
                            <div className={styles.contentTextGeral}>
                                <h4>H. CANAIS DE CONTATO COM A CRED-SYSTEM</h4>
                                <p>Site: www.credsystem.com.br</p>
                                <p>Central de Relacionamento: Grande São Paulo: (11)4003-3900</p>
                                <p>Outras Localidades: 0800-7293900</p>
                                <p>Endereço para correspondência: Al. Rio Negro, 161, 3ºandar, Barueri/SP, CEP:06454-000</p>
                                <p>E-mail: atendimento@credsystem.com.br</p>
                                <p>Caso não tenha ficado satisfeito com seu atendimento em nossa Central de Relacionamento, </p>
                                <p>contate a Ouvidoria 0800 777 5297 (de segunda à sexta-feira, das 9h às 17h, exceto feriados)</p>
                                <p>Barueri, 29 de dezembro de 2021.</p>
                                <br />
                                <p>CREDSYSTEM INSTITUIÇÃO DE PAGAMENTO LTDA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalhamentoCartao; 