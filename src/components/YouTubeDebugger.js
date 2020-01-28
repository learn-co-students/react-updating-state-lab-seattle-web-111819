import React, { Component } from "react";

// Code YouTubeDebugger Component Here
class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBitrate = () =>{
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state.settings.bitrate)
  }

  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
    console.log(this.state.settings.video.resolution)
  }

  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleClickBitrate}>Change bitrate</button>
      <button className="resolution" onClick={this.handleClickResolution}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;