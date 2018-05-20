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
    this.moduleService.deleteModule(moduleId);
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
        {this.moduleRows()}
      </div>
    )
  }
}