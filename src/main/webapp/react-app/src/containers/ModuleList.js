import React from 'react';
import ModuleService from '../services/ModuleServiceClient';
import ModuleRow from './ModuleRow';

export default class ModuleList extends React.Component {
  constructor(props) {
    super(props);

    this.moduleService = ModuleService.instance;
    this.state = {
      modules: [],
      activeModule: '',
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

  setActive = (module) => {
    if (this.state.activeModule.title != module.title) {
      this.setState({activeModule: module});
    } 
  }

  isActive = (module) => {
    if (module.title == this.state.activeModule.title) {
      return 'list-group-item list-group-item-action justify-content-between w-25 active';
    } else {
      return 'list-group-item list-group-item-action justify-content-between w-25';
    }
  }

  moduleRows = () => {
    let rows = this.state.modules.map((module) => {
        return (
          <ModuleRow module={module} key={module.id}
          delete={this.deleteModule} isActive={this.isActive}
          setActive={this.setActive}/>
        )}
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