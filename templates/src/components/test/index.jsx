import React from 'react'

export default class Test extends React.Component {
  render() {
    return(
      <div className="test">
        {
          this.props.test.map((user) => {
            return (
              <div
                key={user.id}
              >
                {Object.values(user)}
              </div>
            )
          })
        }
      </div>
    )
  }
}