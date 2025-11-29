import React from 'react'

const Page = () => {
    return (
        <main className='min-h-screen'>
            <section className='max-w-[var(--max-width)] mx-auto px-5 py-10'>
                <h1>Impressum</h1>

                <article className='pt-5'>
                    <h2>Angaben gemäß § 5 TMG:</h2>
                    <p>Nizar Djassim</p>
                    <p>Wilhelm-marx-str.52 <br />90419 Nürnberg</p>

                    <div className='py-3'>
                        <h2>Kontkt:</h2>
                        {/* <p>Telefon: <a href="tel: +4917684070282">+49 1768 4070 282</a></p> */}

                        <p>E-Mail: contact@nizar-web.de</p>
                    </div>

                    <div className='py-3'>
                        <h2>Vertreten durch:</h2>
                        <p>Nizar Djassim</p>
                    </div>

                    <div className='py-3'>
                        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                        <p>Nizar Djassim <br />Wilhelm-marx-str.52 <br />90419 Nürnberg</p>
                    </div>

                    <div className='py-3'>
                        <h2>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</h2>

                        <p>238/211/71679</p>
                    </div>

                </article>
            </section>
        </main>
    )
}

export default Page