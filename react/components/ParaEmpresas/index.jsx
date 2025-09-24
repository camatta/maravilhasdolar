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
                    <p>Na Maravilhas do Lar, valorizamos parcerias que trazem praticidade, economia e qualidade para os negócios. Por isso, criamos condições especiais para empresas que utilizam seu CNPJ nas compras. Com nossa vasta linha de produtos, desde utensílios de cozinha até itens de organização, decoração e limpeza, você pode abastecer sua empresa com tudo o que precisa para oferecer um ambiente funcional e acolhedor.</p>
                </div>
            </div>
            <div className={styles.cadastroEmpresas}>
                <div className={styles.titleTopicoEmpresas}>
                    <h2>Cadastro para Compras Faturadas com CNPJ</h2>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Para cadastro com compras faturadas de Pessoa Jurídica, favor acessar o link abaixo e realizar o preenchimento do formulário de cadastro. O prazo para análise é de 7 dias úteis.</p>
                    <p>Realizamos a análise para situação cadastral com mais de 6 meses, com faturamento para 7, 14, 21 ou 30 dias.</p>
                </div>
                <div className={styles.wrapperCtaCadastro}>
                    <div className={styles.ctaCadastro}>
                        <a href="https://form.jotform.com/mktmlar/formulario-cadastro-empresas" target="_blank">Cadastre-se</a>
                    </div>
                    <div className={styles.textCtaCadastro}>
                        <p>As compras faturadas correspondem somente em lojas físicas.</p>
                    </div>
                </div>
            </div>
            <div className={styles.vantagensEmpresa}>
                <div className={styles.titleTopicoEmpresas}>
                    <h3>Vantagens para sua empresa</h3>
                </div>
                <div className={styles.wrapperCardsVantagens}>
                    <div className={styles.cardVantagem}>
                        <div className={styles.iconCardVantagem}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.2625 2.50062C26.2527 2.50015 26.2449 2.50003 26.2335 2.50003L17.4881 2.52382C16.652 2.52507 15.8478 2.84443 15.2386 3.41708L1.87038 15.9496C1.67841 16.1296 1.52459 16.3464 1.41806 16.5871C1.31153 16.8278 1.25447 17.0874 1.25025 17.3505C1.24604 17.6137 1.29476 17.875 1.39353 18.119C1.4923 18.3629 1.6391 18.5845 1.82521 18.7706L11.2295 28.1749C11.4111 28.3579 11.6273 28.503 11.8654 28.6018C12.1036 28.7006 12.359 28.751 12.6168 28.7502C12.6278 28.7502 12.6385 28.7502 12.6495 28.7499C12.9129 28.7467 13.1729 28.69 13.4137 28.5833C13.6546 28.4766 13.8713 28.3222 14.0507 28.1293L26.5829 14.7614C27.1557 14.1521 27.475 13.3476 27.4761 12.5114L27.4996 3.73753C27.4872 3.4134 27.3529 3.10589 27.1235 2.87655C26.8942 2.6472 26.5866 2.51293 26.2625 2.50062ZM17.5127 15.8509C17.5378 16.0148 17.4966 16.1819 17.3984 16.3155C17.3002 16.449 17.153 16.5381 16.9891 16.5631C16.8252 16.5882 16.658 16.547 16.5245 16.4488C16.3909 16.3506 16.3018 16.2034 16.2768 16.0395C16.1267 15.0544 15.5898 14.3195 14.8412 14.0738C14.4486 13.9449 14.0588 13.9853 13.8704 14.1734C13.496 14.5479 13.7215 15.1476 14.0303 15.8348C14.0877 15.9621 14.1393 16.078 14.1784 16.1784C14.2156 16.2749 14.2638 16.3817 14.3151 16.4964C14.6294 17.1996 15.2147 18.5085 14.2043 19.5189C13.8496 19.8738 13.3461 20.0603 12.7955 20.0603C12.5115 20.0588 12.2295 20.0124 11.96 19.9226C11.7231 19.8421 11.4971 19.7325 11.2872 19.5963L10.724 20.1595C10.6662 20.2186 10.5973 20.2657 10.5212 20.298C10.4451 20.3303 10.3633 20.3472 10.2806 20.3476C10.198 20.3481 10.116 20.3322 10.0395 20.3008C9.96307 20.2694 9.89359 20.2231 9.83512 20.1646C9.77666 20.1061 9.73038 20.0367 9.69896 19.9602C9.66754 19.8837 9.65161 19.8018 9.65209 19.7191C9.65257 19.6364 9.66944 19.5547 9.70174 19.4785C9.73404 19.4024 9.78112 19.3335 9.84025 19.2757L10.3809 18.7351C10.0102 18.2062 9.76947 17.5973 9.67824 16.9579C9.65322 16.794 9.69435 16.6269 9.79256 16.4933C9.89077 16.3597 10.038 16.2706 10.2019 16.2456C10.3658 16.2206 10.5329 16.2617 10.6665 16.3599C10.8001 16.4582 10.8892 16.6054 10.9142 16.7693C11.0644 17.7544 11.6012 18.4893 12.3498 18.735C12.7419 18.8639 13.1322 18.8234 13.3205 18.6353C13.6623 18.2936 13.5455 17.8379 13.1741 17.0069C13.1134 16.8714 13.0572 16.7448 13.0129 16.6306C12.9806 16.5476 12.9376 16.4524 12.8905 16.3477C12.5695 15.6336 11.9717 14.3046 12.9867 13.2899C13.5161 12.7604 14.3762 12.606 15.2308 12.8861C15.4677 12.9667 15.6937 13.0763 15.9036 13.2124L16.4668 12.6493C16.5246 12.5902 16.5935 12.5431 16.6696 12.5108C16.7457 12.4785 16.8275 12.4616 16.9102 12.4611C16.9928 12.4607 17.0748 12.4766 17.1513 12.508C17.2277 12.5394 17.2972 12.5857 17.3557 12.6442C17.4141 12.7026 17.4604 12.7721 17.4918 12.8486C17.5233 12.9251 17.5392 13.007 17.5387 13.0897C17.5382 13.1724 17.5214 13.2541 17.4891 13.3302C17.4568 13.4063 17.4097 13.4753 17.3506 13.5331L16.8099 14.0737C17.1807 14.6026 17.4215 15.2114 17.5127 15.8509ZM22.9678 9.68398C22.7056 9.9462 22.3715 10.1248 22.0078 10.1971C21.6441 10.2695 21.2671 10.2323 20.9245 10.0904C20.5819 9.9485 20.289 9.70818 20.083 9.39984C19.877 9.0915 19.767 8.72899 19.767 8.35815C19.767 7.98731 19.877 7.6248 20.083 7.31645C20.289 7.00811 20.5819 6.76779 20.9245 6.62587C21.2671 6.48396 21.6441 6.44683 22.0078 6.51917C22.3715 6.59152 22.7056 6.77009 22.9678 7.03232C23.1419 7.20643 23.28 7.41314 23.3743 7.64063C23.4685 7.86812 23.517 8.11194 23.5169 8.35817C23.5169 8.6044 23.4684 8.84822 23.3742 9.0757C23.28 9.30318 23.1418 9.50987 22.9677 9.68398H22.9678Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={styles.textsCardVantagem}>
                            <div className={styles.titleCardVantagem}>
                                <h4>Preços diferenciados</h4>
                            </div>
                            <div className={styles.textCardVantagem}>
                                <p>Ao comprar com CNPJ, você garante valores exclusivos que ajudam a reduzir custos e aumentar a lucratividade.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardVantagem}>
                        <div className={styles.iconCardVantagem}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.75 18.0625H5.3125C3.55209 18.0625 2.125 19.4896 2.125 21.25V28.6875C2.125 30.4479 3.55209 31.875 5.3125 31.875H12.75C14.5104 31.875 15.9375 30.4479 15.9375 28.6875V21.25C15.9375 19.4896 14.5104 18.0625 12.75 18.0625Z" fill="white"/>
                                <path d="M24.9688 31.875C28.783 31.875 31.875 28.783 31.875 24.9688C31.875 21.1545 28.783 18.0625 24.9688 18.0625C21.1545 18.0625 18.0625 21.1545 18.0625 24.9688C18.0625 28.783 21.1545 31.875 24.9688 31.875Z" fill="white"/>
                                <path d="M12.3026 15.9375H21.6972C22.2643 15.9375 22.821 15.7862 23.3101 15.4992C23.7992 15.2122 24.2029 14.8 24.4795 14.305C24.7562 13.81 24.8957 13.2501 24.8838 12.6832C24.8719 12.1162 24.709 11.5627 24.4119 11.0798L19.7146 3.44569C19.4293 2.98207 19.03 2.59923 18.5548 2.33368C18.0796 2.06813 17.5443 1.92871 16.9999 1.92871C16.4555 1.92871 15.9202 2.06813 15.445 2.33368C14.9698 2.59923 14.5705 2.98207 14.2852 3.44569L9.58788 11.0798C9.29074 11.5627 9.12783 12.1162 9.11594 12.6832C9.10405 13.2501 9.24361 13.81 9.52024 14.305C9.79687 14.8 10.2005 15.2122 10.6896 15.4992C11.1787 15.7862 11.7355 15.9375 12.3026 15.9375Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={styles.textsCardVantagem}>
                            <div className={styles.titleCardVantagem}>
                                <h4>Ampla variedade</h4>
                            </div>
                            <div className={styles.textCardVantagem}>
                                <p>Mais de 40 categorias de produtos que atendem desde operações até eventos e decorações.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardVantagem}>
                        <div className={styles.iconCardVantagem}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4177_22846)">
                                <path d="M12.4099 21.8722C11.3183 22.8809 9.80858 23.1068 8.4695 22.462C7.9854 22.2289 7.57689 21.907 7.25708 21.5215L5.43374 25.5543C5.35078 25.7378 5.44342 25.8761 5.48706 25.927C5.5307 25.9779 5.65326 26.0905 5.84718 26.0366L7.17455 25.6671C7.32582 25.6251 7.47872 25.6048 7.6295 25.6048C8.26557 25.6048 8.86423 25.9648 9.15249 26.5614L9.75197 27.8019C9.83953 27.9832 10.0038 28.0013 10.0721 28C10.1392 27.9991 10.3041 27.9773 10.387 27.7938L13.2872 21.3788C12.9686 21.4705 12.6668 21.6347 12.4099 21.8722Z" fill="white"/>
                                <path d="M22.5665 25.5543L20.7432 21.5215C20.4234 21.9071 20.0148 22.229 19.5307 22.462C18.1916 23.1068 16.6819 22.8809 15.5904 21.8722C15.3334 21.6347 15.0317 21.4705 14.7129 21.3788L17.6131 27.7938C17.6961 27.9774 17.861 27.9991 17.928 28C17.9964 28.0013 18.1606 27.9832 18.2482 27.8019L18.8476 26.5614C19.1359 25.9648 19.7346 25.6048 20.3706 25.6048C20.5214 25.6048 20.6744 25.6251 20.8256 25.6671L22.153 26.0366C22.3469 26.0905 22.4695 25.9779 22.5131 25.927C22.5568 25.8761 22.6495 25.7378 22.5665 25.5543Z" fill="white"/>
                                <path d="M23.9987 11.3636C22.4844 10.3267 22.0145 8.26798 22.929 6.67674C23.4787 5.7202 23.1926 4.77498 22.7416 4.20935C22.2905 3.64388 21.4326 3.1547 20.3778 3.47763C18.6232 4.01505 16.7205 3.09892 16.0465 1.3918C15.6414 0.365641 14.724 0 14.0007 0C13.2773 0 12.3599 0.365641 11.9548 1.39185C11.2808 3.09903 9.37826 4.01505 7.6235 3.47769C6.56864 3.15481 5.71086 3.64388 5.25975 4.20941C4.80874 4.77504 4.52267 5.72015 5.07233 6.6768C5.98682 8.26798 5.51694 10.3268 4.00264 11.3636C3.09232 11.987 2.94001 12.9627 3.1009 13.6679C3.26179 14.3732 3.82245 15.1861 4.91308 15.3527C6.72728 15.6299 8.04383 17.2808 7.91045 19.1113C7.83017 20.2116 8.49807 20.9391 9.14978 21.253C9.80154 21.5668 10.7867 21.6355 11.5969 20.8867C12.2708 20.264 13.1359 19.9525 14.0006 19.9525C14.8657 19.9525 15.7303 20.2638 16.4042 20.8867C17.2146 21.6356 18.1998 21.5669 18.8515 21.253C19.5032 20.9391 20.1711 20.2117 20.0908 19.1113C19.9574 17.2809 21.274 15.63 23.0882 15.3527C24.1788 15.1861 24.7394 14.3731 24.9004 13.6679C25.0613 12.9626 24.9089 11.9869 23.9987 11.3636ZM14.0007 18.3708C10.0317 18.3708 6.80275 15.1418 6.80275 11.1729C6.80275 7.20393 10.0317 3.97491 14.0007 3.97491C17.9697 3.97491 21.1986 7.20387 21.1986 11.1728C21.1985 15.1418 17.9696 18.3708 14.0007 18.3708Z" fill="white"/>
                                <path d="M14.0004 5.31702C10.7714 5.31702 8.14453 7.94399 8.14453 11.1729C8.14453 14.4018 10.7714 17.0288 14.0004 17.0288C17.2294 17.0288 19.8563 14.4018 19.8563 11.1729C19.8563 7.94399 17.2294 5.31702 14.0004 5.31702ZM17.0014 10.6051L13.3569 13.267C13.2412 13.3515 13.1024 13.3962 12.9611 13.3962C12.9247 13.3962 12.8881 13.3933 12.8517 13.3873C12.674 13.3579 12.5155 13.2583 12.412 13.1109L11.3218 11.5587C11.1088 11.2554 11.182 10.8368 11.4853 10.6238C11.7886 10.4108 12.207 10.484 12.4201 10.7873L13.1174 11.7801L16.2098 9.52139C16.5091 9.30291 16.929 9.3681 17.1475 9.66746C17.3661 9.96671 17.3006 10.3865 17.0014 10.6051Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4177_22846">
                                <rect width="28" height="28" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.textsCardVantagem}>
                            <div className={styles.titleCardVantagem}>
                                <h4>Qualidade e economia</h4>
                            </div>
                            <div className={styles.textCardVantagem}>
                                <p>Produtos com o melhor custo-benefício para o dia a dia da sua empresa.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardVantagem}>
                        <div className={styles.iconCardVantagem}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4177_22874)">
                                <path d="M19.8819 2.63432L17.7753 2.33494L16.8368 0.479197C16.5182 -0.152489 15.4818 -0.152489 15.1633 0.479197L14.2248 2.33501L12.1182 2.63438C11.3454 2.74363 11.0367 3.70107 11.6037 4.24206L13.1152 5.67937L12.7591 7.7045C12.6258 8.46656 13.4259 9.05256 14.1113 8.70062L16 7.73018L17.8888 8.70062C18.5837 9.05912 19.3729 8.45862 19.241 7.7045L18.8849 5.67937L20.3964 4.242C20.9634 3.701 20.6547 2.74363 19.8819 2.63432Z" fill="white"/>
                                <path d="M31.1944 8.35179L29.0878 8.05241L28.1493 6.19667C27.8307 5.56498 26.7943 5.56498 26.4758 6.19667L25.5373 8.05241L23.4307 8.35179C22.6579 8.46104 22.3492 9.41847 22.9162 9.95947L24.4278 11.3968L24.0716 13.422C23.9383 14.184 24.7384 14.77 25.4239 14.4181L27.3125 13.4476L29.2013 14.418C29.8997 14.7753 30.6847 14.1722 30.5535 13.4219L30.1974 11.3968L31.7089 9.95941C32.2759 9.41847 31.9671 8.46104 31.1944 8.35179Z" fill="white"/>
                                <path d="M8.56943 8.35179L6.46281 8.05241L5.52432 6.19667C5.20569 5.56498 4.16932 5.56498 3.85076 6.19667L2.91232 8.05241L0.805699 8.35179C0.0328882 8.46104 -0.275799 9.41847 0.2912 9.95947L1.80276 11.3968L1.44664 13.422C1.31332 14.184 2.11345 14.77 2.79888 14.4181L4.6875 13.4476L6.57625 14.418C7.27269 14.7753 8.06 14.1736 7.9285 13.422L7.57237 11.3968L9.08393 9.95947C9.65087 9.41847 9.34218 8.4611 8.56943 8.35179Z" fill="white"/>
                                <path d="M19.3798 20.5248C20.7349 19.4968 21.625 17.8854 21.625 16.0571C21.625 12.9553 19.1018 10.4321 16 10.4321C12.8982 10.4321 10.375 12.9553 10.375 16.0571C10.375 17.8854 11.2651 19.4967 12.6202 20.5248C9.648 21.8315 7.5625 24.795 7.5625 28.2446V31.0571C7.5625 31.5753 7.98181 31.9946 8.5 31.9946H23.5C24.0182 31.9946 24.4375 31.5753 24.4375 31.0571V28.2446C24.4375 24.795 22.352 21.8315 19.3798 20.5248Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4177_22874">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.textsCardVantagem}>
                            <div className={styles.titleCardVantagem}>
                                <h4>Atendimento especializado</h4>
                            </div>
                            <div className={styles.textCardVantagem}>
                                <p>Nossa equipe entende suas demandas e oferece as melhores soluções.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.paraQuem}>
                <div className={styles.titleTopicoEmpresas}>
                    <h3>Quem pode aproveitar?</h3>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Se você é empreendedor, lojista, gestor ou profissional autônomo que busca otimizar custos e manter a qualidade em alta, a Maravilhas do Lar é o seu lugar. Seja para organizar seu escritório, equipar sua cozinha ou decorar seus ambientes comerciais, temos o que você precisa!</p>
                </div>
                <div className={styles.wrapperCardsAproveitar}>
                    <div className={styles.cardAproveitar}>
                        <div className={styles.numberCardAproveitar}>
                            <span>1.</span>
                        </div>
                        <div className={styles.titleCardAproveitar}>
                            <h4>Cadastre o CNPJ da sua empresa</h4>
                        </div>
                        <div className={styles.textCardAproveitar}>
                            <p>Processo simples e sem complicações.</p>
                        </div>
                    </div>
                    <div className={styles.cardAproveitar}>
                        <div className={styles.numberCardAproveitar}>
                            <span>2.</span>
                        </div>
                        <div className={styles.titleCardAproveitar}>
                            <h4>Explore os benefícios exclusivos</h4>
                        </div>
                        <div className={styles.textCardAproveitar}>
                            <p>Desfrute de condições especiais.</p>
                        </div>
                    </div>
                    <div className={styles.cardAproveitar}>
                        <div className={styles.numberCardAproveitar}>
                            <span>3.</span>
                        </div>
                        <div className={styles.titleCardAproveitar}>
                            <h4>Abasteça sua empresa</h4>
                        </div>
                        <div className={styles.textCardAproveitar}>
                            <p>Produtos variados e de alta qualidade.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.facaParte}>
                <div className={styles.titleTopicoEmpresas}>
                    <h3>Faça parte do nosso time de parceiros!</h3>
                </div>
                <div className={styles.textEmpresas}>
                    <p>Transforme a experiência de compras da sua empresa com a Maravilhas do Lar. Juntos, podemos criar soluções práticas e econômicas para atender às suas demandas.</p>
                </div>
            </div>
        </div>

    );
};

export default ParaEmpresas; 