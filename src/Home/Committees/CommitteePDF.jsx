import React from 'react'
import { committees } from './constant'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function CommitteePDF() {
    const { id } = useParams()
    console.log(typeof id)
    const filteredCommittee = committees.filter((committee) => (
        committee.id === id
    ))[0]

    console.log(filteredCommittee)
    return (
        <>
            <Helmet>
                <title>{filteredCommittee.name} </title>
            </Helmet>
            <embed
                src={`${filteredCommittee.pdf}#toolbar=0`}
                type='application/pdf'
                className='com-pdf'
                title="com-pdf"
                frameborder="0"
            />
        </>
    )
}
