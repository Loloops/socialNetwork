import React from 'react'
import classes from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status
  }

  onStatusChange = (e) => {
   this.setState({
     status: e.target.value
   })
  }

  activateEditMode = () => {
    this.setState({//Ассинхронный метод
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({//Ассинхронный метод
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render(){
    return (
      <div className={classes.inputWrapper}>
        
        {!this.state.editMode &&
          <div className={classes.status}>
            STATUS: 
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no_status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} className={classes.input}/>
          </div>
        }
      </div>
    )
}
}




export default ProfileStatus