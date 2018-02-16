import React from 'react';
import './List.scss';
import { connect } from 'react-redux';
import { listMessage } from '../../actionCreators';

const List = ({ people }) => {
    return (
        <div className="people ">
            <ul className="people__list">
                {people.map((item, index) => {
                    return (
                        <li className="people__list--item" key={index} onClick={() => listMessage(item)}>
                            {item.name} -  {item.country} -  {item.birthday}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        people: state.people
    };
};
const mapDispatchToProps = dispatch => {
    return {
        listMessage(client) {
            dispatch(listMessage(client))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
