import Timeline from "../components/Timeline";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="timeline-container" style={{ textAlign: 'center', paddingTop: '100px', display: 'flex', flexDirection: 'column'}}>
            <Image data-aos="fade-up" data-aos-duration="1000" src="msl-logo.svg" alt="Multisig Labs Logo" width={500} height={83}/>
            <h3 data-aos="fade-up" data-aos-duration="1200" className="tagline">Bringing blockchain to the world</h3>
            <Timeline />
        </div>
    );
}