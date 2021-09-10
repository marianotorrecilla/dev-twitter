import css from 'styled-jsx/css'

export default css`
    article {
        border-bottom: 1px solid #000000aa;
        display: flex;
        padding: 10px 15px;
    }

    article:hover {
        background: #d1b6e6;
        cursor: pointer;
    }

    div {
        padding-right: 10px;
    }

    p {
        line-height: 1.3125;
        margin: 0;
    }

    img {
        border-radius: 10px;
        margin-top: 10px;
        height: auto;
        width: 100%;
    }

    time {
        color: #555;
        font-size: 14px;
    }

    time:hover {
        text-decoration: underline;
    }
`