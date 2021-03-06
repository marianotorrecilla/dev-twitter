import css from 'styled-jsx/css'
import { breakpoints, colors, fonts } from "styles/theme"
import { addOpacityToColor } from "styles/utils"

const backgroundColor = addOpacityToColor(colors.black, 0.1)

export default css`
    div {
        display: grid;
        height: 100vh;
        place-items: center;
    }

    main {
        background: ${colors.primary};
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        position: relative;
        width: 100%;
    }

    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`

export const globalStyles = css.global`
    html,
    body {
        background: ${colors.primary};
        background-image: 
            radial-gradient(${backgroundColor} 1px, transparent 1px), 
            radial-gradient(${backgroundColor} 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-family: ${fonts.base}
        }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    textarea, input {
        font-family: ${fonts.base}
    }
`

