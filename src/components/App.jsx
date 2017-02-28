import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'; 

const API_KEY = 'AIzaSyAC4W_8ob2hH9QH-hQUMVWgEa7YqwGUYHA';

export default class App extends React.Component { 

    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.searchVideo('react js');
    }

    searchVideo(term){
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render(){
        var videoSearch = _.debounce(term => this.searchVideo(term), 400);
        return(
            <div>
                <SearchBar onChangeSearchTerm={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        )
    }
}