import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            allItem: []
        }

        this.changeItemStatus = this.changeItemStatus.bind(this);
    }

    addItem = () => {


        let count1 = ++this.state.count;

        let obj = {
            "id": count1,
            "value": this.inputBorder.value,
            "finishStatus": false
        };

        this.setState({
            allItem: this.state.allItem.concat(obj),
        })

        console.log(obj);
    }


    changeItemStatus = (item) => {

        let currentId = item["id"];

        this.state.allItem.forEach(function (item) {
            if (item["id"] == currentId) {
                item["value"] = !item["finishStatus"];
            }
        })
        console.log('12');

        this.setState({
            allItem: this.state.allItem
        });
    }

    editChangeContent = (item, value) => {

        let currentId = item["id"];

        this.state.allItem.forEach(function (item) {
            if (item["id"] == currentId) {
                item["value"] = value;
            }
        })

        this.setState({
            allItem: this.state.allItem
        });

         console.log(this.state.allItem);

    }

    render() {
        return (
            <div className="App">

                <input type="text"/>
                <button onClick={this.addItem}>add</button>

                <input type="text" ref={
                    (inputBorder) => {
                        this.inputBorder = inputBorder;
                    }
                }/>
                
                <table border="1">
                    {
                        this.state.allItem.map((item, index) => (<tr key={item.id}>
                            <td><input data-id={index + 1} type="checkbox"
                                       onChange={this.changeItemStatus.bind(this, item)}/></td>

                            {item["finishStatus"] ? <del>{item["value"]}</del> :
                                <input onChange={(event) => {
                                    this.editChangeContent(item, event.target.value)
                                     }
                                }
                                     value={item["value"]}/>}

                        </tr>))
                    }
                </table>

            </div>
        );
    }
}

export default App;
