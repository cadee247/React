import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function fetchData(searchTerm) {
    return axios.get(`https://swapi.py4e.com/api/people/?search=${searchTerm}`)
        .then((res) => res.data.results)
        .catch((err) => {
            console.error("Error fetching data:", err);
            return [];
        });
}

const Characters = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchTerm) return;

        setLoading(true);
        fetchData(searchTerm).then((results) => {
            setData(results);
            setLoading(false);
        });
    }, [searchTerm]);

    return (
        <div>
            <h3>StarWars Search Results</h3>
            {loading ? <p>Loading...</p> : 
                data.map((item) => (
                    <div key={item.name} className="character">
                        <strong>{item.name}</strong><br />
                        Height: {item.height}cm<br />
                        Gender: {item.gender}
                    </div>
                ))
            }
        </div>
    );
};

function StarWars() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search for a character..." />
                <button type="submit">Search</button>
            </form>
            <Characters searchTerm={searchTerm} />
        </div>
    );
}

export default StarWars;