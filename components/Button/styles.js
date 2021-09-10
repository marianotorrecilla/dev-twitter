import css from 'styled-jsx/css'
import { colors } from "styles/theme"

export default css`
    button {
        align-items: center;
        background: ${colors.black};
        box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
        color: ${colors.white};
        cursor: pointer;
        border: 2px solid ${colors.black};
        border-radius: 9999px;
        display: flex;
        font-size: 16px;
        font-weight: 800;
        padding: 10px 24px;
    }

    button[disabled] {
        opacity: 0.2;
        pointer-events: none;
    }

    button > :global(svg) {
        margin-right: 8px
    }

    button:hover {
        opacity: .7;
    }
`