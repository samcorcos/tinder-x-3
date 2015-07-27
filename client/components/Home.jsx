React.initializeTouchEvents(true);

Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let handle = Meteor.subscribe('dummyData');
    return {
      dummyDataLoading: ! handle.ready(),
      dummyData: DummyData.find().fetch()
    }
  },
  getInitialState() {
    return {

    }
  },
  render() {
    if (this.data.dummyDataLoading) {
      return <div>Loading...</div>;
    }
    let list = this.data.dummyData.map(function(item) {
      return (
        <div className="list card tinder-card" key={item._id}>
          <div className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>

          <div className="item item-image">
            <img src={item.image} />
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
      )
    })

    return (
      <div>
        {list}
      </div>
    )
  }
})
