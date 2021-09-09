import styles from "./styles"

export default function Loading ({ children, disabled, onClick }) {
    return (
        <>
            <section>
                <main>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </main>
            </section>
            
            <style jsx>{styles}</style>
        </>
    )
}