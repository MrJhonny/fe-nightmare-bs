import { useEffect } from "react";

const GoogleTag = () => {
  useEffect(() => {
    // Añadir la etiqueta de Google Tag Manager
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11505735258";
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11505735258');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null; // Este componente no renderiza nada
};

export default GoogleTag;