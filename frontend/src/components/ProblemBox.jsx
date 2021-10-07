import React from 'react'
import ProblemCard from './ProblemCard';
import { Paper, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';

export default function ProblemBox(problemset, i) {

    // const [start, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(5);

    const [page, setPage] = useState(1);
  
  


    const handleChange = (event, value) => {
        setPage(value);
      };
 
    var currentprobs=problemset.problemset[1].slice(page * postsPerPage-postsPerPage,page*postsPerPage)
    return (

        <Paper style={
            {
                padding: '1rem',
                backgroundColor: '#333333',
                borderRadius: '2rem',
                margin: '2rem 0',



            }
        } elevation='5' variant='outlined' >

            <Typography variant='h3' style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white'
            }}>{problemset.problemset[0]}</Typography>
            {          


              
                currentprobs.map((problem, i) => <ProblemCard problem={problem} i={i} />)
            }



            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',

                }
            }>

                {/* <Pagination count={Math.ceil(problemset.problemset[1].length / postsPerPage)}
                    //   page={currentPage}
                    onChange={(page)=>paginate(page)} color="primary" /> */}
                      <Pagination count={Math.ceil(problemset.problemset[1].length / postsPerPage)} page={page} onChange={handleChange} color="primary" />




            </div>


        </Paper>

    )
}
