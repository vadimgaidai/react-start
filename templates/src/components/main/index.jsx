import React from 'react'

export default class Main extends React.Component {
  render() {
    return(
      <main>
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
      </main>
    )
  }
}