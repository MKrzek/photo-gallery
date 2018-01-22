import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import DisplayPhoto from "./DisplayPhoto.js";
import _ from "lodash";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", _.throttle(this.onScroll, 5000), false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    let counter = this.state.counter + 1;
    this.setState({
      counter: counter
    });
    let value = this.props.value;
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.props.photos.length
    ) {
      this.props.scrollPhotos(this.state.counter, value);
    }
  };

  showPhotos = () => {
    return _.map(this.props.photos, item => {
      return item.map(data => {
        return (
          <DisplayPhoto
            photo={data}
            key={data.id}
            onPhotoSelect={this.props.onPhotoSelect}
          />
        );
      });
    });
  };
  render() {
    return <div className="photo-list">{this.showPhotos()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    photos: state.fetch,
    value: state.form.searchBar.values
  };
}

export default connect(mapStateToProps, Actions)(Photos);
