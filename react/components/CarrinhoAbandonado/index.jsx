import React, { useEffect, useRef } from 'react';
import { useOrderForm } from "vtex.order-manager/OrderForm";

function CarrinhoAbandonado() {
    // Hooks SEMPRE chamados (SSR e client), mantendo ordem estável:
    const { orderForm } = useOrderForm();
    
    // Guarda os itens anteriores do carrinho
    const previousItemsRef = useRef([]);

    async function trackCart(action = 'update', options) {
        try {
            const isEmpty = !orderForm || !orderForm.items || orderForm.items.length === 0;

            if (isEmpty && !(options && options.allowEmpty)) {
                console.log('🛒 Carrinho vazio, não será rastreado');
                return;
            }

            const items = isEmpty
            ? []
            : orderForm.items.map(item => ({
                id: item.id,
                productId: item.productId,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                imageUrl: item.imageUrl,
            }))

            // Preparar dados para enviar
            const cartData = {
                cartId: orderForm && orderForm.id,
                customerId:
                (orderForm &&
                    orderForm.clientProfileData &&
                    orderForm.clientProfileData.email) ||
                'guest',
                customerEmail:
                orderForm &&
                orderForm.clientProfileData &&
                orderForm.clientProfileData.email,
                customerPhone:
                orderForm &&
                orderForm.clientProfileData &&
                orderForm.clientProfileData.phone,
                customerName:
                ((orderForm &&
                    orderForm.clientProfileData &&
                    orderForm.clientProfileData.firstName) ||
                    '') +
                ' ' +
                ((orderForm &&
                    orderForm.clientProfileData &&
                    orderForm.clientProfileData.lastName) ||
                    ''),
                items,
                totalValue: isEmpty ? 0 : orderForm.value,
                action, // 'add' | 'update' | 'remove'
                cartEmpty: options && options.cartEmpty ? true : false,
            }

            // Guarda o último cartId da sessão, para o checkout clássico ler depois
            if (typeof window !== 'undefined' && cartData.cartId) {
                window.localStorage.setItem('nrz_last_cart_id', String(cartData.cartId));
            }

            console.log(
                `📤 Enviando carrinho para tracking [${action}] (cartEmpty=${cartData.cartEmpty}):`,
                cartData.cartId
            );

            // Enviar para o middleware
            const response = await fetch(`https://middlewares-maravilhas-production.up.railway.app/cart/track`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartData)
            });

            const result = await response.json();
            
            if (result.success) {
                console.log('✅ Carrinho rastreado com sucesso:', result);
            } else {
                console.warn('⚠️ Erro ao rastrear carrinho:', result);
            }
            
        } catch (error) {
            console.error('❌ Erro ao rastrear carrinho:', error);
        }
    }

    useEffect(() => {
        if(!orderForm) return;

        const previousItems = previousItemsRef.current || [];
        const currentItems = orderForm.items || [];

        // 1) Primeira carga: se nunca teve item e continua vazio, não faz nada
        if (!previousItems.length && !currentItems.length) {
            previousItemsRef.current = currentItems;
            return;
        }

        // 2) Caso especial: antes tinha item, agora não tem nenhum → carrinho esvaziado
        if (previousItems.length > 0 && currentItems.length === 0) {
            console.log('🧹 Carrinho foi esvaziado (todos os itens removidos)');
            // action = 'remove', mas marcamos cartEmpty = true e allowEmpty = true
            trackCart('remove', { cartEmpty: true, allowEmpty: true });
            previousItemsRef.current = currentItems;
            return;
        }

        const mapById = (items) => items.reduce((acc, item) => {
            const key = String(item.id);
            acc[key] = {
                quantity: (acc[key] && acc[key].quantity ? acc[key].quantity : 0) + item.quantity,
                item 
            }
            return acc;
        }, {});

        const prevMap = mapById(previousItems);
        const currMap = mapById(currentItems);

        const added = [];
        const removed = [];
        const updated = [];

        // Itens atuais: novos ou com quantidade alterada
        Object.keys(currMap).forEach(id => {
            const curr = currMap[id];
            const prev = prevMap[id];

            if (!prev) {
                // Não existia antes -> item novo
                added.push(curr.item);
            } else if (prev.quantity !== curr.quantity) {
                // Existia, mas quantidade mudou
                updated.push(curr.item);
            }
        });

        // Itens anteriores que não existem mais -> removidos
        Object.keys(prevMap).forEach(id => {
            if (!currMap[id]) {
                removed.push(prevMap[id].item);
            }
        });

        // Se não houve diferença, não faz nada
        if (!added.length && !removed.length && !updated.length) {
            previousItemsRef.current = currentItems;
            return;
        }

        // Decide a action principal pro backend
        let action = 'update'

        if (added.length && !removed.length && !updated.length) {
            action = 'add'
        } else if (removed.length && !added.length && !updated.length) {
            action = 'remove'
        } else {
            // mix de coisas ou só update de quantidade
            action = 'update'
        }

        console.log({
            diffDebug: {
                added: added.map(i => ({ id: i.id, q: i.quantity })),
                removed: removed.map(i => ({ id: i.id, q: i.quantity })),
                updated: updated.map(i => ({ id: i.id, q: i.quantity })),
                decidedAction: action
            }
        });

        trackCart(action);

        // Atualiza referência para próxima comparação
        previousItemsRef.current = currentItems;
    }, [orderForm]);

    return (<></>);
}

export default CarrinhoAbandonado
