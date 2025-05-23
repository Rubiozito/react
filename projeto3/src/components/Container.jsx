import React from "react";

export default function Container({children}) {
    return (
        <div>
            <h2>Titulo do Container</h2>
            {children}
        </div>
    );
}
