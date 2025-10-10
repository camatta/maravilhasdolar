import React, { useEffect, useRef } from 'react';
 
const ReclameAqui = ({
  dataId = 'NlF3M0JYY29iZy00cjczTDptYXJhdmlsaGFzLWRvLWxhcg==',
  model = '2',
  targetId = 'reputation-ra',
  className = '',
  scale = 0.7
}) => {
  const containerRef = useRef(null);
 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    container.innerHTML = '';
 
    const prev = document.getElementById('ra-embed-reputation');
    if (prev && prev.parentNode) {
      prev.parentNode.removeChild(prev);
    }
 
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'ra-embed-reputation';
    script.src = 'https://s3.amazonaws.com/raichu-beta/selos/bundle.js';
    script.async = true;
    script.setAttribute('data-id', dataId);
    script.setAttribute('data-target', targetId);
    script.setAttribute('data-model', model);
 
    script.onload = () => {
      setTimeout(() => {
        const widget = document.getElementById(targetId);
        if (widget) {
          Object.assign(widget.style, {
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            display: 'inline-block'
          });
         
          // Ajusta elementos internos do widget de reputação
          const reputationWidget = widget.querySelector('#reputation-ra');
          if (reputationWidget) {
            Object.assign(reputationWidget.style, {
              transform: `scale(${scale})`,
              transformOrigin: 'top left'
            });
          }
        }
      }, 500);
    };
 
    container.appendChild(script);
 
    return () => {
      try {
        container.innerHTML = '';
      } catch {}
      const s = document.getElementById('ra-embed-reputation');
      if (s) s.remove();
    };
  }, [dataId, model, targetId, scale]);
 
  return (
    <div
      id={targetId}
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        height: '35px',
        marginTop: '10px',
      }}
    />
  );
};
 
export default ReclameAqui;