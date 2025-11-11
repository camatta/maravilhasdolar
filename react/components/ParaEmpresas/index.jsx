import React from 'react';
import styles from './para-empresas.css';

const ParaEmpresas = () => {

    return (
        
        <div className={styles.mainEmpresas}>
            <div className={styles.topoEmpresas}>
                <div className={styles.titleEmpresas}>
                    <h1>Para Empresas</h1>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Na Maravilhas do Lar, valorizamos parcerias que tornam o dia a dia dos negócios mais prático, econômico e eficiente. Nossa ampla linha de produtos, que vai de utensílios de cozinha a itens de organização, decoração, limpeza e papelaria, permite que sua empresa se equipe com tudo o que precisa para criar ambientes funcionais, agradáveis e acolhedores.</p>
                </div>
            </div>
            <div className={styles.cadastroEmpresas}>
                <div className={styles.titleTopicoEmpresas}>
                    <h4>Há duas formas de comprar com a gente, confira abaixo:</h4>
                </div>
                <div className={styles.textEmpresas}>
                    <h2>Através do site</h2>
                    <p>Receba seus pedidos diretamente no endereço da empresa ou retire gratuitamente em uma de nossas lojas localizadas no interior paulista</p>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Formas de pagamento disponíveis no site:</p>
                    <p>• Pix</p>
                    <p>• Cartão de Crédito</p>
                    <p>• <strong>Boleto bancário</strong> (valor mínimo de R$ 400,00) - O boleto é de <strong>pagamento antecipado</strong> — a Nota Fiscal é emitida somente após a confirmação do pagamento.</p>
                    <p><strong>Importante:</strong> No momento do checkout, insira corretamente os dados da sua empresa para que a <strong>Nota Fiscal seja emitida em nome do seu CNPJ.</strong> Em caso de dúvida, nosso atendimento está à disposição pelo telefone <strong>(11) 4000-1567</strong></p>
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <p className={styles.destaqueAtendimento}>Atendimento exclusivo para empresas:</p>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Entre em contato pelo WhatsApp (11) 93236-1811 para um suporte personalizado.</p>
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <p className={styles.destaqueAtendimento}>Solicite um orçamento:</p>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Envie um e-mail para <a href="mailto:vendas@maravilhasdolar.com.br" target="_blank">vendas@maravilhasdolar.com.br</a> — será um prazer atendê-lo.</p>
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <h2>Nas lojas físicas</h2>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Agilize suas compras visitando uma de nossas lojas. <strong>São mais de 50 unidades no interior paulista.</strong> Encontre a loja mais próxima <a href="https://www.maravilhasdolar.com/nossas-lojas">clicando aqui.</a></p>
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <p className={styles.destaqueAtendimento}>Compras faturadas:</p>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Esse formato está disponível apenas para empresas:</p>
                    <p>• Com mais de 12 meses de existência;</p>
                    <p>• Sediadas no estado de São Paulo (SP).</p>
                    <p>• As compras faturadas devem ser feitas presencialmente, diretamente nas lojas físicas.</p>
                    <p>• Não é possível realizar pedidos faturados pelo site.</p>
                    <p>Para compras com faturamento, é necessário passar por uma <strong>análise de crédito.</strong> Preencha o formulário disponível <a href="https://form.jotform.com/mktmlar/formulario-cadastro-empresas" target='_blank'>neste link.</a></p>
                    O prazo para análise é de até 7 dias úteis.
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <h4>Formas de pagamento nas lojas físicas:</h4>
                </div>
                <div className={styles.textEmpresas}>
                    <p>• Cartão de crédito, Cartão de débito, Pix ou Dinheiro</p>
                    <p>Após o pagamento no caixa, é possível solicitar a emissão da DANFE no balcão de atendimento da loja.</p>
                </div>
                <div className={styles.titleTopicoEmpresas}>
                    <h2>Seja um fornecedor</h2>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Quer ser nosso parceiro comercial?</p>
                    <p>Cadastre sua empresa <a href="https://form.jotform.com/mktmlar/cadastro-de-fornecedor" target='_blank'>neste link.</a></p>
                    <p>Nosso time de compras avaliará o material e, caso haja interesse nos seus produtos ou serviços, entraremos em contato.</p>
                </div>
            </div>
        </div>

    );
};

export default ParaEmpresas; 