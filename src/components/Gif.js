import React, { useState } from 'react';
import useGiphy from '../hooks/useFetch';

const Gif = (props) => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, error, isLoading] = useGiphy(query);

    const onClickGif = (e) => {
        console.log("gif", e.target);
        props.setGifs(e.target.src);
    }

    return (
        <>
            <main>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        setQuery(search);
                    }}
                >
                    <input
                        type="text"
                        id="search"
                        placeholder="Search for gifs"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                <div style={{
                    margin: '10px 0',
                    padding: '0 10px',
                    borderTop: '1px solid lightgray',
                    width: '97%'
                }}>
                    {error && (
                        <p
                            style={{
                                backgroundColor: 'lightyellow',
                                border: '1px solid goldenrod',
                                color: 'goldenrod',
                                padding: '10px'
                            }}
                        >
                            {error.message}
                        </p>
                    )}
                    {isLoading ? (
                        <p>Loading GIFS...</p>
                    ) : results.length !== 0 ? (
                        results.map(item => (
                            <video
                                autoPlay
                                loop
                                key={item}
                                src={item}
                                style={{ maxWidth: '200px', padding: '10px 5px' }}
                                onClick={onClickGif}
                            />
                        ))
                    ) : (
                        ''
                    )}
                </div>
            </main>
        </>
    );
}
export default Gif;