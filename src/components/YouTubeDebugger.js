// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

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

    // Use ... (spread operator) to create a deep merge --> a merge will happen recursively, leaving any unchanged properties intact. 
    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video, // not needed?
                    resolution: '720p'
                }
            }

        })
    }

    render() {
        return (
            <div>
            {/* button with the class 'bitrate'. */}
            {/* Clicking this button changes the settings.bitrate state property to 12. */}
            <button className="bitrate" onClick={this.handleBitrate}>
            Change Bitrate
            </button>

            {/* button with the class 'resolution'.  */}
            {/* Clicking this button changes the settings.video.resolution state property to '720p'. */}
            <button className="resolution" onClick={this.handleResolution}>
            Change Resolution
            </button>
            </div>
        )
    }
}