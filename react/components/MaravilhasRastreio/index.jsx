import React, { useEffect, useRef } from 'react'
import { Helmet } from 'vtex.render-runtime'
import styles from './MaravilhasRastreio.css'

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Falha ao carregar ${src}`))
    document.head.appendChild(s)
  })

const MaravilhasRastreio = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function boot() {
      try {
        // Carrega libs externas (na ordem)
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js')
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js')
        await loadScript('https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js')

        if (cancelled) return
        const $ = window.jQuery
        if (!rootRef.current || !window || !document || !$) return

        // Escopo: limitar seletores ao container deste componente
        const $root = $(rootRef.current)

        // Copia fiel do seu JS, ajustando seletores para $root.find(...)
        const empresa_id = '1,2,3,4,5'
        const api_tracking_url = 'https://www.datafrete.com.br/maravilhasdolar/api-tracking/'

        $.urlParam = function (name) {
          const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href)
          if (results) return results[1] || 0
          return null
        }

        function aplicarMascaraTipoDocumento(tipo_documento) {
          const $divNumeroDocumento = $root.find('#divNumeroDocumento')
          const $numero = $root.find('#numero_documento')
          $divNumeroDocumento.removeClass('col-md-4').addClass('col-md-3')

          if (tipo_documento == '1') {
            $numero.mask('999.999.999-99')
            $numero.prop('placeholder', 'CPF do recebedor')
          } else if (tipo_documento == '2') {
            $numero.mask('99.999.999/9999-99')
            $numero.prop('placeholder', 'CNPJ do recebedor')
          } else if (tipo_documento == '3') {
            $numero.unmask()
            $numero.prop('placeholder', 'Número do Pedido')
          } else if (tipo_documento == '4') {
            $numero.unmask()
            $numero.prop('placeholder', 'Número da Nota fiscal (Série/Número), ex 001/1530')
          } else if (tipo_documento == '5') {
            $numero.unmask()
            $numero.prop('placeholder', 'Número do Conhecimento de transporte')
          } else if (tipo_documento == '6') {
            $numero.mask('AA000000000AA')
            $numero.prop('placeholder', 'Código de objeto do Correios')
          } else if (tipo_documento == '41' || tipo_documento == '51') {
            $numero.mask('99999999999999999999999999999999999999999999')
            $divNumeroDocumento.removeClass('col-md-3').addClass('col-md-4')
            $numero.prop('placeholder', 'Chave de acesso (44 números)')
          }
        }

        function ajustarIconesTimeline(dados) {
          const $timeline = $root.find('#status-timeline')
          $timeline.removeClass('c0 c1 c2 c3 c4')
          $root.find('.status-div span').removeClass('statusOk')
          $root.find('#status-0 div, #status-1 div, #status-2 div, #status-3 div, #status-4 div').addClass('iconInactive')

          if (dados.status_codigo > -1) {
            $root.find('#status-0 span').addClass('statusOk')
            $root.find('#status-0 div').removeClass('iconInactive')
            $timeline.addClass('c0')
          }
          if (dados.status_codigo > 0) {
            $root.find('#status-1 span').addClass('statusOk')
            $root.find('#status-1 div').removeClass('iconInactive')
            $timeline.addClass('c1')
          }
          if (dados.status_codigo > 1) {
            $root.find('#status-2 span').addClass('statusOk')
            $root.find('#status-2 div').removeClass('iconInactive')
            $timeline.addClass('c2')
          }
          if (dados.status_codigo > 2) {
            $root.find('#status-3 span').addClass('statusOk')
            $root.find('#status-3 div').removeClass('iconInactive')
            $timeline.addClass('c3')
          }
          if (dados.status_codigo > 3) {
            $root.find('#status-4 span').addClass('statusOk')
            $root.find('#status-4 div').removeClass('iconInactive')
            $timeline.addClass('c4')
          }
        }

        function ajustarTabelaHistorico(historico) {
          const $tbody = $root.find('#tabela_historico_body')
          $tbody.html('')
          if (!historico) return
          historico.forEach((item) => {
            $tbody.append(
              `<tr><td>${item.dataHora}</td><td>${item.status}</td><td>${item.observacao}</td></tr>`
            )
          })
        }

        function mostrarOutrosPedidos(pedidos) {
          const $outros = $root.find('#outros_pedidos')
          let body = ''
          if (pedidos && pedidos.length) {
            let count = 1
            pedidos.forEach((p) => {
              const title =
                p.tipo_documento == 3
                  ? `Pedido ${p.numero_documento}`
                  : p.tipo_documento == 4
                  ? `Nota Fiscal ${p.numero_documento}`
                  : 'Documento'

              body += `
                <li class="list-group-item" style="padding:0px;">
                  <button style="text-align: left;" type="button" id="divSH${count}" class="showHide" data-toggle="collapse" data-target="#divShowHide${count}" aria-expanded="true" aria-controls="#showHideDiv${count}">
                    <h4 style="font-weight: bold; color: #333333;"><span>${title}</span><span style="float:right;" class="glyphicon glyphicon-plus"></span></h4>
                  </button>
                </li>
                <div id="divShowHide${count}" class="accordion-body collapse" style="border: 1px solid #d9d9d9; padding: 5px; margin-bottom: 5px;">
              `
              const arrayTitle = ['Transportadora', 'Última atualização em', 'Status', 'Local de destino', 'Data prevista para entrega']
              const arrayVar = ['nome_transportador', 'ultima_atualizacao_hora', 'ultima_atualizacao_status', 'destino', 'dt_pedidoprevisao']
              arrayTitle.forEach((label, ix) => {
                const val = p[arrayVar[ix]]
                if (val) {
                  body += `<li class="list-group-item showHideDiv${count}"><span class="prefix">${label}: </span><span>${val}</span></li>`
                }
              })
              if (p.link_rastreio) {
                body += `<li class="list-group-item showHideDiv${count}"><span class="prefix">Maiores informações sobre a entrega: </span><span><a href="${p.link_rastreio}" target="_blank">Rastreio transportadora</a></span></li>`
              }

              body += `
                <div class="order-status">
                  <div class="order-status-timeline">
                    <div class="order-status-timeline-completion c${p.status_codigo}"></div>
                  </div>
                  ${['Aprovado','Faturado','Enviado','Entregue','Completo'].map((label, x) => {
                    const isOk = p.status_codigo < x ? 'status' : 'status statusOk'
                    const isActive = p.status_codigo >= x ? 'icon' : 'icon iconInactive'
                    const sz = ['','style="background-size: 2.0em;"','style="background-size: 3.2em;background-repeat:no-repeat"','style="background-size: 2.0em;"','style="background-size: 5.0em;"'][x] || ''
                    return `<div class="image-order-status active img-circle" style="font-size: 0.8em">
                              <span class="${isOk}">${label}</span>
                              <div ${sz} class="${isActive}"></div>
                            </div>`
                  }).join('')}
                </div>
                <div>
                  <button type="button" class="btn cssPedidoStatusFundoCor" style="margin-bottom: 6px; margin-top: -6px;" data-toggle="collapse" data-target="#collapseExample${count}" aria-expanded="false" aria-controls="#collapseExample${count}">Visualizar Histórico</button>
                </div>
                <div class="bs-example collapse in" id="collapseExample${count}">
                  <div class="panel panel-default">
                    <table class="table table-hover table-condensed table-striped">
                      <thead>
                        <tr style="font-weight: bold; color: #919191">
                          <th>Data/Hora</th><th>Status</th><th>Observação</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${(p.historico||[]).map((h)=>`<tr><td>${h.dataHora}</td><td>${h.status}</td><td>${h.observacao}</td></tr>`).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>`
              count++
            })
          }
          $outros.html(body)
        }

        function atualizarCampos(resposta) {
          $root.find('#tituloPagina').text(resposta.titulo)
          $root.find('#emailAnchor').attr('href', 'mailto:' + resposta.email).text(resposta.email)
          $root.find('#telefone').text('Telefone: ' + resposta.telefone)

          if (resposta.atendimento1) $root.find('#atendimento1').text(resposta.atendimento1)
          if (resposta.atendimento2) $root.find('#atendimento2').text(resposta.atendimento2)
          const fav = document.getElementById('favicon')
          if (resposta.icone && fav) fav.setAttribute('href', resposta.icone)

          const info = resposta.informacoes_adicionais
          if (info && info.length) {
            $root.find('#informacoes_adicionais').html(info.map((i)=>`• ${i}<br />`).join('')).show()
          } else {
            $root.find('#informacoes_adicionais').hide().html('')
          }
          if (resposta.explicar_entrega_url_img) {
            $root.find('#explicar_entrega_img').attr('src', resposta.explicar_entrega_url_img)
            $root.find('#explicar_entrega_div').show()
          } else {
            $root.find('#explicar_entrega_div').hide()
          }
        }

        function rastrear() {
          const tipo_documento = String($root.find('#tipo_documento').val() || '')
          const numero_documento = String($root.find('#numero_documento').val() || '')
          if (!tipo_documento || !numero_documento) return false

          $('html,body').css('cursor', 'wait')
          $root.find('#rastrear_form :input').prop('disabled', true)

          $.ajax({
            type: 'POST',
            dataType: 'json',
            data: { tipo_documento, numero_documento, filial_id: 1, empresa_id },
            url: api_tracking_url + 'rastrear',
            success: (resposta) => {
              $root.find('#rastrear_form :input').prop('disabled', false)
              $('html,body').css('cursor', 'default')
              if (resposta.dados) {
                const dados = resposta.dados
                $root.find('#titulo_documento_descricao').html(`${dados.tipo_documento_desc} ${dados.numero_documento}`)
                $root.find('#nome_transportador').html(dados.nome_transportador || '-')
                $root.find('#ultima_atualizacao_data').html(dados.ultima_atualizacao_data || '-')
                $root.find('#ultima_atualizacao_status').html(dados.ultima_atualizacao_status || '-')
                $root.find('#destino').html(dados.destino || '-')

                if (dados.link_rastreio) {
                  $root.find('#link_rastreio_anchor').attr('href', dados.link_rastreio)
                  $root.find('#link_rastreio').show()
                } else {
                  $root.find('#link_rastreio_anchor').attr('href', '')
                  $root.find('#link_rastreio').hide()
                }

                $root.find('#data_previsao').html(dados.previsao_entrega_exibicao || '-')
                if (dados.previsao_entrega_exibicao) {
                  $root.find('#div_data_previsao').show()
                } else {
                  $root.find('#div_data_previsao').hide()
                }

                ajustarIconesTimeline(dados)
                ajustarTabelaHistorico(dados.historico)
                mostrarOutrosPedidos(dados.outros_pedidos)
              } else {
                alert('Não foi possível encontrar os dados do documento.')
              }
            },
            error: () => {
              $root.find('#rastrear_form :input').prop('disabled', false)
              $('html,body').css('cursor', 'default')
              alert('Não foi possível encontrar os dados do documento.')
            },
          })
          return false
        }

        function buscarInformacoesConfig() {
          $.ajax({
            type: 'GET',
            dataType: 'json',
            url: api_tracking_url + 'buscar-configuracoes?empresa_id=' + empresa_id,
            success: (resposta) => {
              if (resposta.success) {
                atualizarCampos(resposta)
                rastrear()
              }
            },
          })
        }

        function verificarParametros() {
          const tipo_documento = $.urlParam('tpDoc')
          const numero_documento = $.urlParam('cod')
          if (tipo_documento && numero_documento) {
            aplicarMascaraTipoDocumento(tipo_documento)
            $root.find('#tipo_documento').val(tipo_documento)
            $root.find('#numero_documento').val(numero_documento)
          }
        }

        // Inicializações equivalentes ao seu $(document).ready)
        $root.find('#numero_documento').mask('999.999.999-99')

        $root.on('change', '#tipo_documento', function () {
          const val = String($(this).val() || '')
          $root.find('#numero_documento').val('')
          aplicarMascaraTipoDocumento(val)
        })

        $root.on('click', '#divSH0 , #divSH1 , #divSH2 , #divSH3 , #divSH4 , #divSH5', function () {
          const $btn = $(this)
          if ($btn.find('span').hasClass('glyphicon-minus')) {
            $btn.find('.glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus')
          } else {
            $btn.find('.glyphicon-plus').removeClass('glyphicon-plus').addClass('glyphicon-minus')
          }
        })

        $root.on('submit', '#rastrear_form', function (e) {
          e.preventDefault()
          rastrear()
        })

        buscarInformacoesConfig()
        verificarParametros()
      } catch (e) {
        console.error(e)
      }
    }

    boot()
    return () => { cancelled = true }
  }, [])

  // HTML (body) da sua página, convertido para JSX e confinado ao container
  return (
    <div ref={rootRef}>
      <Helmet>
        <title id="tituloPagina">MARAVILHAS DO LAR</title>
        <link id="favicon" rel="shortcut icon" href="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/fontawesome/4.5.0/css/font-awesome.min.css?ver=4.5.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* CSS original dentro do componente */}
      <style>{`
        .showHide{width:100%}
        .shop-tracking-status .order-status{position:relative;width:100%;margin-bottom:2em!important;overflow:hidden;display:flex;justify-content:space-around;align-items:center}
        .shop-tracking-status .order-status-timeline{height:8px;width:75%;position:absolute;top:calc(50% + 9px);background:#F5F5F5;background-clip:content-box;border:1px solid #E1E1E1;box-shadow:0 0 5px 0 #FFF inset;z-index:-1}
        .shop-tracking-status .order-status-timeline .order-status-timeline-completion{height:8px;width:0;margin:0;border-radius:0;background:#00861d}
        .shop-tracking-status .order-status-timeline .order-status-timeline-completion.c1{width:33%}
        .shop-tracking-status .order-status-timeline .order-status-timeline-completion.c2{width:66%}
        .shop-tracking-status .order-status-timeline .order-status-timeline-completion.c3{width:100%}
        .shop-tracking-status .order-status-timeline .order-status-timeline-completion.c4{width:100%}
        .shop-tracking-status .image-order-status{width:60px;margin-top:10px;text-align:center;position:relative;float:left}
        .shop-tracking-status .image-order-status.disabled{filter:grayscale(100%)}
        .shop-tracking-status .image-order-status.active .status{color:#a7a7a7;font-weight:bold}
        .shop-tracking-status .image-order-status.active .statusOk:after{font-family:'FontAwesome';color:#30b048;content:'\\f00c';padding-left:5px}
        .shop-tracking-status .image-order-status .icon{width:60px;height:60px;background-color:#660066;border-radius:50%;padding:11px 13px;border:3px solid #fff;margin:0 auto;display:flex;justify-content:center;align-items:center}
        .shop-tracking-status .image-order-status .status{color:#333}
        .image-order-status-new .icon:before{content:'\\f187';color:#fff;font-size:2.5em;font-family:'FontAwesome'}
        .image-order-status-active .icon:before{content:'\\f017';color:#fff;font-size:3em;position:relative;font-family:'FontAwesome'}
        .image-order-status-intransit .icon:before{content:'\\f0d1';color:#fff;font-size:3em;position:relative;font-family:'FontAwesome';display:inline-block;transform:scaleX(-1);margin-left:2px}
        .image-order-status-delivered .icon:before{content:'\\f06b';color:#fff;font-size:3em;position:relative;font-family:'FontAwesome'}
        .image-order-status-completed .icon:before{content:'\\f05d';color:#fff;font-size:3em;position:relative;font-family:'FontAwesome'}
        .iconInactive{background-color:#c1c1c1!important}
        #rastrearDiv{padding-top:1.7em}
        .well{padding:5px}
        @media(max-width:990px){.btn{font-size:.7em}#showHideDivOne{font-size:.8em}tbody{font-size:.6em}#imgLogo{max-width:100%;margin:0 auto;display:block}}
        @media(max-width:600px){.image-order-status-new .icon:before,.image-order-status-active .icon:before,.image-order-status-intransit .icon:before,.image-order-status-delivered .icon:before,.image-order-status-completed .icon:before{font-size:2em}
        .shop-tracking-status .image-order-status .icon{height:4em;width:4em;border-radius:2em;padding:.7em .8em}span.status{font-size:.9em}#imgLogo{max-width:100%;margin:0 auto;display:block}}
        @media(max-width:440px){#imgLogo{max-width:100%;margin:0 auto;display:block;text-align:center}}
      `}</style>

      {/* BODY da página */}
      <div className={styles.wrapperRastreio}>
            <div className={styles.containerRastreio}>
              <div className={styles.rastreioHeader}>
                <h1 className={styles.rastreioTitle}>Acompanhe sua entrega</h1>
              </div>
            </div>
      </div>
      <div className={`shop-tracking-status ${styles.customContainer}`}>
        <div className="col-sm-12" style={{ width: '100%', float: 'left', backgroundColor: 'transparent', border: 'none', display: 'block' }}>
          <div className="form-horizontal" style={{ float: 'left', width: '100%' }}>
            <div className="form-group">
              <div
  id="formNumeroControle" className={`${styles.formControle}`}
>
                <div style={{ marginTop: '2em' }}>
                  <form method="post" id="rastrear_form" name="rastrear_form">
                    <div className="col-md-12">
                      <div className="col-md-4 formCabecalho">
                        <label htmlFor="tipo_documento">Tipo Documento</label>
                        <select className={`form-control ${styles.wrapperSelectForm}`} id="tipo_documento" name="tipo_documento">
                          <option value="1">CPF</option>
                          <option value="2">CNPJ</option>
                          <option value="3">Pedido</option>
                          <option value="4">Nota Fiscal (Série / Número)</option>
                          <option value="41">Nota Fiscal (Chave)</option>
                          <option value="5">Conhecimento de Transporte (Número)</option>
                          <option value="51">Conhecimento de Transporte (Chave)</option>
                          <option value="6">Objeto CORREIOS</option>
                        </select>
                      </div>
                      <div id="divNumeroDocumento" className="col-md-4 formCabecalho" >
                        <label htmlFor="numero_documento">Documento</label>
                        <input className={`form-control ${styles.wrapperSelectForm}`} placeholder="Informe o número do documento" maxLength={25} type="text" id="numero_documento" name="numero_documento" required />
                      </div>
                      <div className="col-md-2 formCabecalho" id="rastrearDiv">
                        <input type="submit" className={`btn cssPedidoStatusFundoCor ${styles.botaoEnviar}`} value="Rastrear" style={{ color: '#fff', fontWeight: 'bold' }} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="well col-sm-12" style={{ width: '100%', float: 'left', backgroundColor: 'transparent', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}>
          <ul className="list-group" style={{ lineHeight: '60%', listStyle: 'none', padding: '0' }}>
            <li className="list-group-item" style={{ padding: 0 }}>
              <button style={{ textAlign: 'left', backgroundColor: '#660066' }} type="button" id="divSH0" className="showHide" data-toggle="collapse" data-target="#showHideDivOne" aria-expanded="true" aria-controls="#showHideDivOne">
                <h4 style={{ fontWeight: 'bold', fontSize: '1em', color: '#fff' }}>
                  <span id="titulo_documento_descricao">Pedido</span>
                  <span style={{ float: 'right' }} className="glyphicon glyphicon-minus"></span>
                </h4>
              </button>
            </li>

            <div id="showHideDivOne" className="collapse in" style={{ border: '1px solid #d9d9d9', padding: 5, marginBottom: 5 }}>
              <li className="list-group-item pb-2"><span className="prefix">Transportadora:</span> <span id="nome_transportador">-</span></li>
              <li className="list-group-item pb-2"><span className="prefix">Última atualização em:</span> <span id="ultima_atualizacao_data">-</span></li>
              <li className="list-group-item pb-2"><span className="prefix">Status:</span> <span id="ultima_atualizacao_status">-</span></li>
              <li className="list-group-item pb-2"><span className="prefix">Local de destino:</span> <span id="destino">-</span></li>
              <li className="list-group-item pb-2" id="div_data_previsao" style={{ display: 'none' }}><span className="prefix">Data prevista para entrega:</span> <span id="data_previsao">-</span></li>
              <li className="list-group-item pb-2" id="link_rastreio" style={{ display: 'none' }}><span className="prefix">Maiores informações sobre a entrega:</span> <span><a id="link_rastreio_anchor" href="" target="_blank" rel="noreferrer">Rastreio transportadora</a></span></li>

              <br /><br />

              <div className="order-status" style={{ marginBottom: '-1em' }}>
                <div className="image-order-status image-order-status-new active img-circle" style={{ fontSize: '0.7em' }}><span className="status">Aprovado</span></div>
                <div className="image-order-status image-order-status-active active img-circle" style={{ fontSize: '0.7em' }}><span className="status">Faturado</span></div>
                <div className="image-order-status image-order-status-intransit active img-circle" style={{ fontSize: '0.7em' }}><span className="status">Enviado</span></div>
                <div className="image-order-status image-order-status-delivered active img-circle" style={{ fontSize: '0.7em' }}><span className="status">Entregue</span></div>
              </div>

              <div className="order-status">
                <div className="order-status-timeline"><div className="order-status-timeline-completion c0" id="status-timeline"></div></div>
                <div className="image-order-status image-order-status-new active img-circle" style={{ fontSize: '0.8em' }} id="status-0"><br /><br /><div className="icon iconInactive" style={{ backgroundSize: '2em' }}></div></div>
                <div className="image-order-status image-order-status-active active img-circle" style={{ fontSize: '0.8em' }} id="status-1"><br /><br /><div className="icon iconInactive" style={{ backgroundSize: '3.2em', backgroundRepeat: 'no-repeat' }}></div></div>
                <div className="image-order-status image-order-status-intransit active img-circle" style={{ fontSize: '0.8em' }} id="status-2"><br /><br /><div className="icon iconInactive" style={{ backgroundSize: '2em' }}></div></div>
                <div className="image-order-status image-order-status-delivered active img-circle" style={{ fontSize: '0.8em' }} id="status-3"><br /><br /><div className="icon iconInactive" style={{ backgroundSize: '5em' }}></div></div>
              </div>

              <button type="button" className={`btn cssPedidoStatusFundoCor ${styles.botaoEnviar}`} style={{ marginBottom: 6, backgroundColor: '#FF0066', color: '#fff', fontWeight: 'bold' }} data-toggle="collapse" data-target="#detalhes">Visualizar Histórico</button>

              <div className="bs-example collapse in" id="detalhes">
                <div className="panel panel-default">
                  <table className="table table-hover table-condensed table-striped" id="tabela_historico">
                    <thead>
                      <tr style={{ fontWeight: 'bold', color: '#919191' }}>
                        <th>Data/Hora</th><th>Status</th><th>Observação</th>
                      </tr>
                    </thead>
                    <tbody id="tabela_historico_body"></tbody>
                  </table>
                  <div id="painel"></div>
                </div>
              </div>
            </div>

            <div className="col-sm-12" id="outros_pedidos" style={{ padding: 0 }}></div>

            <li className="list-group-item col-sm-6" style={{ lineHeight: '170%', border: 'none' }}>
              <span className="prefix bold cssPedidoStatusTextoCor" style={{ color: '#006a96', fontSize: '1.2em' }}>Informações adicionais</span><br />
              <p id="informacoes_adicionais" style={{ display: 'none' }}></p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default MaravilhasRastreio