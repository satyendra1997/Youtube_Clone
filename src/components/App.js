import React from 'react';
import Youtube from '../Api/Youtube';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };
    componentDidMount()
    {
        this.ontermSubmit('cartoon');
    }
    ontermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })
       
        this.setState({ videos: response.data.items ,
            selectedVideo:response.data.items[0]}
            );
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video }
            );
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar callMeWhenSearchTerm={this.ontermSubmit} />
                <div className="ui grid">
                  <div className="ui row">
                  <div className="eleven wide column">
                    <VideoDetails video={this.state.selectedVideo} />
                </div>
                  <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;