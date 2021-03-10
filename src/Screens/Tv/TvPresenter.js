import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const TvPresenter = ({ontheair, popular, topRated}) => {
    return (
        <div>
            {ontheair && ontheair.length > 0 && (
                <Section title={"On the Air"}>
                    {ontheair.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            rating={item.vote_average}
                            year={item.first_air_date}
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
                            title={item.name}
                            rating={item.vote_average}
                            year={item.first_air_date}
                            poster={item.poster_path}

                        />
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title={"Top Rated"}>
                    {topRated.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            rating={item.vote_average}
                            year={item.first_air_date}
                            poster={item.poster_path}

                        />
                    ))}
                </Section>
            )}
        </div>
    );
};

TvPresenter.propTypes = {
    ontheair: PropTypes.array,
    popular: PropTypes.array,
    toprated: PropTypes.array

};

export default TvPresenter;
