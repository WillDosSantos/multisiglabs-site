import Timeline from "../components/Timeline";

export default function Home() {
    return (
        <div className="timeline-container" style={{ textAlign: 'center', paddingTop: '100px', display: 'flex', flexDirection: 'column'}}>
            <img data-aos="fade-up" data-aos-duration="1000" src="msl-logo.svg" alt="Multisig Labs Logo" style={{ maxWidth: '500px' }}/>
            <h3 data-aos="fade-up" data-aos-duration="1200" className="tagline">Bringing blockchain to the world</h3>
            <Timeline />
        </div>
    );
}