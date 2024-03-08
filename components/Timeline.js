import AOS from "aos";
import Image from 'next/image';

function Timeline() {
    const accomplishments = [
        { year: 2023, title: "GoGoPool - Protocol Launch", logo: "/ggp-logo.svg", event: "Introducing GoGoPool - a decentralized protocol to stake and validate AVAX. GoGoPool lowers the cost to validate by half the traditional route while offering the highest ROI in the network. The easiest, secure, and decentralized way to stake AVAX.", link: "https://www.gogopool.com/" },
        { year: 2023, title: "Pandasia Launch", logo: "/pandasia-logo.svg", event: "Reward AVAX validators through airdrops and grow the decentralized Subnet community. The secret is out. Are you in?", link: "https://www.pandasia.io/" },
        { year: 2022, title: "GoGoPool - Seed Funding", logo: "/ggp-logo.svg", event: "GoGoPool obtains $5 Million in seed funding from seasoned and trusted investors. Our vision is to bring blockchain to the world with the power of Subnets provided by the Avalanche Network. We're excited to embark on this journey togehter!", link: "https://www.theblock.co/post/166498/gogopool-raises-5-million-to-provide-decentralized-staking-on-avalanche" },
        { year: 2021, title: "MSL - Start Here", logo: "/logo-icon.svg" },
        // Add more accomplishments as you like
    ];

    return (
        <ul className="timeline">
            {accomplishments.map((entry, index) => (
                <li data-aos="fade-up" data-aos-duration="1300" key={index}>
                    <div className="event-details">
                        <span>{entry.year}</span>
                        <span className="event-logo-container"><Image src={entry.logo} alt={`${entry.event} Logo`} width={50} height={50} /></span>
                        <h3>{entry.title}</h3>
                    </div>
                    <p style={{ textAlign: 'left' }}>{entry.event}</p>
                    <a className="btn btn--small" href={`${entry.link}`}>Learn More</a>
                </li>
            ))}
        </ul>
    );
}

export default Timeline;