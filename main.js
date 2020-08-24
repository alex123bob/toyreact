import {createElement, Component, render} from './toyreact'

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return <div>
            <h1>My Component</h1>
            <h2>{this.state.a.toString()}</h2>
            {this.children}
        </div>
    }
}

render(<MyComponent class="alex" id="alexId">
    <span>test span</span>
    <ul>
        <li>li 1</li>
        <li>li 2</li>
    </ul>
</MyComponent>, document.body)