import Timeline from '../../components/Timeline';

export default function Home() {
    return (
        <div className="timeline-container" style={{ textAlign: 'center', paddingTop: '100px', display: 'flex', flexDirection: 'column'}}>
            <img src="msl-logo.svg" alt="Multisig Labs Logo" style={{ maxWidth: '500px' }}/>
            <Timeline />
        </div>
    );
}