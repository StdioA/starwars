
var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];


var QuoteLayer = React.createClass({
	getInitialState: function() {
		return {
			quote: quotes[parseInt(Math.random()*quotes.length)],
			selectedQuotes: quotes
		}
	},

	randomQuote: function (event) {
		var tq;
		if(event.target.id == "glb") {
			tq = quotes;
		}
		else {
			tq = this.state.selectedQuotes;
		}
		var quote = tq[parseInt(Math.random()*tq.length)];
		this.setState({
			quote: quote
		});
	},
	selectQuote: function (event) {
		this.setState({
			quote: event.target.innerText
		});
	},
	searchQuote: function (event) {
		var re = new RegExp(event.target.value.toLowerCase());
		var filtedQuotes = quotes.filter(function (q) {
			if (event.target.id="sglb") {
				return re.test(q.author.toLowerCase()) || re.test(q.quote.toLowerCase());
				// return q.author.indexOf(value) != -1 || q.quote.indexOf(value) != -1;
			}
			else {
				return re.test(q.author.toLowerCase());
				// return q.author.indexOf(value) != -1;
			}
		});
		this.setState({
			selectedQuotes: filtedQuotes
		});
	},

	render: function() {
		var displayedQuote = this.state.quote;
		if (typeof displayedQuote == "string") {
			var text = displayedQuote;
		}
		else {
			var text = this.state.quote.quote + " " + this.state.quote.author;
		}
		var that = this;
		return (
			<div>
				<h1>{text}</h1>
				<button onClick={this.randomQuote} className="ui button" id="glb">Generate</button>
				<button onClick={this.randomQuote} className="ui button" id="sel">Generate from the list below</button>
				<div className="ui input">
					<input type="text" placeholder="Search..." className="ui input" id="sglb" onChange={this.searchQuote} />
				</div>
				<div className="ui input">
					<input type="text" placeholder="Search Author" className="ui input" id="saut" onChange={this.searchQuote} />
				</div>
				<div className="ui list">
				{
					this.state.selectedQuotes.map(function(q) {
						return (
							<div className="item" onClick={that.selectQuote}>
								{q.quote + " " + q.author}
							</div>
						)
					})
				}
				</div>
			</div>
		);
	}
});

React.render(
	<QuoteLayer />,
	document.getElementById('container')
);

