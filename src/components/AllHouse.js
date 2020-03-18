
import React, { Component } from 'react';
import { connect } from 'react-redux';
import House from './House';

class AllHouse extends Component {
    render() {
        return (
            <div>
                <h1>All Houses</h1>
                {/* {this.props.houses.map((house) => <House key={house.id} house={house} />)} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        houses: state
    }
}
export default connect(mapStateToProps)(AllHouse);