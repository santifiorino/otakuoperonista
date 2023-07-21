import React from "react";
import {
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";

export const PageFooter: React.FC = () => {
    return (
        <div>
            <div className="bg-primary p-4 flex justify-center text-justify text-white font-light mx-auto">
                <div className="lg:max-w-5xl">
                    <p>
                        Sitio web desarrollado por{" "}
                        <a
                            href="https://www.instagram.com/santifiorino"
                            className="font-bold underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Santiago Fiorino
                        </a>
                        . No tengo relación alguna con ningún Partido Político.
                        Este sitio fue creado por puro entretenimiento.
                    </p>
                    <p>
                        Si querés agregar fotos a la base de datos contactame a
                        cualquier red social. Asegurate de que la mano se vea
                        clara y grande, y que detrás no tenga nada que facilite
                        saber la respuesta (Por ejemplo: Pelos de colores /
                        Banderas Argentinas).
                    </p>
                    <p>
                        Si la página incluye una foto tuya que no querés que sea
                        parte del proyecto, contactame a cualquier red social
                        indicando qué foto es y será borrada inmediatamente.
                        Todas las fotos del sitio fueron envíadas por
                        seguidores, haciendo imposisble verificar la
                        autenticidad de las mismas. De todas formas, para
                        preservar el anonimato, se blurearon partes de todas las
                        fotos.
                    </p>
                    <p>
                        Idea original del usuario de Twitter{" "}
                        <a
                            className="font-bold"
                            href="https://twitter.com/nachoinventado/status/1463289179022966790?s=21"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @nachoinventado.
                        </a>
                    </p>
                </div>
            </div>
            <div className="bg-secondary text-white py-10 text-center ">
                <div>
                    <h1 className="font-black text-4xl"> SOCIALS </h1>
                    <div className="flex justify-center mt-6">
                        <a
                            className="icon"
                            href="mailto: fiorinosanti@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            className="icon"
                            href="https://www.instagram.com/santifiorino"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="icon"
                            href="https://www.linkedin.com/in/sfiorino/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            className="icon"
                            href="https://www.youtube.com/channel/UCXOr5r5fLdvLlXxc14tXt9g"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            className="icon"
                            href="https://www.tiktok.com/@santifiorino"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
