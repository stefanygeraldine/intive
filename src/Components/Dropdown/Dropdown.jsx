import React from 'react';
import './Dropdown.scss';

export class Dropdown extends React.Component {
    constructor(){
        super();
        this.selectItem = this.selectItem.bind(this);
        this.showList = this.showList.bind(this);

        this.state= {
            showList : true
        }
    }
    showList = ()=>{
      
        this.setState({
            showList: !this.state.showList
          })
          console.log(this.state)
    }

    selectItem = (item)=>{
        this.props.click(item);
        this.showList();
    }




    render() {
        let { countries, value } = this.props;
        let classShowing = 'show';
        {this.state.showList ? classShowing = 'hidden dropdown__list'  : classShowing = 'show dropdown__list' }
        return (
            <div className="dropdown">
                <label className="dropdown__label form__input" onClick={()=> this.showList()}>{value}</label>
                <ul className={classShowing}>
                    <li className="dropdown__list--item">País</li>
                    {countries.map((item, index) => {
                        return (
                            <li className="dropdown__list--item" key={index} onClick={() => this.selectItem( item.name)}>{item.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
