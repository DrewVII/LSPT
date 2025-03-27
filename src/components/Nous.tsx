'use-client';

import Link from 'next/link';

export default function Nous() {
    return (
        <div id='goals' className='full-page-section flex items-center justify-between px-8 md:px-16 lg:px-24'>
            <div className='w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto'>
                <h2 className="vertical-text text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest py-5">NOUS</h2>
                <p className="text-xl md:text-2xl mb-8 font-light py-5"> Nous sommes simplement un groupe d'ami qui, un jour, a décidé de changer le cours des choses en donnant à chacun la chance de vivre la liberté que le sport offre.</p>
                <div>
                <h3 className="vertical-text text-2xl md:text-5xl lg:text-4xl font-extrabold tracking-widest py-5">CREDITS</h3>
                <ul>
                    <li >EMILE GOURANTON</li>
                    <li>SIRINE LAAMARI</li>
                    <li>NEHLA HIMRANE</li>
                    <li>PHILEMON VITTET</li>
                    <li>YVON FWALA</li>
                    <li>THOMAS GUN</li>
                    <li>ANDREW MAKUISA</li>
                </ul>
                </div>
            </div>
        </div>
    );
}