import React from 'react'
import {Table} from 'react-bootstrap';
import Fetch from './fetch'

const PostList = () => {
    return (
        <div>
            <h4>List of PostList :</h4>
        
        <Fetch  url="https://jsonplaceholder.typicode.com/posts">
            {
                (data) => {
                    return (
                        <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value) => {
                                    return (
                                     <tr key={value.id}>
                                        <td>{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.body}</td>
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

export default PostList;