import React, {Component} from 'react';
import EmailEditor from "react-email-editor";
import sample from './sample2.json'

class App extends Component {
  render() {
    return <div>
      <div>
        <button onClick={this.saveDesign}>Save Design</button>
        <button onClick={this.exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
          ref={editor => this.editor = editor}
          onLoad={this.onLoad}
          onDesignLoad={this.onDesignLoad}
          options={{ locale: 'es-ES' }}
      />
    </div>

  }
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }
  saveDesign = () => {
    this.editor.saveDesign(design => {
      //console.log('saveDesign', design)
      console.log('saveDesign', JSON.stringify(design))
      alert("Design JSON has been logged in your developer console.")
    })
  }
  onLoad = () => {
    // this.editor.addEventListener('onDesignLoad', this.onDesignLoad)
    this.editor.loadDesign(sample)
  }

  onDesignLoad = (data) => {
    console.log('onDesignLoad', data)
  }
}

export default App;

