
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

// The button used to generate a random quote
var GenerateButton = React.createClass({displayName: "GenerateButton",
	render: function () {
		return (
			React.createElement("div", {className: "ui label", "data-content": this.props.content, "data-variation": "mini inverted", "data-position": "top center"}, 
				React.createElement("button", {className: "circular massive ui blue icon button"+(this.props.disabled?" disabled":""), 
						onClick: this.props.onclick, id: this.props.id}, 
					React.createElement("i", {className: "icon "+this.props.icon})
				)
			)
		);
	}
});

// The list of search results
var ResultList = React.createClass({displayName: "ResultList",
	render: function () {
		return (
			React.createElement("div", {className: "ui inverted relaxed divided list"}, 
			
				this.props.items.map(function(q, i) {
					return (
						React.createElement("div", {className: "item", onClick: this.props.onclick, key: i}, 
							q.quote + " " + q.author
						)
					)
				}, this)
			
			)
		);
	}
});

var QuoteLayer = React.createClass({displayName: "QuoteLayer",
	getInitialState: function() {
		return {
			quote: this.props.quotes[parseInt(Math.random()*this.props.quotes.length)],
			selectedQuotes: this.props.quotes,
		}
	},

	randomQuote: function (event) {
		var tq;
		if(event.target.id == "glb") {
			tq = this.props.quotes;
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
		var re;
		var inputElement = $("input#sglb, input#saut")[0];
		var search_author = $("#search-author").hasClass("checked");

		if (typeof event == "object") {
			re = new RegExp(event.target.value.toLowerCase());
		}
		else {
			re = new RegExp($("input#sglb, input#saut")[0].value.toLowerCase());
		}
		var filtedQuotes = this.props.quotes.filter(function (q) {
			if (!search_author) {
				return re.test(q.author.toLowerCase()) || re.test(q.quote.toLowerCase());
			}
			else {
				return re.test(q.author.toLowerCase());
			}
		});
		this.setState({
			selectedQuotes: filtedQuotes
		});
	},
	searchAuthor: function () {
		this.searchQuote();
	},

	render: function() {
		var displayedQuote = this.state.quote;
		var glButton = null;
		var search_author = $("#search-author").hasClass("checked");
		var empty = !($("#sglb").val() || $("#saut").val());

		if (typeof displayedQuote == "string") {
			var text = displayedQuote;
		}
		else {
			var text = displayedQuote.quote + " " + displayedQuote.author;
		}
		
		var quotesList = [];
		if(!empty) {
			quotesList = this.state.selectedQuotes;
		}

		return (
			React.createElement("div", null, 
				React.createElement("div", {className: "ui container", id: "header"}, 
					React.createElement("h1", {id: "quote"}, text)
				), 
				React.createElement("div", {className: "ui two column six wide center aligned grid"}, 
					React.createElement("div", {className: "column"}, 
						React.createElement(GenerateButton, {content: "Generate a random quote", 
								onclick: this.randomQuote, icon: "refresh", 
								id: "glb"})
					), 
					React.createElement("div", {className: "column"}, 
						React.createElement(GenerateButton, {content: "Generate from the list below", 
								onclick: this.randomQuote, icon: "repeat", 
								d: "sel", disabled: empty})
					)
				), 
				React.createElement("div", {className: "ui two column center aligned grid"}, 
					React.createElement("div", {className: "two column centered row"}, 
						React.createElement("div", {className: "ten wide column", id: "fields"}, 
							React.createElement("div", {className: "ui left icon input"}, 
								React.createElement("input", {type: "text", placeholder: search_author?"Search Author...":"Search...", className: "ui input", id: search_author?"saut":"sglb", onChange: this.searchQuote}), 
								React.createElement("i", {className: "search icon"})
							)
						), 
						React.createElement("div", {className: "two wide center aligned column", id: "fields"}, 
							React.createElement("div", {className: "ui toggle checkbox", id: "search-author"}, 
								React.createElement("input", {type: "checkbox", name: "search-author", tabIndex: "0", className: "hidden"}), 
								React.createElement("label", {htmlFor: "search-author", onClick: this.searchAuthor, className: "blue"}, "Search Author")
							)
						)
					), 
					React.createElement("div", {className: "twelve wide column padding-top-0"}, 
						React.createElement(ResultList, {items: quotesList, onclick: this.selectQuote})
					)
				)
			)
		);
	}
});

ReactDOM.render(
	React.createElement(QuoteLayer, {quotes: quotes}),
	document.getElementById('container')
);

$("#container .ui.label").popup()
$('#search-author').checkbox({
    onChecked: function() {
        $('.ui.modal')
            .modal({
                closable: false,
                onApprove: function() {
                    $('#search-author').addClass('disabled');
                },
                onDeny: function() {
                    $('#search-author input').prop('checked', false);
                }
            })
            .modal('show');
    }
});
$("button").on("click", function () {
	$(this).addClass("spin");
	setTimeout(function () {
		$(this).removeClass("spin");
	}.bind(this), 600);
});
