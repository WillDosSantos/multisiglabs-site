function Timeline() {
    const accomplishments = [
        { year: 2018, title: "Title 1", event: "Lorem ipsum dolor sit amet consectetur. Ipsum consectetur tincidunt mi pharetra. Viverra amet feugiat imperdiet dictumst. Aenean non eget sed imperdiet turpis. Ullamcorper cum est facilisis ac ac. Amet diam ipsum aliquet lectus ornare non. Enim egestas laoreet malesuada quam. Ipsum sit lectus facilisis senectus ornare enim. Malesuada vel posuere mollis lectus tortor nisi vel felis. Eu venenatis at viverra hendrerit sollicitudin. Sed pharetra id donec sit nisl sit. Vulputate hendrerit fermentum at odio eu." },
        { year: 2019, title: "Title 2", event: "Lorem ipsum dolor sit amet consectetur. Ipsum consectetur tincidunt mi pharetra. Viverra amet feugiat imperdiet dictumst. Aenean non eget sed imperdiet turpis. Ullamcorper cum est facilisis ac ac. Amet diam ipsum aliquet lectus ornare non. Enim egestas laoreet malesuada quam. Ipsum sit lectus facilisis senectus ornare enim. Malesuada vel posuere mollis lectus tortor nisi vel felis. Eu venenatis at viverra hendrerit sollicitudin. Sed pharetra id donec sit nisl sit. Vulputate hendrerit fermentum at odio eu." },
        { year: 2020, title: "Title 3", event: "Lorem ipsum dolor sit amet consectetur. Ipsum consectetur tincidunt mi pharetra. Viverra amet feugiat imperdiet dictumst. Aenean non eget sed imperdiet turpis. Ullamcorper cum est facilisis ac ac. Amet diam ipsum aliquet lectus ornare non. Enim egestas laoreet malesuada quam. Ipsum sit lectus facilisis senectus ornare enim. Malesuada vel posuere mollis lectus tortor nisi vel felis. Eu venenatis at viverra hendrerit sollicitudin. Sed pharetra id donec sit nisl sit. Vulputate hendrerit fermentum at odio eu." },
        // Add more accomplishments as you like
    ];

    return (
        <ul className="timeline">
            {accomplishments.map((entry, index) => (
                <li key={index}>
                    <div className="event-details">
                        <span>{entry.year}</span>
                        <span>Logo</span>
                        <h3>{entry.title}</h3>
                    </div>
                    <p style={{ textAlign: 'left' }}>{entry.event}</p>
                </li>
            ))}
        </ul>
    );
}

export default Timeline;