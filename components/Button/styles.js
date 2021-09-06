import css from 'styled-jsx/css'
import { breakpoints, colors, fonts } from "../../styles/theme"
import { addOpacityToColor } from "../../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export default css`
    button {
        align-items: center;
        background: ${colors.black};
        color: ${colors.white};
        cursor: pointer;
        border: 2px solid ${colors.black};
        border-radius: 9999px;
        display: flex;
        font-size: 16px;
        font-weight: 800;
        padding: 10px 24px;
    }

    button > :global(svg) {
        margin-right: 8px
    }

    button:hover {
        opacity: .7;
    }
`