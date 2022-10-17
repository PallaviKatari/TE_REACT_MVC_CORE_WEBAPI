import React from 'react';

export default function SpreadSyntax(){
    const reactimage={
        src:"https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
        alt:"React"
    }


// Spread Syntax/ Spread Operator : exact copy of the reactimage property
const reactimagestyle=
{
    ...reactimage,
    height:300,
    width:300,
    borderstyle:"solid"
}

return(
    <>
    <br></br>
    <br></br>
    <img {...reactimagestyle}></img>
    <SpreadSyntax1 {...reactimagestyle}></SpreadSyntax1>
    </>
)
}

function SpreadSyntax1(props)
{
    return(
        <>
            <img {...props}></img>
        </>
    )

}