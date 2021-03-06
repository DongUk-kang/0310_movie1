import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
`

const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
`

const Grid = styled.div`
  margin-top: 25px;
  display: gird;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`

const Section = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Grid>
                {children}
            </Grid>
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])

};

export default Section;
