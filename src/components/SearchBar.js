import React from 'react';
import react from 'react';

class SearchBar extends React.Component
{
    state={term:''};

    onFormSubmit=event=>
    {
        event.preventDefault();

        this.props.callMeWhenSearchTerm(this.state.term);
    };
    render()
    {

        return(
                
            <div  className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Seach Video</label>
                        <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}}></input>
                    </div>

                </form>
            
            </div>

        );
    }
}
export default SearchBar;