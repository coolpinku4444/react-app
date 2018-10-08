import React,{Component} from 'react'
import Fetch from './fetch'
import {Table} from 'react-bootstrap'

const UserList = () => {
    return (
        <div>
            <h4>List of Register user :</h4>
        
        <Fetch  url="https://jsonplaceholder.typicode.com/users">
            {
                (data) => {
                    return (
                        <Table striped bordered condensed hover>
                        <thead>
                          <tr >
                            <th>id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value) => {
                                    return (
                                     <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                      </tr>
            
                                    )
                                })
                            }
                          
                        </tbody>
                      </Table>
                       
                    )
                }
            }
        </Fetch>
        </div>
    )
}

export default UserList;