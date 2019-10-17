import React from 'react';
import styles from 'style/user/user.module.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name: 'LULI'
    }
  }
  render() {
    return (
      <div>
         <h4 className={styles.color}>
          {this.state.name}
          <span className={styles['color-text']}>12</span>
         </h4>
      </div>
    )
  }
}

export default User