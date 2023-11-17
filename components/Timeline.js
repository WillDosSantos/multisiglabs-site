import AOS from "aos";
import Image from 'next/image';

function Timeline() {
    const accomplishments = [
        { year: 2018, title: "Title 1", logo: "/ggp-logo.svg", event: "Lorem ipsum dolor sit amet consectetur. Ipsum consectetur tincidunt mi pharetra. Viverra amet feugiat imperdiet dictumst. Aenean non eget sed imperdiet turpis. Ullamcorper cum est facilisis ac ac. Amet diam ipsum aliquet lectus ornare non. Enim egestas laoreet malesuada quam. Ipsum sit lectus facilisis senectus ornare enim. Malesuada vel posuere mollis lectus tortor nisi vel felis. Eu venenatis at viverra hendrerit sollicitudin. Sed pharetra id donec sit nisl sit. Vulputate hendrerit fermentum at odio eu." },
        { year: 2019, title: "Title 2", logo: "/pandasia-logo.svg", event: "Lorem ipsum dolor sit amet consectetur. Ipsum consectetur tincidunt mi pharetra. Viverra amet feugiat imperdiet dictumst. Aenean non eget sed imperdiet turpis. Ullamcorper cum est facilisis ac ac. Amet diam ipsum aliquet lectus ornare non. Enim egestas laoreet malesuada quam. Ipsum sit lectus facilisis senectus ornare enim. Malesuada vel posuere mollis lectus tortor nisi vel felis. Eu venenatis at viverra hendrerit sollicitudin. Sed pharetra id donec sit nisl sit. Vulputate hendrerit fermentum at odio eu." },
        // Add more accomplishments as you like
    ];

    return (
        <ul className="timeline">
            {accomplishments.map((entry, index) => (
                <li data-aos="fade-up" key={index}>
                    <div className="event-details">
                        <span>{entry.year}</span>
                        <span className="event-logo-container"><Image src={entry.logo} alt={`${entry.event} Logo`} width={50} height={50} /></span>
                        <h3>{entry.title}</h3>
                    </div>
                    <p style={{ textAlign: 'left' }}>{entry.event}</p>
                </li>
            ))}
        </ul>
    );
}

export default Timeline;