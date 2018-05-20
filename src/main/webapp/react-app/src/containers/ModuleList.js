import React from 'react';
import ModuleService from '../services/ModuleServiceClient';
import ModuleRow from './ModuleRow';

export default class ModuleList extends React.Component {
  constructor(props) {
    super(props);

    this.moduleService = ModuleService.instance;
    this.state = {
      modules: [],
    };
  }

  findAllModulesByCourse = () => {
    this.moduleService.findAllModulesByCourse(this.props.courseId)
      .then((modules) => {
        this.setState({modules: modules})
      })
  }

  componentDidMount() {
    this.findAllModulesByCourse();
  }

  deleteModule = (moduleId) => {
    this.moduleService.deleteModule(moduleId)
      .then(() => { this.findAllModulesByCourse(); 
      });
  }

  createModule = () => {
    this.moduleService.createModule(this.props.courseId, this.state.module)
      .then(() => { this.findAllModulesByCourse(); 
      });
  }

  titleChanged = (event) => {
    this.setState({
      module: { 
        title: event.target.value
      }
    })
  }

  moduleRows = () => {
    let rows = this.state.modules.map((module) => {
        return <ModuleRow module={module} key={module.id}
          delete={this.deleteModule}/>
      }
    )
    return (rows);
  }

  render() {
    return (
      <div>
        <div className="col-lg-6">
          <div className="input-group">
            <input className="form-control col-md-4" id="module" 
                  placeholder="Module name" onChange={this.titleChanged}/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.createModule}>Add</button>
            </span>
          </div>
        </div>
        <hr />
        <ul className="listGroup">
          {this.moduleRows()}
        </ul>
        
      </div>
    )
  }
}