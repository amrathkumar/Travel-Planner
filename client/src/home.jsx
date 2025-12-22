import React, { useEffect, useState } from "react";

function Home() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDestinations = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/destinations/dis`);
            if (!res.ok) throw new Error("Failed to fetch destinations");

            const data = await res.json();
            setDestinations(data);
            console.log("Fetched data:", data);
        } catch (err) {
            console.error(err);
            setError("Could not load destinations");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDestinations();
    }, []);

    if (loading) return <h2>Loading destinations...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <div className="destinations">
                <h2 className="logo">Popular Destinations</h2>
                <div className="destination-grid">
                    {destinations.map((dest) => (
                        <div className="destination-card" key={dest.id}>
                            <div className="destination-image">
                                {dest.icon || "🌍"}
                            </div>
                            <div className="destination-info">
                                <h3>{dest.name}, {dest.country}</h3>
                                <p>{dest.description}</p>
                                <div className="destination-price">
                                    From {dest.price} Rs
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
