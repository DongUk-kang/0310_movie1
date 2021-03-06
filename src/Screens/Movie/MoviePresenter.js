import React from 'react';
import PropTypes from 'prop-types'
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const MoviePresenter = ({nowPlaying, topRated, popular, upcoming}) => {
    return (
        <div>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title={"Now Playing"}>
                    {nowPlaying.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.vote_average}
                            year={item.release_date}
                            poster={item.poster_path}
                        />
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title={"Top Rate"}>
                    {topRated.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.vote_average}
                            year={item.release_date}
                            poster={item.poster_path}
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title={"Popular"}>
                    {popular.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.vote_average}
                            year={item.release_date}
                            poster={item.poster_path}
                        />
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title={"Up Coming"}>
                    {upcoming.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.vote_average}
                            year={item.release_date}
                            poster={item.poster_path}
                        />
                    ))}
                </Section>
            )}
        </div>
    );
};

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    toprated: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array

};

export default MoviePresenter;
