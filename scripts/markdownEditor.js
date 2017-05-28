class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = {value: '# Example heading  \nType some *text* here!  \n - or here'};
  }

  change(e) {
    this.setState({value: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable(); //external Markdown library
    return { __html: md.render(this.state.value) };
  }

render() {
    return (
      <div className="MarkdownEditor">
      <div className="row">
      <div id="input" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-right">
        <textarea
          onChange={this.change}
          defaultValue={this.state.value} />
      </div>
      <div id="output" className="col-xs-12 col-sm-12 col-md-6  col-lg-6 text-left">
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownEditor />, 
  document.getElementById('root')
);