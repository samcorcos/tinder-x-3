Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {

    }
  },
  moveCard(x,y) {
    console.log("Card is moving");
  },
  getInitialState() {
    return {

    }
  },
  render() {
    return (
      <div>
        <div className="list card tinder-card" onClick={this.moveCard()}>
          <div className="item item-avatar">
            <img src="https://avatars0.githubusercontent.com/u/1794527?v=3&s=460" />
            <h2>Title of card</h2>
            <p>Content of card</p>
          </div>

          <div className="item item-image">
            <img src="https://avatars0.githubusercontent.com/u/1794527?v=3&s=460" />
          </div>

          <div className="item tabs tabs-secondary tabs-icon-left">
           <a className="tab-item" href="#">
             <i className="icon ion-thumbsup balanced"></i>
             Like
           </a>
           <a className="tab-item" href="#">
             <i className="icon ion-thumbsdown assertive"></i>
             Dislike
           </a>
         </div>
        </div>
      </div>
    )
  }
})
