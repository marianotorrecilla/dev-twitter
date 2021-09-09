import css from 'styled-jsx/css'

export default css `
    section {
        display: grid;
        height: 90vh;
        place-items: center;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .lds-ring div {
        display: inline-block;
        height: 10px;
        width: 10px;
        position: relative;
        box-shadow: rgba(43, 152, 241, 0.904) 0px 0px 20px;
        margin: 37px 10px 10px;
        animation: 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite
            alternate none running bouncer;
    }

    .lds-ring div:nth-child(5n + 1) {
        background-color: var(--brand-color_1);
    }
    .lds-ring div:nth-child(5n + 2) {
        animation-delay: calc(0.1s);
        background-color: var(--brand-color_2);
    }
    .lds-ring div:nth-child(5n + 3) {
        animation-delay: calc(0.2s);
        background-color: var(--brand-color_3);
    }
    .lds-ring div:nth-child(5n + 4) {
        animation-delay: calc(0.2s);
        background-color: var(--brand-color_4);
    }
    .lds-ring div:nth-child(5n + 5) {
        animation-delay: calc(0.4s);
        background-color: var(--brand-color_5);
    }

    @keyframes bouncer {
        100% {
            transform: scale(1.75) translateY(-20px);
        }
    }
`