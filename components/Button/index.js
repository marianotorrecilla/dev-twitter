import styles from "./styles"

export default function Button ({ children, disabled, onClick }) {
    return (
        <>
            <button 
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>

            <style jsx>{styles}</style>
        </>
    )
}