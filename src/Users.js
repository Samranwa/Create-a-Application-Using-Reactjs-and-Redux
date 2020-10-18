import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GethUsers } from './redux/user/userActions'
function Users({ userData, GethUsers }) {
  useEffect(() => {
    GethUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
        <div>
          <div class="row">
            <div class="col-sm-12 btn btn-info">
              How to Build an Application Using Reactjs and Redux
    </div>
          </div>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p>{user.Email}</p>)}
          </div>
          <table class="table" >
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Salary</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              {userData.users.map(item => {
                return <tr key={item.Id}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Address}</td>
                  <td>{item.City}</td>
                  <td>{item.Salary}</td>
                  <td>{item.Department}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GethUsers: () => dispatch(GethUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
