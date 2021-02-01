import React, { useState, useEffect, FC } from 'react'

import { RouteComponentProps } from '@reach/router';
interface Props extends RouteComponentProps {

}

export const RandomPerson: React.FC<Props> = () => {
    const [person, setPerson] = useState();
    useEffect(() => {
        fetch('https://randomuser.me/api').then(x => x.json()).then(x => setPerson(x))
    }, [])
    return <div> 
        
<pre>
   {JSON.stringify(person,null,2)} </pre> </div>
}