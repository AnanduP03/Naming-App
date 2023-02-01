import React from 'react';
import Header from '../Header/Header';
import './App.css'
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name=require('@rstacruz/startup-name-generator');

class App extends React.Component{

    state={
        headerText:"Naming app",
        headerExpanded: true,
        suggestedNames:[]
    }

    handleInputChange=(inputText)=>{
        // suggstedNames:name(inputText);
        this.setState({
            headerExpanded:!inputText,
            suggestedNames:inputText?name(inputText):[]
        });
    }

    render (){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer SuggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

export default App;