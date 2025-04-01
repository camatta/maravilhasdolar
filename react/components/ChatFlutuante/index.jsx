import { useEffect } from "react";

const ChatFlutuante = () => {
    useEffect(() => {
        if (window.HiBot !== undefined) return;

        const script = document.createElement("script");
        script.src = "https://cdn-bot.hiplatform.com/dtbot.js?token=dc6dbb94-3a21-4884-b159-e72be8e4e6ef&widget=true&tab=true&from=bottomright&widgetType=custom&iconId=e5e67a93-d96b-4307-80c6-d9e63a51f6e8";
        script.async = true;
        script.id = "dtbot-script";

        document.body.appendChild(script);

        script.onload = () => {
            setTimeout(() => {
                const botElement = document.querySelector(".dt-BOTfloater");
                if (botElement) {
                    botElement.style.bottom = "30px";
                }
            }, 1000);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatFlutuante;
