import React from "react";
// import InertiaLink from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
const Home = props => {
    let foo = "React";
    const bar = "JavaScript";

    console.log(props);
    return (
        <div>
            <h1>
                User {foo} + {bar}
            </h1>
            <InertiaLink href="/home">home</InertiaLink>
            {props.users.map((user,key) => {
                return <p key={key}>{user.name}</p>;
            })}
            <p>unchi</p>
        </div>
    );
};

export default Home;
