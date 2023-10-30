function Timeline() {
    const accomplishments = [
        { year: 2018, event: "Founded Multisig Labs" },
        { year: 2019, event: "Launched our first product" },
        { year: 2020, event: "Expanded to new markets" },
        // Add more accomplishments as you like
    ];

    return (
        <ul>
            {accomplishments.map((entry, index) => (
                <li key={index}>
                    <span>{entry.year}</span>: {entry.event}
                </li>
            ))}
        </ul>
    );
}

export default Timeline;