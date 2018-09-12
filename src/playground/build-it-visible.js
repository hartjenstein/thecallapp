class Visible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visiblity: false,
            headline: 'Visibility Toggle',
            details: 'some fckn details'
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

   handleToggleVisibility() {
        this.setState((prevState) => {
            return {
            visibility: !prevState.visibility
            };
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
            <h1>{this.state.headline}</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
            {this.state.visibility && <p>{this.state.details}</p>}
        </div>
        );
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<Visible />, appRoot);


