'use-client';

export default function Goals() {
    return (
        <div id='goals' className='full-page-section flex items-center justify-between px-8 md:px-16 lg:px-24'>
            <div className='w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto'>
                <h2 className="vertical-text text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest py-5">GOALS</h2>
                <div>
                    <iframe width="420" height="345" src="https://youtube.com/embed/m2kUuK-nAdw?si=N4WoGWbIEVEbEsNl" allowFullScreen></iframe>
                </div>
                <p className="text-xl md:text-2xl mb-8 font-light py-5">Voici un aperçu de notre projet. Débuté en 2024, le principe n'a pas changé et chaque jour nous avançons vers la version finale de l'application !</p>
            </div>
        </div>
    );
}