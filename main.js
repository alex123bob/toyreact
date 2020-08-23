import {createElement, Component, render} from './toyreact'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>text</h1>
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