import React from 'react'

const Page = () => {
    return (
        <main className='min-h-screen'>
            <section className='max-w-[var(--max-width)] mx-auto px-5 py-10'>
                <h1>Datenschutzerklärung</h1>

                <article className='pt-5'>
                    <p>Ich freue mich über Ihren Besuch auf meiner Website und Ihr Interesse an meinen Dienstleistungen. Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Nachfolgend informiere ich Sie über die Verarbeitung Ihrer Daten im Zusammenhang mit dem Besuch meiner Website</p>

                    <div className='py-3'>
                        <h2>1. Verantwortlicher</h2>
                        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) bin ich: <br />
                            Nizar Djassim <br />
                            Wilhelm-marx-str.52 <br />
                            90419 Nürnberg</p>
                    </div>

                    <div className='py-3'>
                        <h2>
                            2. Erfassung und Verarbeitung personenbezogener Daten
                        </h2>

                        <p>
                            Ich erhebe und verarbeite keine personenbezogenen Daten, wenn Sie meine Website besuchen, es sei denn, Sie geben mir diese aktiv über das Kontaktformular zur Verfügung.
                        </p>
                    </div>

                    <div className='py-3'>
                        <h2>3. Kontaktformular</h2>
                        <p>Wenn Sie das Kontaktformular auf meiner Website nutzen, um mit mir in Kontakt zu treten, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Speicherung dieser Daten erfolgt nur für den Zeitraum, der zur Abwicklung Ihrer Anfrage erforderlich ist. Eine Weitergabe Ihrer Daten an Dritte findet nicht statt.</p>
                    </div>

                    <div className='py-3'>
                        <h2>
                            4. Beschwerderecht bei der Aufsichtsbehörde
                        </h2>
                        <p>
                            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt, haben Sie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Page