import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Header = () => {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
    }

    const styles = {
        visible: 'left: 0',
        oculto: 'left: -1000%'
    }
    const style=((checked ? styles.visible : styles.oculto))
    
    const Lista = styled.ul`
    float: right;
    margin-right: 5%;
    @media (max-width: 950px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: ${root.black};
        top: 80px;
        text-align: center;
        transition: all .5s;
        ${style}
    }
    `


    return (
        <header>
            <Cabezado aria-label="Menú.">
                <Check 
                    type="checkbox"
                    aria-hidden="true"
                    id="check"
                    onChange={handleChange}
                ></Check>
                <Checkbtn 
                    htmlFor="check" 
                    aria-label="Menú"
                >
                    <i className="fas fa-bars" aria-hidden="true"></i>
                </Checkbtn> 
                
                <Lista 
                    aria-label="Lista del menú"
                >
                    <Elemento 
                        aria-label="Sección HOLA"
                    >
                        <Anchor href="#section-hola" aria-hidden="true">HOLA</Anchor>
                    </Elemento>
                    <Elemento 
                        aria-label="Sección CONOCIMIENTOS"
                    >
                        <Anchor href="#section-conoci" aria-hidden="true">CONOCIMIENTOS</Anchor>
                    </Elemento>
                    <Elemento 
                        aria-label="Sección PROYECTOS"
                    >
                        <Anchor 
                            href="#section-proyecto" 
                            aria-hidden="true"
                        >PROYECTOS</Anchor>
                    </Elemento>
                    <Elemento 
                        aria-label="Sección CONTACTO"
                    >
                        <Contacto 
                            href="#section-contacto" 
                            aria-hidden="true"
                        >CONTACTO</Contacto>
                    </Elemento>
                </Lista>
            </Cabezado>
        </header>
    );
};


const root = {
    gray: "#2e2c2a",
    red: "#AE2300",
    yellow: "#FBD600",
    black: "#000000",
    blue: "#4A71D5",
    redDark:  "rgba(107, 14, 0, 0.555)"
}



const Cabezado = styled.nav`
    background-color: ${root.red};
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 65px 0px ${root.redDark};
    position: fixed;
    top: 0;
    z-index: 1000;
    padding: 0rem 2rem;
    @media (max-width: 950px) {
        background-color: ${root.black};
        box-shadow: none;
        padding: 0rem 1rem;
  }
`
const Elemento = styled.li`
    display: inline-block;
    line-height: 80px;
    margin: 0 10px;
    @media (max-width: 950px) {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
`
const Anchor = styled.a`
    color: ${root.yellow};
    font-size: 1.3rem;
    font-weight: 500;
    text-shadow: #2e2c2a 1px 0 10px; 
    padding: 8px 13px;
    border-radius: 15px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
        color: ${root.black};
        transition: .3s;
    }
    &:focus{
        box-shadow: 0px 0px 9px 3px ${root.redDark};
    }
    @media (max-width: 950px) {
        font-size: 20px;
        font-weight: 500;
        &:hover{
            color:${root.red};
            transition: .3s;
        }
    }
` 
const Contacto = styled.a`
    background-color: ${root.blue};
    color: ${root.black};
    font-size: 1.3rem;
    font-weight: 700;
    padding: 8px 13px;
    border-radius: 15px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
        background-color: ${root.yellow};
    }
    @media (max-width: 950px) {
        font-size: 20px;
        font-weight: 500;
        &:hover{
            background-color: ${root.yellow};
            color:${root.black};
        }
    }
`

const Checkbtn = styled.label`
    font-size: 40px;
    color: ${root.red};
    float: right;
    line-height: 80px;
    margin-right:  8px;
    cursor: pointer;
    display: none;
    @media (max-width: 950px) {
        display: block;
    }
`
const Check = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

export default Header;